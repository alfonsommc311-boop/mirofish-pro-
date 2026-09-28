Lesson.start({
  id: 'el-orquestador-vista-de-dios', area: 'Claude Code como motor de simulación', areaIcon: '🤖', icon: '👁️',
  title: 'El orquestador: vista de dios',
  subtitle: 'La sesión principal ve todo, decide qué pasó y reparte quién se entera de qué.',
  norma: 'El orquestador responde por el informe y por la resolución; los actores solo responden por su decisión (verificar en la documentación vigente).',
  intro: '<p>En este método tú, en la sesión principal, ocupas la silla que en MiroFish ocupa el sistema: <b>ves todo</b>. Lees las respuestas de todos los actores, decides qué ocurrió en el mundo, lo fechas y marcas quién lo conoce. Los actores nunca hablan entre sí: <b>hablan a través de ti</b>. Esa es la ventaja (control total) y también la responsabilidad (si resuelves mal, toda la ronda siguiente sale torcida).</p>',
  sections: [
    { h: 'Los tres trabajos del orquestador',
      html: '<ol><li><b>Armar el mundo:</b> dossier, perfiles y consignas antes de la primera ronda.</li><li><b>Resolver entre rondas:</b> leer las respuestas, decidir qué pasó, cuándo y quién lo ve.</li><li><b>Interpretar y reportar:</b> convertir la corrida en un informe con sus límites.</li></ol><p>Los actores solo hacen una cosa: decidir con lo que saben. Todo lo demás es tuyo.</p>' },
    { h: 'Por qué se llama vista de dios',
      html: '<p>Porque tienes información que ningún actor tiene: la respuesta íntegra del contratista, la de la Entidad y la de la supervisión, y sus indicadores privados. Puedes ver, por ejemplo, que la Entidad cree tener un riesgo bajo mientras el contratista cree que es alto. Esa <b>brecha</b> es un hallazgo que solo el orquestador puede ver, porque ningún actor la ve.</p><p>Pero esa vista no se le presta a los actores: lo que tú sabes no pasa a la ronda siguiente salvo que decidas que un hecho es <i>visible</i> para alguien.</p>' },
    { h: 'La resolución: un ejemplo en cinco líneas',
      html: '<p>Tras una ronda, el orquestador escribe hechos fechados con etiqueta de visibilidad. Ejemplo ficticio:</p><ul><li>12 de mayo [Contratista, Supervisión] El contratista envía una carta pidiendo pronunciamiento sobre los ensayos pendientes.</li><li>13 de mayo [Supervisión] La supervisión anota en su informe interno que faltan resultados.</li><li>14 de mayo [Contratista, Supervisión, Entidad] La supervisión responde por carta con copia a la Entidad.</li></ul><p>La lista de etiquetas define lo que sabrá cada actor en la ronda 2. Cómo se hace, paso a paso, es el área 6; aquí lo esencial es que <b>la visibilidad la decides tú</b>.</p>' },
    { h: 'Cuando un tercero no es actor',
      html: '<p>Si el caso necesita un laboratorio, un asesor jurídico o el clima, no lanzas un subagente para cada uno: <b>decides tú</b> un resultado plausible y lo marcas siempre como <b>resultado simulado</b>. Ningún actor inventa documentos ni resultados; si lo hiciera, lo corriges. Las normas se nombran sin número de artículo; verificar la norma vigente y el expediente técnico aprobado.</p>' },
    { h: 'La silla del actor y tus sesgos',
      html: '<p>Desde la silla del actor, el orquestador es invisible: solo llegan hechos y una consigna. Ese poder tiene un riesgo: tus expectativas pueden torcer la resolución (por ejemplo, hacer que el contratista «pierda» porque tú crees que debe perder). Regla práctica: decide como decidiría quien tiene la competencia, no como tú quisieras. Y el informe debe declarar que la resolución fue tuya.</p>' }
  ],
  keypoints: [
    'El orquestador es la sesión principal: ve todo y los actores hablan a través de él.',
    'Sus tres trabajos son armar el mundo, resolver entre rondas e interpretar el informe.',
    'La brecha entre lo que cree un actor y lo que creen los demás solo la ve el orquestador.',
    'La visibilidad de cada hecho es una decisión explícita, con fecha y etiqueta.',
    'Los terceros (laboratorio, asesoría) los decide el orquestador y se marcan como resultado simulado.',
    'Tu propio sesgo puede torcer la resolución: decide como quien tiene la competencia.'
  ],
  flashcards: [
    { q: '¿Qué significa vista de dios?', a: 'Que el orquestador ve las respuestas y los indicadores de todos los actores; ningún actor ve eso.' },
    { q: '¿Cuáles son los tres trabajos del orquestador?', a: 'Armar el mundo, resolver entre rondas e interpretar y reportar.' },
    { q: '¿Cómo se registra un hecho en la resolución?', a: 'Con fecha, etiqueta de quién lo ve y una descripción breve.' },
    { q: '¿Qué se hace con un laboratorio o asesor que el caso necesita?', a: 'El orquestador decide un resultado plausible y lo marca como resultado simulado.' },
    { q: '¿Qué riesgo trae la vista de dios?', a: 'Que tus expectativas tuerzan la resolución.' }
  ],
  quiz: [
    { q: '¿Quién decide qué hecho conoce cada actor en la ronda siguiente?', opts: ['Cada actor por su cuenta', 'El orquestador, por etiqueta de visibilidad', 'El modelo al azar'], correct: 1, why: 'La visibilidad es una decisión del orquestador y define el contexto de cada actor.' },
    { q: 'Un ensayo de laboratorio que el caso necesita debe:', opts: ['Inventarlo el actor con cifras', 'Decidirlo el orquestador y marcarlo como resultado simulado', 'Omitirse siempre'], correct: 1, why: 'Ningún actor fabrica documentos; los resultados de terceros se marcan como simulados.' },
    { q: '¿Qué hallazgo solo puede ver el orquestador?', opts: ['Una brecha entre lo que cada actor cree de su riesgo', 'El perfil de un actor', 'El dossier común'], correct: 0, why: 'Solo él ve las respuestas privadas de todos a la vez.' }
  ]
});
