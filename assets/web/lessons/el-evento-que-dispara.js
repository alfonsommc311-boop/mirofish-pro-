Lesson.start({
  id: 'el-evento-que-dispara', area: 'La semilla: el dossier común', areaIcon: '🌱', icon: '⚡',
  title: 'El evento que dispara',
  subtitle: 'Un solo hecho concreto, fechado e inyectable: la piedra que cae en el estanque.',
  norma: 'El evento se describe como hecho, sin anticipar qué resolverá nadie (verificar la norma vigente y el expediente técnico aprobado).',
  intro: '<p>Una simulación necesita algo que la ponga en marcha. Ese algo es el <b>evento</b>: el hecho que ocurre y al que todos los actores deben reaccionar en la ronda 1. Desde mi silla lo elijo antes de escribir perfiles, porque define qué preguntas tiene sentido hacerles. Desde la silla del actor, el evento es simplemente «esto acaba de pasar y tengo que responder».</p>',
  sections: [
    { h: 'Qué hace bueno a un evento',
      html: '<ul><li><b>Concreto</b>: algo que pasó o llegó, con fecha.</li><li><b>Único</b>: un solo hecho por ensayo; si son tres, son tres ensayos.</li><li><b>Inyectable</b>: cabe en dos o tres líneas del dossier y cualquier actor lo lee igual.</li><li><b>Abierto</b>: no trae dentro la respuesta.</li></ul>' },
    { h: 'Ejemplos buenos y malos',
      html: '<table><tr><th>Malo</th><th>Bueno (ficticio)</th></tr><tr><td>«Hay conflicto entre las partes»</td><td>«El Consorcio Andino presenta una carta solicitando ampliación de plazo por suelo blando»</td></tr><tr><td>«La obra irá mal»</td><td>«El Consorcio Supervisor Horizonte comunica que no puede pronunciarse sin un ensayo de laboratorio»</td></tr><tr><td>«La Municipalidad decide rechazar la carta»</td><td>«La Municipalidad Distrital de Villa Esperanza recibe la carta del contratista»</td></tr></table><p>El primero es un clima, el segundo una profecía, el tercero ya trae el desenlace. Ninguno sirve de disparador.</p>' },
    { h: 'Cómo se inyecta',
      html: '<p>El evento vive en el bloque 3 del dossier, y la consigna de la ronda 1 lo repite en una línea: <i>«Ocurrió el evento del dossier. Responde desde tu rol con lo que sabes.»</i> En rondas posteriores el evento ya es historia y lo nuevo son las acciones de los demás. Si quieres ensayar otra alternativa, cambias el evento y creas una rama, sin tocar el resto del dossier.' },
    { h: 'Un evento no es un pronóstico',
      html: '<p>Escoger un evento no significa que vaya a ocurrir. Puedes ensayar uno que temes, como ejercicio de preparación: «si llegara esta carta, ¿qué flancos míos quedarían visibles?». Lo que salga es un <b>resultado simulado</b>. No dice cuál será la decisión real de ninguna parte ni promete el resultado de una ampliación de plazo; eso se sustenta con el expediente y la norma vigente.</p>' }
  ],
  keypoints: [
    'El evento es el hecho que pone en marcha la ronda 1.',
    'Debe ser concreto, único, inyectable y abierto.',
    'Un clima, una profecía o un desenlace no son eventos.',
    'Va en el bloque 3 del dossier y se repite en una línea en la consigna de la ronda 1.',
    'Para ensayar otra alternativa se cambia el evento y se abre una rama.',
    'Ensayar un evento no es predecir que ocurrirá.'
  ],
  flashcards: [
    { q: '¿Qué cuatro rasgos tiene un buen evento?', a: 'Concreto, único, inyectable y abierto.' },
    { q: '¿Por qué «hay conflicto entre las partes» es mal evento?', a: 'Es un clima, no un hecho fechado al que se pueda reaccionar.' },
    { q: '¿Dónde se escribe el evento?', a: 'En el bloque 3 del dossier, y se repite en la consigna de la ronda 1.' },
    { q: '¿Cómo ensayas una alternativa?', a: 'Cambias el evento y abres una rama, sin tocar el resto.' }
  ],
  quiz: [
    { q: '¿Cuál es un buen evento?', opts: ['La obra irá mal', 'El contratista presenta una carta solicitando ampliación de plazo', 'La Entidad rechaza la carta'], correct: 1, why: 'Es un hecho concreto y abierto; los otros son profecía o desenlace.' },
    { q: '¿Cuántos eventos por ensayo?', opts: ['Uno', 'Todos los posibles', 'Cinco'], correct: 0, why: 'Varios eventos mezclan ensayos distintos.' },
    { q: 'Ensayar un evento temido significa:', opts: ['Que va a ocurrir', 'Un ejercicio de preparación con resultado simulado', 'Un dictamen'], correct: 1, why: 'Es ensayo, no pronóstico ni decisión de terceros.' }
  ]
});
