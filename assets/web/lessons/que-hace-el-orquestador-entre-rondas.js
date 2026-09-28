Lesson.start({
  id: 'que-hace-el-orquestador-entre-rondas', area: 'La resolución vista de dios', areaIcon: '⚖️', icon: '🧭',
  title: 'Qué hace el orquestador entre rondas',
  subtitle: 'Leer todo, decidir qué pasó, fecharlo y etiquetar quién lo ve.',
  norma: 'Los actores responden; el mundo lo resuelve el orquestador, y lo que no se resuelve por escrito no existe para nadie (verificar la norma vigente y el expediente técnico aprobado al contrastar con la obra real).',
  intro: '<p>Cuando los subagentes de una ronda terminan, el mundo simulado queda en pausa. Cada actor dijo lo que haría, pero nadie ha <b>hecho</b> nada todavía: eso lo decides tú, desde la sesión principal, con la <b>vista de dios</b>. Esa pausa es el trabajo más delicado del método: si resuelves mal, el error se arrastra a todas las rondas siguientes. Aquí ves los cuatro movimientos de la resolución y por qué cada actor recibe después un contexto distinto.</p>',
  sections: [
    { h: 'Por qué existe una resolución',
      html: '<p>Cada actor es un subagente con contexto aislado: solo sabe su perfil y lo que le dejaste leer. Dos actores pueden decidir cosas que chocan (la Entidad rechaza, el contratista ya notificó). Ninguno puede arbitrar, porque ninguno ve al otro.</p><p>Por eso existe un paso <b>fuera del mundo</b>: alguien que lee todas las respuestas, decide qué se concretó y qué no, y escribe el resultado en un archivo. Ese archivo es la única realidad compartida. Es el mismo papel que ya ves en la <b>orquestación de subagentes</b> (Claude Code Experto y Agentes IA Experto lo explican como herramienta); aquí lo usas como árbitro de un ensayo.</p>' },
    { h: 'Los cuatro movimientos',
      html: '<ol><li><b>Leer todo.</b> Las respuestas de todos los actores, completas, en el mismo bloque de lectura. Solo tú tienes ese privilegio.</li><li><b>Decidir qué pasó.</b> Qué carta salió, qué acción se cumplió, qué quedó en intención. Una intención no es un hecho.</li><li><b>Fecharlo.</b> Cada hecho lleva su fecha dentro de la ventana de la ronda; sin fecha no se puede ordenar la cronología ni saber quién actuó primero.</li><li><b>Etiquetar quién lo ve.</b> Entre corchetes, los actores que se enteran: <span class="hl">[A1 A3]</span>. Esa etiqueta es lo que después arma el contexto de cada uno.</li></ol>' },
    { h: 'Ejemplo de resolución (caso ficticio)',
      html: '<p>Municipalidad Distrital de Villa Esperanza (A1), Consorcio Andino (A2), Consorcio Supervisor Horizonte (A3), un proveedor (A4). Ronda 1 resuelta:</p><p><span class="hl">- 03/03 [A2 A3] El contratista anota en el cuaderno de obra la falta de un plano complementario.<br>- 04/03 [A1 A2 A3] La supervisión remite a la Entidad una carta con copia al contratista pidiendo pronunciamiento.<br>- 05/03 [A3] La supervisión conversa internamente y decide no aprobar el avance parcial hasta tener el ensayo (intención, no acto notificado).<br>- 06/03 [A2 A4] El contratista consulta al proveedor si mantiene la entrega; resultado simulado: el proveedor mantiene la fecha sin cambio.</span></p><p>Cada línea es un hecho, con fecha y con audiencia. Nota lo que no aparece: la conversación interna de A3 no llega a A1 ni a A2.</p>' },
    { h: 'La silla del actor',
      html: '<p>Desde el actor, la resolución es <b>lo único que existe del mundo</b> entre una ronda y la siguiente. Si escribiste <span class="hl">[A2 A3]</span> en un hecho, la Entidad no sabe que ocurrió y razonará como si no hubiera pasado. Esa ignorancia es la materia prima de la brecha de percepción que leerás en el área 8.</p><p>Si por descuido pones a todos en cada línea, los actores llegan a la misma conclusión y la simulación se vuelve un solo prompt con varias caras.</p>' },
    { h: 'Errores típicos del orquestador',
      html: '<ul><li><b>Resolver a favor de la historia bonita</b>: un acuerdo que nadie propuso. Resuelve lo que los actores hicieron, no lo que te gustaría.</li><li><b>Convertir intención en hecho</b>: «pensaba responder el 10» no es «respondió el 10».</li><li><b>Olvidar la audiencia</b>: una línea sin corchetes es un hecho que nadie ve.</li><li><b>Fabricar un documento</b>: si un tercero produce un resultado, va marcado como <i>resultado simulado</i> (lección de terceros).</li></ul><p>Recuerda la idea rectora: no predices, ensayas; y ensayas con reglas del juego que tú anotas, no con las que se te ocurren al final.</p>' }
  ],
  keypoints: [
    'Entre rondas el mundo está en pausa: nada ocurrió hasta que el orquestador lo resuelve por escrito.',
    'Los cuatro movimientos: leer todo, decidir qué pasó, fecharlo y etiquetar quién lo ve.',
    'La línea de resolución tiene la forma «- fecha [A1 A3] hecho»: fecha, audiencia y hecho.',
    'Una intención no es un hecho; una línea sin audiencia es un hecho que nadie conoce.',
    'La resolución es lo único que cada actor sabrá del mundo, y de ahí nace la brecha de percepción.'
  ],
  flashcards: [
    { q: '¿Por qué hace falta una resolución entre rondas?', a: 'Porque los actores tienen contexto aislado y ninguno puede arbitrar choques; alguien con vista de dios debe decidir qué pasó.' },
    { q: '¿Cuáles son los cuatro movimientos del orquestador?', a: 'Leer todo, decidir qué pasó, fecharlo y etiquetar quién lo ve.' },
    { q: '¿Qué significa [A1 A3] en una línea de resolución?', a: 'Que solo esos dos actores se enteran de ese hecho.' },
    { q: '¿Cuál es la diferencia entre intención y hecho?', a: 'La intención es lo que el actor dijo que haría; el hecho es lo que tú resuelves que se concretó y con fecha.' },
    { q: '¿Qué pasa si todos ven todos los hechos?', a: 'Se pierde la asimetría de información y los actores convergen a la misma conclusión.' }
  ],
  quiz: [
    { q: 'Un actor escribe que enviará una carta el día 8. ¿Qué haces al resolver?', opts: ['La registras como hecho con fecha y audiencia si el actor la concretó dentro de la ventana', 'La ignoras siempre', 'La envías a todos los actores por defecto'], correct: 0, why: 'Resuelves lo que se concretó, con fecha y con quién lo ve; una intención sin cumplir no es un hecho.' },
    { q: '¿Para qué sirven los corchetes en «- 04/03 [A1 A3] hecho»?', opts: ['Para ordenar alfabéticamente', 'Para marcar quién se entera del hecho', 'Para indicar la gravedad'], correct: 1, why: 'Esa etiqueta arma después lo que sabe cada actor.' },
    { q: '¿Por qué no debes poner a todos los actores en cada línea?', opts: ['Porque se ve feo', 'Porque desaparecen las asimetrías y con ellas el conflicto', 'Porque el archivo pesa más'], correct: 1, why: 'Sin información privada todos llegan a lo mismo.' }
  ]
});
