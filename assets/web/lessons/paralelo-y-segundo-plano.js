Lesson.start({
  id: 'paralelo-y-segundo-plano', area: 'Claude Code como motor de simulación', areaIcon: '🤖', icon: '⏱️',
  title: 'Paralelo y segundo plano',
  subtitle: 'Todos los actores de una ronda a la vez, esperando las notificaciones sin sondear.',
  norma: 'Los límites y el modo de ejecución de los subagentes cambian: verificar en la documentación vigente antes de contar con ellos.',
  intro: '<p>Una ronda tiene cinco actores que no dependen entre sí: ninguno necesita la respuesta del otro para decidir, porque cada uno responde con lo que sabía al inicio de la ronda. Eso permite lanzarlos <b>todos en el mismo mensaje</b> y esperar. Lo que cambia tu forma de trabajar es aprender a <b>no sondear</b>: lanzas, esperas las notificaciones de fin y recién entonces lees. Y sabes qué hacer si uno se cae.</p>',
  sections: [
    { h: 'Un mensaje, N subagentes',
      html: '<p>La documentación de Claude Code indica que para tareas independientes se pueden lanzar varios subagentes a la vez y que la sesión principal sintetiza lo que devuelven. En la simulación: <b>una ronda = un mensaje con un subagente por actor</b>. Si tienes cinco actores, cinco lanzamientos en el mismo turno.</p><ul><li>Cada uno recibe su propia consigna y escribe en su propio archivo.</li><li>Como ninguno depende de otro dentro de la ronda, el orden no importa.</li></ul><p>Lo que no se paraleliza es la resolución: esa la haces tú, después, viéndolo todo.</p>' },
    { h: 'Segundo plano y notificaciones',
      html: '<p>Según la documentación, los subagentes pueden correr en segundo plano y su resultado llega como una <b>notificación de finalización</b> en un turno posterior. Si preguntas el avance antes, lo esperable es que se informe que siguen en ejecución. Por eso conviene:</p><ol><li>Lanzar la ronda completa.</li><li>No repetir consultas de estado ni volver a lanzar «por si acaso».</li><li>Cuando llegan las notificaciones, revisar formato, aislamiento y resultados simulados marcados.</li></ol><p>Si lanzas de nuevo un actor que seguía corriendo, gastas cuota y puedes duplicar archivos. El modo por defecto en sesión interactiva, en modo no interactivo o en el SDK ha cambiado con las versiones: <b>verificar en la documentación vigente</b>.</p>' },
    { h: 'Límites que sí importan',
      html: '<p>Hay un <b>límite de concurrencia</b> de subagentes, configurable; no lo fijes de memoria, consúltalo en la documentación vigente. Para esta app la conclusión es práctica: con cinco o seis actores no lo rozas, pero si algún día simulas más voces, se lanzan <b>por oleadas</b>.</p><p>Hay además límites de uso de la sesión y del plan. Ninguno se cita aquí con cifras: cambian con frecuencia. Cuéntalos así: subagentes por ronda por número de rondas, más el trabajo tuyo de resolución e informe.</p>' },
    { h: 'Recuperar un agente caído',
      html: '<p>Si el límite de sesión corta a un actor a mitad de ronda, no relances toda la ronda. Pasos:</p><ol><li>Revisa qué archivos de salida existen: cada actor escribe el suyo.</li><li>Identifica quién falta o dejó una respuesta parcial.</li><li>Relanza <b>solo ese actor</b> con la misma consigna.</li></ol><p>Según la documentación, un subagente terminado puede reanudarse conservando su historial, con algunas excepciones (los tipos de solo lectura son de un solo uso). Para la simulación, relanzar con la consigna guardada en disco suele ser más limpio y reproducible que depender de una reanudación. Es una decisión de diseño, no una receta oficial.</p>' },
    { h: 'La silla del actor',
      html: '<p>El actor no sabe si corre en paralelo ni si otros ya terminaron. Para él la ronda es un instante: recibe, decide, escribe. Por eso las respuestas de una misma ronda son comparables: todos decidieron con la información del mismo momento. Si relanzas a uno tarde, sigue decidiendo con la misma consigna, no con lo que respondieron los demás.</p>' }
  ],
  keypoints: [
    'Una ronda es un solo mensaje con un subagente por actor, porque no dependen entre sí.',
    'La resolución no se paraleliza: la haces tú después, viendo todo.',
    'El resultado llega por notificación de fin; lanza, espera y luego lee, sin sondear.',
    'No relances actores que aún corren: duplicas cuota y archivos.',
    'Los límites de concurrencia y de uso son configurables y cambian: verificar en la documentación vigente.',
    'Si un agente cae, relanza solo ese actor con su consigna guardada en disco.'
  ],
  flashcards: [
    { q: '¿Por qué los actores de una ronda se pueden lanzar juntos?', a: 'Porque ninguno depende de la respuesta de otro dentro de la misma ronda.' },
    { q: '¿Cómo te enteras de que un actor terminó?', a: 'Por la notificación de finalización, sin sondear el estado.' },
    { q: '¿Qué haces si un actor se cae por límite de sesión?', a: 'Compruebas sus archivos de salida y relanzas solo a ese actor.' },
    { q: '¿Qué no se fija de memoria?', a: 'Los límites de concurrencia y de uso: se consultan en la documentación vigente.' },
    { q: '¿Qué parte de una ronda no es paralela?', a: 'La resolución del orquestador entre rondas.' }
  ],
  quiz: [
    { q: 'Ya lanzaste los cinco actores y aún no llegan las notificaciones. ¿Qué haces?', opts: ['Relanzas a todos por si acaso', 'Esperas las notificaciones sin sondear', 'Resuelves la ronda con lo que tengas'], correct: 1, why: 'Relanzar duplica cuota y archivos; resolver a medias contamina la ronda siguiente.' },
    { q: 'Un actor quedó a medias por un corte de sesión. Lo mejor es:', opts: ['Repetir la ronda completa', 'Relanzar solo ese actor con su consigna', 'Inventar su respuesta'], correct: 1, why: 'Cada actor tiene su archivo; solo se repite lo que falta. Inventar respuestas está prohibido.' },
    { q: 'El límite de concurrencia de subagentes:', opts: ['Es fijo y conviene memorizarlo', 'Es configurable y se verifica en la documentación vigente', 'No existe'], correct: 1, why: 'Los valores cambian con las versiones; con pocos actores rara vez estorba.' }
  ]
});
