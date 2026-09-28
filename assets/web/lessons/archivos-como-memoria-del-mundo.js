Lesson.start({
  id: 'archivos-como-memoria-del-mundo', area: 'Claude Code como motor de simulación', areaIcon: '🤖', icon: '🗂️',
  title: 'Archivos como memoria del mundo',
  subtitle: 'Dossier, perfiles, rondas y contextos: el disco es el estado del mundo y la memoria entre sesiones.',
  norma: 'Lo que no está en un archivo no existe para un subagente; el disco es la única memoria compartida y auditable (verificar en la documentación vigente).',
  intro: '<p>MiroFish delega la memoria de sus agentes en un servicio externo. Aquí la memoria es <b>una carpeta</b>. Como un subagente arranca sin historial, todo lo que el mundo «recuerda» debe estar escrito: el dossier común, el perfil de cada actor, la respuesta de cada ronda y lo que cada uno puede saber en la ronda siguiente. Con esto ganas dos cosas: aislamiento controlado y la posibilidad de <b>retomar mañana</b> una corrida que dejaste a medias.</p>',
  sections: [
    { h: 'Qué archivos forman el mundo',
      html: '<table><tr><th>Archivo</th><th>Qué guarda</th><th>Quién lo lee</th></tr><tr><td>Dossier</td><td>Hechos comunes, con fuente</td><td>Todos los actores</td></tr><tr><td>Perfil de cada actor</td><td>Quién es, qué quiere, qué sabe y otros no</td><td>Solo ese actor</td></tr><tr><td>Consigna de la ronda</td><td>Situación, decisión central, formato</td><td>Solo ese actor</td></tr><tr><td>Respuesta de la ronda</td><td>Lo que decidió</td><td>El orquestador</td></tr><tr><td>Resolución</td><td>Hechos fechados con etiqueta de visibilidad</td><td>El orquestador</td></tr><tr><td>Contexto de cada actor</td><td>Lo que puede saber en la ronda siguiente</td><td>Solo ese actor</td></tr></table><p>Un caso de estructura real (una corrida de cinco actores y cuatro rondas) produjo un dossier, cinco perfiles, diecisiete respuestas, tres resoluciones y un informe. Es solo un orden de magnitud: la tuya puede diferir.</p>' },
    { h: 'Por qué un archivo por actor',
      html: '<p>Si varios subagentes escriben en el mismo archivo a la vez, pueden pisarse. Es una precaución de diseño, no una regla oficial: <b>un archivo de salida por actor y por ronda</b>. Además, así puedes saber de un vistazo quién respondió y quién falta (lo que necesitas para recuperar un agente caído).</p><p>Del mismo modo, los archivos que un actor <i>puede</i> leer son los que tú le nombras. El aislamiento vive en las rutas.</p>' },
    { h: 'El contexto: la pieza que evita fugas',
      html: '<p>Entre rondas, el orquestador resuelve los hechos y etiqueta quién los ve. Luego se <b>arma el contexto de cada actor</b>: solo las líneas donde su etiqueta aparece. Un ejemplo ficticio de lo que sabría la supervisión en la ronda 2:</p><ul><li>12 de mayo [Contratista, Supervisión] Carta del contratista por los ensayos pendientes.</li><li>13 de mayo [Supervisión] Anotación interna de la supervisión.</li></ul><p>La Entidad no vería ninguna de esas dos líneas. El armado se puede hacer a mano o con un script (área 7). Lo importante: <b>el contexto es una consecuencia de la resolución</b>, no algo que se escribe aparte.</p>' },
    { h: 'Memoria entre sesiones',
      html: '<p>Cada sesión de Claude Code empieza con contexto fresco. La documentación describe dos mecanismos para persistir conocimiento: archivos de instrucciones que escribes tú y notas que Claude guarda. Para una simulación no te apoyes en ninguno de esos: usa <b>la carpeta de la corrida</b>. Si el límite de sesión te corta en la ronda 3, abres una sesión nueva, le pides leer el estado en disco y continúas. Los detalles de esos mecanismos se verifican en la documentación vigente.</p>' },
    { h: 'La silla del actor y una regla de higiene',
      html: '<p>Para el actor el mundo es lo que hay en tres archivos: su perfil, el dossier y su contexto. Nada más. Y una regla de higiene: en los archivos van <b>roles, nunca nombres de personas</b>, ni datos personales. Si el texto va a salir de tu máquina hacia un servicio externo, piensa antes qué contiene (área 3).</p>' }
  ],
  keypoints: [
    'El disco reemplaza a la memoria externa de MiroFish: dossier, perfiles, respuestas, resolución y contextos.',
    'Un subagente sin historial solo sabe lo que hay en archivos y en su mensaje.',
    'Un archivo de salida por actor y por ronda evita pisarse y muestra quién falta.',
    'El contexto de cada actor se deriva de la resolución con etiquetas de visibilidad.',
    'Para retomar una corrida en otra sesión, se lee el estado en disco.',
    'En los archivos van roles, no nombres de personas.'
  ],
  flashcards: [
    { q: '¿Dónde vive la memoria del mundo simulado?', a: 'En archivos: dossier, perfiles, respuestas por ronda, resolución y contextos.' },
    { q: '¿Por qué un archivo de salida por actor y por ronda?', a: 'Para no pisar escrituras y saber quién falta.' },
    { q: '¿De dónde sale el contexto de un actor?', a: 'De la resolución: solo las líneas cuya etiqueta lo incluye.' },
    { q: '¿Cómo retomas una corrida tras un corte de sesión?', a: 'Abres una sesión nueva y le haces leer el estado guardado en disco.' },
    { q: '¿Qué va en los archivos: roles o nombres?', a: 'Roles, nunca nombres de personas.' }
  ],
  quiz: [
    { q: '¿Por qué el actor no recuerda la ronda anterior por sí solo?', opts: ['Porque el modelo olvida siempre', 'Porque un subagente arranca sin historial y solo lee lo que se le da', 'Porque los archivos se borran'], correct: 1, why: 'Sin historial heredado, la continuidad depende del contexto que armas y guardas.' },
    { q: 'El contexto de la ronda 2 de un actor se arma a partir de:', opts: ['Las respuestas de todos los actores', 'Las líneas de la resolución que lo incluyen en su etiqueta', 'El perfil de los demás'], correct: 1, why: 'Es la etiqueta de visibilidad la que decide qué sabe cada uno.' },
    { q: 'Si la sesión se corta en la ronda 3, lo más sólido es:', opts: ['Empezar de nuevo', 'Retomar leyendo el estado en la carpeta de la corrida', 'Confiar en que Claude recuerde'], correct: 1, why: 'Cada sesión empieza con contexto fresco; el disco conserva el estado.' }
  ]
});
