Lesson.start({
  id: 'que-es-mirofish', area: 'Qué es MiroFish', areaIcon: '🐟', icon: '🐟',
  title: 'Qué es MiroFish',
  subtitle: 'Un motor multiagente de código abierto que te devuelve un mundo paralelo, no una profecía.',
  norma: 'Ensayar con actores que solo saben lo suyo, no adivinar el futuro (verificar en la documentación vigente del proyecto).',
  intro: '<p>MiroFish se presenta como un <b>motor de predicción por inteligencia de enjambre</b>: le das material real (una semilla) y una pregunta en lenguaje natural, y construye un mundo digital paralelo donde muchos agentes con personalidad y memoria interactúan. Sale un <b>informe</b> y un entorno con el que puedes conversar. Esta app no te enseña a instalarlo: te enseña su <b>método</b> para replicarlo con Claude Code.</p>',
  sections: [
    { h: 'La idea en una frase',
      html: '<p>En vez de pedirle a un modelo <i>«¿qué pasará?»</i>, creas un pequeño mundo con actores que <b>solo conocen lo suyo</b> y los dejas reaccionar ronda a ronda. Lo valioso no es el veredicto final: es descubrir la reacción que no viste venir.</p><ul><li>Entrada: <span class="hl">materiales semilla</span> + una petición en lenguaje natural.</li><li>Salida: un <span class="hl">informe</span> y un entorno interactivo.</li></ul>' },
    { h: 'Las piezas que menciona el proyecto',
      html: '<table><tr><th>Pieza</th><th>Para qué</th></tr><tr><td>OASIS (CAMEL-AI)</td><td>Simulación social con agentes</td></tr><tr><td>GraphRAG</td><td>Grafo de conocimiento a partir de la semilla</td></tr><tr><td>Zep Cloud</td><td>Memoria de los agentes</td></tr><tr><td>Un LLM compatible con el SDK de OpenAI</td><td>Da voz y decisiones a los agentes</td></tr></table><p>Versiones, dependencias y requisitos cambian rápido: <b>verificar en la documentación vigente</b> del repositorio.</p>' },
    { h: 'Por qué importa a un supervisor de obra',
      html: '<p>Una obra pública es un juego de actores con información desigual: la Entidad, el contratista, la supervisión, el control, los vecinos. Cada uno sabe algo que los demás no. Un motor así te permite <b>ensayar la carta antes de enviarla</b> y ver qué flanco propio usaría otro.</p>' },
    { h: 'Lo que no es',
      html: '<p>No es una bola de cristal ni un modelo estadístico calibrado. Los resultados dependen del modelo de lenguaje, de la semilla y de los perfiles que generes; dos corridas pueden diferir. Trátalo como <b>ensayo de escenarios</b>. Las normas peruanas que aparezcan en un caso se citan solo por su nombre: verificar la norma vigente y el expediente técnico aprobado.</p>' }
  ],
  keypoints: [
    'MiroFish simula un mundo paralelo con muchos agentes a partir de una semilla real y una pregunta.',
    'La salida es un informe y un entorno con el que se puede conversar.',
    'Usa OASIS, GraphRAG, Zep Cloud y un LLM externo; los datos técnicos se verifican en su documentación.',
    'Su valor es descubrir reacciones no previstas, no acertar el futuro.',
    'Este curso replica el método dentro de Claude Code, con subagentes.'
  ],
  flashcards: [
    { q: '¿Qué recibe MiroFish como entrada?', a: 'Materiales semilla y una petición en lenguaje natural.' },
    { q: '¿Qué entrega?', a: 'Un informe y un entorno de simulación interactivo.' },
    { q: '¿Qué piezas usa según su README?', a: 'OASIS, GraphRAG, Zep Cloud y un LLM compatible con OpenAI.' },
    { q: '¿Es una predicción calibrada?', a: 'No: es un ensayo de escenarios que depende del modelo, la semilla y los perfiles.' }
  ],
  quiz: [
    { q: '¿Cuál es el mejor uso de este tipo de simulación en obra?', opts: ['Adivinar la fecha exacta de término', 'Ensayar la reacción de las partes antes de actuar', 'Reemplazar el cronograma'], correct: 1, why: 'Sirve para ver reacciones y flancos propios; el plazo se calcula con cronograma y ruta crítica.' },
    { q: '¿Qué determina la calidad de una corrida?', opts: ['Solo el tamaño del modelo', 'La semilla, los perfiles y el modelo de lenguaje', 'El azar únicamente'], correct: 1, why: 'Sin buena semilla ni perfiles creíbles la simulación no dice nada útil.' },
    { q: 'Los datos de versiones y requisitos de MiroFish se deben:', opts: ['Memorizar de esta lección', 'Verificar en la documentación vigente', 'Ignorar'], correct: 1, why: 'Cambian con rapidez; la lección solo da el método.' }
  ]
});
