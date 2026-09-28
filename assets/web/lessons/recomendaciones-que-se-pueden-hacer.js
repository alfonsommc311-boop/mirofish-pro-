Lesson.start({
  id: 'recomendaciones-que-se-pueden-hacer', area: 'El informe y la conversación con el mundo', areaIcon: '📝', icon: '✅',
  title: 'Recomendaciones que se pueden hacer',
  subtitle: 'Esta semana, dos semanas, hacia el cierre; cada una con responsable y sin prometer resultados.',
  norma: 'Las acciones se ejecutan según la norma vigente y el expediente técnico aprobado (verificar antes de actuar).',
  intro: '<p>Una simulación que termina en «hay riesgo de conflicto» no sirve. La sección de recomendaciones convierte lo visto en <b>acciones que tú o alguien concreto puede hacer</b>, con plazo. Aquí está la disciplina más útil del informe: una recomendación que no puedes ejecutar, o que depende de una decisión ajena, no es una recomendación; es un deseo. Y ninguna promete el resultado de una valorización, un adicional, una ampliación, un arbitraje o una acción de control.</p>',
  sections: [
    { h: 'Del hallazgo a la acción',
      html: '<p>Cada recomendación nace de un hallazgo anterior (punto de quiebre, brecha de percepción, flanco propio). Si no puedes señalar de cuál, sobra.</p><ol><li><b>Hallazgo:</b> qué vio el ensayo.</li><li><b>Acción:</b> qué se hace, con un verbo concreto.</li><li><b>Responsable:</b> un rol, no un nombre.</li><li><b>Plazo:</b> esta semana, dos semanas o hacia el cierre.</li></ol>' },
    { h: 'Tres horizontes',
      html: '<table><tr><th>Horizonte</th><th>Qué entra</th><th>Ejemplo ficticio</th></tr><tr><td>Esta semana</td><td>Lo que depende solo de ti y cierra un flanco propio.</td><td>Verificar en el cuaderno de obra que el pedido de ensayos quedó asentado (Responsable: supervisor de obra).</td></tr><tr><td>Dos semanas</td><td>Lo que requiere coordinar con otro actor.</td><td>Solicitar una reunión de coordinación con la Entidad antes de que venza el plazo que corre (Responsable: jefe de supervisión).</td></tr><tr><td>Hacia el cierre</td><td>Lo estructural, de efecto lento.</td><td>Ordenar el archivo de comunicaciones del caso para la liquidación (Responsable: especialista administrativo de la supervisión).</td></tr></table>' },
    { h: 'La prueba de las tres preguntas',
      html: '<ul><li><b>¿Quién lo ejecuta?</b> Si es «la Entidad», tú no puedes: se convierte en algo que <i>propones</i>, no que <i>haces</i>.</li><li><b>¿Cómo sabré que se hizo?</b> Debe dejar rastro verificable: una carta, un asiento, una fecha.</li><li><b>¿Qué pasa si el ensayo se equivocó?</b> Una buena recomendación es barata de revertir y no daña aunque el ensayo no ocurra.</li></ul><p>La tercera pregunta protege contra la tentación de actuar por un ensayo. Recuerda: es un escenario plausible, no una predicción.</p>' },
    { h: 'Lo que una recomendación no debe hacer',
      html: '<ul><li>Prometer: «con esto la valorización se aprobará» es una promesa que nadie puede cumplir.</li><li>Fabricar: no recomiendes enviar un documento que un actor «inventó» en el ensayo; los documentos reales salen del expediente.</li><li>Dar asesoría legal: si la duda es normativa, se consulta el texto vigente y al área legal (verificar la norma vigente y el expediente técnico aprobado).</li></ul>' },
    { h: 'La silla del actor',
      html: '<p>Antes de cerrar la sección, léela como si fueras el contratista o la Entidad. Si la acción que recomiendas te dejaría mal parado a ti en su lugar, anticipa su respuesta: es un excelente insumo para otra ronda o rama (ver «Ramas y ¿y si…?»). Si un riesgo merece seguimiento, pasa al registro (ver Riesgos Obra PRO).</p>' }
  ],
  keypoints: [
    'Toda recomendación nace de un hallazgo y termina en una acción concreta.',
    'Cada una lleva responsable (rol) y plazo: esta semana, dos semanas o hacia el cierre.',
    'Prueba de tres preguntas: quién la ejecuta, cómo se sabrá que se hizo y qué pasa si el ensayo se equivocó.',
    'Nunca prometas resultados de valorizaciones, adicionales, ampliaciones, arbitrajes ni control.',
    'Léela también desde la silla del otro actor: puede convertirse en una nueva rama.'
  ],
  flashcards: [
    { q: '¿De dónde nace una recomendación?', a: 'De un hallazgo concreto del ensayo: punto de quiebre, brecha o flanco propio.' },
    { q: '¿Qué lleva cada recomendación?', a: 'Acción con verbo concreto, responsable (rol) y plazo.' },
    { q: '¿Qué sirve una recomendación barata de revertir?', a: 'Protege si el ensayo se equivocó: no daña aunque el escenario no ocurra.' },
    { q: '¿Qué hago si la acción depende de la Entidad?', a: 'La presento como algo que propongo, no como algo que hago.' }
  ],
  quiz: [
    { q: '¿Cuál es una recomendación bien formulada?', opts: ['Evitar el conflicto con el contratista', 'Asentar en el cuaderno el pedido de ensayos esta semana (supervisor de obra)', 'Asegurar que la valorización se apruebe'], correct: 1, why: 'Tiene acción concreta, plazo y responsable, y no promete un resultado.' },
    { q: 'Si la acción recomendada depende solo de la Entidad, debes:', opts: ['Darla por hecha', 'Formularla como propuesta y no como acción propia', 'Eliminarla siempre'], correct: 1, why: 'Solo se comprometen las acciones que el responsable puede ejecutar.' },
    { q: '¿Por qué preguntar qué pasa si el ensayo se equivocó?', opts: ['Porque toda simulación falla', 'Porque una simulación es un ensayo y no una predicción', 'Para descartar el informe'], correct: 1, why: 'Se busca que la acción sea razonable aunque el escenario no ocurra.' }
  ]
});
