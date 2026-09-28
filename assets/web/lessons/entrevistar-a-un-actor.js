Lesson.start({
  id: 'entrevistar-a-un-actor', area: 'El informe y la conversación con el mundo', areaIcon: '📝', icon: '🎤',
  title: 'Entrevistar a un actor',
  subtitle: 'Preguntarle en personaje, solo con lo que conoció durante la simulación.',
  norma: 'La entrevista es un ensayo interno: sus respuestas no son declaraciones de nadie (verificar la norma vigente y el expediente técnico aprobado).',
  intro: '<p>MiroFish original incluye una etapa de interacción profunda: conversar con los agentes simulados y con el agente del informe (verificar en la documentación vigente). En tu réplica con Claude Code, la entrevista sirve para lo que el informe no responde: <b>¿por qué el contratista envió esa carta?, ¿qué esperaba de la Entidad?</b> La clave es que el actor conteste desde su silla, solo con lo que supo, y que tú no le hagas decir lo que quieres oír.</p>',
  sections: [
    { h: 'Para qué sirve y para qué no',
      html: '<p>Sirve para <b>entender el razonamiento</b> detrás de una decisión: qué temía, qué creía saber, qué alternativa descartó. No sirve para obtener hechos nuevos ni para probar que el actor «confesó» algo: sus respuestas son texto generado en personaje, no testimonio.</p><p>Es útil cuando una decisión te sorprendió. Si un actor hizo lo inesperado, el porqué suele revelar una brecha de percepción que el informe pasó por alto.</p>' },
    { h: 'La regla: solo lo que conoció',
      html: '<p>El actor entrevistado recibe <b>su perfil, sus propias respuestas y lo que su contexto le hizo visible</b>, nada más. Si le pasas la resolución completa, le regalas la vista de dios y dejará de responder desde su silla.</p><ul><li>Reutiliza el mismo aislamiento de las rondas: rutas permitidas y carpetas prohibidas.</li><li>Fija el marco: la entrevista ocurre <i>después</i> de la ronda que quieres explorar, con el conocimiento que tenía entonces.</li><li>Si pregunta por algo que no supo, debe decir que no lo sabía.</li></ul>' },
    { h: 'Ejemplo de consigna de entrevista',
      html: '<p>Caso ficticio, entrevista al contratista (Consorcio Andino):</p><p><i>«Eres el representante del contratista. Responde solo con lo que tu contexto de la ronda 3 te mostró. No leas otras carpetas. Se te hará una pregunta; contesta en menos de 150 palabras, en primera persona. Si algo no lo sabías en ese momento, dilo. No cites documentos ni normas que no estén en tu contexto.»</i></p><p>Pregunta: <i>«¿Por qué esperaste al día 12 para responder?»</i></p><p>Nota: una pregunta abierta sobre el motivo funciona mejor que una cerrada («¿fue por estrategia?»).</p>' },
    { h: 'Preguntas que rinden y preguntas que engañan',
      html: '<table><tr><th>Rinde</th><th>Engaña</th></tr><tr><td>«¿Qué temías en ese momento?»</td><td>«¿Admites que buscabas demorar?» (induce)</td></tr><tr><td>«¿Qué creías que haría la Entidad?»</td><td>«¿Sabías lo del ensayo?» si nunca se le informó</td></tr><tr><td>«¿Qué otra opción evaluaste?»</td><td>«¿Qué decidirá la Entidad?» (pide predicción de un tercero)</td></tr></table><p>Vigila las respuestas complacientes: un modelo tiende a darte la razón. Si notas que el actor cambia de postura solo porque preguntaste, repite la pregunta neutral.</p>' },
    { h: 'Qué haces con lo que dijo',
      html: '<p>Las respuestas de la entrevista <b>no reemplazan</b> lo que hizo el actor en la ronda: son una explicación posterior. En el informe, se citan como «explicación del actor simulado» y se guardan en el anexo. Si la explicación contradice lo que hizo, el hallazgo es esa contradicción. Para técnicas reales de entrevista y negociación con personas, ver Negocia PRO.</p>' }
  ],
  keypoints: [
    'La entrevista explica el porqué de una decisión; no aporta hechos nuevos.',
    'El actor responde solo con su perfil, sus respuestas y lo que su contexto le mostró.',
    'Se fija el momento de la entrevista para que no use conocimiento posterior.',
    'Prefiere preguntas abiertas sobre motivos y evita las inductoras.',
    'Vigila la complacencia y cita las respuestas como explicación del actor simulado.'
  ],
  flashcards: [
    { q: '¿Para qué sirve entrevistar a un actor?', a: 'Para entender el razonamiento detrás de una decisión sorprendente.' },
    { q: '¿Qué recibe el actor entrevistado?', a: 'Su perfil, sus propias respuestas y lo que su contexto le hizo visible.' },
    { q: '¿Por qué no darle la resolución completa?', a: 'Le daría la vista de dios y dejaría de responder desde su silla.' },
    { q: '¿Qué pasa si pregunta por algo que no supo?', a: 'Debe decir que no lo sabía en ese momento.' }
  ],
  quiz: [
    { q: '¿Qué pregunta es más adecuada?', opts: ['¿Admites que querías demorar?', '¿Qué temías cuando decidiste responder ese día?', '¿Qué hará la Entidad mañana?'], correct: 1, why: 'Es abierta, apunta al motivo y no induce ni pide predecir a un tercero.' },
    { q: 'La respuesta de una entrevista es:', opts: ['Un testimonio real', 'Una explicación del actor simulado, en personaje', 'Un hecho nuevo del caso'], correct: 1, why: 'Es texto generado en personaje: ayuda a entender, no a probar.' },
    { q: 'Si el actor cambia de postura solo por tu pregunta, debes:', opts: ['Tomarlo como hallazgo', 'Repetir la pregunta de forma neutral', 'Ignorar el aislamiento'], correct: 1, why: 'Puede ser complacencia del modelo, no un cambio real de razonamiento.' }
  ]
});
