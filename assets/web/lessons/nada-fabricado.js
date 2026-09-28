Lesson.start({
  id: 'nada-fabricado', area: 'Rigor, ética y límites', areaIcon: '🛡️', icon: '🚫',
  title: 'Nada fabricado',
  subtitle: 'Documentos, ensayos y decisiones de terceros: siempre marcados como simulados.',
  norma: 'Ningún documento, ensayo de laboratorio, dictamen o decisión de un tercero se presenta como real si salió de la simulación (verificar la norma vigente y el expediente técnico aprobado).',
  intro: '<p>Una simulación necesita que pasen cosas: llega un ensayo de laboratorio, la asesoría opina, la Entidad responde. Como orquestador tú decides qué pasa, y eso es legítimo <b>siempre que quede marcado</b>. Lo que jamás debe ocurrir es que un actor invente un documento y que ese documento salga del ensayo con apariencia de real. La regla es simple: <b>lo que no existe se dice simulado, en el mismo renglón donde aparece</b>.</p>',
  sections: [
    { h: 'Qué cuenta como fabricado',
      html: '<ul><li>Un <b>documento</b> que un actor «presenta»: carta, informe, constancia, acta, fianza, resolución.</li><li>Un <b>resultado técnico</b>: ensayo de laboratorio, medición, metrado, informe de campo.</li><li>Una <b>decisión de un tercero</b>: qué resuelve la Entidad, qué dictamina el asesor, qué observa el control.</li><li>Una <b>cifra oficial</b>: montos, plazos y cantidades que nadie ha verificado.</li></ul>' },
    { h: 'La forma correcta de escribirlo',
      html: '<table><tr><th>Mal</th><th>Bien</th></tr><tr><td>El laboratorio informó que la resistencia cumple.</td><td>Resultado simulado: el laboratorio informa que la resistencia cumple.</td></tr><tr><td>La Entidad resolvió denegar.</td><td>Decisión simulada: la Entidad deniega la solicitud.</td></tr><tr><td>El contratista adjuntó la carta fianza.</td><td>El contratista afirma que la adjuntará; el documento no existe en el ensayo.</td></tr></table><p>Ningún ejemplo de esta app muestra a un actor redactando un documento como si fuera real; cuando se necesita, es el orquestador quien lo declara simulado y con la palabra por delante.</p>' },
    { h: 'La línea fija de la consigna',
      html: '<p>Incluye en toda consigna algo así:</p><p><i>«No redactes documentos oficiales ni cites resultados de ensayos. Si necesitas uno, escribe qué pedirías y a quién; la resolución decidirá y lo marcará como simulado.»</i></p><p>Así el actor <b>pide</b> en lugar de <b>inventar</b>. Y el orquestador, al resolver, escribe el resultado con la etiqueta y con un motivo de plausibilidad («se decide adverso para probar la rama de estrés»).</p>' },
    { h: 'Del ensayo al mundo real',
      html: '<p>El cuidado más grande está en la frontera. Un párrafo del informe que dice «el laboratorio confirmó» puede pegarse en una carta y afirmar algo que jamás ocurrió. Por eso las etiquetas <b>viajan con el dato</b>, y el informe no se envía a la Entidad ni a terceros (ver «Documento interno»). Antes de entregar, busca las palabras «confirmó», «resolvió», «aprobó» y comprueba que cada una lleva su etiqueta de simulado. Sobre normas: verificar la norma vigente y el expediente técnico aprobado.</p>' }
  ],
  keypoints: [
    'Documentos, resultados técnicos, decisiones de terceros y cifras oficiales no se inventan sin marcarlos.',
    'La etiqueta va en el mismo renglón: «resultado simulado», «decisión simulada».',
    'El actor pide un documento; el orquestador decide y marca.',
    'La consigna incluye una línea fija que prohíbe redactar documentos oficiales.',
    'Antes de entregar, revisa cada «confirmó», «resolvió» y «aprobó».'
  ],
  flashcards: [
    { q: '¿Qué se marca siempre como simulado?', a: 'Resultados de ensayos, decisiones de terceros y cualquier documento que no exista.' },
    { q: '¿Dónde va la etiqueta?', a: 'En el mismo renglón donde aparece el dato.' },
    { q: '¿Qué hace el actor cuando necesita un ensayo?', a: 'Escribe qué pediría y a quién; no inventa el resultado.' },
    { q: '¿Quién decide el resultado simulado?', a: 'El orquestador, en la resolución, con su motivo.' },
    { q: '¿Qué palabras conviene revisar antes de entregar?', a: '«Confirmó», «resolvió», «aprobó»: cada una debe llevar su etiqueta.' }
  ],
  quiz: [
    { q: 'El actor Consorcio Andino «adjunta» una fianza. Lo correcto es:', opts: ['Aceptarla como documento', 'Anotar que el documento no existe en el ensayo', 'Copiarla al informe'], correct: 1, why: 'Un documento inventado por un actor no se acepta como real.' },
    { q: 'La Entidad simulada deniega una solicitud. En el informe aparece como:', opts: ['La Entidad denegó', 'Decisión simulada: la Entidad deniega', 'Hecho probado'], correct: 1, why: 'Las decisiones de terceros son siempre simuladas.' },
    { q: 'La mejor manera de evitar que el actor invente es:', opts: ['Confiar en su criterio', 'Una línea fija en la consigna: pide, no inventes', 'Borrar sus respuestas'], correct: 1, why: 'Se le pide que solicite en lugar de fabricar.' }
  ]
});
