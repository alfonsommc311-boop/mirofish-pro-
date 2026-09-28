Lesson.start({
  id: 'ramas-y-si', area: 'El informe y la conversación con el mundo', areaIcon: '📝', icon: '🌿',
  title: 'Ramas y «¿y si…?»',
  subtitle: 'Cambiar un hecho, volver a correr desde una ronda y comparar con la corrida base.',
  norma: 'Las ramas son ensayos de escenarios, no pronósticos de resultado (verificar la norma vigente y el expediente técnico aprobado).',
  intro: '<p>La pregunta más natural después de leer un informe es <b>«¿y si hubiera pasado otra cosa?»</b>. No la respondes con una opinión: la ensayas. Una rama toma la corrida base hasta cierta ronda, cambia un hecho y vuelve a correr desde ahí. Comparar ambas te muestra qué del resultado dependía de ese hecho. Es la herramienta más honesta del método, porque cambia una sola cosa a la vez y deja ver el efecto.</p>',
  sections: [
    { h: 'Qué es una rama',
      html: '<p>Es una copia de la corrida hasta la ronda <i>k</i>, con <b>un solo cambio</b> en lo que ocurre o en lo que un actor sabe, y luego se continúa. Todo lo anterior a <i>k</i> se conserva idéntico; por eso la diferencia se puede atribuir al cambio.</p><ul><li><b>Corrida base:</b> lo que se hizo primero.</li><li><b>Rama:</b> la misma corrida desde la ronda <i>k</i> con el cambio.</li></ul>' },
    { h: 'Qué cambiar',
      html: '<table><tr><th>Tipo de cambio</th><th>Ejemplo ficticio</th></tr><tr><td>Un hecho del mundo</td><td>Los ensayos llegan a tiempo (resultado simulado favorable).</td></tr><tr><td>Un hecho adverso plausible (rama de estrés)</td><td>Los ensayos llegan con resultado simulado desfavorable.</td></tr><tr><td>Qué sabe un actor</td><td>La Entidad recibe la carta con una copia al órgano de control.</td></tr><tr><td>Una decisión de un tercero</td><td>La asesoría jurídica opina de forma distinta (resultado simulado).</td></tr></table><p>Elige el cambio que responde a tu duda del informe o a un punto de quiebre. Cambiar tres cosas a la vez impide saber cuál produjo el efecto.</p>' },
    { h: 'Cómo se corre, en la práctica',
      html: '<ol><li>Guarda la corrida base sin tocarla (los archivos del disco son la memoria del mundo).</li><li>Crea la rama copiando lo necesario hasta la ronda <i>k</i>, y escribe el hecho cambiado en la resolución de esa ronda con su fecha y quién lo ve.</li><li>Relanza las rondas siguientes solo con lo que cada actor sabría en la rama.</li><li>Anota en el informe qué rama es, qué cambió y desde qué ronda.</li></ol><p>Los detalles operativos de tu skill (nombres de archivos, plantilla de rama) son los de tu propio skill: verifícalos ahí. Con Claude Code, cada relanzamiento consume cuota; ver la lección de costos de una corrida.</p>' },
    { h: 'Comparar sin engañarte',
      html: '<p>Compara base y rama en lo que importa: cronología, punto de quiebre, brechas de percepción, decisiones de cada actor y la línea de indicadores.</p><ul><li>Si difieren mucho, el hecho cambiado <b>fue relevante en este ensayo</b>.</li><li>Si difieren poco, no lo era, o el actor tenía otra vía.</li><li>Pero con una sola pasada por rama no sabes si la diferencia es del cambio o del azar de la corrida. Considera repetir antes de concluir (ver «Una corrida no es una distribución»).</li></ul>' },
    { h: 'Lo que la rama no te dice',
      html: '<p>No te dice qué habría pasado en la obra real. Te dice cómo habrían reaccionado actores simulados con esos perfiles. Presenta las ramas como «en la rama B, con este cambio, ocurrió…» y nunca como «si hacemos esto, sucederá». Si una rama sugiere una acción, pásala a las recomendaciones con su plazo y responsable, y recuerda que sigue siendo un ensayo.</p>' }
  ],
  keypoints: [
    'Una rama conserva la corrida base hasta la ronda k, cambia un hecho y continúa.',
    'Cambia una sola cosa a la vez para poder atribuir la diferencia.',
    'Pueden cambiar un hecho, lo que sabe un actor, una decisión de un tercero o un escenario adverso.',
    'Compara cronología, puntos de quiebre, brechas e indicadores; con una pasada, cuidado con el azar.',
    'Se presentan como ensayo («en la rama B ocurrió…»), nunca como predicción.'
  ],
  flashcards: [
    { q: '¿Qué es una rama?', a: 'La corrida base hasta la ronda k, con un solo cambio, y luego continuada.' },
    { q: '¿Por qué cambiar una sola cosa?', a: 'Para poder atribuir la diferencia a ese cambio.' },
    { q: '¿Qué se conserva de la corrida base?', a: 'Todo lo anterior a la ronda k, intacto.' },
    { q: '¿Cómo se responde una pregunta contrafactual?', a: 'Ensayando una rama y comparándola con la base.' }
  ],
  quiz: [
    { q: '¿Cuál es una buena rama?', opts: ['Cambiar cinco hechos para ver qué sale', 'Cambiar solo que la carta llegue con copia al órgano de control', 'Reescribir toda la corrida'], correct: 1, why: 'Un solo cambio permite atribuir la diferencia.' },
    { q: 'Si base y rama difieren poco, lo más prudente es concluir:', opts: ['Que el hecho no fue relevante, o que el actor tenía otra vía', 'Que la simulación falló', 'Que la rama predice la realidad'], correct: 0, why: 'La diferencia pequeña no prueba nada más; y con una pasada puede ser azar.' },
    { q: 'Una rama debe presentarse como:', opts: ['Un pronóstico de la obra real', 'Un ensayo: «en esta rama ocurrió…»', 'Una asesoría legal'], correct: 1, why: 'Solo muestra cómo reaccionan actores simulados con esos perfiles.' }
  ]
});
