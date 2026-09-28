Lesson.start({
  id: 'documento-interno', area: 'Rigor, ética y límites', areaIcon: '🛡️', icon: '🔐',
  title: 'Documento interno',
  subtitle: 'Por qué el informe de la simulación no se mezcla con lo que se envía a la Entidad.',
  norma: 'Las comunicaciones formales de obra se sustentan en el contrato, el cuaderno y el expediente técnico aprobado; verificar la norma vigente y el expediente técnico aprobado.',
  intro: '<p>El informe de una simulación es una <b>herramienta de trabajo tuya</b>, como un borrador o una lluvia de ideas escrita con disciplina. Contiene actores inventados, resultados simulados y juicios de agentes. Nada de eso es prueba ni hecho. Si se mezcla con las cartas, los informes y los expedientes reales, alguien puede tomarlo como si lo fuera. Esta lección fija la frontera: el informe es interno; lo que sale a la Entidad se redacta aparte, con hechos, documentos y normas verificados.</p>',
  sections: [
    { h: 'Qué es y qué no es el informe',
      html: '<table><tr><th>Es</th><th>No es</th></tr><tr><td>Un ensayo interno para preparar tu actuación</td><td>Un sustento de una carta o una solicitud</td></tr><tr><td>Un mapa de flancos y reacciones posibles</td><td>Una opinión de las partes</td></tr><tr><td>Material para ti y tu equipo</td><td>Un anexo del expediente</td></tr></table>' },
    { h: 'Los tres riesgos de mezclarlo',
      html: '<ol><li><b>Confusión de hechos</b>: una decisión simulada («la Entidad denegaría») se lee como comunicación de la Entidad.</li><li><b>Exposición de tu estrategia</b>: el informe describe tus flancos y tus movimientos previstos; en manos ajenas, te debilita.</li><li><b>Contaminación de la prueba</b>: un párrafo del ensayo pegado en un documento real lo llena de afirmaciones que nadie sustentó.</li></ol>' },
    { h: 'Reglas prácticas',
      html: '<ul><li>Encabeza el informe con «Documento interno de trabajo. Ensayo con actores simulados. No es predicción ni asesoría legal. No enviar.»</li><li>Guárdalo fuera de la carpeta de comunicaciones oficiales.</li><li>Si una recomendación te sirve, <b>reescríbela</b> con tus propios hechos y documentos; no copies el párrafo.</li><li>No cites la simulación como fuente en cartas, informes ni actas. Solo tú sabes que la corriste.</li></ul>' },
    { h: 'De la simulación a un informe real',
      html: '<p>Lo que pasa a un informe real son <b>tus decisiones</b> y los hechos documentados que las sustentan, con el formato de tu organización; la redacción formal se trabaja con Informe Obra PRO y Redacción PRO. Lo que no pasa: los diálogos de los actores, los resultados simulados, las probabilidades de los agentes y cualquier norma citada por un actor. Además, revisa la confidencialidad: si enviaste texto a una API externa, cuida qué datos incluiste. Normas por su nombre: verificar la norma vigente y el expediente técnico aprobado.</p>' }
  ],
  keypoints: [
    'El informe de la simulación es interno: herramienta de trabajo, no prueba ni hecho.',
    'Mezclarlo con lo oficial confunde hechos, expone tu estrategia y contamina la prueba.',
    'Encabézalo como documento interno y no lo guardes con las comunicaciones oficiales.',
    'Reescribe lo útil con tus hechos y documentos; no copies párrafos.',
    'No cites la simulación como fuente en cartas, informes ni actas.'
  ],
  flashcards: [
    { q: '¿Qué es el informe de una simulación?', a: 'Un ensayo interno para preparar tu actuación.' },
    { q: '¿Se cita como sustento en una carta?', a: 'No: no es prueba ni hecho.' },
    { q: '¿Qué pasa al informe real?', a: 'Tus decisiones y los hechos documentados que las sustentan, reescritos.' },
    { q: '¿Qué no pasa nunca?', a: 'Diálogos de actores, resultados simulados, probabilidades de agentes ni normas citadas por un actor.' },
    { q: '¿Cómo se rotula el informe?', a: 'Documento interno de trabajo, ensayo con actores simulados, no enviar.' }
  ],
  quiz: [
    { q: 'Una recomendación del ensayo te parece buena. ¿Qué haces?', opts: ['Copio el párrafo a la carta', 'La reescribo con mis hechos y documentos', 'La cito como fuente'], correct: 1, why: 'El informe no es fuente; lo útil se reformula con sustento real.' },
    { q: '¿Cuál es un riesgo de mezclarlo con lo oficial?', opts: ['Ninguno', 'Una decisión simulada se lee como real', 'Ahorra tiempo'], correct: 1, why: 'Confunde hechos con ensayo.' },
    { q: '¿Dónde se guarda el informe?', opts: ['Con las comunicaciones a la Entidad', 'Aparte, como documento interno', 'En el expediente de obra'], correct: 1, why: 'Debe quedar fuera del circuito oficial.' }
  ]
});
