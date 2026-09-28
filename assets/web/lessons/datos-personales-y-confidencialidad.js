Lesson.start({
  id: 'datos-personales-y-confidencialidad', area: 'La semilla: el dossier común', areaIcon: '🌱', icon: '🔒',
  title: 'Datos personales y confidencialidad',
  subtitle: 'Roles, no nombres; nada de DNI ni sueldos; y qué cambia cuando el texto sale a un servicio externo.',
  norma: 'Protección de datos personales y confidencialidad de la Entidad y del contratista (verificar la norma vigente y las políticas de tu institución).',
  intro: '<p>El dossier es un texto que se lee una y otra vez, por varios agentes, y que probablemente viaje a un modelo de lenguaje fuera de tu computadora. Por eso se diseña desde el inicio para <b>no contener lo que no debe salir</b>. La regla que uso: el ensayo funciona igual con roles que con nombres, así que nunca hace falta poner un nombre.</p>',
  sections: [
    { h: 'Roles, no nombres',
      html: '<p>Escribe «el residente», «el supervisor», «la gerencia de la Entidad», «el alcalde», «el vecino que reclamó». Un actor se define por lo que quiere y puede hacer, no por quién es. Además evita que el ensayo se convierta en juicio sobre una persona.</p><ul><li>Bien: <i>el residente de obra del Consorcio Andino</i>.</li><li>Mal: nombre y apellido del residente.</li></ul>' },
    { h: 'Qué se deja fuera',
      html: '<ul><li>DNI, direcciones, teléfonos, correos personales.</li><li>Sueldos, deudas, datos de salud o familiares.</li><li>Montos de contrato, CUI y datos reales identificables si no son necesarios para el ensayo: usa cifras ficticias o rangos.</li><li>Documentos internos de una parte que no debas compartir.</li></ul><p>Los casos de esta app son ficticios (Municipalidad Distrital de Villa Esperanza, Consorcio Andino, Consorcio Supervisor Horizonte). Si pasas tu caso real a la misma estructura, sustituye lo identificable antes de ensayar.</p>' },
    { h: 'Qué cambia si el texto sale a una API',
      html: '<p>Cuando Claude Code lee tu dossier, el contenido se envía al servicio del modelo para procesarse. Lo mismo ocurre con cualquier motor que use un LLM externo, como MiroFish. Qué se retiene y por cuánto tiempo depende de tu cuenta y de las condiciones del servicio: <b>verificar en la documentación vigente</b> y en la política de tu institución antes de subir material de un expediente. No lo des por sentado en ninguna dirección.</p>' },
    { h: 'Lista de depuración antes de lanzar',
      html: '<ol><li>Busca nombres propios en el dossier y los perfiles; reemplázalos por roles.</li><li>Busca números largos (DNI, teléfonos, CUI).</li><li>Revisa que no haya cartas internas pegadas completas: resume el hecho con su fuente.</li><li>Guarda el original limpio aparte y trabaja sobre la copia depurada.</li></ol><p>Es mejor perder un detalle que filtrar un dato.</p>' },
    { h: 'Confidencialidad de resultados',
      html: '<p>Las respuestas de los actores también son texto sensible: describen flancos de tu obra. Trátalas como material interno. Y recuerda que son <b>resultados simulados</b>: no son declaraciones de nadie y no deben circular como si lo fueran.</p>' }
  ],
  keypoints: [
    'El ensayo funciona con roles; nunca hace falta un nombre propio.',
    'Fuera del dossier: DNI, direcciones, sueldos, salud, familia.',
    'Montos reales, CUI y datos identificables se sustituyen por ficticios o rangos.',
    'El texto que lee el modelo sale a un servicio externo: verificar retención y condiciones en la documentación vigente.',
    'Depura antes de lanzar y guarda el original limpio aparte.',
    'Las respuestas simuladas también son material sensible.'
  ],
  flashcards: [
    { q: '¿Por qué roles y no nombres?', a: 'El actor se define por lo que quiere y puede hacer, y evita juzgar a una persona.' },
    { q: 'Menciona tres datos que quedan fuera del dossier.', a: 'DNI, sueldos y direcciones (también salud o familia).' },
    { q: '¿Qué ocurre con el texto al usar Claude Code o un motor con LLM externo?', a: 'Se envía al servicio del modelo; verificar retención y condiciones en la documentación vigente.' },
    { q: '¿Cómo tratar las respuestas de los actores?', a: 'Como material interno sensible y como resultado simulado.' }
  ],
  quiz: [
    { q: '¿Cómo nombras al residente en el dossier?', opts: ['Con su nombre completo', 'Como «el residente de obra»', 'Con sus iniciales'], correct: 1, why: 'El rol basta y protege a la persona.' },
    { q: 'Antes de subir un expediente real al modelo conviene:', opts: ['Suponer que no se retiene nada', 'Verificar condiciones y la política institucional', 'Subirlo completo'], correct: 1, why: 'La retención depende de la cuenta y del servicio; se verifica.' },
    { q: 'Una carta interna de una parte se incluye:', opts: ['Completa y con nombres', 'Resumida como hecho con su fuente', 'Nunca hay que resumirla'], correct: 1, why: 'Se conserva el hecho sin exponer el documento interno.' }
  ]
});
