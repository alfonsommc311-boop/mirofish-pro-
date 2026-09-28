Lesson.start({
  id: 'tu-biblioteca-de-casos', area: 'El simulador destacado', areaIcon: '🏆', icon: '📚',
  title: 'Tu biblioteca de casos',
  subtitle: 'Cada corrida guardada, con lo que pasó después, es tu mejor material de entrenamiento.',
  norma: 'Solo se aprende de una simulación si luego se compara con la realidad.',
  intro: '<p>Una corrida que no se guarda se olvida, y una que se guarda sin anotar <b>qué ocurrió después</b> no te enseña a calibrar. Tu biblioteca de casos es una carpeta ordenada donde cada simulación conserva su dossier, perfiles, rondas, informe y un cierre con el desenlace real.</p>',
  sections: [
    { h: 'Qué guardar de cada corrida',
      html: '<ul><li>El <b>dossier</b> y los <b>perfiles</b> tal como se usaron.</li><li>Las respuestas por ronda y las resoluciones.</li><li>El informe y su fecha.</li><li>Una nota de <span class="hl">hipótesis de simulación</span> que no estaba verificada.</li></ul><p>Con roles, nunca nombres de personas, y sin datos reales de obra si el material saldrá de tu equipo.</p>' },
    { h: 'La hoja de cierre',
      html: '<table><tr><th>Campo</th><th>Ejemplo</th></tr><tr><td>Qué dijo cada actor que haría</td><td>El contratista: presentar la carta el día 12</td></tr><tr><td>Qué ocurrió realmente</td><td>La presentó el día 15</td></tr><tr><td>Diferencia</td><td>Tres días; se subestimó la burocracia interna</td></tr><tr><td>Lección para el skill</td><td>Los plazos internos se cumplen tarde con más frecuencia</td></tr></table>' },
    { h: 'Cómo la usas',
      html: '<p>Antes de una corrida nueva, relee dos casos parecidos. Descubrirás patrones propios: qué actor suele ser demasiado razonable, qué tipo de evento genera más brechas de percepción. La calibración formal y el juicio de expertos se ven en Decisiones PRO y Jev PRO.</p>' },
    { h: 'Un orden simple',
      html: '<ol><li>Una carpeta por caso, con fecha y nombre corto.</li><li>Subcarpetas: dossier, perfiles, rondas, informe, cierre.</li><li>Un índice con una línea por caso.</li></ol>' }
  ],
  keypoints: [
    'Guarda dossier, perfiles, rondas, informe y cierre de cada corrida.',
    'Anota siempre qué ocurrió después: sin eso no hay calibración.',
    'Compara lo que cada actor dijo que haría con lo que hizo.',
    'Relee casos parecidos antes de una corrida nueva.',
    'Usa roles y no datos reales si el material circula.'
  ],
  flashcards: [
    { q: '¿Qué hace útil a un caso guardado?', a: 'Tener el desenlace real anotado para compararlo.' },
    { q: '¿Qué se compara en la hoja de cierre?', a: 'Lo que cada actor dijo que haría contra lo que ocurrió.' },
    { q: '¿Qué identificadores usar?', a: 'Roles, nunca nombres de personas.' },
    { q: '¿Dónde se ve la calibración formal?', a: 'En Decisiones PRO y Jev PRO.' }
  ],
  quiz: [
    { q: 'Guardar solo el informe sin el desenlace real:', opts: ['Es suficiente', 'No permite aprender a calibrar', 'Es lo ideal'], correct: 1, why: 'Sin desenlace no hay contra qué comparar lo que se ensayó.' },
    { q: '¿Qué va en la hoja de cierre?', opts: ['Solo la fecha', 'Lo dicho, lo ocurrido, la diferencia y la lección', 'El precio del modelo'], correct: 1, why: 'La diferencia entre lo ensayado y lo real es el aprendizaje.' },
    { q: 'Antes de una corrida nueva conviene:', opts: ['Olvidar las anteriores', 'Releer casos parecidos', 'Borrar los perfiles'], correct: 1, why: 'Los casos previos revelan patrones propios de tus simulaciones.' }
  ]
});
