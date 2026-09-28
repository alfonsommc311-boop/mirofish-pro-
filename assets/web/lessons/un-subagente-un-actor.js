Lesson.start({
  id: 'un-subagente-un-actor', area: 'Claude Code como motor de simulación', areaIcon: '🤖', icon: '🧑‍🤝‍🧑',
  title: 'Un subagente, un actor',
  subtitle: 'Contexto aislado: cada actor solo sabe lo que le entregas, no lo que sabe el resto.',
  norma: 'Un actor que no puede ver lo ajeno no puede usarlo; el aislamiento es la regla del método (verificar en la documentación vigente).',
  intro: '<p>La tentación es escribir en un solo chat: «tú eres el contratista, ahora la Entidad, ahora la supervisión». Funciona a medias y falla justo donde importa: <b>el mismo modelo sabe todo lo que dijo antes</b> y cada personaje termina razonando con la información de los demás. Un subagente arranca con contexto limpio, y eso es exactamente lo que necesita un actor: saber solo lo suyo.</p>',
  sections: [
    { h: 'Qué recibe un subagente y qué no',
      html: '<p>Según la documentación de Claude Code, un subagente arranca con su propio prompt de sistema y con el mensaje de tarea de quien lo lanza (más los archivos de instrucciones del proyecto). <b>No recibe el historial de tu conversación</b> ni lo que tú leíste antes. Todo lo que necesite debe ir en el mensaje de tarea o en archivos que pueda leer. Los detalles exactos (campos, herramientas, configuración) cambian: <b>verificar en la documentación vigente</b>.</p><ul><li>Recibe: perfil, dossier, consigna de la ronda.</li><li>No recibe: lo que pensaste, lo que respondieron los otros actores, la resolución completa.</li></ul>' },
    { h: 'Por qué un solo chat contamina',
      html: '<p>En un chat único, si el «contratista» acaba de saber por el «supervisor» que faltan ensayos, ya no puede fingir sorpresa. La información se filtra por construcción. Con un subagente por actor, la <b>asimetría se protege sola</b>: el contratista de la ronda 2 no conoce el memorando interno de la Entidad, salvo que tú, como orquestador, decidas que se entere.</p><p>Es también más fácil auditar: cada respuesta es de un actor concreto y queda en su archivo.</p>' },
    { h: 'Cómo se le da forma a un actor',
      html: '<p>La documentación describe subagentes definidos como archivos y también tareas lanzadas con su prompt. Para la simulación, el patrón natural es entregar en la tarea la <b>ficha del actor</b>; es una decisión de diseño, no una receta oficial. Un ejemplo de consigna corta:</p><p><i>Eres el Consorcio Andino (contratista). Lee solo tu perfil y el dossier en las rutas indicadas. No leas otras carpetas. Responde con las secciones fijas y guarda tu respuesta en tu archivo de salida.</i></p><p>Las palabras clave son <b>rutas indicadas</b> y <b>no leas otras carpetas</b>: el aislamiento no es magia, se pide y se revisa (área 5).</p>' },
    { h: 'Lo que el aislamiento no resuelve solo',
      html: '<ul><li>Si le das al actor una carpeta con todo, puede leer todo: el aislamiento depende de <b>qué archivos le abres</b>.</li><li>Un modelo puede ser demasiado razonable y ceder donde un contratista real no cedería: se trabaja en el perfil (área 4).</li><li>Un subagente no debe inventar documentos ni citar artículos: normas solo por su nombre, y verificar la norma vigente y el expediente técnico aprobado.</li></ul>' },
    { h: 'La silla del actor',
      html: '<p>Diseña pensando en quien recibe el mensaje. Para el actor, el mundo es lo que hay en su perfil, el dossier y su consigna. Si tu consigna le pide «lo que haría el otro», le estás pidiendo que use información que no tiene. Pídele <b>su decisión</b>, con lo que sabe y con sus hipótesis marcadas como tales.</p>' }
  ],
  keypoints: [
    'Un subagente arranca con contexto limpio: no hereda el historial de tu conversación.',
    'Eso protege la asimetría de información, que es el motor de la simulación.',
    'En un solo chat todos los personajes comparten memoria y se contaminan.',
    'Al actor se le entrega perfil, dossier y consigna; nada más.',
    'El aislamiento depende de los archivos que le abres y de lo que le prohíbes leer.',
    'Los detalles técnicos de subagentes se verifican en la documentación vigente.'
  ],
  flashcards: [
    { q: '¿Por qué un subagente por actor y no un chat?', a: 'Porque el subagente arranca sin historial y cada actor conserva solo lo suyo.' },
    { q: '¿Qué no recibe un subagente?', a: 'El historial de tu conversación ni lo que leíste antes.' },
    { q: '¿Cómo llega la información al actor?', a: 'En el mensaje de tarea y en los archivos que puede leer.' },
    { q: '¿Qué frase de consigna protege el aislamiento?', a: 'Rutas indicadas y no leer otras carpetas.' },
    { q: '¿Qué no resuelve solo el aislamiento?', a: 'Una carpeta abierta de más, un actor demasiado razonable o documentos inventados.' }
  ],
  quiz: [
    { q: '¿Qué pasa si los tres actores viven en un solo chat?', opts: ['Cada uno razona solo con lo suyo', 'Comparten memoria y se contaminan', 'Se vuelven más creíbles'], correct: 1, why: 'El mismo contexto contiene lo que dijeron los demás, así que nadie puede fingir ignorancia.' },
    { q: '¿Qué le pides a un actor en la consigna?', opts: ['Lo que haría el otro actor', 'Su propia decisión con lo que sabe', 'Un resumen de todo el caso'], correct: 1, why: 'Pedir lo del otro lo obliga a usar información que no tiene.' },
    { q: 'El aislamiento de un actor depende sobre todo de:', opts: ['Los archivos que le abres y lo que le prohíbes', 'El tamaño del modelo', 'La hora de lanzamiento'], correct: 0, why: 'Si ve una carpeta con todo, puede leer todo; hay que pedirlo y revisarlo.' }
  ]
});
