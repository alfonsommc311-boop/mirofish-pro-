Lesson.start({
  id: 'oasis-camel-y-zep', area: 'Qué es MiroFish', areaIcon: '🐟', icon: '⚙️',
  title: 'OASIS, CAMEL y Zep',
  subtitle: 'Las piezas por dentro: simulador social, memoria y grafo de conocimiento.',
  norma: 'Versiones y dependencias solo según la investigación del 28/09/2026; verificar en la documentación vigente del repositorio.',
  intro: '<p>Detrás de MiroFish hay piezas con nombre propio: <b>OASIS</b> simula la interacción social, <b>CAMEL-AI</b> es la organización que lo desarrolla, <b>Zep Cloud</b> guarda la memoria y un <b>GraphRAG</b> organiza la semilla como grafo. No necesitas dominarlas para usar el método, pero sí entender qué función cumple cada una, porque cuando repliques el método en Claude Code tendrás que <b>suplir cada función a mano</b>: el dossier hace de grafo, los archivos hacen de memoria y los subagentes hacen de agentes.</p>',
  sections: [
    { h: 'Cada pieza y su función',
      html: '<table><tr><th>Pieza</th><th>Función</th><th>En tu método con Claude Code</th></tr><tr><td>OASIS (CAMEL-AI)</td><td>Motor de simulación social con agentes</td><td>Las rondas que tú orquestas</td></tr><tr><td>GraphRAG</td><td>Grafo de conocimiento desde la semilla</td><td>El dossier común y sus hechos con fuente</td></tr><tr><td>Zep Cloud</td><td>Memoria de los agentes</td><td>Archivos en disco: perfiles, rondas, contextos</td></tr><tr><td>LLM compatible con el SDK de OpenAI</td><td>Da voz y decisiones a los agentes</td><td>Cada subagente de Claude Code</td></tr></table>' },
    { h: 'OASIS y CAMEL-AI',
      html: '<p>OASIS significa <i>Open Agent Social Interaction Simulations</i> y es el simulador social que MiroFish toma de CAMEL-AI. Su trabajo es mover a los agentes en un entorno tipo red social, donde publican, responden y reaccionan.</p><p>Por eso MiroFish original es fuerte cuando lo que interesa es <b>clima social o reacción pública</b> con cientos de agentes; en una obra, eso sirve para vecinos y redes, pero no reemplaza la mesa de actores con información privada que ensayarás tú.</p>' },
    { h: 'Zep y el grafo: la memoria y el mapa',
      html: '<p>Un agente que olvida lo que pasó en la ronda anterior no puede reaccionar con coherencia. Zep Cloud es el servicio externo que da esa <b>memoria</b>, y por eso MiroFish exige una clave para usarlo. El GraphRAG, por su parte, convierte la semilla en un <b>mapa de entidades y relaciones</b>: quién es quién y cómo se conectan.</p><p>La consecuencia práctica: la calidad del grafo depende de la calidad de la semilla. Si en la semilla no está el hecho, ningún agente lo sabrá. Cómo se integran exactamente GraphRAG y Zep en el código no está verificado: <b>verificar en la documentación vigente</b>.</p>' },
    { h: 'Versiones que aparecen en el repositorio',
      html: '<p>El archivo de dependencias del backend fijaba, el 28/09/2026, estas versiones (dato volátil):</p><ul><li><span class="hl">camel-oasis</span> 0.2.5 y <span class="hl">camel-ai</span> 0.2.78</li><li><span class="hl">zep-cloud</span> 3.25.0</li><li>Flask, el SDK de openai, PyMuPDF y otras librerías de apoyo</li></ul><p>No memorices estas cifras: sirven para ver que el motor es un conjunto de paquetes con versión fija, y que cambiarán. El proyecto se distribuye bajo licencia AGPL-3.0; para uso personal no hay problema, pero antes de cualquier uso comercial consulta a un abogado. Antes de instalar, <b>verificar en la documentación vigente</b>.</p>' },
    { h: 'Qué te llevas al método',
      html: '<p>Lo que importa es la <b>función</b>, no la marca: una semilla organizada, agentes con memoria y un simulador que los haga interactuar. Si tu dossier es pobre, tu grafo es pobre; si los archivos de cada ronda no se guardan, tus actores olvidan. Y si un actor recibe información que no le correspondía, se rompe el aislamiento que en MiroFish resuelve el diseño del entorno y que aquí resuelves tú, armando el contexto de cada actor.</p>' }
  ],
  keypoints: [
    'OASIS, de CAMEL-AI, es el simulador social que usa MiroFish.',
    'Zep Cloud aporta la memoria de los agentes y requiere una clave propia.',
    'GraphRAG convierte la semilla en un grafo de entidades y relaciones.',
    'En Claude Code cada función se suple con algo tuyo: dossier, archivos en disco y subagentes.',
    'Las versiones del repositorio son datos volátiles: verificar en la documentación vigente.',
    'El proyecto usa licencia AGPL-3.0; consultar antes de un uso comercial.'
  ],
  flashcards: [
    { q: '¿Qué es OASIS?', a: 'El simulador de interacción social con agentes de CAMEL-AI que usa MiroFish.' },
    { q: '¿Para qué sirve Zep Cloud en MiroFish?', a: 'Para la memoria de los agentes; exige una clave de API.' },
    { q: '¿Qué hace el GraphRAG?', a: 'Arma un grafo de conocimiento (entidades y relaciones) a partir de la semilla.' },
    { q: '¿Qué reemplaza a la memoria de Zep en tu método?', a: 'Archivos en disco: perfiles, respuestas de rondas y contextos de cada actor.' },
    { q: '¿Bajo qué licencia se publica MiroFish?', a: 'AGPL-3.0; verificarlo en el repositorio y consultar antes de un uso comercial.' }
  ],
  quiz: [
    { q: '¿Qué pieza de MiroFish se ocupa de la memoria de los agentes?', opts: ['OASIS', 'Zep Cloud', 'PyMuPDF'], correct: 1, why: 'Zep Cloud gestiona la memoria; OASIS simula la interacción social.' },
    { q: 'Si un hecho no está en la semilla, ¿qué pasa?', opts: ['El grafo lo infiere con certeza', 'Ningún agente lo sabrá', 'Lo sabrá solo el informe'], correct: 1, why: 'El grafo y los agentes parten de la semilla; lo que no está, no existe en el mundo simulado.' },
    { q: 'Sobre las versiones de camel-ai o zep-cloud citadas, lo correcto es:', opts: ['Son definitivas', 'Son un dato volátil a verificar', 'Son obligatorias para el curso'], correct: 1, why: 'Corresponden a una consulta del 28/09/2026 y cambian; conviene verificar en la documentación vigente.' }
  ]
});
