Lesson.start({
  id: 'lanzar-y-esperar-una-ronda', area: 'Una corrida de principio a fin', areaIcon: '🔄', icon: '🚀',
  title: 'Lanzar y esperar una ronda',
  subtitle: 'Un mensaje con todos los actores, notificaciones en lugar de sondeo y una revisión ordenada al llegar.',
  norma: 'Los datos de subagentes y límites de Claude Code se verifican en la documentación vigente; nada de lo que salga es resultado real de obra.',
  intro: '<p>Una ronda es el momento en que cada actor recibe su consigna y responde <b>sin saber lo que responden los demás</b>. En Claude Code eso se logra lanzando <b>un subagente por actor, todos en un solo mensaje</b>, para que corran en paralelo. Después esperas. La documentación indica que el resultado de cada subagente llega como una <b>notificación de finalización</b> en un turno posterior, así que no hace falta preguntar cada minuto. Esta lección recorre el lanzamiento, la espera y lo que revisas cuando llegan las respuestas. Verifica en la documentación vigente los límites y comportamientos, porque cambian.</p>',
  sections: [
    { h: 'El mensaje con N subagentes',
      html: '<p>Con cuatro actores en la ronda 1, el orquestador emite <b>cuatro lanzamientos en el mismo mensaje</b>, cada uno con la consigna de su actor (perfil, contexto propio, decisión central, formato). Si los lanzas de uno en uno, los actores corren en serie, tardas más y arriesgas que uno se cruce con lo escrito por otro.</p><ul><li>Cada subagente parte con contexto limpio: solo sabe lo que le das en la consigna y en los archivos que le permites.</li><li>Por eso la consigna lleva las rutas permitidas y la ventana de fechas.</li><li>Hay un límite de concurrencia configurable; con muchos actores se lanzan por oleadas (verificar en la documentación vigente).</li></ul>' },
    { h: 'Esperar sin sondear',
      html: '<p>Según la documentación, el sistema entrega el resultado como notificación cuando cada subagente termina, y si preguntas antes te dice que sigue en ejecución. La actitud correcta del orquestador:</p><ol><li>Lanzar y no hacer nada más con esa ronda.</li><li>Recibir notificaciones a medida que llegan.</li><li>Recién cuando llegaron <b>todas</b>, pasar a revisar.</li></ol><p>Sondear con «¿ya terminaste?» solo gasta turnos. Mientras esperas puedes adelantar trabajo que no dependa de esa ronda, como redactar el borrador del hecho de la siguiente resolución.</p>' },
    { h: 'Qué revisar cuando llegan',
      html: '<table><tr><th>Revisión</th><th>Qué buscas</th></tr><tr><td>Archivo de salida</td><td>Que cada actor escribió su respuesta donde le correspondía</td></tr><tr><td>Formato</td><td>Secciones fijas y tope de palabras respetados</td></tr><tr><td>Personaje</td><td>Que razona con lo suyo, sin caricatura ni exceso de cortesía</td></tr><tr><td>Aislamiento</td><td>Que no cita algo que no pudo conocer (posible fuga)</td></tr><tr><td>Nada fabricado</td><td>Que no inventa documentos; ensayos y decisiones de terceros van como resultado simulado</td></tr><tr><td>Indicadores</td><td>Que la línea fija de indicadores está completa</td></tr></table>' },
    { h: 'Después de revisar',
      html: '<p>Solo con las respuestas revisadas pasas a la <b>resolución</b> (área 6): decides qué ocurrió, lo fechas y etiquetas quién se entera. De ahí sale el contexto de la ronda siguiente (lección «Armar contextos»). Guarda todo en disco: los archivos son la memoria del mundo, y así puedes retomar la corrida en otra sesión.</p><p>Recuerda: lo que hicieron los actores es un ensayo con lo que cada uno sabía, no lo que pasará. Ninguna respuesta autoriza a prometer resultados de valorizaciones, adicionales, ampliaciones o arbitrajes.</p>' }
  ],
  keypoints: [
    'Una ronda = un subagente por actor, todos lanzados en un solo mensaje.',
    'Cada subagente arranca sin memoria: la consigna y los archivos permitidos son todo lo que sabe.',
    'El resultado llega como notificación; no se sondea.',
    'Se revisa cuando llegaron todas: archivo, formato, personaje, aislamiento, nada fabricado, indicadores.',
    'Los límites de concurrencia son configurables; verificar en la documentación vigente.',
    'Todo se guarda en disco para poder retomar la corrida.'
  ],
  flashcards: [
    { q: '¿Cómo se lanza una ronda para que sea paralela?', a: 'Todos los subagentes en un solo mensaje, uno por actor.' },
    { q: '¿Cómo te enteras de que un actor terminó?', a: 'Por la notificación de finalización; no hace falta sondear.' },
    { q: '¿Cuándo empiezas a revisar?', a: 'Cuando llegaron todas las respuestas de la ronda.' },
    { q: '¿Qué indica una posible fuga de información?', a: 'Que un actor cita o reacciona a algo que no pudo conocer.' },
    { q: '¿Qué hacer si hay más actores que el límite de concurrencia?', a: 'Lanzarlos por oleadas; el límite se verifica en la documentación vigente.' }
  ],
  quiz: [
    { q: '¿Por qué lanzar todos los actores en un solo mensaje?', opts: ['Para que corran en paralelo y sin cruzarse', 'Porque es obligatorio por la norma', 'Para gastar menos memoria del disco'], correct: 0, why: 'Así cada actor responde a la vez, sin ver lo que hacen los demás.' },
    { q: 'Mientras esperas la ronda, lo mejor es:', opts: ['Preguntar cada minuto el avance', 'Esperar las notificaciones y adelantar lo que no dependa de la ronda', 'Relanzar a todos'], correct: 1, why: 'El sondeo solo gasta turnos; las notificaciones avisan al terminar.' },
    { q: 'Un actor cita un hecho que solo conocía otro. Es:', opts: ['Buena señal de coherencia', 'Una posible fuga de aislamiento a corregir', 'Irrelevante'], correct: 1, why: 'Rompe la premisa de que cada actor sabe solo lo suyo.' }
  ]
});
