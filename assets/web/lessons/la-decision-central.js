Lesson.start({
  id: 'la-decision-central', area: 'La consigna de cada ronda', areaIcon: '✍️', icon: '❓',
  title: 'La decisión central',
  subtitle: 'Una pregunta concreta, fechada y con salida: «qué entregas el día 12» y no «qué haces».',
  norma: 'Se ofrecen opciones sin empujar ninguna; la decisión es del actor, no del orquestador.',
  intro: '<p>La decisión central es el corazón de la consigna: la única pregunta que el actor debe responder. Una pregunta abierta como <i>«¿qué haces?»</i> devuelve un ensayo de intenciones. Una pregunta concreta como <i>«¿qué entregas el día 12 y a quién?»</i> devuelve un acto que puedes fechar, comparar con el de los demás y resolver. Aquí ves cómo redactarla desde la silla del orquestador y cómo se siente desde la del actor.</p>',
  sections: [
    { h: 'Tres rasgos de una buena decisión central',
      html: '<ul><li><b>Concreta:</b> pide un acto (entregar, responder, paralizar, escalar), no una intención.</li><li><b>Fechada:</b> tiene un día o una ventana; los plazos hacen que el reloj del mundo avance.</li><li><b>Con destinatario:</b> dice ante quién se actúa, porque de eso depende quién se entera.</li></ul><p>Si el orquestador no puede escribir en la resolución <i>«el día 12, X entregó Y a Z»</i>, la pregunta era floja.</p>' },
    { h: 'Débil frente a fuerte',
      html: '<table><tr><th>Débil</th><th>Fuerte</th></tr><tr><td>¿Qué haces ante la carta?</td><td>¿Qué entregas el día 12 y a quién?</td></tr><tr><td>¿Cómo reaccionas?</td><td>¿Aceptas el diferimiento, lo observas por escrito o inicias una controversia? Decide y fecha.</td></tr><tr><td>¿Qué piensas del retraso?</td><td>¿Qué le comunicas a la supervisión antes del día 15?</td></tr></table><p>Lo débil produce reflexión; lo fuerte produce hechos que entran a la cronología.</p>' },
    { h: 'Ofrecer opciones sin empujar',
      html: '<p>Puedes listar las salidas posibles para que el actor no se pierda, con dos cuidados:</p><ul><li><b>Incluye siempre una opción tuya no prevista</b>: «u otra que tu perfil justifique».</li><li><b>Ordénalas sin sesgo</b> (por gravedad, no por lo que esperas) y que ninguna venga con adjetivos.</li></ul><p><i>Ejemplo (ficticio), actor Municipalidad Distrital de Villa Esperanza, ronda 3:</i> «Decisión central: ¿qué respondes hasta el día 14 al contratista? Puedes (a) aceptar lo planteado, (b) pedir más información, (c) rechazar, (d) otra acción que tu perfil justifique. Elige una y fecha.»</p><p>Si las opciones son todas razonables, el actor tendrá que ponerse en su silla. Si una es obviamente la buena, has escrito un examen, no una simulación.</p>' },
    { h: 'Cuidado con lo que la pregunta da por hecho',
      html: '<p>Una pregunta puede colar una premisa: <i>«¿cómo justificas tu retraso?»</i> presupone que hubo retraso y que fue tuyo. El actor se defenderá de una acusación que tú inventaste. Redáctala en neutro: <i>«¿qué comunicas sobre el avance del frente 2 el día 12?»</i>.</p><p>Tampoco pidas dos decisiones a la vez: si hay dos, haz dos rondas o elige la más importante.</p>' },
    { h: 'La decisión central y el ritmo del caso',
      html: '<p>La decisión central de una ronda sale de lo que quedó abierto en la resolución anterior. Es la forma de «mover la historia» sin dictarla: el orquestador decide <b>qué está sobre la mesa</b>; el actor decide <b>qué hace</b>. Las decisiones de terceros que no son actores (laboratorio, asesoría legal) las resuelve el orquestador y las marca como <span class="hl">resultado simulado</span>.</p>' }
  ],
  keypoints: [
    'La decisión central es una sola pregunta que el actor debe responder cada ronda.',
    'Debe ser concreta (un acto), fechada y con destinatario.',
    '«Qué entregas el día 12» produce hechos; «qué haces» produce opiniones.',
    'Las opciones se ofrecen sin empujar y con una vía abierta a una acción no prevista.',
    'La pregunta no debe colar premisas ni pedir dos decisiones a la vez.'
  ],
  flashcards: [
    { q: '¿Qué tres rasgos tiene una buena decisión central?', a: 'Es concreta, está fechada y nombra a quién se dirige el acto.' },
    { q: '¿Por qué «qué entregas el día 12» rinde más que «qué haces»?', a: 'Obliga a un acto fechado que el orquestador puede resolver y comparar.' },
    { q: '¿Cómo se ofrecen opciones sin empujar?', a: 'Sin adjetivos, ordenadas por gravedad y con una opción abierta a otra acción justificada por su perfil.' },
    { q: '¿Qué es una premisa colada?', a: 'Un supuesto dentro de la pregunta que el actor debe aceptar o refutar sin que nadie lo haya establecido.' }
  ],
  quiz: [
    { q: '¿Cuál es una decisión central bien formulada?', opts: ['¿Qué opinas del conflicto?', '¿Qué entregas el día 12 y a quién?', '¿Cómo te sientes con la supervisión?'], correct: 1, why: 'Pide un acto concreto, con fecha y destinatario.' },
    { q: 'Al listar opciones, lo más importante es:', opts: ['Poner primero la que esperas', 'Incluir una salida abierta y no adjetivar ninguna', 'Dar solo dos'], correct: 1, why: 'Si una opción es obvia o la vía abierta falta, el actor no simula: contesta el examen.' },
    { q: '«¿Cómo justificas tu retraso?» es un problema porque:', opts: ['Es demasiado corta', 'Presupone un retraso propio que nadie estableció', 'No lleva fecha'], correct: 1, why: 'Cuela una premisa y obliga al actor a defenderse de algo inventado por el orquestador.' }
  ]
});
