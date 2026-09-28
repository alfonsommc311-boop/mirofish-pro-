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

var Speak = {
  on: false,
  strip: function (html) {
    var d = document.createElement('div'); d.innerHTML = html;
    return (d.textContent || '').replace(/\s+/g, ' ').trim();
  },
  say: function (html) {
    var text = Speak.strip(html); if (!text) return;
    Speak.stop();
    if (window.flutter_inappwebview && window.flutter_inappwebview.callHandler) {
      window.flutter_inappwebview.callHandler('speak', text); Speak.on = true; return;
    }
    if (window.speechSynthesis) {
      var u = new SpeechSynthesisUtterance(text); u.lang = 'es-ES'; u.rate = 0.98;
      window.speechSynthesis.speak(u); Speak.on = true;
    }
  },
  stop: function () {
    if (window.flutter_inappwebview && window.flutter_inappwebview.callHandler) {
      window.flutter_inappwebview.callHandler('stop');
    } else if (window.speechSynthesis) { window.speechSynthesis.cancel(); }
    Speak.on = false;
  }
};

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
    h += '<div class="card"><div class="card-h"><b>Introducción</b><button class="spk" data-s="intro">🔊</button></div>' + s.intro + '</div>';
    (s.sections || []).forEach(function (x, i) {
      h += '<div class="card"><div class="card-h"><h2>' + x.h + '</h2><button class="spk" data-s="sec' + i + '">🔊</button></div>' + x.html + '</div>';
    });
    if (s.formulas && s.formulas.length) {
      h += '<div class="card formulas"><h2>Datos clave</h2><ul>';
      s.formulas.forEach(function (f) { h += '<li>' + f + '</li>'; });
      h += '</ul></div>';
    }
    h += '<div class="card kp"><div class="card-h"><h2>Puntos clave</h2><button class="spk" data-s="kp">🔊</button></div><ul>';
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
      b.onclick = function () { Speak.say(texts[b.getAttribute('data-s')]); };
    });
    app.querySelectorAll('.fc').forEach(function (f) {
      f.onclick = function () { f.classList.toggle('open'); };
    });
    Lesson.quiz(s);
    window.addEventListener('pagehide', Speak.stop);
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
