Lesson.start({
  id: 'cuando-no-simular', area: 'Rigor, ética y límites', areaIcon: '🛡️', icon: '🛑',
  title: 'Cuándo no simular',
  subtitle: 'Cuando la respuesta es un cálculo, una norma clara o no hay decisión en juego, no hace falta un mundo paralelo.',
  norma: 'Si la respuesta está en la norma o en el expediente, se consulta la fuente: verificar la norma vigente y el expediente técnico aprobado.',
  intro: '<p>Simular es caro en atención, tiempo y consumo de tu cuota. Y sobre todo, puede darte una falsa sensación de análisis. Un buen orquestador sabe cuándo <b>no</b> abrir una corrida. La regla práctica: simulas cuando hay <b>varios actores con información distinta y una decisión abierta</b>; si falta alguna de las tres cosas, hay una herramienta mejor.</p>',
  sections: [
    { h: 'La prueba de tres preguntas',
      html: '<ol><li>¿Hay <b>al menos dos actores</b> que decidirán algo por su cuenta?</li><li>¿Cada uno <b>sabe algo que el otro no</b>?</li><li>¿La decisión está <b>realmente abierta</b> (no la fija una regla ni un cálculo)?</li></ol><p>Si alguna respuesta es no, probablemente no necesitas simular.</p>' },
    { h: 'Casos en que otra herramienta es mejor',
      html: '<table><tr><th>Tu pregunta</th><th>Mejor herramienta</th></tr><tr><td>¿Cuántos días de retraso arrastra esta actividad?</td><td>Cronograma y ruta crítica (Ruta Crítica PRO)</td></tr><tr><td>¿Cuánto vale esta valorización?</td><td>Cálculo con metrados y precios del contrato</td></tr><tr><td>¿Qué plazo aplica a esta actuación?</td><td>La norma y el contrato, verificando su versión vigente</td></tr><tr><td>¿Cuál es la cifra más probable de un parámetro?</td><td>Juicio de expertos (Decisiones PRO, Jev PRO)</td></tr><tr><td>¿Cómo negocio yo?</td><td>Técnicas de negociación (Negocia PRO)</td></tr></table>' },
    { h: 'Señales de que te estás engañando',
      html: '<ul><li>Ya sabes qué quieres que salga y buscas que un actor lo diga.</li><li>La pregunta es de <b>hecho</b> («¿qué dice el contrato?»), no de conducta.</li><li>Quieres un número exacto y lo pedirás como resultado.</li><li>Vas a usar la simulación para <b>legitimar</b> una decisión ya tomada.</li><li>Los datos de partida son inventados por completo y no tienes hechos con fuente.</li></ul>' },
    { h: 'Y cuando sí: sin exagerar',
      html: '<p>Si tras la prueba decides simular, hazlo con la escala justa: pocos actores, una decisión central, dos o tres rondas. No todo caso pide seis actores y seis rondas. Y tampoco dejes de consultar la fuente primaria: la norma se verifica en su versión vigente, el expediente se lee, el cálculo se calcula. La simulación complementa; no reemplaza. Nada de lo que salga garantiza el resultado de valorizaciones, adicionales, ampliaciones, arbitrajes ni acciones de control.</p>' }
  ],
  keypoints: [
    'Simular vale cuando hay varios actores, información desigual y una decisión abierta.',
    'Si la respuesta es un cálculo o una norma clara, se calcula o se consulta la fuente.',
    'Cada pregunta tiene su herramienta: cronograma, cálculo, juicio de expertos o negociación.',
    'Simular para legitimar una decisión ya tomada es engañarse.',
    'Usa la escala justa: pocos actores y pocas rondas.'
  ],
  flashcards: [
    { q: '¿Cuáles son las tres condiciones para simular?', a: 'Varios actores que deciden, información distinta entre ellos y una decisión abierta.' },
    { q: '¿Qué herramienta para «cuántos días de retraso»?', a: 'Cronograma y ruta crítica (Ruta Crítica PRO).' },
    { q: '¿Qué haces si la pregunta es «qué dice la norma»?', a: 'Consultar la fuente vigente; no simular.' },
    { q: '¿Cuál es una señal de autoengaño?', a: 'Simular para legitimar una decisión ya tomada.' },
    { q: '¿Qué escala usar?', a: 'La justa: pocos actores, una decisión central, dos o tres rondas.' }
  ],
  quiz: [
    { q: 'Necesitas saber el monto de una valorización. ¿Simulas?', opts: ['Sí, con seis actores', 'No: se calcula con metrados y precios del contrato', 'Sí, para confirmar'], correct: 1, why: 'Es un cálculo; no hay decisión abierta entre actores.' },
    { q: '¿Cuándo sí tiene sentido simular?', opts: ['Cuando hay actores con información distinta y una decisión abierta', 'Siempre que haya tiempo', 'Cuando quieres un número exacto'], correct: 0, why: 'Las tres condiciones definen el caso.' },
    { q: 'Ya decidiste y quieres respaldo. ¿Qué haces?', opts: ['Simulo hasta que salga', 'No uso la simulación para legitimar', 'Cito el informe'], correct: 1, why: 'Sería autoengaño y contamina el método.' }
  ]
});
