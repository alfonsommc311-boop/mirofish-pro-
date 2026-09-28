Lesson.start({
  id: 'puntos-de-quiebre', area: 'Leer lo que salió', areaIcon: '📊', icon: '💥',
  title: 'Puntos de quiebre',
  subtitle: 'La decisión o el hecho a partir del cual el caso cambió de rumbo, y cómo comprobar que lo fue.',
  norma: 'Un punto de quiebre se identifica por su efecto en las decisiones posteriores (verificar la norma vigente y el expediente técnico aprobado en todo caso real).',
  intro: '<p>En toda corrida hay un momento en que el caso deja de ir hacia donde iba: un acuerdo que se cae, una carta que endurece posiciones, un resultado que cambia el argumento. Encontrarlo es lo que convierte la cronología en una explicación. La pregunta clave del orquestador es: <b>¿qué habría pasado si esto no hubiera ocurrido?</b> Si la respuesta es «casi lo mismo», no era un quiebre.</p>',
  sections: [
    { h: 'Qué cuenta como quiebre',
      html: '<p>Es un hecho o una decisión tras el cual <b>cambian las acciones de varios actores</b>, no solo la de quien lo provocó. Suelen ser de cuatro tipos:</p><ul><li>Una <span class="hl">decisión</span> de quien tiene la competencia.</li><li>Un <span class="hl">hecho nuevo</span> que entra en la resolución (por ejemplo, un resultado simulado adverso).</li><li>Un <span class="hl">plazo vencido</span> sin respuesta.</li><li>Una <span class="hl">fuga de información</span> entre actores que no debía ocurrir.</li></ul>' },
    { h: 'Cómo se detecta',
      html: '<p>Recorre la cronología y para cada hecho candidato compara <b>las acciones antes y después</b>. Tres señales:</p><ol><li>Cambia el tono o la acción de dos o más actores.</li><li>Cambian las probabilidades declaradas de forma sostenida, no un salto que se revierte.</li><li>Una opción que estaba sobre la mesa desaparece.</li></ol><p>Desde la silla del actor, el quiebre es el instante en que su plan anterior deja de servir.</p>' },
    { h: 'Ejemplo ficticio',
      html: '<p>Caso ficticio: Municipalidad Distrital de Villa Esperanza, Consorcio Andino, Consorcio Supervisor Horizonte. Probabilidad declarada por el contratista de escalar a controversia:</p><table><tr><th>Fecha simulada</th><th>Hecho</th><th>Antes</th><th>Después</th></tr><tr><td>Día 3</td><td>Reunión sin acuerdo</td><td>30 %</td><td>35 %</td></tr><tr><td>Día 8</td><td>Resultado simulado del laboratorio: conforme</td><td>35 %</td><td>20 %</td></tr><tr><td>Día 12</td><td>La Entidad no responde en el plazo que se dio</td><td>20 %</td><td>65 %</td></tr></table><p>El día 8 baja la tensión, pero el día 12 cambia el rumbo: el contratista deja de negociar con la supervisión y apunta a la Entidad. Ese es el quiebre. Nota además que el día 8 fue un resultado <b>simulado</b> de un tercero: si en la realidad fuera distinto, el caso también lo sería.</p>' },
    { h: 'Probar que fue quiebre',
      html: '<p>No basta con verlo: hay que contrastarlo. La forma limpia es una <b>rama</b>: cambiar ese hecho y volver a correr desde esa ronda (ver Ramas y ¿y si?, en el área siguiente). Si sin el hecho el caso sigue igual, lo que viste era ruido. Recuerda que una sola corrida no basta para afirmar causa (ver Una corrida no es una distribución).</p>' },
    { h: 'Qué haces con él en la realidad',
      html: '<p>Un quiebre te dice <b>dónde poner atención primero</b>: en el ejemplo, el plazo de respuesta de la Entidad. No te dice que ocurrirá así. Convierte el quiebre en una alerta concreta (qué mirar, con qué fecha) y, si hace falta, pásalo a Riesgos Obra PRO. Nunca prometas el resultado de una valorización, adicional, ampliación o arbitraje a partir de una corrida.</p>' }
  ],
  keypoints: [
    'Un quiebre cambia las acciones de varios actores, no solo la de quien lo provoca.',
    'Se detecta comparando acciones y probabilidades antes y después.',
    'Las decisiones, hechos nuevos, plazos vencidos y fugas son candidatos típicos.',
    'Se confirma con una rama: cambia el hecho y compara.',
    'Sirve para decidir dónde mirar primero, no para asegurar un desenlace.',
    'Los resultados de terceros que lo causen se marcan como simulados.'
  ],
  flashcards: [
    { q: '¿Qué es un punto de quiebre?', a: 'El hecho o decisión a partir del cual el caso cambia de rumbo para varios actores.' },
    { q: '¿Qué pregunta lo confirma?', a: '¿Qué habría pasado si esto no hubiera ocurrido?' },
    { q: 'Tres señales de un quiebre', a: 'Cambian varios actores, cambian las probabilidades de forma sostenida y desaparece una opción.' },
    { q: '¿Cómo se prueba mejor?', a: 'Con una rama: cambiar el hecho y volver a correr desde esa ronda.' }
  ],
  quiz: [
    { q: 'En el ejemplo, ¿cuál es el quiebre?', opts: ['El resultado simulado del día 8', 'La falta de respuesta de la Entidad el día 12', 'La reunión del día 3'], correct: 1, why: 'Tras el día 12 la probabilidad sube a 65 % y el contratista cambia de interlocutor.' },
    { q: 'Un salto de probabilidad que se revierte en la ronda siguiente es:', opts: ['Un quiebre seguro', 'Probablemente ruido', 'Una prueba de causa'], correct: 1, why: 'Los quiebres se sostienen y cambian acciones de varios actores.' },
    { q: 'Con un quiebre identificado puedes decir:', opts: ['Así ocurrirá', 'Aquí debo mirar primero', 'El resultado está garantizado'], correct: 1, why: 'Es una alerta de ensayo, no una promesa ni una predicción.' }
  ]
});
