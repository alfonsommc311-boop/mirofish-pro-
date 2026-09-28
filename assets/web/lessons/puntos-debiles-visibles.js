Lesson.start({
  id: 'puntos-debiles-visibles', area: 'La semilla: el dossier común', areaIcon: '🌱', icon: '🎯',
  title: 'Puntos débiles visibles',
  subtitle: 'Lo que cualquier actor atento usaría contra otro: sin esto, el ensayo es una reunión amable.',
  norma: 'Se anotan hechos observables en documentos, no acusaciones (verificar la norma vigente y el expediente técnico aprobado).',
  intro: '<p>Si en el dossier todos hacen todo bien, los actores se ponen de acuerdo en la primera ronda y aprendes nada. El conflicto nace de <b>flancos visibles</b>: una carta sin sustento, una respuesta tarde, un asiento ambiguo. Yo, como orquestador, los busco primero en mi propio lado, porque son los que otro usará. Desde la silla del actor, son la munición que tiene a la vista.</p>',
  sections: [
    { h: 'Qué es un punto débil visible',
      html: '<p>Un hecho <b>que consta en los documentos del dossier</b> y que una parte podría señalar de otra. No es un defecto de carácter ni una sospecha: es algo comprobable. Que sea <i>visible</i> significa que cualquier actor que lea el dossier con atención podría verlo; lo que solo uno sabe es información privada y va en su perfil.</p>' },
    { h: 'Ejemplos ficticios',
      html: '<table><tr><th>Parte</th><th>Flanco visible</th></tr><tr><td>Consorcio Andino</td><td>La carta no cita el asiento del cuaderno donde se anotó el suelo blando</td></tr><tr><td>Consorcio Supervisor Horizonte</td><td>Su respuesta se emitió después del plazo que él mismo había fijado</td></tr><tr><td>Municipalidad Distrital de Villa Esperanza</td><td>El expediente técnico no menciona el tramo afectado</td></tr></table><p>Cada fila se sostiene con un documento. Si no puedes señalar cuál, no es un punto débil visible: es una hipótesis.</p>' },
    { h: 'Cómo encontrarlos',
      html: '<ol><li>Para cada actor, pregunta: <i>¿qué haría un contrario con este documento en la mano?</i></li><li>Revisa fechas, citas faltantes, cifras que no cuadran entre documentos.</li><li>Empieza por tu propio bando: si solo listas flancos ajenos, el ensayo sale sesgado a tu favor.</li><li>Reparte: al menos uno por actor principal.</li></ol>' },
    { h: 'Sin caricaturas',
      html: '<p>Un punto débil no vuelve malo a nadie. Todos los actores tienen los suyos y todos tienen razones legítimas. Evita adjetivos y escribe el hecho seco. Y cuida el otro extremo: no inventes un flanco para que la simulación tenga pelea. Si el dossier real no tiene conflicto, eso ya es un hallazgo.</p>' },
    { h: 'Para qué sirve luego',
      html: '<p>En la lectura del resultado verás qué flancos usaron los actores y cuáles ignoraron. El flanco propio que otro explotó te dice qué reforzar antes de enviar tu carta. Recuerda: es un <b>resultado simulado</b>; lo que ocurra en la realidad dependerá de las partes y del expediente. Para la matriz formal de riesgos, ver Riesgos Obra PRO.</p>' }
  ],
  keypoints: [
    'Sin flancos visibles no hay conflicto y el ensayo no enseña nada.',
    'Un punto débil visible es un hecho comprobable en los documentos del dossier.',
    'Lo que solo un actor sabe va en su perfil, no aquí.',
    'Empieza por los flancos de tu propio bando.',
    'Se escriben como hecho seco, sin adjetivos ni acusaciones.',
    'No inventes flancos para forzar pelea.'
  ],
  flashcards: [
    { q: '¿Qué es un punto débil visible?', a: 'Un hecho comprobable en los documentos del dossier que otra parte podría señalar.' },
    { q: '¿Por qué empezar por tu propio bando?', a: 'Porque son los que otro usará y evita un ensayo sesgado a tu favor.' },
    { q: '¿Qué pasa si no puedes señalar el documento?', a: 'No es punto débil visible: es una hipótesis.' },
    { q: '¿Qué hacer si el caso real no tiene conflicto?', a: 'No inventar uno: eso ya es un hallazgo.' }
  ],
  quiz: [
    { q: 'La carta del contratista no cita el asiento del cuaderno. Es:', opts: ['Un punto débil visible', 'Un secreto del contratista', 'Un error del modelo'], correct: 0, why: 'Consta en los documentos y otro actor puede señalarlo.' },
    { q: '¿Qué pasa si todos los actores hacen todo bien en el dossier?', opts: ['El ensayo es más realista', 'No hay conflicto y aprendes poco', 'Se garantiza el acuerdo real'], correct: 1, why: 'Sin flancos, los actores convergen sin fricción.' },
    { q: 'Al redactar un punto débil conviene:', opts: ['Usar adjetivos fuertes', 'Escribir el hecho seco', 'Atribuir mala fe'], correct: 1, why: 'Se describe lo observable, sin caricatura.' }
  ]
});
