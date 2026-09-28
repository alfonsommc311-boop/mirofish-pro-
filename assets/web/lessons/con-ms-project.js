Lesson.start({
  id: 'con-ms-project', area: 'Combinar con tus otras herramientas', areaIcon: '🧰', icon: '📅',
  title: 'Con MS Project',
  subtitle: 'Los días que un actor promete, contra la ruta crítica.',
  norma: 'El plazo se calcula con el cronograma y la ruta crítica del expediente técnico aprobado; la simulación solo ensaya lo que los actores prometen (verificar la norma vigente y el expediente técnico aprobado).',
  intro: '<p>Una simulación de actores produce frases como <i>«el contratista se compromete a reponer el frente en diez días»</i>. Esa frase es un <b>juicio declarado</b> de un actor simulado, no un dato de plazo. El cronograma, en cambio, es el que sabe qué actividades dependen de qué. Esta lección enseña a poner ambos frente a frente: la simulación aporta la promesa y el comportamiento; MS Project aporta la lógica de precedencias. Nunca al revés.</p>',
  sections: [
    { h: 'Dos herramientas, dos preguntas distintas',
      html: '<table><tr><th>Herramienta</th><th>Pregunta que responde</th></tr><tr><td>Simulación de actores</td><td>¿Qué prometería, callaría o exigiría cada parte, con lo que sabe?</td></tr><tr><td>Cronograma y ruta crítica</td><td>Si esta actividad se mueve N días, ¿qué otras se mueven?</td></tr></table><p>La simulación no calcula holguras ni caminos; el cronograma no anticipa que la Entidad responderá tarde. Se necesitan las dos, cada una en lo suyo. El cálculo de la ruta crítica y el what-if de retrasos se enseñan en <b>Ruta Crítica PRO</b> y <b>Planifica PRO</b>; aquí solo se conecta.</p>' },
    { h: 'De la promesa del actor a una entrada del what-if',
      html: '<p>Cada ronda pide al actor un formato fijo. Si en la decisión central incluyes una línea de <span class="hl">compromisos con fecha</span>, la salida se vuelve fácil de contrastar:</p><table><tr><th>Actor</th><th>Promesa simulada</th><th>Actividad del cronograma</th><th>Qué probar</th></tr><tr><td>Consorcio Andino</td><td>Reponer el frente en 10 días calendario</td><td>Encofrado del tramo 2</td><td>Duración de 10 frente a 15 días</td></tr><tr><td>Municipalidad Distrital de Villa Esperanza</td><td>Responder la consulta en 7 días</td><td>Hito de aprobación</td><td>Inicio tardío de la sucesora</td></tr></table><p>Los números de la tabla son ficticios. El punto es el método: cada promesa se convierte en <b>una hipótesis de duración</b> que corres en el cronograma, no en un plazo aceptado.</p>' },
    { h: 'Lo que la simulación suma: el retraso que nadie modeló',
      html: '<p>Un cronograma supone que las actividades duran lo programado. Los actores simulados te muestran <b>por qué una duración podría alargarse</b>: una consulta que nadie contesta, un ensayo que se demora, una carta que llega sin copia al control. Eso te da candidatos de escenarios para el what-if.</p><ul><li>Ensayas la ronda y anotas qué decisión de un actor tocaría una actividad de la ruta crítica.</li><li>Corres en el cronograma un retraso de prueba en esa actividad.</li><li>Comparas: ¿el tramo sigue crítico o se movió la ruta?</li></ul><p>Lo que el cronograma devuelva es un cálculo sobre tu hipótesis; no es lo que ocurrirá.</p>' },
    { h: 'La silla del actor: por qué un actor promete lo que promete',
      html: '<p>Un contratista simulado promete diez días porque su perfil dice que teme una penalidad y no quiere admitir que depende de un proveedor. Otro actor, con otra información, promete quince. Si el orquestador ve que la promesa cambia con el perfil, aprende algo útil: <b>la duración depende de quién la declara</b>. Eso justifica probar más de un valor en el cronograma en lugar de elegir el más cómodo.</p>' },
    { h: 'Lo que no se hace',
      html: '<ul><li>No copiar una fecha de la simulación al cronograma como si fuera un dato.</li><li>No presentar una ampliación de plazo, una penalidad o una valorización como resultado de la simulación.</li><li>No pedir a un actor que calcule la ruta crítica: es un cálculo, no una decisión (ver <i>Cuándo no simular</i>).</li></ul><p>Las normas peruanas de plazos se citan por su nombre: verificar la norma vigente y el expediente técnico aprobado.</p>' }
  ],
  keypoints: [
    'La promesa de un actor simulado es un juicio declarado, no un plazo.',
    'El cronograma calcula precedencias y holguras; la simulación anticipa comportamientos.',
    'Pide en la consigna una línea de compromisos con fecha para poder contrastarla.',
    'Cada promesa se convierte en una hipótesis de duración para el what-if, con más de un valor.',
    'Lo que devuelve el cronograma es un cálculo sobre tu hipótesis, no un pronóstico de término.'
  ],
  flashcards: [
    { q: '¿Qué es la fecha que promete un actor simulado?', a: 'Un juicio declarado que sirve de hipótesis para probar en el cronograma.' },
    { q: '¿Quién calcula qué actividades se mueven si otra se retrasa?', a: 'El cronograma con su ruta crítica (Ruta Crítica PRO, Planifica PRO), no la simulación.' },
    { q: '¿Qué aporta la simulación al what-if?', a: 'Candidatos de retraso: qué decisión de un actor podría alargar una actividad.' },
    { q: '¿Por qué probar varios valores de duración?', a: 'Porque la promesa cambia según quién la declara y con qué información.' }
  ],
  quiz: [
    { q: 'Un actor simulado promete reponer un frente en 10 días. ¿Qué haces con eso?', opts: ['Lo registras como el nuevo plazo', 'Lo pruebas como hipótesis en el cronograma, junto con otros valores', 'Lo descartas sin más'], correct: 1, why: 'Es un juicio declarado; el cronograma dice qué implicaría, sin garantizar que ocurra.' },
    { q: '¿Qué herramienta responde cuánto se mueve el término si una actividad crítica se retrasa?', opts: ['La simulación de actores', 'El cronograma con la ruta crítica', 'El informe de la simulación'], correct: 1, why: 'Las precedencias y holguras son un cálculo del cronograma.' },
    { q: '¿Qué no debe afirmar nunca la simulación respecto al plazo?', opts: ['Que un actor podría demorarse', 'Que una ampliación de plazo será aprobada o denegada', 'Que una consulta puede quedar sin respuesta'], correct: 1, why: 'Ninguna lección promete el resultado de una ampliación; se verifica la norma vigente y el expediente técnico aprobado.' }
  ]
});
