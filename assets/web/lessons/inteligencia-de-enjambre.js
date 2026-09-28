Lesson.start({
  id: 'inteligencia-de-enjambre', area: 'Qué es MiroFish', areaIcon: '🐟', icon: '🐝',
  title: 'Inteligencia de enjambre',
  subtitle: 'De un modelo que opina a muchos agentes que interactúan: qué es la emergencia y qué da que un solo prompt no da.',
  norma: 'Un enjambre no adivina: produce interacciones que ningún actor tenía escritas de antemano (verificar en la documentación vigente del proyecto).',
  intro: '<p>MiroFish se describe a sí mismo como un motor de <b>inteligencia de enjambre</b>: en lugar de un modelo que responde una pregunta, hay muchos agentes con personalidad y memoria propias que actúan e influyen unos en otros. Tú, que ya usas Claude Code a diario, conoces el chat de un solo hilo: una voz que lo sabe todo y opina sobre todos. Esta lección explica qué cambia cuando esa voz se reparte entre actores que <b>saben cosas distintas</b>, y por qué eso importa en una obra pública.</p>',
  sections: [
    { h: 'Un modelo que opina frente a muchos que actúan',
      html: '<p>Si le preguntas a un solo modelo <i>«¿qué hará el contratista si le difiero la valorización?»</i>, obtienes <b>una opinión</b> redactada desde afuera, con toda la información a la vista. Es un analista hablando de otros.</p><p>En un enjambre cada agente responde solo por sí mismo, con lo que le toca saber, y sus actos pasan a ser parte del mundo de los demás.</p><table><tr><th></th><th>Un solo prompt</th><th>Enjambre de agentes</th></tr><tr><td>Quién habla</td><td>Un analista neutral</td><td>Cada actor, en su propia voz</td></tr><tr><td>Información</td><td>Toda mezclada</td><td>Repartida: cada uno ve lo suyo</td></tr><tr><td>Resultado</td><td>Una opinión</td><td>Una secuencia de actos y reacciones</td></tr></table>' },
    { h: 'Qué es la emergencia',
      html: '<p>La <b>emergencia</b> es lo que aparece en el conjunto y no estaba escrito en ningún perfil individual. Nadie le dijo al contratista «pide una reunión con copia al órgano de control»; lo decidió porque, con lo que sabía, vio que su flanco era el plazo. Nadie le dijo a la Entidad que respondiera tarde; ocurrió porque su área legal tardó en enterarse.</p><ul><li>El perfil de cada actor es <span class="hl">local</span>: quién es, qué quiere, qué sabe.</li><li>La trama es <span class="hl">colectiva</span>: sale de las decisiones cruzadas ronda a ronda.</li></ul><p>Esa trama es lo que un supervisor quiere ver antes de firmar una carta: la reacción que no imaginó.</p>' },
    { h: 'Qué da un enjambre que un prompt no da',
      html: '<ol><li><b>Asimetría de información.</b> Cada actor decide sin ver el cuaderno del otro ni su memorando interno.</li><li><b>Interacción en el tiempo.</b> Un acto de la ronda 1 cambia lo que se sabe en la ronda 2.</li><li><b>Voces con intereses opuestos.</b> El modelo único tiende a conciliar; varios actores defienden lo suyo.</li><li><b>Sorpresas.</b> Aparecen movidas que ninguno de los perfiles anticipaba.</li></ol><p>Desde la silla del actor: un contratista no razona como un ingeniero neutral, razona con su caja, su plazo y lo que teme que la supervisión haya anotado.</p>' },
    { h: 'La versión de MiroFish y la de este curso',
      html: '<p>Según su README, MiroFish construye un mundo paralelo con <b>miles de agentes</b> con personalidad, memoria a largo plazo y lógica de comportamiento. Es la idea de enjambre en gran escala, pensada sobre todo para dinámicas sociales.</p><p>Este curso toma el <b>método</b> y lo lleva a Claude Code con <b>pocos actores ricos</b>: de 3 a 6, cada uno como un subagente con su propio contexto. No compites en cantidad; ganas en profundidad de la información privada de cada uno. Los detalles del enjambre original: <b>verificar en la documentación vigente</b>.</p>' },
    { h: 'Lo que el enjambre no es',
      html: '<p>Que muchos agentes conversen no vuelve exacto el resultado. Todos usan el mismo tipo de modelo de lenguaje, así que comparten sesgos, y el material semilla condiciona todo. Una trama emergente es <b>plausible</b>, no probable en sentido estadístico; las probabilidades que declare un agente son juicios declarados, no frecuencias.</p><p>Idea rectora del curso: <b>no predices, ensayas con lo que cada uno sabe y miras dónde se rompe</b>. Las normas peruanas que aparezcan en un caso se citan solo por su nombre: verificar la norma vigente y el expediente técnico aprobado.</p>' }
  ],
  keypoints: [
    'Un enjambre reparte la voz entre agentes que saben cosas distintas; un prompt único es un analista que lo ve todo.',
    'Emergencia: lo que aparece en el conjunto y no estaba escrito en ningún perfil.',
    'El motor de la trama es la información desigual y la interacción entre rondas.',
    'MiroFish lo hace con miles de agentes; este curso, con pocos actores ricos en Claude Code.',
    'La trama es plausible, no una frecuencia: no vender la simulación como predicción.',
    'Los datos técnicos de MiroFish se verifican en su documentación vigente.'
  ],
  flashcards: [
    { q: '¿Qué es la emergencia en una simulación?', a: 'Lo que aparece en el conjunto de interacciones y no estaba escrito en ningún perfil individual.' },
    { q: '¿Qué diferencia a un enjambre de un solo prompt?', a: 'Cada agente actúa con lo que solo él sabe y sus actos cambian el mundo de los demás.' },
    { q: '¿Cuántos agentes usa este curso y por qué?', a: 'Pocos, de 3 a 6, pero ricos en información privada; se gana profundidad, no cantidad.' },
    { q: '¿Una trama emergente es una predicción?', a: 'No: es plausible y depende del modelo, la semilla y los perfiles; sirve para ensayar.' },
    { q: '¿Qué tiende a hacer un modelo único frente a partes en conflicto?', a: 'Conciliar; por eso conviene que cada actor defienda lo suyo desde su propio contexto.' }
  ],
  quiz: [
    { q: '¿Qué aporta el enjambre que un solo prompt no aporta?', opts: ['Certeza sobre el futuro', 'Interacción entre actores con información desigual', 'Menor consumo de recursos'], correct: 1, why: 'Lo distintivo es que cada agente decide con lo suyo y sus actos se cruzan en el tiempo.' },
    { q: 'Una reacción del contratista que ningún perfil anticipaba es un ejemplo de:', opts: ['Error de formato', 'Emergencia', 'Predicción validada'], correct: 1, why: 'Emergencia es lo que sale del conjunto; no prueba que vaya a ocurrir, solo que es plausible.' },
    { q: '¿Cómo se debe presentar el resultado de un enjambre?', opts: ['Como un pronóstico con su probabilidad exacta', 'Como un ensayo de escenarios con juicios declarados', 'Como opinión legal'], correct: 1, why: 'Las probabilidades de los agentes son juicios declarados, no frecuencias, y la simulación no reemplaza el análisis técnico ni jurídico.' }
  ]
});
