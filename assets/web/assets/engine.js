/* Motor de la app formativa: Store (progreso), Speak (TTS) y Lesson (render).
   Prefijo de almacenamiento: mfp */
var Store = {
  p: 'mfp:',
  get: function (k, d) {
    try { var v = localStorage.getItem('mfp:' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; }
  },
  set: function (k, v) {
    try { localStorage.setItem('mfp:' + k, JSON.stringify(v)); } catch (e) {}
  },
  done: function () { return Store.get('done', {}); },
  markDone: function (id, score) {
    var d = Store.done(); d[id] = { at: Date.now(), score: score }; Store.set('done', d);
  }
};

/* Voz: TTS nativo con cola secuencial. El shell Flutter llama window.__ttsDone() al terminar cada frase. */
var Speak = {
  playing: false, btn: null, queue: [], qi: -1, onHighlight: null,
  rate: Store.get('rate', 0.5),
  strip: function (html) {
    var d = document.createElement('div'); d.innerHTML = String(html).replace(/<li>/g, '<li>• ');
    return (d.textContent || '').replace(/\s+/g, ' ').replace(/•/g, '. ').trim();
  },
  _bridge: function (cmd, text) {
    try {
      if (window.flutter_inappwebview && window.flutter_inappwebview.callHandler) {
        window.flutter_inappwebview.callHandler('tts', { cmd: cmd, text: text || '', rate: this.rate });
      } else if (window.speechSynthesis) {
        if (cmd === 'stop') window.speechSynthesis.cancel();
        else if (cmd === 'speak') {
          window.speechSynthesis.cancel();
          var u = new SpeechSynthesisUtterance(text); u.lang = 'es-ES'; u.rate = 0.6 + this.rate * 0.9;
          u.onend = function () { Speak.done(); };
          window.speechSynthesis.speak(u);
        }
      }
    } catch (e) {}
  },
  setRate: function (r) { this.rate = Math.max(0.2, Math.min(1.0, r)); Store.set('rate', this.rate); this._bridge('rate', ''); },
  // texto suelto (alterna leer/detener)
  say: function (html, btn) {
    if (this.playing) { var mismo = this.btn === btn; this.stop(); if (mismo) return; }
    var text = this.strip(html); if (!text) return;
    this.queue = []; this.qi = -1; this.onHighlight = null;
    this.playing = true; this.btn = btn || null;
    if (btn) btn.textContent = '⏸';
    this._bridge('speak', text);
  },
  // lección completa: lee todas las partes en orden y resalta la actual
  playQueue: function (items, onHighlight, btn) {
    if (this.playing) { this.stop(); return; }
    this.queue = items || []; this.qi = -1; this.onHighlight = onHighlight || null;
    this.playing = true; this.btn = btn || null;
    if (btn) btn.textContent = '⏸ Detener lección';
    this._next();
  },
  _next: function () {
    this.qi++;
    if (!this.playing || this.qi >= this.queue.length) { this.stop(); return; }
    var it = this.queue[this.qi];
    if (this.onHighlight) this.onHighlight(this.qi, it);
    this._bridge('speak', it.text);
  },
  _reset: function () {
    this.playing = false; this.queue = []; this.qi = -1;
    if (this.onHighlight) this.onHighlight(-1, null);
    this.onHighlight = null;
    if (this.btn) this.btn.textContent = this.btn.getAttribute('data-lbl') || '🔊';
    this.btn = null;
  },
  stop: function () { this._reset(); this._bridge('stop', ''); },
  done: function () {
    if (this.playing && this.queue.length && this.qi < this.queue.length - 1) { this._next(); return; }
    this._reset();
  }
};
window.__ttsDone = function () { Speak.done(); };
var Lesson = {
  start: function (s) {
    var app = document.getElementById('app');
    document.title = s.title + ' · MiroFish PRO';
    var acc = Lesson.acc(s.area);
    document.body.className = 'acc-' + acc;
    var h = '';
    h += '<div class="crumb"><a href="index.html">← Inicio</a> · ' + s.areaIcon + ' ' + s.area + '</div>';
    h += '<h1>' + s.icon + ' ' + s.title + '</h1><p class="sub">' + s.subtitle + '</p>';
    h += '<div class="norma">🧭 ' + s.norma + '</div>';
    h += '<div class="audiobar"><button class="btn" id="playall" data-lbl="▶ Escuchar lección completa">▶ Escuchar lección completa</button><span class="speed">🐢 <input type="range" id="rate" min="0.2" max="1" step="0.1"> 🐇</span></div>';
    h += '<div class="card blk-r"><div class="card-h"><b>Introducción</b><button class="spk" data-s="intro" data-lbl="🔊">🔊</button></div>' + s.intro + '</div>';
    (s.sections || []).forEach(function (x, i) {
      h += '<div class="card blk-r"><div class="card-h"><h2>' + x.h + '</h2><button class="spk" data-s="sec' + i + '" data-lbl="🔊">🔊</button></div>' + x.html + '</div>';
    });
    if (s.formulas && s.formulas.length) {
      h += '<div class="card formulas"><h2>Datos clave</h2><ul>';
      s.formulas.forEach(function (f) { h += '<li>' + f + '</li>'; });
      h += '</ul></div>';
    }
    h += '<div class="card kp blk-r"><div class="card-h"><h2>Puntos clave</h2><button class="spk" data-s="kp" data-lbl="🔊">🔊</button></div><ul>';
    (s.keypoints || []).forEach(function (k) { h += '<li>' + k + '</li>'; });
    h += '</ul></div>';
    h += '<h2 class="blk">Fichas de repaso</h2><div class="flash">';
    (s.flashcards || []).forEach(function (c, i) {
      h += '<div class="fc" data-i="' + i + '"><div class="fq">' + c.q + '</div><div class="fa">' + c.a + '</div></div>';
    });
    h += '</div><h2 class="blk">Autoevaluación</h2><div id="quiz"></div><div id="res"></div>';
    app.innerHTML = h;

    var texts = { intro: s.intro, kp: (s.keypoints || []).join('. ') };
    (s.sections || []).forEach(function (x, i) { texts['sec' + i] = x.h + '. ' + x.html; });
    app.querySelectorAll('.spk').forEach(function (b) {
      b.onclick = function () { Speak.say(texts[b.getAttribute('data-s')], b); };
    });
    app.querySelectorAll('.fc').forEach(function (f) {
      f.onclick = function () { f.classList.toggle('open'); };
    });
    var blocks = app.querySelectorAll('.blk-r'), queue = [], keys = ['intro'];
    (s.sections || []).forEach(function (x, i) { keys.push('sec' + i); });
    keys.push('kp');
    blocks.forEach(function (el, i) { queue.push({ text: Speak.strip(texts[keys[i]]), el: el }); });
    var pa = document.getElementById('playall'), rs = document.getElementById('rate');
    rs.value = Speak.rate;
    rs.oninput = function () { Speak.setRate(parseFloat(rs.value)); };
    pa.onclick = function () {
      Speak.playQueue(queue, function (idx) {
        blocks.forEach(function (el, k) { el.classList.toggle('speaking', k === idx); });
        if (idx >= 0) blocks[idx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, pa);
    };
    Lesson.quiz(s);
    window.addEventListener('pagehide', function () { Speak.stop(); });
  },
  acc: function (area) {
    for (var i = 0; i < CATALOG.length; i++) if (CATALOG[i].area === area) return CATALOG[i].acc;
    return 'a1';
  },
  quiz: function (s) {
    var box = document.getElementById('quiz'), right = 0, answered = 0, n = s.quiz.length;
    s.quiz.forEach(function (q, qi) {
      var d = document.createElement('div'); d.className = 'q';
      var h = '<p class="qq"><b>' + (qi + 1) + '.</b> ' + q.q + '</p>';
      q.opts.forEach(function (o, oi) { h += '<button class="opt" data-o="' + oi + '">' + o + '</button>'; });
      h += '<div class="why" hidden>' + q.why + '</div>';
      d.innerHTML = h; box.appendChild(d);
      var btns = d.querySelectorAll('.opt'), locked = false;
      btns.forEach(function (b) {
        b.onclick = function () {
          if (locked) return; locked = true; answered++;
          var o = +b.getAttribute('data-o');
          if (o === q.correct) { right++; b.classList.add('ok'); } else {
            b.classList.add('bad'); btns[q.correct].classList.add('ok');
          }
          d.querySelector('.why').hidden = false;
          if (answered === n) {
            Store.markDone(s.id, Math.round(100 * right / n));
            document.getElementById('res').innerHTML =
              '<div class="card res">Resultado: <b>' + right + ' de ' + n + '</b>. Lección marcada como completada.</div>';
          }
        };
      });
    });
  }
};

