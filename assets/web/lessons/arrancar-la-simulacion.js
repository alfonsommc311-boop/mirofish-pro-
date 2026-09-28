Lesson.start({
  id: 'arrancar-la-simulacion', area: 'Una corrida de principio a fin', areaIcon: '🔄', icon: '🚦',
  title: 'Arrancar la simulación',
  subtitle: 'Cuatro respuestas que fijan todo lo que viene: fuente, evento, pregunta y horizonte, perspectiva.',
  norma: 'Una corrida nace de una pregunta acotada, no de un tema; las normas se citan solo por su nombre (verificar la norma vigente y el expediente técnico aprobado).',
  intro: '<p>Cuando invocas <span class="hl">/mirofish</span>, el skill no empieza a inventar: te pregunta cuatro cosas. Según el plan de esta app son la <b>fuente</b>, el <b>evento</b>, la <b>pregunta con su horizonte</b> y la <b>perspectiva</b>. Contestarlas bien vale más que cualquier ajuste posterior, porque de ellas salen el dossier, los actores y las consignas. Contestarlas mal produce una simulación vistosa que no responde nada. Recuerda la idea rectora: <b>no predices, ensayas</b>, y un ensayo necesita un guion acotado. El detalle interno del skill se verifica en su propio archivo vivo.</p>',
  sections: [
    { h: 'Las cuatro preguntas',
      html: '<table><tr><th>Pide</th><th>Qué es</th><th>Si la contestas mal</th></tr><tr><td>Fuente</td><td>Los documentos reales de donde salen los hechos</td><td>El dossier se llena de supuestos sin respaldo</td></tr><tr><td>Evento</td><td>El hecho concreto que dispara el ensayo</td><td>Nadie tiene nada que decidir</td></tr><tr><td>Pregunta y horizonte</td><td>Qué quieres saber y hasta qué fecha</td><td>Rondas sin fin y respuestas difusas</td></tr><tr><td>Perspectiva</td><td>Desde qué silla miras</td><td>El informe no sabe a quién le sirve</td></tr></table><p>Piensa en ellas como el encargo que le darías a un colega que va a armar el ensayo sin conocer tu obra.</p>' },
    { h: 'Fuente y evento',
      html: '<p>La <b>fuente</b> son los papeles: cartas, cuaderno de obra, informes, resoluciones. Cuanto más exacta la fuente, menos hipótesis hay que marcar. El <b>evento</b> es un solo hecho inyectable, con fecha y autor por rol.</p><p><b>Bueno:</b> <i>«La supervisión comunica a la Entidad, por carta, que difiere parte de la última valorización hasta contar con los resultados de laboratorio».</i></p><p><b>Malo:</b> <i>«Hay tensión entre las partes»</i>. Es un clima, no un hecho: nadie puede reaccionar a eso con una decisión concreta.</p>' },
    { h: 'Pregunta y horizonte',
      html: '<p>Una buena pregunta es una decisión tuya, no un pronóstico: <i>«Si el Consorcio Supervisor Horizonte difiere la valorización, ¿qué haría el Consorcio Andino en los diez días siguientes y qué flanco mío queda expuesto?»</i>.</p><p>El <b>horizonte</b> es la ventana de fechas del ensayo. Ponlo corto y con fechas: cada ronda cubre un tramo y la ventana define cuántas rondas caben. Evita preguntas del tipo «¿cuándo terminará la obra?»: eso lo responden el cronograma y la ruta crítica (Ruta Crítica PRO), no un ensayo de actores.</p>' },
    { h: 'La perspectiva: desde qué silla',
      html: '<p>Tú eres el orquestador, pero el ensayo se lee distinto si tu silla es la de la Entidad, la supervisión o el contratista. La perspectiva decide qué flancos propios buscas y a qué actor le prestas más atención al leer.</p><ul><li>Dilo en una frase: <i>«Miro esto como supervisión de obra»</i>.</li><li>No significa que los demás actores piensen como tú: cada uno razona con lo suyo.</li></ul><p>El caso ficticio de esta app usa a la Municipalidad Distrital de Villa Esperanza como Entidad; siempre con roles, nunca con nombres de personas.</p>' },
    { h: 'Lo que no debes esperar del arranque',
      html: '<p>El arranque no garantiza que la simulación acierte: solo garantiza que el ensayo tenga rumbo. Si el evento depende de una norma, cítala por su nombre y anota <b>verificar la norma vigente y el expediente técnico aprobado</b>. Si un dato no está en la fuente, márcalo como hipótesis desde ahora (área 4). Y si tu duda es un cálculo o una norma clara, quizá no toca simular (área 12).</p>' }
  ],
  keypoints: [
    'El skill pide cuatro cosas: fuente, evento, pregunta con horizonte y perspectiva.',
    'La fuente son documentos reales; lo que no esté en ellos se marca como hipótesis.',
    'El evento es un hecho concreto e inyectable, no un clima.',
    'La pregunta es una decisión tuya con fechas, no un pronóstico de plazo o costo.',
    'La perspectiva dice desde qué silla lees, pero cada actor razona con lo suyo.',
    'Un arranque flojo no se arregla después con más rondas.'
  ],
  flashcards: [
    { q: '¿Qué cuatro cosas pide el skill al arrancar?', a: 'Fuente, evento, pregunta y horizonte, y perspectiva.' },
    { q: '¿Qué hace bueno a un evento?', a: 'Que sea un hecho concreto, fechado y atribuido a un rol, al que se pueda reaccionar con una decisión.' },
    { q: '¿Por qué acotar el horizonte?', a: 'Porque define cuántas rondas caben y evita respuestas difusas.' },
    { q: '¿Qué pregunta NO va a un ensayo de actores?', a: 'La que se resuelve con un cálculo, como la fecha de término: eso es cronograma y ruta crítica.' },
    { q: '¿Qué haces con un dato que no está en la fuente?', a: 'Lo marcas como hipótesis desde el arranque.' }
  ],
  quiz: [
    { q: '¿Cuál es un evento bien planteado?', opts: ['Hay tensión entre las partes', 'La supervisión comunica por carta que difiere parte de la última valorización', 'El contratista está molesto'], correct: 1, why: 'Es un hecho concreto, con autor por rol y al que los demás pueden reaccionar con decisiones.' },
    { q: '¿Qué función tiene el horizonte?', opts: ['Fija la ventana de fechas y cuántas rondas caben', 'Sirve para predecir el plazo final', 'Reemplaza a la fuente'], correct: 0, why: 'Acota el ensayo; el plazo real se calcula con otras herramientas.' },
    { q: 'La perspectiva que eliges significa que:', opts: ['Los actores piensan como tú', 'Tú lees el ensayo desde esa silla, y cada actor razona con lo suyo', 'El informe garantiza tu resultado'], correct: 1, why: 'Orienta tu lectura, no el razonamiento de los actores ni el desenlace.' }
  ]
});
