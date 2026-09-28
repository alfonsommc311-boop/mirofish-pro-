Lesson.start({
  id: 'con-tus-informes', area: 'Combinar con tus otras herramientas', areaIcon: '🧰', icon: '📄',
  title: 'Con tus informes',
  subtitle: 'Qué pasa de la simulación a un informe real y qué no pasa nunca.',
  norma: 'Los informes y cartas oficiales se sustentan en documentos, cuaderno de obra y la norma vigente; el informe de la simulación es un documento interno (verificar la norma vigente y el expediente técnico aprobado).',
  intro: '<p>Al terminar una corrida tienes un informe de simulación. Tus informes de supervisión y tus cartas son otra cosa: llevan tu firma, se apoyan en hechos verificables y van a la Entidad o al contratista. La regla de esta lección es simple: <b>las ideas pueden pasar; los actores, sus voces y sus resultados simulados, no</b>. La redacción de informes y cartas está en <b>Informe Obra PRO</b> y <b>Redacción PRO</b>; aquí se traza la frontera.</p>',
  sections: [
    { h: 'Dos documentos, dos naturalezas',
      html: '<table><tr><th></th><th>Informe de la simulación</th><th>Tu informe o carta real</th></tr><tr><td>Base</td><td>Dossier, perfiles, ronda a ronda</td><td>Hechos, documentos, cuaderno de obra, contrato</td></tr><tr><td>Voz</td><td>Actores simulados y orquestador</td><td>Tú, como supervisor</td></tr><tr><td>Estado</td><td>Documento interno, ensayo</td><td>Documento que produce efectos</td></tr><tr><td>Se puede citar como fuente</td><td>No</td><td>Sí, por su contenido verificable</td></tr></table><p>Por eso el informe de la simulación no se mezcla con lo que se envía a la Entidad.</p>' },
    { h: 'Lo que sí pasa: ideas convertidas en tu propio trabajo',
      html: '<ul><li><b>Una carta mejor pensada.</b> Si el ensayo mostró que una redacción abría un flanco, la corriges y sustentas con hechos y documentos.</li><li><b>Un orden de comunicaciones.</b> Quién debe enterarse primero y con copia a quién, según lo que ensayaste.</li><li><b>Preguntas que hacer en obra o en el expediente.</b> Cada brecha de percepción se convierte en algo que verificas.</li><li><b>Riesgos por confirmar</b>, que siguen su propio camino (ver lección anterior).</li></ul><p>Lo que pasa es una idea de qué mirar o cómo decirlo, siempre re-sustentada con evidencia real.</p>' },
    { h: 'Lo que no pasa nunca',
      html: '<ul><li>Citas de un actor simulado como si fueran declaraciones de alguien.</li><li>Cifras, fechas, ensayos o decisiones de terceros salidas de la corrida: son <b>resultado simulado</b>.</li><li>Probabilidades de los actores como si fueran cálculos o estadísticas.</li><li>Cualquier frase que anticipe el resultado de una valorización, un adicional, una ampliación, un arbitraje o una acción de control.</li><li>Nombres o roles reales de una obra real en un documento de ensayo.</li></ul>' },
    { h: 'Un ejemplo de traducción',
      html: '<p>Caso ficticio. La corrida sugiere que el Consorcio Andino se agarra de la falta de plazo en una respuesta de la supervisión. En tu carta real no escribes «el contratista podría reclamar»; escribes lo que puedes sustentar:</p><p><i>Se solicita al contratista remitir la evidencia indicada, dentro del plazo que corresponda según el contrato (verificar la norma vigente y el expediente técnico aprobado).</i></p><p>La simulación te avisó del flanco; la carta lo cierra con hechos, plazos del contrato y sin mencionar el ensayo.</p>' },
    { h: 'Checklist antes de usar algo en un documento real',
      html: '<ol><li>¿Puedo sustentar esta afirmación con un documento o un hecho verificable?</li><li>¿Sale algún nombre de actor simulado, cifra o decisión de tercero de la corrida?</li><li>¿Estoy usando una probabilidad declarada como si fuera dato?</li><li>¿Cité normas solo por su nombre, con la coletilla de verificación?</li><li>¿Estoy prometiendo un resultado?</li></ol><p>Si alguna respuesta incomoda, el contenido se queda en el documento interno.</p>' }
  ],
  keypoints: [
    'El informe de la simulación es interno; no se envía ni se cita como fuente.',
    'Pasan ideas (qué mirar, cómo redactar, en qué orden comunicar), siempre re-sustentadas con evidencia real.',
    'No pasan citas de actores, cifras o decisiones simuladas, ni probabilidades declaradas.',
    'Nunca se anticipa el resultado de valorizaciones, adicionales, ampliaciones, arbitrajes ni control.',
    'Antes de usar algo en un documento real, aplica el checklist de cinco preguntas.'
  ],
  flashcards: [
    { q: '¿Se puede citar el informe de la simulación en una carta a la Entidad?', a: 'No: es un documento interno de ensayo.' },
    { q: '¿Qué sí puede pasar de la simulación a tu informe?', a: 'Ideas sobre qué verificar y cómo redactar, sustentadas con hechos reales.' },
    { q: '¿Cómo se llaman las cifras y decisiones de terceros salidas de la corrida?', a: 'Resultado simulado.' },
    { q: '¿Dónde se enseña la redacción de informes y cartas?', a: 'En Informe Obra PRO y Redacción PRO.' }
  ],
  quiz: [
    { q: 'La corrida sugiere un flanco en tu carta. ¿Qué haces?', opts: ['Citas el ensayo en la carta', 'Corriges la redacción y la sustentas con hechos y documentos', 'Envías el informe de la simulación como anexo'], correct: 1, why: 'La idea sirve; el sustento debe ser real y el informe simulado no se envía.' },
    { q: '¿Qué probabilidad puede aparecer en un informe real por venir de la simulación?', opts: ['La de un actor, como cálculo', 'Ninguna: son juicios declarados, no datos', 'La promediada de todos'], correct: 1, why: 'Los juicios declarados no son frecuencias ni cálculos.' },
    { q: '¿Qué frase nunca debe salir de una simulación hacia un documento?', opts: ['Se solicita remitir la evidencia', 'La ampliación será denegada', 'Verificar la norma vigente y el expediente técnico aprobado'], correct: 1, why: 'No se prometen ni anticipan resultados de ampliaciones ni de otros trámites.' }
  ]
});
