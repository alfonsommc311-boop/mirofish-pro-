Lesson.start({
  id: 'con-el-analisis-de-riesgos', area: 'Combinar con tus otras herramientas', areaIcon: '🧰', icon: '⚠️',
  title: 'Con el análisis de riesgos',
  subtitle: 'De un hallazgo de la simulación a una fila del registro de riesgos.',
  norma: 'La gestión de riesgos de la obra sigue la norma y el expediente técnico aprobado; un hallazgo simulado entra al registro como hipótesis por confirmar (verificar la norma vigente y el expediente técnico aprobado).',
  intro: '<p>La simulación no reemplaza tu registro de riesgos: lo alimenta. Cada corrida deja hallazgos, sobre todo <b>brechas de percepción</b> y <b>puntos de quiebre</b>, que a menudo son riesgos que nadie había escrito. La pregunta es cómo pasar de un hallazgo a una fila del registro sin inflarlo ni descartarlo. El método de identificar, calificar y tratar riesgos está en <b>Riesgos Obra PRO</b>; aquí solo se enseña el puente.</p>',
  sections: [
    { h: 'Qué hallazgos merecen pasar al registro',
      html: '<table><tr><th>Hallazgo de la simulación</th><th>Cómo se ve como riesgo</th></tr><tr><td>Brecha de percepción</td><td>Una parte subestima un riesgo que otra sobrestima</td></tr><tr><td>Punto de quiebre</td><td>Decisión o hecho a partir del cual el caso cambia de rumbo</td></tr><tr><td>Flanco propio</td><td>Debilidad tuya que otro actor usaría</td></tr><tr><td>Rama de estrés</td><td>Dónde se rompe el sistema ante un adverso plausible</td></tr></table><p>Filtro: el hallazgo debe tener una <b>causa</b> y un <b>efecto</b> que puedas escribir como riesgo, no ser solo una anécdota de la corrida.</p>' },
    { h: 'La conversión, paso a paso',
      html: '<ol><li><b>Escribe el hallazgo con su ronda</b> y de qué actor viene.</li><li><b>Redáctalo como riesgo:</b> causa, evento, efecto. Sin cifras que la simulación no pueda sostener.</li><li><b>Marca su origen:</b> «hipótesis de simulación, por confirmar».</li><li><b>Busca la confirmación real:</b> un documento, una consulta o una verificación en obra.</li><li><b>Solo entonces</b> califícalo y trátalo con el método de tu registro (Riesgos Obra PRO).</li></ol><p>Los pasos 3 y 4 son los que evitan que un juego de rol se convierta en un riesgo falso.</p>' },
    { h: 'Un ejemplo de fila',
      html: '<p>Caso ficticio. En la ronda 3, el Consorcio Supervisor Horizonte difiere una parte de la valorización a la espera de ensayos, y el Consorcio Andino lo interpreta como paso previo a una controversia. Una fila posible:</p><table><tr><th>Campo</th><th>Contenido</th></tr><tr><td>Riesgo</td><td>Diferimiento de una parte de la valorización sin un criterio de liberación comunicado por escrito</td></tr><tr><td>Causa</td><td>Ensayos pendientes; falta de acuerdo sobre qué evidencia libera el pago</td></tr><tr><td>Efecto posible</td><td>Tensión con el contratista y escalamiento del reclamo</td></tr><tr><td>Origen</td><td>Hipótesis de simulación, ronda 3; por confirmar con el expediente y el contrato</td></tr><tr><td>Acción a evaluar</td><td>Comunicar por escrito el criterio de liberación</td></tr></table><p>La probabilidad y el impacto los calificas tú con tu método; no los toma de las cifras de un actor.</p>' },
    { h: 'La silla del actor: qué riesgo ve cada uno',
      html: '<p>Un mismo riesgo tiene distinto peso según quien lo mira: la Entidad teme observaciones de control, el contratista teme perder liquidez, la supervisión teme quedar como responsable de una demora. Anota <b>quién ve qué riesgo</b> en una columna extra: te ayuda a decidir a quién comunicar qué y en qué orden. Es información para tu criterio, no una asignación de responsabilidades; las responsabilidades están en el contrato y en la norma: verificar la norma vigente y el expediente técnico aprobado.</p>' },
    { h: 'Lo que la simulación no debe hacer al registro',
      html: '<ul><li>No fijar probabilidades: las de los actores son juicios declarados, no frecuencias.</li><li>No cerrar un riesgo porque «no ocurrió en la corrida».</li><li>No asignar culpables ni prometer que un tratamiento evitará una controversia, un adicional o una acción de control.</li></ul>' }
  ],
  keypoints: [
    'Los hallazgos de la simulación alimentan el registro; no lo reemplazan.',
    'Brechas de percepción, puntos de quiebre, flancos propios y ramas de estrés son los más útiles.',
    'Todo hallazgo entra como hipótesis por confirmar y se contrasta con documentos u obra.',
    'La calificación de probabilidad e impacto la haces tú con tu método, no con cifras de un actor.',
    'Que un riesgo no aparezca en una corrida no lo descarta.'
  ],
  flashcards: [
    { q: '¿Cómo entra al registro un hallazgo simulado?', a: 'Como hipótesis por confirmar, con su ronda y su origen.' },
    { q: '¿Quién califica probabilidad e impacto?', a: 'Tú, con el método de tu registro (Riesgos Obra PRO), no las cifras de un actor.' },
    { q: '¿Qué hallazgos suelen ser buenos riesgos candidatos?', a: 'Brechas de percepción, puntos de quiebre, flancos propios y ramas de estrés.' },
    { q: '¿Se cierra un riesgo si no apareció en la corrida?', a: 'No: una corrida no es una distribución.' }
  ],
  quiz: [
    { q: 'Un actor declara probabilidad alta de controversia. ¿Qué haces al registrar el riesgo?', opts: ['Copias esa probabilidad', 'La calificas con tu propio método tras confirmar el hecho', 'La promedias con la de otro actor'], correct: 1, why: 'Es un juicio declarado; la calificación es tuya.' },
    { q: '¿Qué campo evita convertir un juego de rol en riesgo falso?', opts: ['El color de la fila', 'Origen: hipótesis por confirmar', 'La fecha del informe'], correct: 1, why: 'Marca lo no verificado y obliga a buscar confirmación real.' },
    { q: '¿Qué no puede prometer el registro a partir de la simulación?', opts: ['Que hay un tratamiento por evaluar', 'Que una acción evitará una controversia o una acción de control', 'Que hay un riesgo por confirmar'], correct: 1, why: 'Nunca se prometen resultados de controversias, adicionales o control.' }
  ]
});
