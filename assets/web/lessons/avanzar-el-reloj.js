Lesson.start({
  id: 'avanzar-el-reloj', area: 'La resolución vista de dios', areaIcon: '⚖️', icon: '🕰️',
  title: 'Avanzar el reloj',
  subtitle: 'Ventanas de tiempo, saltos entre rondas y cuándo sale un actor.',
  norma: 'El tiempo de la simulación es una convención tuya, no el plazo contractual: los plazos reales salen del contrato y del expediente técnico aprobado (verificar la norma vigente y el expediente técnico aprobado).',
  intro: '<p>En una obra el tiempo pasa aunque nadie haga nada: los plazos corren, las lluvias llegan, una autoridad cambia. En la simulación, en cambio, el tiempo <b>solo avanza cuando tú lo mueves</b>. Cada ronda cubre una ventana de fechas y entre una y otra decides cuánto salta el calendario. Esa decisión, que parece mecánica, define qué actores tienen tiempo de reaccionar y cuáles se quedan fuera. Para ver plazos y ruta crítica de verdad tienes Ruta Crítica PRO y Planifica PRO; aquí solo ves cómo mover el reloj del ensayo.</p>',
  sections: [
    { h: 'La ventana de la ronda',
      html: '<p>Cada consigna fija una <b>ventana de fechas</b> (por ejemplo, del 3 al 14 de marzo): lo que los actores pueden decidir y hacer cae dentro de ella. La resolución fecha cada hecho dentro de esa ventana y ninguno debería salirse.</p><ul><li>Ventana corta: pocos hechos, reacciones finas, más rondas.</li><li>Ventana larga: más hechos por ronda, menos control, menos rondas.</li><li>Ventana que coincide con un plazo relevante (una respuesta esperada): la ronda queda amarrada a ese vencimiento.</li></ul>' },
    { h: 'El salto entre rondas',
      html: '<p>Al terminar la resolución decides desde qué fecha empieza la ronda siguiente. Hay tres criterios de oficio:</p><ol><li><b>Hasta el próximo vencimiento</b> que le importe a algún actor (respuesta, entrega, ensayo).</li><li><b>Hasta el próximo evento externo</b> que hayas decidido (una visita de control, un cambio de gestión, un hito).</li><li><b>Un paso fijo</b> (una semana, quince días), útil para ver el desgaste.</li></ol><p>Ejemplo: la ronda 1 cubre 03/03 al 07/03; la respuesta que se espera de la Entidad vence el 14/03; la ronda 2 cubre 08/03 al 17/03 para que ese vencimiento caiga dentro de la ventana y se pueda resolver si se cumplió o no. Ese salto no es un pronóstico: es cómo diseñas el ensayo.</p>' },
    { h: 'Ejemplo de reloj en la resolución (caso ficticio)',
      html: '<p>Al final de una resolución, tres líneas fijan el mundo antes de la ronda siguiente:</p><p><span class="hl">- 07/03 [A1 A2 A3] Cierre de la ronda 1. La respuesta de la Entidad sigue pendiente.<br>- 10/03 [A2] El contratista anota una nueva visita a frente en el cuaderno de obra.<br>- 17/03 Nueva ventana: la ronda 2 abarca 08/03 al 17/03.</span></p><p>La última línea no lleva audiencia porque es una decisión del orquestador, no un hecho del mundo.</p>' },
    { h: 'Cuándo sale un actor (y cuándo entra)',
      html: '<p>El reloj también decide quién está en escena. Un actor puede <b>salir</b> porque su rol termina (se firma una recepción y esa supervisión ya no participa) o <b>no responder</b> porque su ventana no le corresponde. Y puede <b>entrar</b> tarde (un nuevo responsable tras un cambio de gestión).</p><ul><li>Anótalo en la resolución: «- fecha [A1 A2] hecho», y deja de convocar al actor que salió.</li><li>Si un actor sale por decisión tuya, justifícalo con un hecho previo; no lo saques porque estorba.</li><li>Un actor que entra hereda solo lo que su canal le habría dado, no toda la historia.</li></ul>' },
    { h: 'Lo que el reloj no hace',
      html: '<p>El reloj no calcula el plazo de la obra, no reemplaza un cronograma ni una ruta crítica, y no dice cuánto durará algo. Si un actor promete «10 días», tú decides si el ensayo lo cumple; para ver si esos días caben en la ruta crítica, contrasta con tu programación (Ruta Crítica PRO). El ensayo mueve fechas para que las decisiones tengan sentido, no para pronosticarlas.</p>' }
  ],
  keypoints: [
    'El tiempo solo avanza cuando el orquestador lo mueve, ronda a ronda.',
    'Cada ronda tiene una ventana de fechas y los hechos resueltos deben caer dentro de ella.',
    'El salto hacia la ronda siguiente se ancla en un vencimiento, un evento externo o un paso fijo.',
    'Un actor sale cuando su rol termina y entra con solo lo que su canal le da; anótalo en la resolución.',
    'El reloj del ensayo no es el cronograma real ni un pronóstico de plazos.'
  ],
  flashcards: [
    { q: '¿Quién avanza el tiempo en la simulación?', a: 'El orquestador, entre rondas.' },
    { q: '¿Qué es la ventana de una ronda?', a: 'El rango de fechas dentro del cual los actores deciden y se resuelven los hechos.' },
    { q: '¿Qué criterios sirven para el salto entre rondas?', a: 'El próximo vencimiento relevante, el próximo evento externo o un paso fijo.' },
    { q: '¿Cuándo sale un actor?', a: 'Cuando su rol termina o su ventana no le corresponde, y debe quedar anotado con un hecho previo.' },
    { q: '¿Reemplaza este reloj al cronograma real?', a: 'No: para plazos y ruta crítica se usa Ruta Crítica PRO o la programación de la obra.' }
  ],
  quiz: [
    { q: 'La respuesta de la Entidad vence el 14/03. ¿Cómo eliges la ventana de la ronda 2?', opts: ['Que termine antes del 14/03 para no resolverla', 'Que incluya el 14/03 para resolver si se cumplió', 'Es irrelevante'], correct: 1, why: 'Conviene amarrar la ronda al vencimiento para poder resolverlo.' },
    { q: 'Un actor entra a mitad del caso. ¿Qué sabe?', opts: ['Toda la historia', 'Solo lo que su canal le habría dado', 'Nada del caso'], correct: 1, why: 'Hereda lo que le correspondería enterarse, no la resolución completa.' },
    { q: 'El reloj de la simulación sirve para:', opts: ['Pronosticar la fecha de término', 'Ordenar decisiones y vencimientos del ensayo', 'Reemplazar la ruta crítica'], correct: 1, why: 'Es una convención del ensayo, no un pronóstico.' }
  ]
});
