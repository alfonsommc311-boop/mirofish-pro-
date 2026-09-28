Lesson.start({
  id: 'elegir-los-actores', area: 'Diseñar actores creíbles', areaIcon: '🎭', icon: '👥',
  title: 'Elegir los actores',
  subtitle: 'De 3 a 6 sillas: quien decide, quien puede bloquear y quien tiene la información.',
  norma: 'Cada actor debe cambiar lo que pasa; si no, sobra. Normas solo por su nombre: verificar la norma vigente y el expediente técnico aprobado.',
  intro: '<p>El error del principiante es llenar la mesa: diez actores, todos con perfil de una línea, y una corrida que nadie puede leer. El método de esta app prefiere <b>pocos actores ricos</b>: cada uno es un subagente con su propio contexto, y cada ronda cuesta un subagente por actor. Antes de escribir un solo perfil, decide quién se sienta a la mesa. Un buen elenco responde tres preguntas: <b>¿quién decide?</b>, <b>¿quién puede bloquear?</b> y <b>¿quién tiene la información que los demás no tienen?</b></p>',
  sections: [
    { h: 'Las tres preguntas de selección',
      html: '<p>Recorre el evento de tu dossier y pregunta, por cada candidato:</p><ol><li><b>¿Decide?</b> Firma, aprueba, deniega, paga o ejecuta la acción que el evento pone en juego.</li><li><b>¿Bloquea?</b> No decide, pero puede frenar: un plazo que solo él controla, una observación, un paro, una denuncia, una toma de acceso.</li><li><b>¿Sabe algo que otros no?</b> Tiene una cifra, un resultado, una presión interna o una restricción de caja que nadie más ve.</li></ol><p>Si un candidato responde <b>no</b> a las tres, no es actor: es <b>contexto</b> y va en el dossier o en la resolución que haces tú entre rondas.</p>' },
    { h: 'Ejemplo: un evento, cinco candidatos',
      html: '<p>Caso ficticio: la supervisión (Consorcio Supervisor Horizonte) difiere parte de la última valorización de Consorcio Andino, en la obra de la Municipalidad Distrital de Villa Esperanza, hasta que lleguen unos ensayos.</p><table><tr><th>Candidato</th><th>Decide</th><th>Bloquea</th><th>Sabe algo propio</th><th>Veredicto</th></tr><tr><td>Entidad (Villa Esperanza)</td><td>Sí: aprueba y paga</td><td>Sí</td><td>Su disponibilidad de caja y su presión interna</td><td>Actor</td></tr><tr><td>Contratista (Consorcio Andino)</td><td>Sí: cómo responde</td><td>Sí</td><td>Su flujo de caja real</td><td>Actor</td></tr><tr><td>Supervisión (Horizonte)</td><td>Sí: el diferimiento</td><td>Sí</td><td>Qué ensayos faltan y por qué</td><td>Actor</td></tr><tr><td>Laboratorio</td><td>No</td><td>Parcial: su fecha de entrega</td><td>El resultado</td><td>Tercero: lo resuelves tú y lo marcas como resultado simulado</td></tr><tr><td>Órgano de control</td><td>No</td><td>Sí, si llega</td><td>Su calendario</td><td>Actor solo si el hito lo atrae; si no, evento de ronda posterior</td></tr></table><p>Fíjate que el laboratorio no es actor aunque su resultado sea decisivo: lo que necesitas de él es un <b>desenlace plausible</b>, no una estrategia.</p>' },
    { h: 'De 3 a 6: por qué ese rango',
      html: '<p>Con menos de 3 no hay tensión: dos partes se ensayan mejor con una negociación (Negocia PRO). Con más de 6 pasan tres cosas:</p><ul><li>Cada ronda lanza más subagentes y consume más cuota (verificar los límites en la documentación vigente de Claude Code).</li><li>Tú, como orquestador, tienes que resolver más interacciones cruzadas y decidir quién se entera de qué, y ahí se cuelan los errores de visibilidad.</li><li>Los perfiles se vuelven finos y se parecen entre sí.</li></ul><p>Para empezar, cinco es un número cómodo: Entidad, contratista, supervisión, un actor de presión (control o colectivo) y, si el caso lo pide, un proveedor o subcontratista.</p>' },
    { h: 'Cuándo sumar un actor colectivo',
      html: '<p>Los vecinos, los trabajadores o la prensa <b>no son una persona</b>, pero pueden decidir el caso: un bloqueo, un paro, una nota. Se modelan como <b>un solo agente colectivo</b> (lección «El actor colectivo»), no como veinte perfiles. Súmalo cuando el evento afecta a un grupo con capacidad de acción conjunta y esa acción cambiaría lo que deciden los demás. Si el grupo solo «opina» sin poder hacer nada, déjalo en el dossier.</p>' },
    { h: 'Antes de perfilar: tu mapa de actores',
      html: '<p>Si ya tienes un mapa de actores o una matriz poder-interés, úsalos como lista larga y recórtala con las tres preguntas (se trabajan en Planifica PRO y Gobierna PRO). La simulación no reemplaza ese mapa: parte de él y lo pone a actuar. Por último, revisa la lista en silla ajena: <b>¿cada actor tiene al menos una razón para no cooperar con otro?</b> Si todos quieren lo mismo, no hay corrida, hay una reunión de acuerdo.</p>' }
  ],
  keypoints: [
    'Un actor debe responder sí a alguna de tres preguntas: decide, bloquea o sabe algo que otros no.',
    'Quien responde no a las tres es contexto: va en el dossier o en tu resolución entre rondas.',
    'Entre 3 y 6 actores; más actores encarecen la ronda y multiplican los errores de visibilidad.',
    'Los terceros decisivos (laboratorio, asesoría) se resuelven tú, con un resultado simulado marcado.',
    'Un grupo con capacidad de acción conjunta va como un solo actor colectivo.',
    'Si todos los actores quieren lo mismo, el elenco está mal elegido.'
  ],
  flashcards: [
    { q: '¿Cuáles son las tres preguntas para elegir un actor?', a: '¿Decide? ¿Bloquea? ¿Sabe algo que otros no saben?' },
    { q: '¿Qué haces con un candidato que responde no a las tres?', a: 'Lo dejas como contexto en el dossier o lo resuelves tú entre rondas.' },
    { q: '¿Por qué de 3 a 6 actores?', a: 'Menos no da tensión; más encarece cada ronda y multiplica los errores de visibilidad.' },
    { q: '¿Cuándo un grupo se vuelve actor colectivo?', a: 'Cuando puede actuar en conjunto y esa acción cambiaría lo que deciden los demás.' },
    { q: '¿Por qué el laboratorio suele no ser actor?', a: 'Porque de él solo necesitas un desenlace plausible, marcado como resultado simulado, no una estrategia.' }
  ],
  quiz: [
    { q: 'Un laboratorio entrega el resultado que decide el caso, pero no tiene intereses en juego. ¿Qué haces?', opts: ['Lo conviertes en actor con perfil completo', 'Lo resuelves tú como tercero y marcas el resultado como simulado', 'Lo omites del caso'], correct: 1, why: 'Su papel es aportar un desenlace plausible; lo decides tú en la resolución y lo marcas como resultado simulado.' },
    { q: '¿Cuál es un síntoma de que sobran actores?', opts: ['Cada ronda es más barata', 'Los perfiles se parecen y tú resuelves demasiados cruces de información', 'Hay más conflicto útil'], correct: 1, why: 'Más actores significan más subagentes por ronda y más decisiones de visibilidad para ti.' },
    { q: '¿Qué prueba final conviene hacer al elenco?', opts: ['Comprobar que todos quieren lo mismo', 'Comprobar que cada actor tiene una razón para no cooperar con otro', 'Comprobar que hay un actor por cada persona del expediente'], correct: 1, why: 'Sin intereses en fricción la simulación se vuelve una reunión de acuerdo.' }
  ]
});
