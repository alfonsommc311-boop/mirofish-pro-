Lesson.start({
  id: 'simular-una-licitacion', area: 'Más allá de la obra', areaIcon: '🧭', icon: '📑',
  title: 'Simular una licitación',
  subtitle: 'Competidores, comité y consultas: anticipar observaciones y ofertas antes de publicar o de ofertar.',
  norma: 'Contratación pública: citar solo por su nombre la ley y el reglamento aplicables; verificar la norma vigente y el expediente técnico aprobado.',
  intro: '<p>Una licitación es un juego con información desigual muy marcado: el comité conoce las bases, cada postor conoce su costo y sus ganas de ganar, y ninguno ve la oferta del otro hasta el acto. Eso la hace buena candidata a ensayo. Desde la silla de la Entidad puedes anticipar qué consultas y observaciones llegarán a unas bases; desde la silla de un postor, qué puntos débiles de las bases te conviene consultar. El resultado es un <b>ensayo</b>, no una predicción de quién ganará.</p>',
  sections: [
    { h: 'Dos usos, dos sillas',
      html: '<table><tr><th>Silla</th><th>Pregunta que ensayas</th></tr><tr><td>Entidad / comité</td><td>¿Qué consultas y observaciones recibirán estas bases y cuáles son ambiguas?</td></tr><tr><td>Postor</td><td>¿Qué consultaría un competidor y qué ofertaría dada su situación?</td></tr></table><p>No mezcles las dos en una misma corrida sin decirlo: cambia quién tiene información privada y qué documentos son «propios».</p>' },
    { h: 'Los actores y su información privada',
      html: '<ul><li><b>Comité de selección</b>: conoce el criterio con el que interpretará una ambigüedad y su temor a un recurso de apelación.</li><li><b>Postor A</b>: su costo real y su necesidad de contrato para cubrir su carga de obra.</li><li><b>Postor B</b>: una experiencia acreditable que quizá roce el requisito.</li><li><b>Un actor colectivo opcional</b>: el mercado de proveedores, que empuja precios de insumos.</li></ul><p>Los datos de cada postor son <b>hipótesis marcadas</b>: no sabes su costo real. Dilo en el perfil.</p>' },
    { h: 'Una consigna útil para el comité',
      html: '<p>Ejemplo (caso ficticio, Municipalidad Distrital de Villa Esperanza):</p><p><i>«Recibes las consultas de tres postores sobre el requisito de experiencia. Entre el día 5 y el día 9, ¿cuáles absuelves con claridad, cuáles dejas ambiguas y por qué? Indica qué riesgo de observación ves en cada respuesta.»</i></p><p>La regla condicional: <i>«si una consulta expone una contradicción en las bases, di si la corriges por integración o la mantienes»</i>. Te muestra cuánto pesa el miedo a modificar.</p>' },
    { h: 'Qué se puede leer',
      html: '<ul><li>Las <b>ambigüedades</b> que varios actores vieron: son las que corregirás antes de publicar.</li><li>Las que <b>solo uno</b> vio: un flanco poco visible que un postor astuto usaría.</li><li>La <b>brecha</b> entre lo que el comité cree claro y lo que los postores leen distinto.</li></ul><p>Ese material sirve para revisar las bases, no para predecir quién ofertará ni a qué precio.</p>' },
    { h: 'Lo que nunca se hace',
      html: '<p>No simules ofertas económicas como si fueran cifras reales, y no uses datos de una licitación en curso que no sean públicos. Si un postor simulado «presenta» un documento, es un <b>documento simulado</b> y se marca así; nunca se inventa una constancia, una carta fianza o un contrato. Las normas de contratación se citan por su nombre; verificar la norma vigente y el expediente técnico aprobado. El resultado de una licitación real depende de reglas, plazos y actuaciones que no se prometen.</p>' }
  ],
  keypoints: [
    'La licitación tiene información desigual clara: comité, postores y bases visibles a todos.',
    'Desde la Entidad se ensayan consultas y observaciones; desde el postor, las consultas útiles.',
    'El costo real de un postor es una hipótesis marcada, no un dato.',
    'Lo valioso: ambigüedades que varios vieron y flancos que solo uno vio.',
    'Nada de ofertas ni documentos inventados: todo lo simulado se marca como tal.'
  ],
  flashcards: [
    { q: '¿Qué se ensaya desde la silla del comité?', a: 'Qué consultas y observaciones recibirán las bases y cuáles son ambiguas.' },
    { q: '¿Cómo se trata el costo real de un postor?', a: 'Como hipótesis marcada; no se conoce.' },
    { q: '¿Qué valor tiene lo que «solo uno vio»?', a: 'Es un flanco poco visible que otro actor astuto podría usar.' },
    { q: '¿Se simulan cifras de ofertas como reales?', a: 'No: serían juicios del agente y no deben presentarse como datos.' },
    { q: '¿Cómo se citan las normas de contratación?', a: 'Solo por su nombre, con «verificar la norma vigente y el expediente técnico aprobado».' }
  ],
  quiz: [
    { q: '¿Cuál es el mejor uso desde la Entidad?', opts: ['Adivinar quién ganará', 'Detectar ambigüedades en las bases antes de publicarlas', 'Fijar el valor referencial'], correct: 1, why: 'El ensayo revela puntos débiles visibles de las bases; no predice ganadores.' },
    { q: 'Un postor simulado «presenta» una carta fianza. Debe marcarse:', opts: ['Como documento real', 'Como documento simulado', 'No se marca'], correct: 1, why: 'Nada fabricado: los documentos de terceros aparecen siempre como simulados.' },
    { q: 'El costo de un postor competidor debe entrar al perfil como:', opts: ['Un dato verificado', 'Una hipótesis declarada', 'Una cifra oficial'], correct: 1, why: 'No lo conoces; se marca como hipótesis de simulación.' }
  ]
});
