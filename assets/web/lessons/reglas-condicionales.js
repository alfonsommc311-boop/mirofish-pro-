Lesson.start({
  id: 'reglas-condicionales', area: 'La consigna de cada ronda', areaIcon: '✍️', icon: '🔀',
  title: 'Reglas condicionales',
  subtitle: '«Si ... entonces ...»: el actor decide ante lo que no sabe y tú te ahorras rondas.',
  norma: 'Las reglas condicionales declaran la conducta del actor ante hechos que aún no ocurren; no son predicciones.',
  intro: '<p>Entre una ronda y la siguiente, el mundo puede cambiar de formas que el actor no conoce: llega o no llega un resultado, se responde o no se responde una carta. Si esperas a la próxima ronda para preguntarle qué haría, gastas una ronda por cada bifurcación. La alternativa es pedirle desde ahora reglas del tipo <b>«Si pasa X, hago Y»</b>. Así el actor decide ante lo que no sabe y el orquestador resuelve con esas reglas en la mano.</p>',
  sections: [
    { h: 'Para qué sirven',
      html: '<ul><li><b>Ahorran rondas:</b> una respuesta cubre varias ramas del futuro cercano.</li><li><b>Muestran el criterio del actor:</b> qué hecho lo haría cambiar de rumbo.</li><li><b>Alimentan la resolución:</b> cuando algo ocurre, ya sabes qué haría cada quien, sin inventarlo tú.</li></ul><p>Son también un buen detector de brechas: si dos actores tienen reglas incompatibles para el mismo hecho, ahí hay un punto de quiebre en potencia.</p>' },
    { h: 'Cómo se piden y cómo se ven',
      html: '<p>En la consigna, una línea basta: <i>«Si pasa X: escribe hasta tres reglas del tipo Si ... entonces ..., con plazo».</i></p><p>Respuesta de ejemplo (resultado simulado; caso ficticio, Consorcio Andino, ronda 2):</p><ol><li>Si el día 14 la supervisión no ha recibido los resultados de ensayos → envío una carta reiterando la solicitud con copia a la Entidad.</li><li>Si la Municipalidad Distrital de Villa Esperanza responde pidiendo información → la entrego dentro del plazo y mantengo el frente activo.</li><li>Si el diferimiento se prolonga más de dos semanas → evalúo comunicar formalmente una posible paralización, verificando antes la norma vigente y el expediente técnico aprobado.</li></ol><p>Ninguna regla cita artículos: la norma se nombra y se verifica.</p>' },
    { h: 'Reglas útiles y reglas decorativas',
      html: '<table><tr><th>Útil</th><th>Decorativa</th></tr><tr><td>Tiene condición observable («si llega el resultado»)</td><td>«Si las cosas empeoran»</td></tr><tr><td>Tiene acción concreta y plazo</td><td>«Actuaré en consecuencia»</td></tr><tr><td>Refleja su perfil (palancas reales)</td><td>Incluye acciones que el actor no puede hacer</td></tr></table><p>Una condición que el actor no puede observar en su mundo es inválida: no puede reaccionar a un hecho que nadie le comunica.</p>' },
    { h: 'La silla del orquestador al resolver',
      html: '<p>Cuando llega el momento, aplicas la regla que corresponda, <b>pero decides tú si la condición realmente se cumplió y quién se enteró</b>. Si el actor dijo «si recibo la carta hasta el día 12» y la carta llegó el 13, la regla no se activa. No es trampa: los plazos burocráticos se cumplen tarde más a menudo que a tiempo.</p>' },
    { h: 'Límites',
      html: '<p>Limita a dos o tres reglas: más produce árboles imposibles de resolver y respuestas que hablan del futuro lejano en vez de decidir el presente. Las reglas no reemplazan la decisión central: primero decide qué hace ahora; después, qué haría según cómo se mueva el mundo. Y siguen siendo declaraciones del modelo actuando un papel, no frecuencias ni pronósticos.</p>' }
  ],
  keypoints: [
    'Una regla condicional dice «Si pasa X, hago Y» y se escribe antes de saber si X ocurre.',
    'Ahorra rondas y deja ver qué hecho haría cambiar de rumbo al actor.',
    'La condición debe ser observable por el actor y la acción debe ser concreta y con plazo.',
    'Pide dos o tres reglas: más se vuelve un árbol imposible de resolver.',
    'El orquestador decide si la condición se cumplió y a quién le llegó la información.'
  ],
  flashcards: [
    { q: '¿Qué es una regla condicional en la consigna?', a: 'Una conducta declarada por el actor del tipo «Si pasa X, hago Y» ante un hecho aún desconocido.' },
    { q: '¿Qué ventaja da al orquestador?', a: 'Ahorra rondas y permite resolver bifurcaciones con lo que dijo el actor, sin inventarlo.' },
    { q: '¿Qué hace inválida a una regla?', a: 'Una condición que el actor no puede observar en su mundo o una acción fuera de sus palancas.' },
    { q: '¿Cuántas reglas conviene pedir?', a: 'Dos o tres, para que se puedan resolver.' }
  ],
  quiz: [
    { q: '¿Cuál es una regla condicional útil?', opts: ['Si las cosas empeoran, actuaré en consecuencia', 'Si el día 14 no llegan los resultados, envío una carta reiterando con copia a la Entidad', 'Haré lo que sea necesario'], correct: 1, why: 'Tiene condición observable, acción concreta y plazo.' },
    { q: 'Una carta llega el día 13 y la regla decía «si la recibo hasta el 12». El orquestador:', opts: ['Activa la regla igual', 'No la activa, porque la condición no se cumplió', 'Borra la regla'], correct: 1, why: 'El orquestador decide si la condición se cumplió; los plazos suelen cumplirse tarde.' },
    { q: 'Las reglas condicionales son:', opts: ['Predicciones de lo que hará el actor real', 'Conductas declaradas del actor simulado ante un hecho posible', 'Frecuencias estadísticas'], correct: 1, why: 'Son ensayo: juicios declarados dentro de un papel, no pronósticos.' }
  ]
});
