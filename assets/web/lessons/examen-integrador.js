Lesson.start({
  id: 'examen-integrador', area: 'El simulador destacado', areaIcon: '🏆', icon: '🎓',
  title: 'Examen integrador',
  subtitle: 'Un caso completo: dossier, actores, dos rondas resueltas y el informe.',
  norma: 'Caso ficticio; normas solo por su nombre: verificar la norma vigente y el expediente técnico aprobado.',
  intro: '<p>Recorre un caso ficticio de punta a punta. La Municipalidad Distrital de Villa Esperanza, el Consorcio Andino y el Consorcio Supervisor Horizonte enfrentan un evento: <b>la supervisión difiere una parte de la última valorización hasta recibir ensayos</b>. Tú eres el orquestador.</p>',
  sections: [
    { h: 'Paso 1: dossier y actores',
      html: '<p>Redacta un dossier con obra, historia, evento, hechos con fuente, reglas y puntos débiles visibles. Elige cuatro actores: Entidad, Consorcio Andino, Consorcio Supervisor Horizonte y un actor colectivo (vecinos).</p><p>Para cada uno: quién es, qué quiere, qué teme, <span class="hl">qué sabe que otros no</span> y qué puede hacer.</p>' },
    { h: 'Paso 2: ronda 1',
      html: '<p>Consigna con decisión central: <i>«¿Qué entregas el día 12?»</i>, formato fijo, límite de palabras, una línea de indicadores y una regla condicional. Lanza los cuatro subagentes en una sola tanda.</p>' },
    { h: 'Paso 3: resolución y ronda 2',
      html: '<p>Lee todo, decide qué pasó, fecha y etiqueta quién se entera.</p><table><tr><th>Fecha</th><th>Quién ve</th><th>Hecho</th></tr><tr><td>Día 12</td><td>A1 A2</td><td>El contratista presenta carta de disconformidad</td></tr><tr><td>Día 13</td><td>A1</td><td>Resultado simulado del laboratorio, marcado como tal</td></tr></table><p>Arma los contextos y lanza la ronda 2.</p>' },
    { h: 'Paso 4: informe y autocrítica',
      html: '<p>Redacta el informe interno: cronología, brechas de percepción, puntos de quiebre, recomendaciones con responsable y limitaciones. Revisa: ¿alguien inventó un documento?, ¿hubo fuga de información?, ¿vendiste predicción?</p>' }
  ],
  keypoints: [
    'Dossier, actores, consigna, resolución, contextos, informe: en ese orden.',
    'Cada actor con información privada distinta.',
    'Resolución fechada con etiquetas de quién se entera.',
    'Los resultados de terceros aparecen como simulados.',
    'El informe es interno y declara sus limitaciones.'
  ],
  flashcards: [
    { q: '¿Qué va en la consigna de una ronda?', a: 'Archivos permitidos, ventana de fechas, situación, decisión central, formato y salida.' },
    { q: '¿Qué se decide entre rondas?', a: 'Qué pasó, cuándo y quién se entera.' },
    { q: '¿Qué hallazgo es el más valioso?', a: 'Las brechas de percepción.' },
    { q: '¿Qué se revisa al final?', a: 'Documentos inventados, fugas y promesas de predicción.' }
  ],
  quiz: [
    { q: 'Un resultado de laboratorio que decide la simulación se registra como:', opts: ['Dato real', 'Resultado simulado', 'Norma'], correct: 1, why: 'Nada fabricado se presenta como real.' },
    { q: 'Los actores de una ronda se lanzan:', opts: ['Uno por uno, esperando', 'Todos juntos en una tanda', 'Al azar'], correct: 1, why: 'La ronda se ejecuta en paralelo para comparar respuestas.' },
    { q: 'El informe del caso:', opts: ['Se envía a la Entidad', 'Es interno y declara limitaciones', 'Promete el resultado de la valorización'], correct: 1, why: 'Es un documento de trabajo; nunca se promete un resultado.' }
  ]
});
