Lesson.start({
  id: 'formato-exacto-y-limite', area: 'La consigna de cada ronda', areaIcon: '✍️', icon: '📏',
  title: 'Formato exacto y límite',
  subtitle: 'Secciones fijas y tope de palabras: respuestas que se comparan y se resuelven sin releer todo.',
  norma: 'Un formato fijo no es burocracia: es lo que permite leer seis respuestas en minutos.',
  intro: '<p>Si cada actor responde como quiere, el orquestador pasa la mitad del tiempo buscando en cada texto dónde está la decisión. Con un formato fijo (mismas secciones, mismo orden, un tope de palabras) todas las respuestas se parecen por fuera y solo difieren por dentro, que es donde está el valor. Además, el tope obliga al actor a priorizar, como haría alguien real con un día para contestar.</p>',
  sections: [
    { h: 'Secciones fijas',
      html: '<p>Un formato mínimo que sirve para casi cualquier ronda:</p><ol><li><b>Decisión:</b> qué hace, con fecha y destinatario (una o dos frases).</li><li><b>Razón:</b> por qué, desde lo que él sabe (y solo eso).</li><li><b>Si pasa X:</b> sus reglas condicionales (la lección siguiente).</li><li><b>Lo que temo / lo que no sé:</b> su lectura de riesgo y sus vacíos.</li><li><b>Indicadores:</b> una línea fija con números (ver más adelante).</li></ol><p>Puedes añadir secciones según el caso, pero cambiarlas entre rondas rompe la comparación.</p>' },
    { h: 'El tope de palabras',
      html: '<p>Un máximo (por ejemplo, 250 a 350 palabras) cumple tres funciones:</p><ul><li>Prioriza: el actor pone lo que de verdad pesa.</li><li>Ahorra tiempo de lectura y consumo de la sesión.</li><li>Reduce el relleno complaciente: los modelos tienden a explicarlo todo y a suavizarlo todo.</li></ul><p>Si con el tope el actor se queda corto de argumento, sube el tope; si la respuesta llega siempre llena de vaguedades, bájalo. Es un mando que calibras con las primeras rondas.</p>' },
    { h: 'Ejemplo de bloque de formato (ficticio)',
      html: '<p><i>Formato (respeta este orden y no escribas fuera de él, máximo 300 palabras):<br>**Decisión:** ...<br>**Razón:** ...<br>**Si pasa X:** ... (máximo tres reglas)<br>**Lo que temo y lo que no sé:** ...<br>**Indicadores:** ... (una sola línea)</i></p><p>Actor que responde (resultado simulado, Consorcio Supervisor Horizonte, ronda 2):</p><p><i>**Decisión:** el día 12 comunico por escrito al contratista qué parte de la valorización difiero y qué documento levanta el diferimiento.<br>**Razón:** sin resultados de ensayos no puedo certificar esa partida.</i></p><p>Corta, verificable y colocable en la cronología.</p>' },
    { h: 'Qué se gana al resolver',
      html: '<p>Con un formato fijo, el orquestador puede copiar la línea «Decisión» de cada actor a la cronología, y comparar las líneas «Razón» y «Lo que no sé» para buscar brechas de percepción. Sin formato, hay que interpretar. Con formato, además, se detecta enseguida cuando un actor <b>se salió de personaje</b>: escribe fuera de las secciones o repite lo que dijo otro.</p>' },
    { h: 'Lo que el formato no arregla',
      html: '<p>Un formato correcto no vuelve creíble un perfil flojo, y un tope estricto puede hacer que el actor omita lo incómodo. Si ves respuestas demasiado limpias, revisa el perfil, no el formato (ver la lección sobre actores demasiado razonables). Y recuerda: el formato pide al actor decisiones y razones, nunca documentos redactados como si fueran reales.</p>' }
  ],
  keypoints: [
    'Un formato fijo hace comparables las respuestas de todos los actores y todas las rondas.',
    'Secciones mínimas: Decisión, Razón, Si pasa X, Lo que temo y lo que no sé, Indicadores.',
    'El tope de palabras obliga a priorizar y reduce el relleno complaciente.',
    'El tope es un mando que se calibra en las primeras rondas.',
    'Un formato roto es la primera señal de que el actor se salió de personaje.'
  ],
  flashcards: [
    { q: '¿Para qué sirve un formato fijo?', a: 'Para que las respuestas se comparen y se resuelvan sin releer todo.' },
    { q: '¿Qué secciones mínimas propone la lección?', a: 'Decisión, Razón, Si pasa X, Lo que temo y lo que no sé, e Indicadores.' },
    { q: '¿Por qué un tope de palabras?', a: 'Prioriza, ahorra lectura y consumo, y reduce el relleno complaciente.' },
    { q: '¿Qué indica un formato roto?', a: 'Que el actor pudo salirse de personaje o no siguió la consigna.' }
  ],
  quiz: [
    { q: 'Cambiar las secciones en cada ronda:', opts: ['Da más libertad y mejor calidad', 'Rompe la comparación entre rondas y actores', 'No tiene efecto'], correct: 1, why: 'La utilidad del formato está en que sea el mismo, para comparar.' },
    { q: 'Si todas las respuestas llegan llenas de vaguedades:', opts: ['Subes el tope siempre', 'Bajas el tope y revisas el perfil', 'Las das por buenas'], correct: 1, why: 'El tope obliga a priorizar; la vaguedad constante también apunta a un perfil complaciente.' },
    { q: '¿Qué le pides al actor en el formato?', opts: ['Decisiones y razones', 'Documentos redactados como reales', 'Resultados de ensayos'], correct: 0, why: 'Ningún actor fabrica documentos ni resultados de terceros; estos los marca el orquestador como simulados.' }
  ]
});
