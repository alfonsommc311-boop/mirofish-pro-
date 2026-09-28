/* Motor de las herramientas de MiroFish PRO. Funciona en el navegador y en node (pruebas). */
var Tools = {
  esc: function (s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  },
  copy: function (text, btn) {
    function ok() { if (btn) { var t = btn.textContent; btn.textContent = '✓ Copiado'; setTimeout(function () { btn.textContent = t; }, 1400); } }
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(text).then(ok, fallback); return; }
    } catch (e) {}
    fallback();
    function fallback() {
      var ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); ok(); } catch (e) {}
      document.body.removeChild(ta);
    }
  }
};

var Calc = {
  /* ---- Visibilidad (misma lógica que armar_contextos.py) ---- */
  EVENTO: /^-\s+([^\[]+?)\s*\[([^\]]+)\]\s*(.+)$/,

  // Lista de actores desde texto: una línea por actor, "A1 Nombre" o solo "Nombre" (se numera).
  actores: function (texto) {
    var out = [], n = 0;
    String(texto || '').split(/\r?\n/).forEach(function (l) {
      l = l.trim(); if (!l) return; n++;
      var m = /^(A\d+)\s+(.*)$/i.exec(l);
      out.push(m ? { id: m[1].toUpperCase(), nombre: m[2].trim() } : { id: 'A' + n, nombre: l });
    });
    return out;
  },

  // Rondas separadas por una línea "## R2" / "# Resolución R2". Sin cabecera = ronda 1.
  leerResoluciones: function (texto, ids) {
    var rondas = {}, errores = [], cur = 1, orden = [];
    String(texto || '').split(/\r?\n/).forEach(function (linea, i) {
      var s = linea.replace(/\s+$/, '');
      var h = /^#{1,3}\s.*\bR(\d+)\b/i.exec(s.trim());
      if (h) { cur = parseInt(h[1], 10); return; }
      if (!s.trim() || /^\s*[#>]/.test(s)) return;
      var m = Calc.EVENTO.exec(s.trim());
      if (!rondas[cur]) { rondas[cur] = []; orden.push(cur); }
      var ev = rondas[cur];
      if (m) {
        var toks = m[2].replace(/,/g, ' ').split(/\s+/).filter(Boolean), vis = [];
        if (toks.some(function (t) { return t.toLowerCase() === 'todos'; })) vis = ids.slice();
        else {
          toks.forEach(function (t) {
            t = t.toUpperCase();
            if (ids.indexOf(t) < 0) errores.push('Línea ' + (i + 1) + ': actor desconocido ' + t);
            else if (vis.indexOf(t) < 0) vis.push(t);
          });
        }
        ev.push({ fecha: m[1].trim(), vis: vis, texto: m[3].trim() });
      } else if (/^[ \t]/.test(s) && ev.length) {
        ev[ev.length - 1].texto += ' ' + s.trim();
      } else if (/^\s*-/.test(s)) {
        errores.push('Línea ' + (i + 1) + ': hecho sin etiqueta de visibilidad [A1 A2 …]: ' + s.trim().slice(0, 60));
      }
    });
    orden.sort(function (a, b) { return a - b; });
    return { rondas: rondas, orden: orden, errores: errores };
  },

  // Contexto que conoce el actor k tras la ronda n (hechos de rondas <n = «antes»; ronda n = novedades).
  contexto: function (rondas, n, k, nombre) {
    var antes = [], nuevos = [];
    Object.keys(rondas).map(Number).sort(function (a, b) { return a - b; }).forEach(function (r) {
      (rondas[r] || []).forEach(function (e) {
        if (e.vis.indexOf(k) < 0) return;
        if (r < n) antes.push(e); else if (r === n) nuevos.push(e);
      });
    });
    var p = ['# LO QUE HA PASADO (lo que tú, ' + (k + ' ' + (nombre || '')).trim() + ', conoces)', ''];
    if (antes.length) {
      p.push('## Antes (rondas anteriores)', '');
      antes.forEach(function (e) { p.push('- **' + e.fecha + '** — ' + e.texto); });
      p.push('');
    }
    p.push('## Novedades desde tu última decisión (resolución de la ronda ' + n + ')', '');
    if (nuevos.length) nuevos.forEach(function (e) { p.push('- **' + e.fecha + '** — ' + e.texto); });
    else p.push('- No te llegó ninguna novedad en esta ronda.');
    return { antes: antes.length, nuevos: nuevos.length, texto: p.join('\n') };
  },

  // Hechos que ningún actor activo verá en la ronda siguiente.
  ocultos: function (rondas, n, activos) {
    return (rondas[n] || []).filter(function (e) {
      return !e.vis.some(function (v) { return activos.indexOf(v) >= 0; });
    });
  },

  // Líneas de resolución desde filas {fecha, texto, vis:[ids]}.
  lineas: function (filas, ids) {
    return filas.filter(function (f) { return (f.texto || '').trim(); }).map(function (f) {
      var todos = ids.length && ids.every(function (i) { return f.vis.indexOf(i) >= 0; });
      var v = todos ? 'todos' : f.vis.join(' ');
      return '- ' + ((f.fecha || '').trim() || 's/f') + ' [' + (v || '¿?') + '] ' + f.texto.trim();
    }).join('\n');
  },

  /* ---- Indicadores ---- */
  // Lee respuestas pegadas: cabecera "# R2 — A3 NOMBRE" y línea "**Indicadores:** clave=55 · otra=20".
  indicadores: function (texto) {
    var filas = [], sin = [], rc = null, ac = null, visto = false;
    var lines = String(texto || '').split(/\r?\n/);
    function cierre() { if (rc !== null && !visto) sin.push('R' + rc + ' ' + ac); }
    lines.forEach(function (l) {
      var h = /^#{1,3}\s*R(\d+)\s*[—–\-:]\s*(A\d+)/i.exec(l.trim());
      if (h) { cierre(); rc = parseInt(h[1], 10); ac = h[2].toUpperCase(); visto = false; return; }
      if (/indicadores/i.test(l) && rc !== null) {
        var re = /([A-Za-z_][\w]*)\s*=\s*(\d{1,3})/g, m, hallo = false;
        while ((m = re.exec(l)) !== null) {
          var v = parseInt(m[2], 10);
          if (v > 100) continue;
          filas.push({ ronda: rc, actor: ac, clave: m[1], valor: v }); hallo = true;
        }
        if (hallo) visto = true;
      }
    });
    cierre();
    return { filas: filas, sinLinea: sin };
  },

  // Agrupa: {clave: {actor: {ronda: valor}}} y brecha máxima por clave/ronda.
  series: function (filas) {
    var s = {}, rondas = [], actores = [], claves = [];
    filas.forEach(function (f) {
      if (claves.indexOf(f.clave) < 0) claves.push(f.clave);
      if (actores.indexOf(f.actor) < 0) actores.push(f.actor);
      if (rondas.indexOf(f.ronda) < 0) rondas.push(f.ronda);
      s[f.clave] = s[f.clave] || {}; s[f.clave][f.actor] = s[f.clave][f.actor] || {};
      s[f.clave][f.actor][f.ronda] = f.valor;
    });
    rondas.sort(function (a, b) { return a - b; });
    actores.sort();
    return { s: s, rondas: rondas, actores: actores, claves: claves };
  },

  brecha: function (serie, clave) {
    var mejor = null;
    serie.rondas.forEach(function (r) {
      var vs = [];
      serie.actores.forEach(function (a) {
        var v = serie.s[clave] && serie.s[clave][a] && serie.s[clave][a][r];
        if (v !== undefined) vs.push({ a: a, v: v });
      });
      if (vs.length < 2) return;
      vs.sort(function (x, y) { return x.v - y.v; });
      var lo = vs[0], hi = vs[vs.length - 1], d = hi.v - lo.v;
      if (!mejor || d > mejor.d) mejor = { ronda: r, d: d, lo: lo, hi: hi };
    });
    return mejor;
  },

  PALETA: ['#5aa9ff', '#ff7a59', '#2fbf71', '#b18cff', '#f2b134', '#ff6fa8', '#9db3cf', '#3fd0e0'],

  // SVG de una clave: una línea por actor, con la brecha máxima resaltada.
  svg: function (serie, clave, nombres) {
    var W = 340, H = 220, L = 30, R = 78, T = 14, B = 34, pw = W - L - R, ph = H - T - B;
    var rs = serie.rondas, n = rs.length;
    function X(r) { return L + (n === 1 ? pw / 2 : pw * rs.indexOf(r) / (n - 1)); }
    function Y(v) { return T + ph * (1 - v / 100); }
    var o = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" role="img" aria-label="' + Tools.esc(clave) + '">';
    [0, 25, 50, 75, 100].forEach(function (g) {
      o += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + Y(g) + '" y2="' + Y(g) + '" stroke="#21406b" stroke-width="1"/>' +
        '<text x="' + (L - 4) + '" y="' + (Y(g) + 3) + '" fill="#9db3cf" font-size="9" text-anchor="end">' + g + '</text>';
    });
    rs.forEach(function (r) {
      o += '<text x="' + X(r) + '" y="' + (H - 14) + '" fill="#9db3cf" font-size="10" text-anchor="middle">R' + r + '</text>';
    });
    var b = Calc.brecha(serie, clave);
    if (b && b.d >= 20) {
      o += '<line x1="' + X(b.ronda) + '" x2="' + X(b.ronda) + '" y1="' + Y(b.hi.v) + '" y2="' + Y(b.lo.v) + '" stroke="#ff7a59" stroke-width="3" stroke-dasharray="4 3" opacity=".8"/>';
    }
    var fin = [];
    serie.actores.forEach(function (a, i) {
      var pts = [], c = Calc.PALETA[i % Calc.PALETA.length];
      rs.forEach(function (r) { var v = serie.s[clave] && serie.s[clave][a] && serie.s[clave][a][r]; if (v !== undefined) pts.push([X(r), Y(v), v, r]); });
      if (!pts.length) return;
      o += '<polyline fill="none" stroke="' + c + '" stroke-width="2" points="' + pts.map(function (p) { return p[0] + ',' + p[1]; }).join(' ') + '"/>';
      pts.forEach(function (p) { o += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="3.2" fill="' + c + '" stroke="#12294a" stroke-width="1.2"><title>' + Tools.esc((nombres && nombres[a]) || a) + ' R' + p[3] + ': ' + p[2] + '</title></circle>'; });
      var u = pts[pts.length - 1]; fin.push({ x: u[0], y: u[1], t: ((nombres && nombres[a]) || a) + ' ' + u[2], c: c });
    });
    fin.sort(function (p, q) { return p.y - q.y; });
    for (var i = 1; i < fin.length; i++) if (fin[i].y - fin[i - 1].y < 11) fin[i].y = fin[i - 1].y + 11;
    fin.forEach(function (f) {
      var t = f.t.length > 13 ? f.t.slice(0, 12) + '…' : f.t;
      o += '<text x="' + (f.x + 6) + '" y="' + (f.y + 3) + '" fill="' + f.c + '" font-size="9">' + Tools.esc(t) + '</text>';
    });
    return o + '</svg>';
  },

  /* ---- Perfil: avisos ---- */
  avisosPerfil: function (p) {
    var av = [];
    if (!(p.sabes || '').trim()) av.push('«Lo que sabes y otros no» está vacío: sin información privada todos los actores llegan a la misma conclusión.');
    ['quien', 'quieres', 'temes', 'puedes'].forEach(function (k) {
      if (!(p[k] || '').trim()) av.push('Falta completar «' + { quien: 'Quién eres', quieres: 'Lo que quieres', temes: 'Lo que temes', puedes: 'Lo que puedes hacer' }[k] + '».');
    });
    var todo = [p.quien, p.quieres, p.temes, p.sabes, p.puedes].join(' ');
    if ((p.sabes || '').trim() && !p.hipotesis && !/hip[oó]tesis/i.test(p.sabes))
      av.push('Si esa información privada no está en los documentos reales, marca la casilla de hipótesis: lo no verificado debe decirlo.');
    if (/\bart(?:[íi]culo|\.)?\s*\d+/i.test(todo)) av.push('Aparece un artículo con número: cita las normas solo por su nombre.');
    if (/\b\d{8}\b/.test(todo)) av.push('Hay un número de 8 cifras (¿DNI?): usa roles, no datos personales.');
    if (todo.length > 2200) av.push('El perfil pasa de ~2 KB: recórtalo, un perfil largo empuja al actor a repetir el dossier.');
    if (/s[ií]empre ganar|no tiene l[ií]mites|todo vale/i.test(todo)) av.push('El perfil suena a caricatura: dale límites reales (competencias, plazos, reputación).');
    return av;
  },

  perfilMd: function (p) {
    var sabes = (p.sabes || '').trim();
    if (p.hipotesis && !/hip[oó]tesis/i.test(sabes)) sabes = '(HIPÓTESIS DE SIMULACIÓN, no verificada en los documentos reales) ' + sabes;
    return ['## ' + (p.id || 'A1') + ' — ' + (p.nombre || 'NOMBRE').toUpperCase() + ': ' + (p.rol || 'rol concreto'),
      'Quién eres: ' + (p.quien || '').trim(),
      'Lo que quieres: ' + (p.quieres || '').trim(),
      'Lo que temes: ' + (p.temes || '').trim(),
      'Lo que sabes y otros no: ' + sabes,
      'Lo que puedes hacer: ' + (p.puedes || '').trim(), ''].join('\n');
  },

  /* ---- Consigna ---- */
  consigna: function (c) {
    var ruta = (c.ruta || '<RUTA>').replace(/[\\\/]+$/, '');
    var k = c.actor || 'A1', n = parseInt(c.ronda, 10) || 1;
    var ind = (c.indicadores || '').split(/\r?\n/).map(function (l) { return l.trim(); }).filter(Boolean).map(function (l) {
      var m = /^([A-Za-z_]\w*)\s*[:=\-]\s*(.+)$/.exec(l); return m ? { k: m[1], t: m[2] } : null;
    }).filter(Boolean);
    var indLinea = ind.map(function (i) { return i.k + '=__'; }).join(' · ');
    var indAyuda = ind.map(function (i) { return i.k + ' = ' + i.t; }).join('; ');
    var tipo = c.tipo || 'actor';
    var p = [];
    p.push('Participas en una simulación de actores de una obra pública peruana. Encarnas UN solo actor: ' + k + ' ' + (c.nombre || 'NOMBRE') + (c.rol ? ' (' + c.rol + ')' : '') + '. Respondes en personaje, con criterio realista de ' + tipo + ' en el Perú.');
    p.push('');
    var arch = ['<RUTA>\\00_dossier_comun.md', '<RUTA>\\perfiles\\' + k + '.md  ← tu perfil'];
    if (n > 1) arch.push('<RUTA>\\rondas\\R' + n + '_contexto_' + k + '.md  ← lo que ha pasado que tú conoces y lo que decidiste antes');
    p.push('Lee SOLO estos ' + (n > 1 ? 'tres' : 'dos') + ' archivos (no leas ningún otro de la carpeta, en especial otros perfiles' + (n > 1 ? ', otros contextos' : '') + ' ni la carpeta _orquestador: son información privada de otros actores):');
    arch.forEach(function (a, i) { p.push((i + 1) + '. ' + a.replace(/<RUTA>/g, ruta)); });
    p.push('');
    p.push('RONDA ' + n + ' — del ' + (c.desde || '<fecha>') + ' al ' + (c.hasta || '<fecha>') + (c.tema ? ' (' + c.tema + ')' : '') + '.');
    p.push((n > 1 ? 'En esta ventana: ' : 'Lo que acaba de pasar: ') + ((c.situacion || '').trim() || '<situación, contada desde lo que ESTE actor recibe o ve; nunca le cuentes lo que no ve>'));
    if (n > 1 || (c.decision || '').trim()) {
      var dec = (c.decision || '').trim() || '<la decisión concreta que le toca>';
      var ops = (c.opciones || '').trim();
      p.push('Decisión central: ' + dec + (ops ? ' Por ejemplo: ' + ops.split(/\r?\n/).map(function (s) { return s.trim(); }).filter(Boolean).join('; ') + '.' : '') + ' No puedes fabricar documentos.');
    } else {
      p.push('Decide qué haces en este periodo.');
    }
    if ((c.incertidumbres || '').trim()) p.push('Define también reglas condicionales para lo que no sabes (' + c.incertidumbres.trim() + ').');
    p.push('');
    p.push('Reglas: no inventes hechos fuera de tus archivos; si supones algo, márcalo como «supuesto». Cita normas por su nombre, nunca por número de artículo. Usa roles, no nombres de personas. No inventes montos: describe cómo se calcularían. Sé concreto y realista, incluso con estrategia agresiva si le conviene a un ' + tipo + ' real, pero sin fabricar documentos.');
    p.push('');
    var max = parseInt(c.max, 10) || (n > 1 ? 500 : 450), fin = !!c.final;
    var sec = ((c.secciones || '').trim() || (n > 1 ? 'Decisión central' : 'Acciones del periodo'));
    p.push('Escribe tu respuesta en ' + ruta + '\\rondas\\R' + n + '_' + k + '.md con EXACTAMENTE este formato (máximo ' + max + ' palabras):');
    p.push('');
    p.push('# R' + n + ' — ' + k + ' ' + (c.nombre || 'NOMBRE').toUpperCase());
    p.push('**Lectura de la situación:** (2-3 frases, desde tu interés)');
    sec.split(/\r?\n/).map(function (s) { return s.trim(); }).filter(Boolean).forEach(function (s) {
      p.push('**' + s + ':** (…)');
    });
    p.push('**Otras acciones del periodo:** (0 a 2; [acción] → [destinatario] · [contenido] · [base] · [visibilidad: formal / informal / interna])');
    p.push(fin ? '**Desenlace más probable para ti:** (2-3 líneas)' : '**Reglas condicionales:** (2 a 3, formato «Si … → …»)');
    p.push('**' + (fin ? 'Tus números finales' : 'Tus números') + ':** <1 a 3 probabilidades propias, redactadas completas> __');
    p.push('**Indicadores:** ' + (indLinea || 'clave1=__ · clave2=__') + (indAyuda ? '   (números 0-100: ' + indAyuda + ')' : ''));
    p.push('');
    p.push('Después de escribir el archivo, devuelve como respuesta final el mismo contenido.');
    return p.join('\n');
  },

  avisosConsigna: function (c) {
    var av = [], t = [c.situacion, c.decision, c.opciones, c.incertidumbres].join(' ');
    if (!(c.ruta || '').trim()) av.push('Falta la ruta ABSOLUTA de la carpeta del caso: el subagente no conoce tu carpeta de trabajo.');
    else if (!/^[A-Za-z]:[\\\/]|^\//.test(c.ruta.trim())) av.push('La ruta parece relativa: escríbela absoluta.');
    if (!(c.situacion || '').trim()) av.push('Falta la situación (qué recibe o ve este actor).');
    if (!(c.indicadores || '').trim()) av.push('Sin indicadores no habrá gráfico de evolución.');
    if (/\b(qu[eé] haces\??)$/i.test((c.decision || '').trim())) av.push('La decisión central es muy abierta: «qué entregas el día 12» rinde más que «qué haces».');
    if (/\bart(?:[íi]culo|\.)?\s*\d+/i.test(t)) av.push('Hay un artículo con número: cita las normas por su nombre.');
    if (/perfil(es)? de A\d|_orquestador/i.test(t)) av.push('La situación menciona perfiles ajenos o _orquestador: riesgo de fuga de información.');
    return av;
  }
};

if (typeof module !== 'undefined' && module.exports) module.exports = { Calc: Calc, Tools: Tools };
