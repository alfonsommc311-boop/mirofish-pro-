Lesson.start({
  id: 'anatomia-de-la-consigna', area: 'La consigna de cada ronda', areaIcon: '✍️', icon: '🧱',
  title: 'Anatomía de la consigna',
  subtitle: 'Seis piezas que convierten un perfil en una decisión fechada y comparable.',
  norma: 'La consigna dice qué puede ver el actor, qué decide y cómo responde; nada más (verificar el método en el skill vigente).',
  intro: '<p>El perfil dice <b>quién es</b> el actor; la consigna le dice <b>qué le toca hacer hoy</b>. Cada ronda, cada actor recibe una consigna nueva, armada por el orquestador, y la responde con su propio subagente. Si la consigna es vaga, las respuestas serán ensayos de opinión; si es precisa, serán decisiones que puedes fechar y resolver. Esta lección desarma la consigna en sus piezas.</p>',
  sections: [
    { h: 'Las seis piezas',
      html: '<table><tr><th>Pieza</th><th>Qué contiene</th><th>Para qué</th></tr><tr><td>1. Archivos permitidos</td><td>Su perfil y su contexto de esta ronda</td><td>Define lo que el actor sabe</td></tr><tr><td>2. Ventana de fechas</td><td>Desde qué día hasta qué día decide</td><td>Evita que viva en el futuro</td></tr><tr><td>3. Situación</td><td>Lo ocurrido desde su última decisión, visto por él</td><td>Le da el punto de partida</td></tr><tr><td>4. Decisión central</td><td>Una pregunta concreta y fechada</td><td>Obliga a elegir</td></tr><tr><td>5. Formato</td><td>Secciones fijas y tope de palabras</td><td>Respuestas comparables</td></tr><tr><td>6. Archivo de salida</td><td>Ruta donde escribe su respuesta</td><td>El orquestador sabe dónde leer</td></tr></table><p>Las plantillas completas del método están en el skill; aquí importa entender <b>por qué</b> cada pieza está.</p>' },
    { h: 'Una consigna de ejemplo (ficticia)',
      html: '<p>Ronda 2, actor: Consorcio Andino. Caso: la supervisión (Consorcio Supervisor Horizonte) difirió parte de una valorización hasta recibir ensayos.</p><p><i>Archivos permitidos: tu perfil y tu contexto de la ronda 2. No leas otra carpeta.<br>Ventana: del 10 al 14 del mes.<br>Situación: recibiste la carta de la supervisión que difiere una parte de la valorización hasta contar con los resultados de ensayos. La Municipalidad Distrital de Villa Esperanza aún no se ha pronunciado ante ti.<br>Decisión central: ¿qué entregas el día 12 y a quién?<br>Formato: tres secciones (Decisión, Razón, Si pasa X), máximo 250 palabras, más una línea de indicadores.<br>Salida: escribe tu respuesta en la ruta de salida que se te indica.</i></p><p>Nota que no dice cómo debe sentirse ni qué le conviene: eso ya lo dice su perfil.</p>' },
    { h: 'La silla del actor',
      html: '<p>Desde el otro lado, el actor solo tiene esa hoja: no recuerda la conversación del orquestador ni sabe que existen los demás subagentes. Si algo no está en su perfil, su contexto o su consigna, <b>para él no existe</b>. Por eso una consigna que asume «lo que ya sabes de la ronda pasada» falla: o lo trae el contexto, o el actor no lo tiene.</p>' },
    { h: 'Lo que la consigna nunca lleva',
      html: '<ul><li>La decisión que tú esperas o prefieres.</li><li>Lo que hicieron o piensan los demás actores, salvo lo que él vería en su mundo.</li><li>Documentos inventados «para ayudarle»: si el actor necesita un dato, va en el dossier con su fuente.</li><li>Normas con número de artículo: solo por su nombre, y siempre <b>verificar la norma vigente y el expediente técnico aprobado</b>.</li></ul>' },
    { h: 'Del molde a la práctica',
      html: '<p>La consigna se arma igual cada ronda: solo cambian ventana, situación y decisión. Eso la hace <span class="hl">plantillable</span>, y es la razón de ser del generador de consignas de esta app. Las siguientes lecciones profundizan en cada pieza: la decisión central, el formato, las reglas condicionales, los números y el aislamiento. Cómo se lanzan los subagentes en paralelo lo cubren las lecciones del área de corrida y, en general, Claude Code Experto.</p>' }
  ],
  keypoints: [
    'La consigna tiene seis piezas: archivos permitidos, ventana de fechas, situación, decisión central, formato y archivo de salida.',
    'El perfil dice quién es el actor; la consigna dice qué le toca decidir esta ronda.',
    'El actor solo existe en su hoja: lo que no está en perfil, contexto o consigna, no lo sabe.',
    'La consigna no lleva la respuesta deseada ni lo que hacen los demás.',
    'Como solo cambian ventana, situación y decisión, la consigna se plantilla.'
  ],
  flashcards: [
    { q: '¿Cuáles son las seis piezas de la consigna?', a: 'Archivos permitidos, ventana de fechas, situación, decisión central, formato y archivo de salida.' },
    { q: '¿Qué diferencia hay entre perfil y consigna?', a: 'El perfil es quién es el actor; la consigna es qué decide en esta ronda.' },
    { q: '¿Por qué va una ventana de fechas?', a: 'Para que el actor decida dentro de un tramo de tiempo y no anticipe el futuro.' },
    { q: '¿Qué pasa con lo que no está en su hoja?', a: 'Para el actor no existe: no lo recuerda ni lo deduce de otros agentes.' }
  ],
  quiz: [
    { q: '¿Qué pieza le dice al orquestador dónde leer la respuesta?', opts: ['La situación', 'El archivo de salida', 'La ventana de fechas'], correct: 1, why: 'La ruta de salida permite recoger las respuestas de todos los actores sin buscar.' },
    { q: 'La situación de la consigna debe contar:', opts: ['Todo lo que pasó en el mundo', 'Lo ocurrido desde su última decisión, visto desde su silla', 'Lo que hará el otro actor'], correct: 1, why: 'El actor solo puede reaccionar a lo que él conoce; el resto lo filtra el orquestador.' },
    { q: 'Un dato que el actor necesita y no está en el dossier:', opts: ['Se lo inventa el actor', 'Se agrega al dossier con su fuente o se marca como hipótesis', 'Se omite sin decirlo'], correct: 1, why: 'Ningún actor inventa documentos; lo no verificado se marca como hipótesis.' }
  ]
});
