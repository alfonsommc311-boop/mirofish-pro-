Lesson.start({
  id: 'hechos-con-fuente', area: 'La semilla: el dossier común', areaIcon: '🌱', icon: '🔎',
  title: 'Hechos con fuente',
  subtitle: 'Cada cifra del dossier lleva su documento; lo que no lo tiene se marca, no se afirma.',
  norma: 'Las cifras y fechas se toman del documento, no de la memoria (verificar la norma vigente y el expediente técnico aprobado).',
  intro: '<p>Un actor simulado trata como verdad todo lo que lee. Si el dossier trae una cifra mal copiada, <b>todos los actores razonarán sobre un error</b> y el ensayo será elegante y falso. Por eso el bloque de hechos técnicos se arma como quien redacta un informe: dato, fecha y documento de donde salió. Esta lección te muestra cómo extraerlos de lo que ya tienes en la obra.</p>',
  sections: [
    { h: 'De dónde salen los hechos',
      html: '<ul><li><b>Informes</b> de supervisión y del contratista.</li><li><b>Cartas</b> cursadas entre las partes, con su fecha de emisión y de recepción.</li><li><b>Cuaderno de obra</b>: asientos con su fecha y autor por rol.</li><li><b>Resoluciones</b> y actas.</li></ul><p>Claude Code puede leer esos archivos y proponerte un borrador de hechos; tú compruebas cada cifra contra el original. Si tienes un servidor MCP de expedientes, puede servir de fuente (verificar en la documentación vigente cómo se conecta).</p>' },
    { h: 'El formato: hecho, fecha, fuente',
      html: '<table><tr><th>Hecho</th><th>Fecha</th><th>Fuente</th></tr><tr><td>Se anota suelo blando en un tramo</td><td>Mes 4</td><td>Cuaderno de obra, asiento del mes 4</td></tr><tr><td>El contratista solicita ampliación de plazo</td><td>Mes 5</td><td>Carta del Consorcio Andino</td></tr><tr><td>La supervisión responde</td><td>Mes 5</td><td>Carta del Consorcio Supervisor Horizonte</td></tr></table><p>Ejemplo ficticio. Las fechas se escriben tal como figuran; si el documento no da la cifra exacta, no la completes tú.</p>' },
    { h: 'Cifras exactas, no redondeadas',
      html: '<p>Copia la cifra como está: mismo número, misma unidad, mismo periodo. Redondear «casi el 30 %» cuando el informe dice otra cosa cambia la conversación entre actores. Y una cifra sin periodo (¿acumulado o del mes?) es un hecho a medias: anótalo como tal.</p>' },
    { h: 'Lo que no tiene fuente',
      html: '<p>Habrá cosas que crees pero no puedes documentar. No las mezcles con los hechos: márcalas <span class="hl">[no verificado]</span> y, si sirven, conviértelas en <b>hipótesis de simulación</b> en el perfil de un actor. Ningún actor debe inventar un documento que no existe; si un actor cita una carta, esa carta tiene que estar en el dossier.</p>' },
    { h: 'Ensayar sobre hechos, no sobre versiones',
      html: '<p>Cuando dos documentos se contradicen, no elijas en silencio: escribe ambos con su fuente. Esa contradicción es material del ensayo. Recuerda que el informe de la corrida se apoya en lo que pusiste aquí; un resultado de la simulación es un <b>resultado simulado</b>, no una decisión de la Entidad ni del control.</p>' }
  ],
  keypoints: [
    'Un actor trata como verdad todo lo que lee: un dato mal copiado contamina toda la corrida.',
    'Cada hecho lleva fecha y documento de origen.',
    'Las cifras se copian exactas, con unidad y periodo.',
    'Lo que no tiene fuente se marca [no verificado] o pasa a hipótesis en un perfil.',
    'Si dos documentos se contradicen, se escriben ambos.',
    'Claude Code propone el borrador; tú verificas contra el original.'
  ],
  flashcards: [
    { q: '¿Qué tres elementos lleva cada hecho?', a: 'El hecho, su fecha y el documento de donde sale.' },
    { q: '¿Qué haces con lo que crees pero no puedes documentar?', a: 'Lo marcas [no verificado] o lo conviertes en hipótesis en un perfil.' },
    { q: '¿Y si dos documentos se contradicen?', a: 'Se escriben ambos con su fuente; la contradicción es material del ensayo.' },
    { q: '¿Quién verifica el borrador que propone Claude Code?', a: 'El orquestador, contra el documento original.' }
  ],
  quiz: [
    { q: 'El informe dice una cifra distinta a la que recuerdas. ¿Cuál escribes?', opts: ['La que recuerdas', 'La del documento, con su fuente', 'Un promedio'], correct: 1, why: 'El dossier se apoya en el documento, no en la memoria.' },
    { q: '¿Puede un actor citar una carta que no está en el dossier?', opts: ['Sí, si suena razonable', 'No: sería inventar un documento', 'Solo el contratista'], correct: 1, why: 'Ningún actor inventa documentos.' },
    { q: 'Una cifra sin periodo indicado es:', opts: ['Un hecho completo', 'Un hecho a medias que conviene anotar como tal', 'Irrelevante'], correct: 1, why: 'Sin periodo cambia el sentido de la cifra.' }
  ]
});
