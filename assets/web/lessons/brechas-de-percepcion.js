Lesson.start({
  id: 'brechas-de-percepcion', area: 'Leer lo que salió', areaIcon: '📊', icon: '🪞',
  title: 'Brechas de percepción',
  subtitle: 'El hallazgo más valioso: lo que crees de tu riesgo frente a lo que creen los demás de él.',
  norma: 'Una brecha es una diferencia entre juicios declarados, no una medición (verificar la norma vigente y el expediente técnico aprobado en todo caso real).',
  intro: '<p>Cuando cada actor estima su propia situación y la de los demás, casi nunca coinciden. Esa diferencia es la <b>brecha de percepción</b> y suele ser lo más útil de una corrida: te muestra dónde tu propia lectura del riesgo es más optimista, o más pesimista, que la de quienes pueden actuar sobre ti. No es una predicción: es una señal de dónde mirar antes de enviar la carta.</p>',
  sections: [
    { h: 'Qué es y cómo se ve',
      html: '<p>Se construye con dos preguntas sobre el mismo asunto: <i>¿cuánto riesgo crees que corre X?</i> respondida por X y por los otros. La brecha es la resta. En la línea de indicadores que cierra cada respuesta, cada actor declara su probabilidad; tú comparas.</p><ul><li><span class="hl">Autopercepción</span>: lo que el actor cree de su propio riesgo.</li><li><span class="hl">Percepción ajena</span>: lo que los demás creen de ese riesgo.</li><li><span class="hl">Brecha</span>: la diferencia, con su signo.</li></ul>' },
    { h: 'Ejemplo ficticio con números',
      html: '<p>Caso ficticio: Consorcio Supervisor Horizonte difiere una valorización de la Municipalidad Distrital de Villa Esperanza. Pregunta: probabilidad de que el diferimiento sea cuestionado formalmente por el Consorcio Andino. Todas son <b>probabilidades declaradas por los agentes</b>, no frecuencias.</p><table><tr><th>Quién estima</th><th>Ronda 1</th><th>Ronda 2</th><th>Ronda 3</th></tr><tr><td>Supervisión (su propio riesgo)</td><td>20 %</td><td>25 %</td><td>25 %</td></tr><tr><td>Contratista sobre la supervisión</td><td>60 %</td><td>70 %</td><td>75 %</td></tr><tr><td>Entidad sobre la supervisión</td><td>45 %</td><td>50 %</td><td>55 %</td></tr></table><p>La supervisión cree correr poco riesgo; el contratista y la Entidad lo ven bastante mayor. Brecha en ronda 3: 75 - 25 = 50 puntos con el contratista y 30 con la Entidad.</p>' },
    { h: 'Por qué existe: información privada',
      html: '<p>Casi siempre la brecha nace de una <b>asimetría</b>: la supervisión sabe que su sustento técnico es sólido, pero no sabe que el contratista guarda una comunicación previa donde ella aparece aceptando un criterio distinto. Cada uno razona bien con lo que tiene. Por eso, ante una brecha, pregunta primero <b>qué sabe uno que el otro no</b>, antes de decidir quién se equivoca.</p><p>Desde la silla del actor la brecha no se siente como error: se siente como certeza.</p>' },
    { h: 'Qué hacer con una brecha',
      html: '<ol><li>Anota el asunto, los dos números y la ronda en que se abre.</li><li>Busca en la cronología el hecho que la explica.</li><li>Decide qué información sacar a la luz, o qué flanco cubrir, antes de actuar en la realidad.</li><li>Si pasa al registro de riesgos, ver Riesgos Obra PRO.</li></ol><p>Una brecha grande no dice que el otro tiene razón: dice que <b>tu lectura es frágil</b> frente a lo que ellos saben o creen.</p>' },
    { h: 'Cautelas de lectura',
      html: '<ul><li>Los números son juicios de un modelo interpretando a un actor: úsalos para ordenar, no para citar.</li><li>Una brecha estable en varias rondas pesa más que un salto en una sola.</li><li>Una brecha puede venir de un perfil mal escrito: revisa el perfil antes de creerle a la corrida.</li></ul>' }
  ],
  keypoints: [
    'La brecha es la diferencia entre lo que un actor cree de su riesgo y lo que creen los demás.',
    'Se lee en las probabilidades declaradas de la línea de indicadores.',
    'Casi siempre nace de información privada distinta.',
    'Una brecha estable pesa más que un salto aislado.',
    'No prueba quién tiene razón: muestra que tu lectura es frágil.',
    'Revisa el perfil antes de creer una brecha llamativa.'
  ],
  flashcards: [
    { q: '¿Qué es una brecha de percepción?', a: 'La diferencia entre lo que un actor cree de su propio riesgo y lo que creen los demás.' },
    { q: '¿Qué son los números de la brecha?', a: 'Probabilidades declaradas por los agentes, no frecuencias observadas.' },
    { q: '¿Cuál es la causa más común?', a: 'Información privada distinta entre los actores.' },
    { q: 'Primera pregunta ante una brecha grande', a: '¿Qué sabe uno que el otro no?' }
  ],
  quiz: [
    { q: 'La supervisión estima 25 % y el contratista 75 % sobre el mismo riesgo. La brecha es:', opts: ['25 puntos', '50 puntos', '75 puntos'], correct: 1, why: '75 - 25 = 50 puntos, y es una diferencia de juicios declarados.' },
    { q: 'Una brecha grande significa que:', opts: ['El otro actor tiene razón', 'Tu lectura es frágil frente a lo que otros saben o creen', 'La simulación falló'], correct: 1, why: 'No arbitra la verdad: señala dónde mirar.' },
    { q: 'Antes de fiarte de una brecha llamativa debes revisar:', opts: ['El perfil del actor', 'El color del gráfico', 'La cantidad de rondas solamente'], correct: 0, why: 'Un perfil mal escrito puede fabricar una brecha que no refleja la situación.' }
  ]
});
