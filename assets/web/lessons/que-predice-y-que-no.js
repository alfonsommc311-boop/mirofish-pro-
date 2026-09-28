Lesson.start({
  id: 'que-predice-y-que-no', area: 'Qué es MiroFish', areaIcon: '🐟', icon: '🔮',
  title: 'Qué predice y qué no',
  subtitle: 'Narrativa plausible de actores, sí; plazo, costo y ruta crítica, no.',
  norma: 'Ensayo de escenarios, no pronóstico; para plazo y costo, cronograma y curva S; verificar la norma vigente y el expediente técnico aprobado.',
  intro: '<p>MiroFish se presenta como motor de predicción, pero el propio proyecto no ofrece evidencia de precisión ni de validación empírica que hayamos podido verificar. Esta lección fija el límite que ordena todo el curso: <b>no predices lo que harán los demás, lo ensayas con lo que cada uno sabe y miras dónde se rompe</b>. Aprenderás qué sí puede darte una simulación de actores, qué no y a quién acudir en cada caso.</p>',
  sections: [
    { h: 'Lo que sí te da',
      html: '<ul><li>Una <b>narrativa plausible</b> de cómo podrían reaccionar las partes con lo que cada una sabe.</li><li>La <b>reacción que no viste venir</b> y el flanco propio que otro podría usar.</li><li>Las <b>brechas de percepción</b>: lo que crees de tu riesgo frente a lo que creen los demás.</li><li>Un <b>ensayo de tu carta</b> antes de enviarla.</li></ul><p>Todo esto es material para pensar mejor, no un dato para citar.</p>' },
    { h: 'Lo que no te da',
      html: '<table><tr><th>Pregunta</th><th>La simulación</th><th>Lo que sí responde</th></tr><tr><td>¿Cuándo termina la obra?</td><td>No calcula</td><td>Cronograma y ruta crítica (Ruta Crítica PRO, Planifica PRO)</td></tr><tr><td>¿Cuánto costará?</td><td>No calcula</td><td>Presupuesto, curva S y valorizaciones</td></tr><tr><td>¿Qué dice la norma?</td><td>No es asesoría legal</td><td>La norma y el expediente técnico aprobado, verificados</td></tr><tr><td>¿Qué probabilidad tiene X?</td><td>Solo juicios de los agentes</td><td>Juicio de expertos (Decisiones PRO, Jev PRO)</td></tr></table><p>Un actor simulado puede decir <i>«entrego el día 12»</i>; contrastar ese día con la ruta crítica es trabajo tuyo, no del modelo.</p>' },
    { h: 'Por qué no es un pronóstico',
      html: '<ol><li><b>Depende del modelo:</b> otro modelo, otra trama.</li><li><b>Depende de la semilla:</b> lo que no está en el dossier no existe.</li><li><b>Depende de los perfiles:</b> los que tú escribes fijan el rumbo.</li><li><b>Sesgo complaciente:</b> los modelos tienden a actores demasiado razonables.</li><li><b>Una corrida no es una distribución:</b> lo que salió una vez no es lo que ocurre en promedio.</li></ol><p>Las probabilidades que declare un actor en su respuesta son <b>juicios declarados</b>, no frecuencias observadas.</p>' },
    { h: 'Cómo decirlo sin quitarle valor',
      html: '<p>Comparación de dos frases para el mismo hallazgo:</p><ul><li>Mala: <i>«El contratista presentará controversia con 70% de probabilidad.»</i></li><li>Buena: <i>«En este ensayo, con la información que se le dio, el contratista simulado escaló en la ronda 3 tras recibir la carta sin plazo de respuesta. Es un escenario plausible, no una predicción.»</i></li></ul><p>La segunda conserva lo útil: identifica el punto donde se rompió y qué lo provocó. Si un actor cita un resultado de ensayos o una decisión de un tercero, en el informe aparece como <b>resultado simulado</b>. Nada de esto promete el resultado de una valorización, adicional, ampliación, arbitraje o acción de control.</p>' },
    { h: 'La regla de decisión',
      html: '<p>Antes de simular, pregúntate qué necesitas:</p><ul><li>Un <b>número o una fecha</b>: calcula (cronograma, curva S).</li><li>Una <b>respuesta normativa</b>: lee la norma vigente y el expediente técnico aprobado.</li><li>Una <b>estimación experta</b>: juicio de expertos.</li><li>Ver <b>cómo reaccionan partes con intereses distintos</b>: ahí entra la simulación.</li></ul><p>Y después de simular, contrasta lo simulado con la realidad cuando ocurra: así calibras tu propio criterio.</p>' }
  ],
  keypoints: [
    'La simulación da narrativa plausible, sorpresas y brechas de percepción; no da certeza.',
    'Plazo, costo y ruta crítica se calculan con cronograma, presupuesto y curva S, no con actores.',
    'No es asesoría legal: la norma y el expediente técnico aprobado se verifican aparte.',
    'El resultado depende del modelo, la semilla y los perfiles; una corrida no es una distribución.',
    'Las probabilidades de los agentes son juicios declarados, no frecuencias.',
    'Se comunica como escenario plausible, marcando lo simulado como simulado.'
  ],
  flashcards: [
    { q: '¿Qué sí puede darte una simulación de actores?', a: 'Una narrativa plausible, reacciones no previstas y brechas de percepción.' },
    { q: '¿Qué herramienta responde por el plazo?', a: 'El cronograma y la ruta crítica, no la simulación.' },
    { q: '¿Qué son las probabilidades que da un agente?', a: 'Juicios declarados, no frecuencias observadas.' },
    { q: '¿Por qué una corrida no es un pronóstico?', a: 'Depende del modelo, la semilla y los perfiles, y otra corrida puede diferir.' },
    { q: '¿Cómo se marca el resultado de ensayos o la decisión de un tercero?', a: 'Siempre como resultado simulado.' }
  ],
  quiz: [
    { q: '¿Qué usarías para saber si el plazo prometido por un actor es viable?', opts: ['Otra corrida de la simulación', 'El cronograma y la ruta crítica', 'La opinión del actor simulado'], correct: 1, why: 'El plazo es un cálculo; la simulación solo te dice qué promete cada actor.' },
    { q: '¿Cuál es la frase honesta sobre un hallazgo?', opts: ['El contratista escalará con 70% de probabilidad', 'En este ensayo, el contratista simulado escaló tras recibir la carta; es un escenario plausible', 'La norma obliga a la Entidad a responder'], correct: 1, why: 'Describe el punto de quiebre sin convertirlo en pronóstico ni en criterio legal.' },
    { q: 'Una probabilidad declarada por un actor simulado es:', opts: ['Una frecuencia medida', 'Un juicio declarado del actor', 'Una garantía para la valorización'], correct: 1, why: 'Los agentes emiten juicios; no hay calibración ni promesa sobre resultados reales.' }
  ]
});
