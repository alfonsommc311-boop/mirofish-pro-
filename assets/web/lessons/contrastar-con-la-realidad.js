Lesson.start({
  id: 'contrastar-con-la-realidad', area: 'Rigor, ética y límites', areaIcon: '🛡️', icon: '🧪',
  title: 'Contrastar con la realidad',
  subtitle: 'Anotar qué esperaba cada actor y compararlo cuando ocurra: así aprendes cuánto confiar en tus ensayos.',
  norma: 'El contraste usa hechos reales documentados; nunca se ajusta el registro a lo ocurrido (verificar la norma vigente y el expediente técnico aprobado).',
  intro: '<p>Si nunca comparas lo que el ensayo mostró con lo que pasó, no sabes si tus simulaciones sirven o solo suenan bien. Contrastar no convierte al ensayo en predicción: te enseña <b>en qué tipo de preguntas te ha acertado el ojo</b> y en cuáles no. Es el hábito que separa a quien usa la técnica de quien se deja llevar por ella. La calibración de juicios probabilísticos en sí está en Decisiones PRO y Jev PRO; aquí se muestra cómo alimentarla.</p>',
  sections: [
    { h: 'Qué registrar y cuándo',
      html: '<p>Antes de que ocurra nada real, guarda la corrida con la fecha y una lista corta de <b>expectativas fechables</b>:</p><table><tr><th>Actor (rol)</th><th>Qué esperaba o decidió</th><th>Fecha límite de contraste</th></tr><tr><td>Contratista</td><td>Presentar la solicitud antes de fin de mes</td><td>Fin de mes</td></tr><tr><td>Entidad</td><td>Responder por escrito, sin aprobar en firme</td><td>Según plazo verificado</td></tr><tr><td>Supervisión</td><td>Mantener su postura y pedir ensayos</td><td>Próxima valorización</td></tr></table><p>Anota también las probabilidades declaradas por los actores como <b>juicios</b>, no como frecuencias.</p>' },
    { h: 'Cómo comparar',
      html: '<ol><li>Cuando ocurra el hecho, anótalo con su documento real (carta, cuaderno, acta).</li><li>Marca cada expectativa: <b>coincidió</b>, <b>coincidió a medias</b> o <b>no coincidió</b>.</li><li>Escribe una causa probable en una línea: perfil pobre, información que faltaba, hecho nuevo, azar.</li></ol><p>No corrijas el registro original para que «acertara». El registro es una foto de lo que se creía ese día.</p>' },
    { h: 'Qué puedes concluir y qué no',
      html: '<ul><li>Con pocos casos no hay estadística: son <b>indicios</b> sobre tus perfiles y tus consignas.</li><li>Un acierto puede ser suerte; un fallo puede ser un hecho nuevo, no un error del método.</li><li>Sí puedes ver patrones: «mis contratistas simulados siempre son más agresivos que los reales» o «subestimo la lentitud de la Entidad».</li></ul><p>Esos patrones son los que ajustas en tu skill y en tus perfiles.</p>' },
    { h: 'Calibrar tus probabilidades',
      html: '<p>Si tus actores dieron probabilidades, y tú tomas nota de cuántas veces «alta» se cumplió, empiezas a calibrar <b>tu lectura</b>, no la del modelo. Para el método de calibración con expertos y juicios probabilísticos, consulta Decisiones PRO y Jev PRO; este curso solo te da los datos de entrada. Recuerda: nada de esto permite prometer resultados de valorizaciones, adicionales, ampliaciones, arbitrajes ni de una acción de control. Normas por su nombre: verificar la norma vigente y el expediente técnico aprobado.</p>' }
  ],
  keypoints: [
    'Contrastar te enseña cuánto confiar en tus ensayos; no los vuelve predicciones.',
    'Registra expectativas fechables antes de que ocurra algo real.',
    'Marca cada una como coincidió, coincidió a medias o no coincidió, con su causa probable.',
    'Nunca corrijas el registro original para que parezca que acertó.',
    'Pocos casos son indicios, no estadística; los patrones se ajustan en perfiles y skill.'
  ],
  flashcards: [
    { q: '¿Para qué contrastar?', a: 'Para saber en qué preguntas tus ensayos ayudan y en cuáles no.' },
    { q: '¿Qué se registra antes?', a: 'Expectativas fechables de cada actor y sus probabilidades como juicios.' },
    { q: '¿Cómo se marca cada expectativa?', a: 'Coincidió, coincidió a medias o no coincidió, con una causa probable.' },
    { q: '¿Puedo corregir el registro después?', a: 'No: es una foto de lo que se creía ese día.' },
    { q: '¿Dónde se aprende calibración?', a: 'En Decisiones PRO y Jev PRO.' }
  ],
  quiz: [
    { q: 'Tras tres casos, dos coincidieron. ¿Qué concluyes?', opts: ['El método acierta 66 %', 'Tengo indicios sobre mis perfiles, no estadística', 'Puedo prometer resultados'], correct: 1, why: 'Con tan pocos casos no hay frecuencia fiable.' },
    { q: 'Un actor esperaba algo que no ocurrió porque apareció un hecho nuevo. ¿Qué haces?', opts: ['Borro la expectativa', 'La marco no coincidió y anoto la causa', 'Cambio el registro'], correct: 1, why: 'Se conserva el registro y se explica la causa.' },
    { q: '¿Cuándo se registran las expectativas?', opts: ['Después de que ocurra', 'Antes de que ocurra algo real', 'Da igual'], correct: 1, why: 'Registrar después invita a ajustar la memoria.' }
  ]
});
