Lesson.start({
  id: 'preguntar-al-mundo', area: 'El informe y la conversación con el mundo', areaIcon: '📝', icon: '🌐',
  title: 'Preguntar al mundo',
  subtitle: 'Preguntas al orquestador: por qué se cayó el acuerdo, qué habría cambiado.',
  norma: 'Las respuestas explican el ensayo, no el caso real (verificar la norma vigente y el expediente técnico aprobado).',
  intro: '<p>Entrevistar a un actor te da su silla. Preguntar al mundo te da la <b>vista de dios</b>: la sesión principal, que leyó todas las respuestas y las resoluciones, responde sobre lo que pasó y por qué. Es el equivalente a hablar con el agente del informe de MiroFish (verificar en la documentación vigente). Bien usada, aclara dudas del informe; mal usada, le hace decir al ensayo lo que no contiene.</p>',
  sections: [
    { h: 'Qué puede responder el mundo',
      html: '<p>El orquestador puede contestar con lo que <b>está en los archivos</b>: quién supo qué y cuándo, qué decidió cada actor en cada ronda, dónde cambió el rumbo. Es su ventaja: ve todo.</p><ul><li>«¿Por qué se cayó el acuerdo en la ronda 3?»</li><li>«¿Quién sabía del retraso de los ensayos antes que la Entidad?»</li><li>«¿En qué ronda dejó de ser reversible la situación?»</li></ul><p>Todas se responden citando ronda y archivo; si no hay base, la respuesta correcta es «el ensayo no lo muestra».</p>' },
    { h: 'Qué no puede responder',
      html: '<ul><li><b>Lo que la simulación no simuló.</b> Si no había un actor «prensa», no hay respuesta sobre la prensa.</li><li><b>El futuro real.</b> «¿Qué hará la Entidad?» pide una predicción; solo puede decir qué hizo el actor simulado.</li><li><b>Cifras nuevas.</b> Plazos y costos se calculan con cronograma y curva S, no con la conversación.</li></ul>' },
    { h: 'Ejemplos de preguntas y de mala respuesta',
      html: '<table><tr><th>Pregunta</th><th>Buena respuesta</th><th>Mala respuesta</th></tr><tr><td>¿Por qué se cayó el acuerdo?</td><td>«En la ronda 3, la Entidad recibió la carta un día después del plazo que corría (ver resolución 3); el contratista lo leyó como rechazo.»</td><td>«Porque el contratista es intransigente.»</td></tr><tr><td>¿Qué habría cambiado si la carta llegaba a tiempo?</td><td>«El ensayo no lo probó; se puede ensayar en una rama.»</td><td>«El acuerdo habría salido.»</td></tr></table><p>La segunda pregunta es contrafactual: solo una <b>rama</b> (siguiente lección) la responde con algo más que una opinión.</p>' },
    { h: 'Cómo preguntar bien',
      html: '<ol><li>Pide siempre <b>ronda y fuente</b> en la respuesta.</li><li>Separa <i>qué pasó</i> de <i>por qué creo que pasó</i>; lo segundo es interpretación.</li><li>Distingue lo del ensayo de lo real: usa «en esta corrida».</li><li>Si la respuesta te convence demasiado, pídele el argumento contrario.</li></ol><p>Desde tu silla de supervisor: es lo mismo que pedirle a un asistente que sustente cada afirmación con el asiento del cuaderno.</p>' },
    { h: 'Qué haces con las respuestas',
      html: '<p>Lo útil se incorpora al informe (una nota en el anexo o un ajuste a un hallazgo). Lo que quedó como hipótesis se marca como tal. Si la pregunta abre una duda que solo se resuelve con otra corrida o rama, anótala para la siguiente lección y para contrastar con la realidad.</p>' }
  ],
  keypoints: [
    'Preguntar al mundo es hablar con el orquestador, que vio todos los archivos.',
    'Sus respuestas deben citar ronda y fuente; si no hay base, dice que el ensayo no lo muestra.',
    'No responde sobre lo no simulado, el futuro real ni cifras nuevas de plazo o costo.',
    'Las preguntas contrafactuales se responden con una rama, no con una opinión.',
    'Separa lo que pasó de la interpretación de por qué pasó.'
  ],
  flashcards: [
    { q: '¿Qué ventaja tiene el orquestador al responder?', a: 'Vio todos los archivos: sabe quién supo qué y cuándo.' },
    { q: '¿Qué debe citar toda respuesta?', a: 'La ronda y el archivo fuente.' },
    { q: '¿Qué hace si el ensayo no muestra algo?', a: 'Dice que el ensayo no lo muestra.' },
    { q: '¿Cómo se responde «qué habría cambiado si…»?', a: 'Con una rama que cambie ese hecho y se compare con la corrida base.' },
    { q: '¿Qué distinción conviene siempre?', a: 'Entre lo que pasó y la interpretación de por qué pasó.' }
  ],
  quiz: [
    { q: '¿Qué pregunta no puede responder bien el mundo simulado?', opts: ['¿En qué ronda cambió el rumbo?', '¿Qué hará realmente la Entidad el próximo mes?', '¿Quién supo del retraso antes que la Entidad?'], correct: 1, why: 'Pide una predicción del caso real; solo puede hablar de lo simulado.' },
    { q: 'Una buena respuesta del orquestador incluye:', opts: ['Solo su opinión', 'Ronda, fuente y la marca «en esta corrida»', 'Una cifra de plazo nueva'], correct: 1, why: 'Permite verificar y evita confundir ensayo con realidad.' },
    { q: 'Para saber qué habría pasado con otra decisión:', opts: ['Basta preguntarle al mundo', 'Se ensaya una rama', 'Se ignora'], correct: 1, why: 'Sin cambiar el hecho y volver a correr, solo hay especulación.' }
  ]
});
