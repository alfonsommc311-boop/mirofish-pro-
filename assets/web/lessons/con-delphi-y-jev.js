Lesson.start({
  id: 'con-delphi-y-jev', area: 'Combinar con tus otras herramientas', areaIcon: '🧰', icon: '🧠',
  title: 'Con Delphi y Jev',
  subtitle: 'Juicio de expertos y experto sintético frente a actores simulados: cuándo usar cada uno.',
  norma: 'Estimar una cifra con expertos y ensayar la reacción de partes con intereses opuestos son tareas distintas; ninguna produce un resultado garantizado.',
  intro: '<p>Ya sabes reunir expertos para estimar una probabilidad o una cifra (Delphi) y consultar un experto sintético como Jev. Los actores simulados parecen primos de esas técnicas, pero responden a otra pregunta. Aquí aprendes a elegir: <b>un experto opina sobre algo</b>; <b>un actor decide, con intereses y con información parcial</b>. El método completo de Delphi y del experto sintético vive en <b>Decisiones PRO</b> y <b>Jev PRO</b>; esta lección solo marca la frontera y las combinaciones útiles.</p>',
  sections: [
    { h: 'Tres figuras, tres funciones',
      html: '<table><tr><th>Figura</th><th>Qué le pides</th><th>Qué obtienes</th></tr><tr><td>Panel Delphi</td><td>Estimar una cifra o probabilidad, con rondas y retroalimentación</td><td>Un consenso o una dispersión de juicios</td></tr><tr><td>Experto sintético (Jev)</td><td>Opinión técnica argumentada sobre un tema</td><td>Un juicio con sus razones, para contrastar</td></tr><tr><td>Actor simulado</td><td>Decidir qué hace con lo que sabe y lo que quiere</td><td>Una acción, con su efecto sobre los demás</td></tr></table><p>La diferencia clave: al experto le pides objetividad; al actor le pides <b>parcialidad realista</b>. Un actor sin intereses propios deja de ser actor.</p>' },
    { h: 'Cuándo usar cada una',
      html: '<ul><li><b>Necesitas un número</b> (probabilidad de un evento, rango de un costo): panel de expertos o experto sintético; consulta Decisiones PRO.</li><li><b>Necesitas saber cómo reaccionarán partes con intereses opuestos ante un hecho</b>: simulación de actores.</li><li><b>Necesitas un criterio técnico</b> (qué ensayo corresponde, qué riesgo se subestima): experto sintético, y contraste con tu propio juicio.</li></ul><p>Pregunta de control: <i>¿hay una decisión de alguien con intereses en juego?</i> Si la respuesta es no, probablemente no necesitas simular (ver <i>Cuándo no simular</i>).</p>' },
    { h: 'Combinaciones que sí rinden',
      html: '<ol><li><b>Del actor al panel.</b> La simulación deja probabilidades declaradas por cada actor sobre el mismo hecho. Si esas cifras te importan, no las tomes como dato: llévalas como <span class="hl">hipótesis</span> a un panel Delphi o a Jev para que las cuestionen.</li><li><b>Del experto al perfil.</b> Antes de escribir el perfil de un actor, consulta a un experto sintético sobre cómo suele razonar ese rol frente a un evento parecido. Así reduces la caricatura. Lo que traiga se marca como hipótesis del perfil.</li><li><b>Del panel al dossier.</b> Si un panel ya estimó un rango técnico, va al dossier con su fuente, como hecho de la semilla y no como opinión de un actor.</li></ol>' },
    { h: 'Un ejemplo concreto',
      html: '<p>Caso ficticio: la Municipalidad Distrital de Villa Esperanza duda si denegar una ampliación. La simulación muestra que el Consorcio Andino, en su ronda 2, declara <i>«probabilidad de que escale a controversia: alta»</i> y la Entidad declara <i>«baja»</i>. Es una brecha de percepción, no una frecuencia.</p><p>Para decidir cuánto pesa, tú, como orquestador, puedes pedir a un panel o a Jev que estime esa probabilidad con sus propias razones, y contrastar las tres cifras. Ninguna es <b>el</b> valor: son tres juicios con orígenes distintos.</p>' },
    { h: 'Errores frecuentes',
      html: '<ul><li>Promediar las probabilidades de los actores como si fueran votos de un panel: cada actor está sesgado por diseño.</li><li>Usar a un actor simulado como experto técnico: no lo es, decide según su perfil.</li><li>Tratar el consenso de un panel como resultado seguro de un proceso legal o de un control.</li></ul><p>Las normas peruanas mencionadas en un caso se citan por su nombre: verificar la norma vigente y el expediente técnico aprobado.</p>' }
  ],
  keypoints: [
    'Un experto opina sobre algo; un actor decide con intereses e información parcial.',
    'Para estimar un número usa panel Delphi o experto sintético (Decisiones PRO, Jev PRO).',
    'Para ensayar la reacción de partes opuestas usa la simulación de actores.',
    'Las probabilidades de los actores son hipótesis: llévalas a un panel para cuestionarlas, no las promedies.',
    'Un experto sintético puede ayudarte a evitar perfiles caricaturescos, marcando lo que aporte como hipótesis.'
  ],
  flashcards: [
    { q: '¿Qué le pides a un actor simulado que no le pides a un experto?', a: 'Parcialidad realista: que decida según sus intereses y lo que sabe.' },
    { q: '¿Cuándo conviene un panel Delphi?', a: 'Cuando necesitas estimar una cifra o probabilidad con juicios que se contrastan por rondas.' },
    { q: '¿Se promedian las probabilidades de los actores?', a: 'No: cada una es un juicio sesgado por su perfil; se leen como brecha de percepción.' },
    { q: '¿Dónde se enseña el método completo de Delphi y del experto sintético?', a: 'En Decisiones PRO y Jev PRO.' }
  ],
  quiz: [
    { q: 'Necesitas la probabilidad de que un costo supere un rango. ¿Qué herramienta encaja mejor?', opts: ['Simulación de actores', 'Panel de expertos o experto sintético', 'Ninguna, se supone'], correct: 1, why: 'Es una estimación de cifra; los actores no son estimadores neutrales.' },
    { q: 'Los actores declaran probabilidades opuestas sobre una controversia. ¿Cómo se leen?', opts: ['Se promedian y se toma el resultado', 'Como una brecha de percepción y hipótesis para contrastar', 'Como la frecuencia real del evento'], correct: 1, why: 'Son juicios declarados con intereses; sirven para ver dónde difieren las percepciones.' },
    { q: '¿Qué haces con un rango técnico ya estimado por un panel?', opts: ['Lo pones en la voz de un actor', 'Lo incluyes en el dossier con su fuente', 'Lo ignoras'], correct: 1, why: 'Es un hecho de la semilla con fuente, no una opinión interesada.' }
  ]
});
