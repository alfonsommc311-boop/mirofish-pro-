Lesson.start({
  id: 'los-cinco-pasos-de-mirofish', area: 'Qué es MiroFish', areaIcon: '🐟', icon: '🪜',
  title: 'Los cinco pasos de MiroFish',
  subtitle: 'Grafo, entorno, simulación, informe e interacción profunda: el flujo que este curso replica.',
  norma: 'Cinco pasos según el README del proyecto; el detalle de cada uno se verifica en la documentación vigente.',
  intro: '<p>El README de MiroFish ordena su trabajo en <b>cinco pasos</b>. Conocerlos te da el mapa de todo el curso: cada área posterior es la versión artesanal, dentro de Claude Code, de alguno de estos pasos. Como orquestador harás a mano, con archivos y subagentes, lo que la herramienta original automatiza con grafo, memoria y un servicio externo. Ver la correspondencia te ayuda a saber <b>qué decisión te toca a ti</b> en cada tramo.</p>',
  sections: [
    { h: 'Los cinco pasos según el README',
      html: '<ol><li><b>Construcción de grafo:</b> extrae la información semilla y arma un GraphRAG con inyección de memoria.</li><li><b>Preparación del entorno:</b> extrae entidades y relaciones, genera personas (personajes) y configura a los agentes.</li><li><b>Simulación:</b> corridas en paralelo sobre dos plataformas, con actualización dinámica de la memoria temporal.</li><li><b>Informe:</b> un ReportAgent produce un análisis con herramientas interactivas.</li><li><b>Interacción profunda:</b> conversas con los agentes simulados y con el ReportAgent.</li></ol><p>Cuáles son exactamente las dos plataformas simuladas no está confirmado en nuestra investigación: <b>verificar en la documentación vigente</b>.</p>' },
    { h: 'La misma cadena, en tu mesa de trabajo',
      html: '<table><tr><th>Paso de MiroFish</th><th>Tu equivalente en el curso</th></tr><tr><td>1. Grafo desde la semilla</td><td>Dossier común con hechos con fuente (área 3)</td></tr><tr><td>2. Entorno y personas</td><td>Elegir actores y escribir perfiles (área 4)</td></tr><tr><td>3. Simulación</td><td>Rondas: consigna, respuesta, resolución (áreas 5 a 7)</td></tr><tr><td>4. Informe</td><td>Leer lo que salió y redactar el informe (áreas 8 y 9)</td></tr><tr><td>5. Interacción profunda</td><td>Entrevistar a un actor y preguntar al mundo (área 9)</td></tr></table><p>El paso 2 concentra tu mayor responsabilidad: un perfil caricaturesco da una simulación sin valor, por bien que corra el resto.</p>' },
    { h: 'Un ejemplo con el caso ficticio',
      html: '<p>Caso: la Municipalidad Distrital de Villa Esperanza recibe una carta del Consorcio Supervisor Horizonte que difiere parte de la última valorización del Consorcio Andino.</p><ul><li><b>Paso 1:</b> reúnes en un dossier la carta, el cuaderno de obra y las condiciones contractuales, con su fuente.</li><li><b>Paso 2:</b> defines tres actores (Entidad, contratista, supervisión) y qué sabe cada uno que los otros no.</li><li><b>Paso 3:</b> corres dos o tres rondas; cada actor responde solo con lo suyo.</li><li><b>Paso 4:</b> el informe dice dónde se rompió el acuerdo y qué podrías hacer esta semana.</li><li><b>Paso 5:</b> preguntas al contratista simulado por qué no respondió el día 12.</li></ul><p>Todo lo jurídico se cita por el nombre de la norma: verificar la norma vigente y el expediente técnico aprobado. Nada de esto promete el resultado de la valorización.</p>' },
    { h: 'Dónde suele fallar cada paso',
      html: '<ul><li><b>Grafo/dossier:</b> hechos sin fuente o mezclados con opiniones.</li><li><b>Entorno/perfiles:</b> actores que lo saben todo o son demasiado razonables.</li><li><b>Simulación:</b> un actor ve lo que no debía ver (fuga de información).</li><li><b>Informe:</b> se cuenta la trama como si fuera pronóstico.</li><li><b>Interacción:</b> se le pregunta al actor por cosas que nunca conoció.</li></ul><p>Cada falla tiene su lección en el curso; por ahora basta con saber en qué tramo buscar.</p>' },
    { h: 'Lo que el flujo no te da',
      html: '<p>Que el proceso sea ordenado no garantiza que el resultado sea cierto. Depende del modelo de lenguaje, de la semilla y de los perfiles; una corrida no es una distribución. El flujo sirve para <b>ensayar</b>: ver, antes de actuar, dónde se rompe el sistema.</p>' }
  ],
  keypoints: [
    'Los cinco pasos son: grafo, entorno, simulación, informe e interacción profunda.',
    'Grafo y entorno preparan el mundo; la simulación lo hace actuar; informe e interacción lo interpretan.',
    'En este curso cada paso se replica a mano: dossier, perfiles, rondas, informe y entrevistas.',
    'Tu mayor responsabilidad como orquestador está en la semilla y en los perfiles.',
    'El README no permitió confirmar cuáles son las dos plataformas: verificar en la documentación vigente.',
    'Un flujo ordenado no vuelve predictivo el resultado: sigue siendo un ensayo.'
  ],
  flashcards: [
    { q: 'Nombra los cinco pasos de MiroFish.', a: 'Construcción de grafo, preparación del entorno, simulación, informe e interacción profunda.' },
    { q: '¿A qué paso equivale el dossier común del curso?', a: 'A la construcción de grafo desde la semilla.' },
    { q: '¿Qué hace el ReportAgent?', a: 'Produce el análisis final con herramientas interactivas (paso 4 según el README).' },
    { q: '¿Qué es la interacción profunda?', a: 'Conversar con los agentes simulados y con el agente del informe.' },
    { q: '¿Qué paso concentra tu mayor responsabilidad?', a: 'La preparación del entorno: elegir actores y escribir perfiles creíbles con información privada.' }
  ],
  quiz: [
    { q: '¿Qué paso corresponde a hacer que los agentes actúen en paralelo?', opts: ['Construcción de grafo', 'Simulación', 'Interacción profunda'], correct: 1, why: 'La simulación es el paso 3: las corridas donde los agentes actúan y la memoria se actualiza.' },
    { q: 'En el curso, entrevistar a un actor simulado corresponde a:', opts: ['El paso 1', 'El paso 2', 'El paso 5'], correct: 2, why: 'La interacción profunda es conversar con los agentes simulados y con el agente del informe.' },
    { q: 'Si un actor ve un documento que no le correspondía, la falla está en:', opts: ['La simulación (aislamiento)', 'El nombre del informe', 'El puerto del backend'], correct: 0, why: 'El aislamiento de la información se juega en la simulación; conviene revisar qué recibió cada actor.' }
  ]
});
