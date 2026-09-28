Lesson.start({
  id: 'lo-que-el-actor-no-debe-ver', area: 'La consigna de cada ronda', areaIcon: '✍️', icon: '🙈',
  title: 'Lo que el actor no debe ver',
  subtitle: 'Aislamiento por archivos y rutas, y cómo detectar una fuga de información entre actores.',
  norma: 'Si un actor puede leer lo que solo otro sabe, la simulación deja de ensayar y empieza a coordinar.',
  intro: '<p>Todo el valor del método depende de que cada actor solo sepa lo suyo. Un subagente tiene acceso a herramientas de lectura; si su consigna no lo limita, puede abrir carpetas de otros actores, el informe en borrador o la resolución completa del orquestador. Una sola fuga y el contratista «adivina» lo que solo sabía la supervisión: la asimetría, que era el motor, desaparece. Esta lección trata de cómo cerrar esa puerta y cómo notar que se abrió.</p>',
  sections: [
    { h: 'Cómo se fuga la información',
      html: '<ul><li><b>Carpetas compartidas:</b> el actor lista un directorio y ve los perfiles de todos.</li><li><b>Archivos del orquestador:</b> la resolución «vista de dios», el informe o las notas de trabajo.</li><li><b>Respuestas de otros:</b> el archivo de salida de otro actor en la misma ronda.</li><li><b>Contexto contaminado:</b> el orquestador pegó en la consigna algo que el actor no debía saber.</li><li><b>Memoria heredada:</b> reutilizar un mismo agente entre rondas arrastra lo que ya vio.</li></ul><p>Según la documentación de Claude Code, un subagente nuevo parte con su propio contexto; lo que necesite debe ir en su mensaje o en disco (verificar en la documentación vigente). Eso ayuda, pero no impide que lea archivos si tiene permiso.</p>' },
    { h: 'Las tres defensas de la consigna',
      html: '<ol><li><b>Lista blanca:</b> «Puedes leer solo estos dos archivos» con rutas absolutas; no «no leas los perfiles de otros».</li><li><b>Carpetas prohibidas, dichas por su ruta:</b> nombra las que existen y que no debe abrir (perfiles ajenos, resoluciones, informe).</li><li><b>Salida única:</b> «escribe solo en esta ruta».</li></ol><p><i>Ejemplo de bloque (ficticio, actor Consorcio Andino):<br>Puedes leer únicamente: la ruta de tu perfil y la ruta de tu contexto de la ronda. No abras ninguna otra carpeta ni archivo, ni listes directorios. Si algo no está en esos archivos, no lo sabes. Escribe solo en la ruta de salida indicada.</i></p><p>Las rutas absolutas evitan ambigüedad; la lista blanca es más fuerte que la prohibición, porque una lista negra siempre olvida algo.</p>' },
    { h: 'La defensa estructural: el contexto por actor',
      html: '<p>La mejor barrera no es una frase en la consigna, sino <b>una carpeta o archivo de contexto distinto por actor</b>, armado por el orquestador solo con lo que ese actor puede saber. Así, aunque el actor mire otro archivo, no encuentra nada dañino. Cómo se generan esos contextos lo cubre el área de resolución y la de corrida.</p>' },
    { h: 'Cómo detectar una fuga',
      html: '<table><tr><th>Señal</th><th>Qué sospechar</th></tr><tr><td>Un actor cita un dato que solo tenía otro</td><td>Leyó archivos ajenos o el contexto fue mal armado</td></tr><tr><td>Reacciona a algo que aún no le llegó</td><td>Ventana de fechas o visibilidad mal resueltas</td></tr><tr><td>Sus respuestas coinciden demasiado con las de otro</td><td>Compartió carpeta o copió su salida</td></tr><tr><td>Menciona la existencia de los otros agentes o de la simulación</td><td>Vio archivos del orquestador</td></tr></table><p>Al leer cada respuesta, pregúntate: <i>¿cómo pudo saber esto?</i> Si la respuesta no está en su contexto, hay fuga.</p>' },
    { h: 'Qué hacer si la hay',
      html: '<ol><li>Marca esa respuesta como contaminada.</li><li>Corrige la causa (contexto, ruta o lista blanca).</li><li>Relanza <b>solo ese actor</b> en esa ronda, con contexto limpio; no toda la ronda.</li><li>Anótalo en las limitaciones del informe.</li></ol><p>Un actor omnisciente por error produce conclusiones que parecen brillantes y son artefactos del método. Y recuerda que si el texto sale a un servicio externo, cuenta también la confidencialidad: roles y no nombres.</p>' }
  ],
  keypoints: [
    'El aislamiento sostiene todo el método: si el actor sabe lo de otro, la asimetría desaparece.',
    'Las fugas típicas son carpetas compartidas, archivos del orquestador, salidas ajenas y contexto mal armado.',
    'La lista blanca con rutas absolutas es más fuerte que una lista de prohibiciones.',
    'La mejor barrera es un contexto distinto por actor, armado por el orquestador.',
    'Ante una fuga: marcar, corregir la causa, relanzar solo ese actor y anotarlo en las limitaciones.'
  ],
  flashcards: [
    { q: '¿Por qué importa que un actor no vea lo de otro?', a: 'Porque la asimetría de información es el motor del ensayo; sin ella, todos concluyen lo mismo.' },
    { q: '¿Qué es mejor: lista blanca o lista negra?', a: 'La lista blanca con rutas absolutas: una lista negra siempre olvida algo.' },
    { q: '¿Cuál es la defensa estructural?', a: 'Un contexto distinto por actor, armado por el orquestador solo con lo que puede saber.' },
    { q: '¿Cómo se detecta una fuga?', a: 'Preguntándose «¿cómo pudo saber esto?» al leer cada respuesta.' }
  ],
  quiz: [
    { q: 'Un actor cita una cifra que solo conocía la supervisión. Lo más probable es:', opts: ['Buena intuición del modelo', 'Una fuga por contexto o lectura de archivos ajenos', 'Un error de ortografía'], correct: 1, why: 'Si el dato no está en su contexto, hubo fuga y la respuesta queda contaminada.' },
    { q: 'La forma más sólida de limitar lo que lee un actor es:', opts: ['Pedirle que sea honesto', 'Una lista de archivos permitidos con rutas absolutas', 'Prohibir solo el informe'], correct: 1, why: 'La lista blanca es más fuerte que prohibir de a uno.' },
    { q: 'Detectada una fuga en un actor, lo indicado es:', opts: ['Relanzar toda la simulación', 'Relanzar solo ese actor con contexto limpio y anotarlo', 'Ignorarla si la respuesta es buena'], correct: 1, why: 'Se corrige la causa, se repite lo mínimo y se declara la limitación en el informe.' }
  ]
});
