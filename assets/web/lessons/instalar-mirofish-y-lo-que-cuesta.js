Lesson.start({
  id: 'instalar-mirofish-y-lo-que-cuesta', area: 'Qué es MiroFish', areaIcon: '🐟', icon: '🧰',
  title: 'Instalar MiroFish y lo que cuesta',
  subtitle: 'Requisitos, claves y por qué cada corrida consume API; método para estimarlo, sin precios.',
  norma: 'Requisitos y comandos según la investigación del 28/09/2026; verificar en la documentación vigente antes de instalar.',
  intro: '<p>Instalar MiroFish es sencillo de describir y exigente de sostener: necesitas un entorno con Node y Python, una clave de un modelo de lenguaje y una cuenta de Zep Cloud. Lo que suele sorprender es que <b>cada corrida consume API</b>, y mucho. Esta lección no te da cifras ni precios: te da los requisitos y, sobre todo, el <b>método para estimar el consumo</b>. Ese consumo es también la razón por la que este curso replica el método dentro de Claude Code, con pocos actores.</p>',
  sections: [
    { h: 'Requisitos según el README',
      html: '<ul><li><b>Node.js</b> 18 o superior.</li><li><b>Python</b> entre 3.11 y 3.12.</li><li><b>uv</b>, el gestor de paquetes de Python.</li><li>Una <b>clave de un modelo de lenguaje</b> compatible con el formato del SDK de OpenAI.</li><li>Una <b>cuenta de Zep Cloud</b> (servicio externo) con su clave.</li></ul><p>Existe también una opción con Docker. El mapeo de puertos y volúmenes del compose no está verificado. Todo esto puede haber cambiado: <b>verificar en la documentación vigente</b>.</p>' },
    { h: 'Instalación y arranque',
      html: '<p>Según el README y el package.json, el flujo es este:</p><ol><li>Copiar el archivo de ejemplo de variables a <span class="hl">.env</span> y completarlo.</li><li><span class="hl">npm run setup:all</span> instala dependencias del frontend y del backend.</li><li><span class="hl">npm run dev</span> arranca backend y frontend en paralelo.</li></ol><p>La interfaz queda en el puerto 3000 y la API del backend en el 5001, en tu propia máquina. El repositorio incluye una carpeta de traducciones (<i>locales</i>); si hay interfaz en español y cómo activarla, verificar en la documentación vigente.</p>' },
    { h: 'El archivo .env',
      html: '<table><tr><th>Variable</th><th>Qué es</th></tr><tr><td>LLM_API_KEY</td><td>Credencial del modelo de lenguaje</td></tr><tr><td>LLM_BASE_URL</td><td>Dirección del servicio del modelo</td></tr><tr><td>LLM_MODEL_NAME</td><td>Nombre del modelo que se usará</td></tr><tr><td>ZEP_API_KEY</td><td>Credencial de la memoria en Zep Cloud</td></tr></table><p>Hay además variables opcionales de aceleración con un segundo modelo. <b>Las claves son secretos</b>: no van en un dossier, en un informe ni en un repositorio compartido. Si algo de tu semilla es sensible, recuerda que sale a un servicio externo: roles, no nombres de personas.</p>' },
    { h: 'Por qué cada corrida consume API',
      html: '<p>Cada agente, en cada ronda, hace al menos una llamada al modelo, y lo que envía crece con la memoria acumulada. El propio archivo de ejemplo avisa de que el consumo de tokens es sustancial y recomienda probar primero con menos de 40 iteraciones.</p><p>Con Claude Code la lógica es parecida en otra escala: cada actor es un subagente y cada ronda lanza a todos. Por eso este curso trabaja con <b>pocos actores y pocas rondas</b>, y en el área 7 verás cómo cuidar la cuota de tu plan.</p>' },
    { h: 'Método para estimar el costo, sin precios',
      html: '<p>No necesitas una tarifa para dimensionar una corrida: necesitas contar.</p><ol><li><b>Llamadas</b> = agentes x rondas (x pasos por ronda, si hay más de uno).</li><li><b>Tamaño</b> de cada llamada: lo que lee (perfil, dossier, memoria) más lo que escribe.</li><li><b>Volumen</b> = llamadas x tamaño; compáralo con el consumo de una prueba corta.</li><li>Haz una <b>prueba mínima</b> (pocos agentes, pocas iteraciones), mide el consumo real en el panel de tu proveedor y escala desde ahí.</li></ol><p>Ejemplo: 5 actores x 4 rondas son 20 llamadas base; 200 agentes x 40 iteraciones son 8000. La diferencia de escala es lo que hay que tener presente. La tarifa vigente la consultas tú, en tu proveedor.</p>' }
  ],
  keypoints: [
    'MiroFish pide Node 18+, Python 3.11 a 3.12, uv, una clave de modelo y una cuenta de Zep Cloud.',
    'El flujo: completar .env, npm run setup:all y npm run dev; interfaz en el 3000, API en el 5001.',
    'Las claves son secretos y lo que va en la semilla sale a un servicio externo.',
    'Cada agente en cada ronda consume llamadas; el consumo crece con la memoria.',
    'Se estima contando llamadas y tamaño, y midiendo una prueba mínima.',
    'Requisitos y comandos: verificar en la documentación vigente antes de instalar.'
  ],
  flashcards: [
    { q: '¿Qué versiones de Node y Python pide el README?', a: 'Node 18 o superior y Python entre 3.11 y 3.12 (verificar en la documentación vigente).' },
    { q: '¿Qué claves exige MiroFish?', a: 'La de un modelo de lenguaje compatible con OpenAI y la de Zep Cloud.' },
    { q: '¿Qué comando instala todo y cuál arranca?', a: 'npm run setup:all instala; npm run dev arranca backend y frontend.' },
    { q: '¿Cómo se estima el consumo sin conocer tarifas?', a: 'Contando llamadas (agentes x rondas), su tamaño y midiendo una prueba mínima.' },
    { q: '¿Qué recomienda el .env de ejemplo al probar?', a: 'Empezar con menos de 40 iteraciones porque el consumo de tokens es sustancial.' }
  ],
  quiz: [
    { q: '¿Cuál es el primer paso sensato antes de una corrida grande?', opts: ['Lanzar 40 iteraciones con todos los agentes', 'Una prueba mínima para medir el consumo', 'Poner la clave en el dossier'], correct: 1, why: 'La prueba mínima te da una medida real desde la cual escalar.' },
    { q: 'Los puertos por defecto que indica el README son:', opts: ['3000 para la interfaz y 5001 para la API', '9050 para todo', '8080 para la interfaz y 3306 para la API'], correct: 0, why: 'Interfaz en 3000 y API en 5001; verificar en la documentación vigente.' },
    { q: 'Si el texto de tu semilla va a una API externa, conviene:', opts: ['Incluir nombres y documentos personales', 'Usar roles y omitir datos personales', 'Enviar la clave junto al texto'], correct: 1, why: 'Lo que sale a un servicio externo debe llevar roles, nunca datos personales ni credenciales.' }
  ]
});
