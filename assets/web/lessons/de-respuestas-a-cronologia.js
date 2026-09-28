Lesson.start({
  id: 'de-respuestas-a-cronologia', area: 'Leer lo que salió', areaIcon: '📊', icon: '📆',
  title: 'De respuestas a cronología',
  subtitle: 'Diecisiete respuestas sueltas no son un caso: ordénalas por fecha y por quién se enteró.',
  norma: 'Una cronología separa lo que pasó en el mundo simulado de lo que cada actor supo y cuándo (verificar la norma vigente y el expediente técnico aprobado en cualquier caso real).',
  intro: '<p>Al terminar las rondas tienes una carpeta con respuestas de cada actor y las resoluciones del orquestador. Leerlas una tras otra da la falsa impresión de una historia, pero cada actor escribió desde su propio contexto. El primer paso de la lectura es <b>reconstruir una línea de tiempo común</b>: qué ocurrió, en qué fecha simulada, quién lo decidió y quién lo veía. Sobre esa línea recién se buscan brechas, quiebres y convergencias.</p>',
  sections: [
    { h: 'Por qué la cronología va primero',
      html: '<p>Las respuestas están ordenadas por <b>ronda y por actor</b>, no por fecha. Dos actores pueden responder en la misma ronda a hechos de días distintos. Si no fechas, confundes causa con consecuencia: la carta del contratista puede parecer respuesta a la decisión de la Entidad cuando en realidad la precedió.</p><ul><li>Cada hecho lleva <span class="hl">fecha simulada</span>.</li><li>Cada hecho lleva <span class="hl">quién lo hizo</span> y <span class="hl">quién lo vio</span>.</li><li>Lo que decide un tercero se marca como <b>resultado simulado</b>.</li></ul>' },
    { h: 'Qué extraer de cada respuesta',
      html: '<p>De cada respuesta saca solo tres cosas: la <b>acción concreta</b> (qué entregó, qué envió, qué decidió), la <b>fecha</b> en que ocurre y la <b>razón declarada</b>. Las opiniones y los temores del actor no son hechos de la línea: van a otra columna.</p><p>Desde la silla del actor: él cuenta su versión con lo que sabe. Desde la silla del orquestador: tú decides qué de eso <i>sucedió</i> en el mundo y qué solo fue su intención.</p>' },
    { h: 'Ejemplo ficticio: la línea de tiempo',
      html: '<p>Caso ficticio de la Municipalidad Distrital de Villa Esperanza, el Consorcio Andino y el Consorcio Supervisor Horizonte. Evento: la supervisión difiere parte de una valorización hasta recibir ensayos.</p><table><tr><th>Fecha simulada</th><th>Hecho</th><th>Lo hace</th><th>Lo ven</th></tr><tr><td>Día 1</td><td>Supervisión comunica el diferimiento parcial</td><td>Supervisión</td><td>Entidad, contratista</td></tr><tr><td>Día 3</td><td>Contratista solicita reunión y adjunta su sustento</td><td>Contratista</td><td>Supervisión, Entidad</td></tr><tr><td>Día 5</td><td>Memorando interno de la Entidad pidiendo criterio</td><td>Entidad</td><td>Solo la Entidad</td></tr><tr><td>Día 8</td><td>Laboratorio informa: resultado simulado, conforme</td><td>Tercero (simulado)</td><td>Supervisión</td></tr><tr><td>Día 10</td><td>Supervisión levanta parte del diferimiento</td><td>Supervisión</td><td>Contratista, Entidad</td></tr></table><p>Observa la columna final: el día 5 nadie más sabe del memorando. Esa asimetría explicará después una brecha.</p>' },
    { h: 'Errores comunes al ordenar',
      html: '<ul><li><b>Mezclar intención con hecho:</b> «el contratista pensaba paralizar» no es un evento; «el contratista comunica un aviso» sí.</li><li><b>Fechar por ronda:</b> la ronda 2 no es una fecha; usa la ventana de fechas de la consigna.</li><li><b>Olvidar los terceros:</b> un ensayo o una asesoría entra siempre como resultado simulado, nunca como dato real.</li><li><b>Citar un documento que no existe:</b> si una respuesta menciona un documento que el dossier no contiene, anótalo como hallazgo de calidad, no como hecho.</li></ul><p>Si mencionan normas, quedan solo por su nombre; verificar la norma vigente y el expediente técnico aprobado.</p>' },
    { h: 'Cómo pedírselo a Claude Code',
      html: '<p>Puedes delegar el primer borrador: pide que lea las resoluciones y las respuestas de una ronda y produzca una tabla con las cuatro columnas de arriba. <b>Tú revisas</b> contra las resoluciones: la cronología es tu responsabilidad, no la del modelo. Para la herramienta en sí (subagentes, lectura de archivos), ver Claude Code Experto; para el plazo real de una obra, Ruta Crítica PRO.</p>' }
  ],
  keypoints: [
    'Las respuestas vienen por ronda y actor; el caso se entiende por fecha.',
    'Cada hecho lleva fecha simulada, autor y quién lo ve.',
    'Intención y opinión no son hechos: van en otra columna.',
    'Los resultados de terceros entran siempre como resultado simulado.',
    'La cronología es la base de brechas, quiebres y convergencias.',
    'El borrador puede ser del modelo; la revisión es tuya.'
  ],
  flashcards: [
    { q: '¿Por qué no leer las respuestas en el orden de la carpeta?', a: 'Porque están por ronda y actor; sin fechas confundes causa con consecuencia.' },
    { q: '¿Qué columnas mínimas lleva una cronología?', a: 'Fecha simulada, hecho, quién lo hace y quién lo ve.' },
    { q: '¿Cómo se registra un ensayo de laboratorio en el ejemplo?', a: 'Como resultado simulado de un tercero.' },
    { q: '¿Una intención declarada es un hecho de la línea?', a: 'No: solo lo que efectivamente ocurre en el mundo simulado.' }
  ],
  quiz: [
    { q: 'La columna «Lo ven» sirve para:', opts: ['Adornar la tabla', 'Detectar asimetrías de información que luego explican brechas', 'Contar palabras'], correct: 1, why: 'Lo que solo uno ve es el origen de muchas brechas de percepción.' },
    { q: 'Una respuesta dice «temo que me sancionen». En la cronología va:', opts: ['Como hecho del día', 'Fuera de la línea, en la columna de razones o temores', 'Se descarta siempre'], correct: 1, why: 'Es un temor declarado, no un evento; sirve después para leer el porqué.' },
    { q: 'Un laboratorio informa que el material es conforme. ¿Cómo lo anotas?', opts: ['Resultado real', 'Resultado simulado', 'No se anota'], correct: 1, why: 'Los resultados de terceros en el ensayo siempre se marcan como simulados.' }
  ]
});
