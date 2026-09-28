Lesson.start({
  id: 'caso-hito-de-control-concurrente', area: 'Casos de obra pública', areaIcon: '🏗️', icon: '🕵️',
  title: 'Caso: hito de control concurrente',
  subtitle: 'El OCI llega en el hito de recepción: quién se protege, cómo y qué información circula.',
  norma: 'Servicio de control concurrente del Sistema Nacional de Control: verificar la norma vigente y el expediente técnico aprobado.',
  intro: '<p>Caso <b>ficticio</b>: la Municipalidad Distrital de Villa Esperanza está por recibir un tramo de pista ejecutado por el Consorcio Andino, con supervisión del Consorcio Supervisor Horizonte. En ese hito llega el Órgano de Control Institucional (OCI) con un servicio de control concurrente. Nadie sabe qué encontrará; todos se protegen. Aquí no se simula al control para adivinar su informe: se ensaya <b>cómo se comporta la información</b> cuando las partes saben que serán revisadas. Todo lo de las rondas es <b>resultado simulado</b>.</p>',
  sections: [
    { h: 'El evento y la pregunta',
      html: '<p><b>Evento inyectable:</b> el OCI comunica que inicia un servicio de control en el hito de recepción y solicita información de la etapa.</p><p><b>Pregunta:</b> en las tres rondas siguientes, ¿quién se protege, con qué información y qué se deja de decir?</p><p>Regla del ejercicio: el actor de control no emite conclusiones ni hallazgos; solo pide información y formula preguntas. Nunca se redacta un informe de control simulado como si fuera real.</p>' },
    { h: 'Actores y su información privada',
      html: '<table><tr><th>Actor</th><th>Sabe y otros no</th><th>Lo que teme</th></tr><tr><td>A1 OCI</td><td>Su alcance y su lista de solicitudes; nadie más las ve completas</td><td>Que se le entregue información parcial</td></tr><tr><td>A2 Entidad (área usuaria)</td><td>Qué observaciones internas no llegaron a formalizarse</td><td>Aparecer como quien avaló algo sin sustento</td></tr><tr><td>A3 Contratista</td><td>Sus registros de calidad completos y qué ensayos están pendientes</td><td>Que se cuestione la recepción por algo menor</td></tr><tr><td>A4 Supervisión</td><td>Lo que verificó y lo que no alcanzó a verificar</td><td>Que su informe sea leído como aval total</td></tr></table>' },
    { h: 'Qué pasó, ronda a ronda (resultado simulado)',
      html: '<p><b>Ronda 1.</b> Cada actor reúne su documentación. La Entidad tiende a demorar la respuesta hasta ordenar el expediente; el contratista y la supervisión, por separado, revisan sus registros. Nadie coordina un relato común; los plazos de respuesta se cumplen cerca del límite. <i>Resultado simulado.</i></p><p><b>Ronda 2.</b> La supervisión declara con precisión qué verificó y qué está pendiente, para no ser leída como aval de todo. El contratista entrega sus registros y aclara qué ensayos aún no tiene. La Entidad responde parcialmente y pide a las partes que le confirmen datos. El OCI pide aclaraciones sobre una diferencia entre dos fechas del cuaderno de obra. <i>Resultado simulado.</i></p><p><b>Ronda 3.</b> La Entidad decide postergar la firma de la recepción hasta cerrar las aclaraciones. Se inyecta como tercero un resultado simulado de laboratorio: la muestra pendiente sale dentro de lo esperado. <i>Resultado simulado; no es un ensayo real.</i></p><p>Indicadores de ejemplo (juicios declarados): <span class="hl">A2 riesgo percibido de observación: 0,55 · A3: 0,35 · A4: 0,40</span>.</p>' },
    { h: 'Brechas de percepción halladas',
      html: '<ul><li><b>Entidad frente a los demás:</b> se cree el actor más expuesto; contratista y supervisión creen que el foco está en el otro.</li><li><b>Supervisión frente a la Entidad:</b> la supervisión cree que su informe deja claro lo verificado; la Entidad lo lee como respaldo suficiente para recibir.</li><li><b>Todos frente al OCI:</b> suponen un alcance mayor al pedido en la solicitud; se protegen contra hallazgos que aún no existen.</li></ul>' },
    { h: 'Qué se aprendió',
      html: '<ol><li>En un hito de control, el mayor riesgo suele ser la <b>inconsistencia entre documentos</b>, no un hecho grave: conviene revisar que las fechas y los registros coincidan antes de responder.</li><li>La supervisión gana al declarar con precisión lo que <b>no</b> verificó.</li><li>Postergar una decisión por unas semanas es una salida razonable en el ensayo, pero no se presenta como recomendación de recepción.</li><li>El ensayo <b>no promete</b> el resultado del servicio de control ni ninguna acción posterior. Verificar la norma vigente y el expediente técnico aprobado.</li></ol><p>Para pasar un hallazgo a una fila de riesgo, Riesgos Obra PRO; para los informes reales, Informe Obra PRO. Lo simulado es documento interno y no se envía a nadie.</p>' }
  ],
  keypoints: [
    'El evento es la comunicación del servicio de control en el hito de recepción.',
    'El actor de control solo pide información: no se simulan hallazgos ni informe de control.',
    'El mayor riesgo del hito es la inconsistencia entre documentos.',
    'Brecha típica: cada actor cree que el foco está en otro.',
    'La supervisión se protege declarando con precisión lo que no verificó.',
    'El ensayo no promete resultado del control ni ninguna acción posterior.'
  ],
  flashcards: [
    { q: '¿Qué hace el actor OCI en el ensayo?', a: 'Pide información y formula preguntas; no emite conclusiones ni hallazgos.' },
    { q: '¿Qué riesgo dominó el hito?', a: 'Inconsistencias entre documentos, como dos fechas distintas del cuaderno.' },
    { q: '¿Cómo se protege la supervisión?', a: 'Declarando qué verificó y qué no, para no ser leída como aval total.' },
    { q: '¿Cómo se marca el laboratorio del caso?', a: 'Como resultado simulado, no como ensayo real.' },
    { q: '¿Qué destino tiene el informe del ensayo?', a: 'Documento interno; no se envía a la Entidad ni a nadie.' }
  ],
  quiz: [
    { q: '¿Qué está prohibido en este caso?', opts: ['Simular preguntas del OCI', 'Redactar un informe de control simulado como si fuera real', 'Simular la respuesta de la Entidad'], correct: 1, why: 'Simular el hallazgo de control sería fabricar un documento y prejuzgar una acción de control.' },
    { q: '¿Qué muestra la brecha de la Entidad?', opts: ['Que es la más segura', 'Que se cree la más expuesta mientras otros creen lo contrario', 'Que no le importa'], correct: 1, why: 'Cada actor subestima el riesgo del otro y sobreestima el propio.' },
    { q: 'Si en el ensayo el control no observa nada, debes concluir:', opts: ['Que en la realidad no lo hará', 'Nada sobre el control real: es un resultado simulado', 'Que se puede firmar la recepción'], correct: 1, why: 'Ensayo, no profecía: no se promete ni el resultado del control ni la decisión de recibir.' }
  ]
});
