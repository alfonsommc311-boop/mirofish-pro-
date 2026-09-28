Lesson.start({
  id: 'simular-una-negociacion', area: 'Más allá de la obra', areaIcon: '🧭', icon: '🤝',
  title: 'Simular una negociación',
  subtitle: 'Tu alternativa frente a la del otro, ensayada antes de sentarte a la mesa.',
  norma: 'Ensayar la mesa no es negociarla: el ensayo revela flancos, no garantiza acuerdos (verificar la norma vigente y el expediente técnico aprobado).',
  intro: '<p>Antes de una reunión difícil con el contratista, la Entidad o un proveedor, casi siempre ensayas mentalmente lo que dirás. La simulación de actores convierte ese ensayo en algo más honesto: el otro lado <b>no sabe lo que tú sabes</b> y responde con su propia lógica. Esta lección aplica el método a una negociación; las técnicas para negociar bien (intereses, MAAN, ZOPA) están en <b>Negocia PRO</b> y aquí solo se enlazan.</p>',
  sections: [
    { h: 'Qué se ensaya y qué no',
      html: '<p>Lo que se ensaya es la <b>reacción de la contraparte a tu movimiento</b>: cómo recibirá tu propuesta, qué contraoferta armará, qué información retendrá y qué hará si te levantas de la mesa. No se ensaya el resultado final ni «quién gana».</p><ul><li>Sí: «si abro con esta propuesta, ¿qué flanco mío verá primero?».</li><li>No: «¿aceptarán el 70 %?». Ese número sería un juicio del agente, no una frecuencia.</li></ul>' },
    { h: 'Los actores de una mesa',
      html: '<p>Dos actores no bastan. La mayoría de las negociaciones de obra tienen una parte que habla en la mesa y otra que decide fuera de ella.</p><table><tr><th>Silla</th><th>Qué sabe que el otro no</th></tr><tr><td>Tú (orquestador que también juega tu parte)</td><td>Tu alternativa real y el límite de lo que puedes ceder</td></tr><tr><td>Contraparte en mesa</td><td>Su presión de caja y su mejor alternativa</td></tr><tr><td>Quien decide fuera de la mesa</td><td>Qué firmaría y qué no, y cuánto riesgo tolera</td></tr></table><p>Si tú también juegas tu parte como agente, dale un perfil como a los demás; si no, quedas fuera del ensayo y solo ves lo que hace el otro.</p>' },
    { h: 'La decisión central de la ronda',
      html: '<p>La consigna debe pedir una decisión concreta y fechada, no una opinión. Ejemplo de decisión central para la contraparte:</p><p><i>«Recibes esta propuesta el día 10. ¿Qué respondes por escrito el día 14 y qué no dices?»</i></p><p>Añade una regla condicional: <i>«si la propuesta te parece por debajo de tu alternativa, indica qué harías en lugar de aceptar»</i>. Ahí aparece la alternativa oculta, que es lo más valioso del ensayo.</p>' },
    { h: 'Qué leer al final',
      html: '<p>Busca tres cosas, en este orden:</p><ol><li>La <b>brecha de percepción</b>: lo que tú crees que el otro valora frente a lo que el otro dice valorar.</li><li>El <b>punto de quiebre</b>: la frase o el gesto a partir del cual la mesa se enfría.</li><li>Tu <b>flanco</b>: el dato tuyo que la contraparte usó o usaría.</li></ol><p>Con eso ajustas tu apertura y tu orden de temas. Luego, en la mesa real, negocias tú, con las técnicas de Negocia PRO.</p>' },
    { h: 'Límites y cuidado',
      html: '<p>Un agente cooperativo por defecto tiende a ceder pronto y a razonar de más: revisa que la contraparte no sea «demasiado razonable». Ninguna simulación promete el resultado de una valorización, un adicional, una ampliación de plazo o un arbitraje. Las normas se nombran, no se numeran: verificar la norma vigente y el expediente técnico aprobado. Y si la contraparte necesita un documento o un dato que no existe, se marca como <b>resultado simulado</b>; nunca se lo inventa.</p>' }
  ],
  keypoints: [
    'Se ensaya la reacción del otro a tu movimiento, no el resultado final de la negociación.',
    'Hay al menos tres sillas: tú, la contraparte en mesa y quien decide fuera de ella.',
    'La regla condicional «si es menor que tu alternativa, qué haces» saca a la luz la alternativa oculta.',
    'Lo más útil: brecha de percepción, punto de quiebre y tu propio flanco.',
    'Las técnicas de negociación están en Negocia PRO; aquí solo se ensaya.'
  ],
  flashcards: [
    { q: '¿Qué se ensaya en una negociación simulada?', a: 'La reacción de la contraparte a tu movimiento, con lo que ella sabe y tú no.' },
    { q: '¿Por qué hace falta quien decide fuera de la mesa?', a: 'Porque quien habla en la mesa a veces no puede firmar; el ensayo muestra dónde se traba.' },
    { q: '¿Qué regla condicional destapa la alternativa oculta?', a: '«Si la propuesta está por debajo de tu alternativa, qué haces en lugar de aceptar».' },
    { q: '¿Qué riesgo tiene un actor cooperativo por defecto?', a: 'Cede demasiado pronto y el ensayo no muestra la resistencia real.' },
    { q: '¿Dónde se aprenden las técnicas para negociar?', a: 'En Negocia PRO; esta app solo ensaya.' }
  ],
  quiz: [
    { q: '¿Qué decisión central es mejor para la contraparte?', opts: ['¿Qué opinas de la propuesta?', 'Qué respondes por escrito el día 14 y qué no dices', '¿Aceptarías un acuerdo justo?'], correct: 1, why: 'Una decisión concreta y fechada produce respuestas comparables y revela qué se calla.' },
    { q: 'Una probabilidad de aceptación que da el agente es:', opts: ['Una frecuencia observada', 'Un juicio declarado del agente', 'Una garantía'], correct: 1, why: 'Los números de los agentes son juicios, no frecuencias ni promesas.' },
    { q: 'Si la contraparte simulada necesita un ensayo de laboratorio que no existe:', opts: ['Que lo invente', 'Se marca como resultado simulado', 'Se cita como real'], correct: 1, why: 'Nada fabricado: los resultados de terceros se marcan siempre como simulados.' }
  ]
});
