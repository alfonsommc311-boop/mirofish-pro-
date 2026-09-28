Lesson.start({
  id: 'estructura-del-informe', area: 'El informe y la conversación con el mundo', areaIcon: '📝', icon: '🗒️',
  title: 'Estructura del informe',
  subtitle: 'De la respuesta corta al anexo: nueve secciones y para qué sirve cada una.',
  norma: 'Documento interno de ensayo: no se envía a la Entidad ni sustituye el expediente (verificar la norma vigente y el expediente técnico aprobado).',
  intro: '<p>Al terminar las rondas tienes decenas de respuestas, resoluciones e indicadores. Nadie las va a leer. El informe es lo que <b>sí</b> se lee: lo escribes tú, el orquestador, y responde por él. Su estructura tiene una lógica de lectura en capas: quien tiene dos minutos lee la primera sección; quien quiera auditar llega al anexo. Las nueve secciones de abajo son una estructura razonable para el informe, no una plantilla oficial: <b>ajústala a la plantilla de tu skill</b>.</p>',
  sections: [
    { h: 'Por qué en capas',
      html: '<p>Un informe de simulación puede fallar de dos maneras: tan largo que nadie llega a la conclusión, o tan corto que nadie puede comprobar de dónde salió. La solución es ordenar de lo más resumido a lo más verificable. Desde tu silla de supervisor, es el mismo criterio de un informe de supervisión: primero lo que hay que decidir, después el sustento.</p><p>Desde la silla del lector (tu jefe, un colega): necesita saber <i>qué hago con esto</i> antes de saber <i>cómo se hizo</i>.</p>' },
    { h: 'Las nueve secciones',
      html: '<table><tr><th>#</th><th>Sección</th><th>Para qué sirve</th></tr><tr><td>1</td><td>Respuesta corta</td><td>La pregunta y lo que el ensayo mostró, en pocas líneas y con verbos de ensayo («en esta corrida ocurrió…»).</td></tr><tr><td>2</td><td>Qué se simuló</td><td>Semilla, evento, actores, horizonte y rondas. Para que el lector sepa qué mundo se armó.</td></tr><tr><td>3</td><td>Cronología</td><td>Hechos y decisiones en orden, con fecha y quién los vio.</td></tr><tr><td>4</td><td>Puntos de quiebre</td><td>La decisión o hecho desde el cual el caso cambió de rumbo.</td></tr><tr><td>5</td><td>Brechas de percepción</td><td>Lo que cada actor creía de su riesgo frente a lo que creían los demás.</td></tr><tr><td>6</td><td>Convergencias y divergencias</td><td>Lo que todos vieron venir y lo que solo uno vio.</td></tr><tr><td>7</td><td>Recomendaciones</td><td>Acciones con plazo y responsable (lección siguiente).</td></tr><tr><td>8</td><td>Limitaciones</td><td>Lo que el informe dice de sí mismo (dos lecciones más adelante).</td></tr><tr><td>9</td><td>Anexo</td><td>Perfiles, hipótesis de simulación, línea de indicadores, resultados simulados marcados y rutas de los archivos.</td></tr></table>' },
    { h: 'Ejemplo de respuesta corta',
      html: '<p>Caso ficticio: la Municipalidad Distrital de Villa Esperanza, el Consorcio Andino y el Consorcio Supervisor Horizonte.</p><p><i>«En esta corrida, la supervisión difirió parte de la valorización a la espera de ensayos (resultado simulado) y el contratista respondió con una carta que la Entidad recibió tarde. El punto débil que más se explotó fue el plazo de la respuesta. Se recomienda revisar en la semana los plazos que corren para cada parte. Es un ensayo con actores simulados, no una predicción.»</i></p><p>Nota que no promete un resultado de la valorización: describe qué pasó en el ensayo.</p>' },
    { h: 'Errores típicos',
      html: '<ul><li><b>Empezar por la cronología.</b> El lector se pierde antes de llegar a lo importante.</li><li><b>Mezclar hallazgo y adorno.</b> Cada sección responde una pregunta; si no responde, va al anexo.</li><li><b>Olvidar el anexo.</b> Sin él, nadie puede contrastar tu lectura con lo que dijo cada actor.</li><li><b>Presentar un resultado simulado como dato.</b> Ensayos de laboratorio, decisiones de asesoría o de terceros: siempre marcados como <i>resultado simulado</i>.</li></ul>' },
    { h: 'Dónde se queda el informe',
      html: '<p>Es un documento interno de trabajo. Si algo de lo aprendido se convierte en una carta o un informe real, se redacta aparte con los hechos del expediente (ver Informe Obra PRO y Redacción PRO). Las normas se citan solo por su nombre: verificar la norma vigente y el expediente técnico aprobado.</p>' }
  ],
  keypoints: [
    'El informe se ordena en capas: de la respuesta corta al anexo verificable.',
    'Nueve secciones razonables: respuesta corta, qué se simuló, cronología, puntos de quiebre, brechas, convergencias y divergencias, recomendaciones, limitaciones, anexo.',
    'La respuesta corta usa verbos de ensayo y no promete resultados.',
    'El anexo permite auditar: perfiles, hipótesis, indicadores y marcas de resultado simulado.',
    'Es un documento interno; lo real se redacta aparte con los hechos del expediente.'
  ],
  flashcards: [
    { q: '¿Por qué el informe va en capas?', a: 'Para que quien tiene dos minutos lea la conclusión y quien quiera auditar llegue al anexo.' },
    { q: '¿Qué va primero?', a: 'La respuesta corta a la pregunta que originó la simulación.' },
    { q: '¿Qué va en el anexo?', a: 'Perfiles, hipótesis de simulación, indicadores, resultados simulados marcados y rutas de los archivos.' },
    { q: '¿Cómo se presenta el resultado de un ensayo de laboratorio inventado por la simulación?', a: 'Siempre como «resultado simulado».' },
    { q: '¿Las nueve secciones son oficiales?', a: 'No: son una estructura razonable; se ajusta a la plantilla de tu skill.' }
  ],
  quiz: [
    { q: '¿Con qué debe abrir el informe?', opts: ['La cronología completa', 'La respuesta corta a la pregunta', 'Los perfiles de los actores'], correct: 1, why: 'El lector necesita saber qué hacer con el ensayo antes de saber cómo se hizo.' },
    { q: 'Una frase adecuada para la respuesta corta es:', opts: ['«La Entidad aprobará la valorización»', '«En esta corrida la Entidad respondió tarde»', '«El contratista ganará el arbitraje»'], correct: 1, why: 'Describe lo ocurrido en el ensayo; no promete resultados de valorizaciones ni arbitrajes.' },
    { q: '¿Por qué importa el anexo?', opts: ['Para alargar el informe', 'Para que se pueda contrastar tu lectura con lo que dijo cada actor', 'Para reemplazar el expediente'], correct: 1, why: 'Sin anexo, el informe no se puede auditar.' }
  ]
});
