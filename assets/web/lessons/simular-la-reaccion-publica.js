Lesson.start({
  id: 'simular-la-reaccion-publica', area: 'Más allá de la obra', areaIcon: '🧭', icon: '📢',
  title: 'Simular la reacción pública',
  subtitle: 'La capa de redes y vecinos: cuándo basta un actor colectivo y cuándo conviene MiroFish original con cientos de agentes.',
  norma: 'Los datos de MiroFish se toman de su documentación; verificar en la documentación vigente. Nada de datos personales de vecinos reales.',
  intro: '<p>Hay preguntas donde lo que importa no es qué hace un actor sino <b>cómo se propaga una opinión</b>: cómo reaccionará el barrio al cierre de una vía, qué narrativa ganará en redes, quién amplificará un rumor. Ahí el enfoque de pocos actores ricos empieza a quedarse corto. Esta lección te da un criterio para elegir entre el <b>actor colectivo</b> de Claude Code y el motor original, que simula muchos agentes interactuando en una plataforma social.</p>',
  sections: [
    { h: 'Dos escalas del mismo problema',
      html: '<table><tr><th></th><th>Actor colectivo (Claude Code)</th><th>MiroFish original</th></tr><tr><td>Qué modela</td><td>Un agente que encarna a vecinos, prensa o redes</td><td>Muchos agentes que interactúan y se influyen</td></tr><tr><td>Fortaleza</td><td>Información privada y decisiones concretas</td><td>Dinámica de propagación y emergencia</td></tr><tr><td>Debilidad</td><td>No ve la propagación entre personas</td><td>Requiere instalación, claves y consumo de API</td></tr></table><p>El proyecto se presenta como un motor multiagente con simulaciones en plataformas sociales; los detalles técnicos: verificar en la documentación vigente.</p>' },
    { h: 'Cuándo basta un actor colectivo',
      html: '<p>Si tu pregunta es <i>«¿qué hará el frente vecinal si se cierra la vía el lunes?»</i>, un solo actor colectivo con voces, clima y acciones posibles suele bastar. Le das un perfil con quién lo integra, qué teme, qué sabe (por ejemplo, que nadie les avisó a tiempo) y qué puede hacer (reunión, comunicado, bloqueo). La respuesta es una <b>acción colectiva razonada</b>, no una estadística de opinión.</p>' },
    { h: 'Cuándo conviene el motor original',
      html: '<ul><li>Cuando la pregunta es de <b>propagación</b>: cómo un rumor se extiende y qué cuentas lo amplifican.</li><li>Cuando importa la <b>diversidad de voces</b> y la interacción entre ellas, no una sola postura.</li><li>Cuando aceptas el trabajo de instalación y el consumo de API que exige.</li></ul><p>Incluso entonces el resultado es un <b>ensayo de narrativas plausibles</b>, sin garantía de fidelidad: el propio repositorio no da validación empírica que asegure precisión (no verificado en la investigación de esta app).</p>' },
    { h: 'Un ejemplo ficticio',
      html: '<p>Caso: la Municipalidad Distrital de Villa Esperanza anuncia el cierre parcial de una vía. Pregunta de ensayo: <i>«¿qué narrativa dominará en las 48 horas siguientes y qué gesto de la Entidad la cambiaría?»</i></p><p>Con un actor colectivo obtienes: reunión del frente, comunicado y riesgo de bloqueo. Con el motor original explorarías, además, quién amplifica el comunicado. En ambos casos lo que te llevas es una hipótesis para <b>preparar tu comunicación y tu plan de contingencia</b>, no una previsión de cuántos vecinos saldrán.</p>' },
    { h: 'Ética y límites',
      html: '<p>No uses nombres ni datos reales de vecinos, cuentas o periodistas: usa roles. No generes mensajes «que parezcan» reales para difundirlos; un mensaje simulado es material de análisis, no de campaña. Y no afirmes que la simulación anticipa la opinión pública real: la opinión depende de hechos, canales y azar que ninguna corrida reproduce. Las normas que rodean el caso se citan por su nombre; verificar la norma vigente y el expediente técnico aprobado.</p>' }
  ],
  keypoints: [
    'La pregunta decide la escala: una acción colectiva o la propagación de una opinión.',
    'Un actor colectivo basta para «qué hará el frente vecinal si…».',
    'El motor original sirve cuando importa la interacción entre muchas voces y aceptas su costo operativo.',
    'En ambos casos el producto es una hipótesis para preparar tu comunicación, no una previsión de opinión.',
    'Roles, no personas; mensajes simulados solo para análisis, nunca para difundir.'
  ],
  flashcards: [
    { q: '¿Cuándo basta un actor colectivo?', a: 'Cuando la pregunta es qué hará un grupo (frente vecinal, prensa) ante un hecho concreto.' },
    { q: '¿Cuándo conviene el motor original?', a: 'Cuando importa la propagación y la interacción entre muchas voces.' },
    { q: '¿Qué te llevas de una simulación de opinión?', a: 'Una hipótesis de narrativa para preparar tu comunicación y tu contingencia.' },
    { q: '¿Se pueden usar cuentas o nombres reales?', a: 'No: se usan roles; nada de datos personales.' }
  ],
  quiz: [
    { q: 'Quieres saber si el rumor de un sobrecosto se extenderá y quién lo amplifica. ¿Qué escala?', opts: ['Un actor colectivo basta siempre', 'El motor original puede ayudar a explorar propagación', 'No se puede ensayar nada'], correct: 1, why: 'La propagación entre muchas voces es donde el enfoque de enjambre aporta más, con sus costos y límites.' },
    { q: 'El resultado de una simulación de reacción pública es:', opts: ['La opinión real que habrá', 'Un ensayo de narrativas plausibles', 'Una encuesta'], correct: 1, why: 'Es una hipótesis de trabajo, no una medición de la opinión.' },
    { q: 'Un mensaje generado por un actor simulado se debe:', opts: ['Difundir si suena real', 'Usar solo como material de análisis y marcar como simulado', 'Enviar a la prensa'], correct: 1, why: 'Nada fabricado: lo simulado no sale como real.' }
  ]
});
