Lesson.start({
  id: 'presentar-una-simulacion', area: 'El simulador destacado', areaIcon: '🏆', icon: '🎬',
  title: 'Presentar una simulación',
  subtitle: 'Cómo mostrarla a tu jefe o a la Entidad sin prometer ni asustar.',
  norma: 'El informe es un documento interno de ensayo; verificar la norma vigente y el expediente técnico aprobado antes de actuar.',
  intro: '<p>Presentar mal una simulación la convierte en profecía o en alarma. Presentarla bien es decir <b>qué ensayaste, con qué supuestos, qué descubriste y qué harías con eso</b>, en ese orden y sin adjetivos.</p>',
  sections: [
    { h: 'Estructura de cinco minutos',
      html: '<ol><li>La pregunta y el evento.</li><li>Los actores y lo que cada uno sabía.</li><li>Dos o tres hallazgos (brechas, puntos de quiebre).</li><li>Lo que no sabemos (limitaciones).</li><li>Qué haríamos esta semana.</li></ol>' },
    { h: 'Frases que sí y que no',
      html: '<table><tr><th>Evitar</th><th>Decir</th></tr><tr><td>«El contratista va a reclamar»</td><td>«En el ensayo, el contratista reclamó cuando creyó que la Entidad no respondería a tiempo»</td></tr><tr><td>«Hay 70% de riesgo»</td><td>«El actor declaró una probabilidad de 70% como juicio propio»</td></tr></table>' },
    { h: 'A la Entidad o a un tercero',
      html: '<p>El informe de simulación no se adjunta a lo que se envía a la Entidad. Lo que sí sale es lo que tú decides comunicar con tus propios documentos, según tu criterio y la norma vigente.</p>' },
    { h: 'Preguntas difíciles',
      html: '<p>Si te preguntan «¿y si se equivoca?», responde con el método: es un ensayo, se contrasta con la realidad y por eso guardas los cierres.</p>' }
  ],
  keypoints: [
    'Ensayaste, no predijiste: dilo así.',
    'Empieza por la pregunta y termina con qué harías.',
    'Las probabilidades son juicios declarados de los actores.',
    'Incluye siempre lo que no sabes.',
    'El informe es interno y no se envía a la Entidad.'
  ],
  flashcards: [
    { q: '¿Cómo se presenta una probabilidad de un actor?', a: 'Como juicio declarado de ese actor, no como frecuencia.' },
    { q: '¿Qué cierra la presentación?', a: 'Qué harías esta semana.' },
    { q: '¿Se adjunta el informe a la Entidad?', a: 'No, es interno.' },
    { q: '¿Qué no se debe omitir?', a: 'Las limitaciones.' }
  ],
  quiz: [
    { q: '¿Cuál es la frase correcta?', opts: ['Va a reclamar seguro', 'En el ensayo reclamó al creer que no le responderían a tiempo', 'Hay 70% de riesgo real'], correct: 1, why: 'Describe lo ocurrido en el ensayo sin convertirlo en profecía.' },
    { q: 'El informe de simulación se:', opts: ['Adjunta a la carta a la Entidad', 'Mantiene como documento interno', 'Publica'], correct: 1, why: 'Es material de trabajo interno, no un documento oficial.' },
    { q: 'Ante «¿y si se equivoca?» respondes:', opts: ['Que no se equivoca', 'Que es un ensayo que se contrasta con la realidad', 'Que no hay problema'], correct: 1, why: 'Reconoce el límite del método y su forma de mejorar.' }
  ]
});
