Lesson.start({
  id: 'decalogo-del-simulador', area: 'El simulador destacado', areaIcon: '🏆', icon: '🔟',
  title: 'Decálogo del simulador',
  subtitle: 'Diez reglas para ensayar el futuro sin engañarte.',
  norma: 'Ensayo, no profecía; normas solo por su nombre: verificar la norma vigente y el expediente técnico aprobado.',
  intro: '<p>Este decálogo resume el curso en diez reglas cortas. Imprímelo, pégalo junto al skill y repásalo antes de cada corrida.</p>',
  sections: [
    { h: 'Reglas 1 a 5: diseño',
      html: '<ol><li>Ensayas; no predices.</li><li>Cada actor solo sabe lo suyo.</li><li>Siembra una asimetría de información útil.</li><li>Marca lo no verificado como hipótesis.</li><li>Un evento concreto dispara la simulación.</li></ol>' },
    { h: 'Reglas 6 a 10: conducción y lectura',
      html: '<ol start="6"><li>Decide tú quién se entera de qué, y fecha todo.</li><li>Nada fabricado: los resultados de terceros son «resultado simulado».</li><li>Las probabilidades son juicios declarados.</li><li>Una corrida no es una distribución: repite o ramifica.</li><li>Contrasta con la realidad y anota la diferencia.</li></ol>' },
    { h: 'Cómo usarlo',
      html: '<p>Antes de lanzar, repasa 1 a 5. Antes de leer el informe, repasa 6 a 10. Si una regla no se cumplió, corrige antes de sacar conclusiones.</p>' },
    { h: 'Lo que el decálogo no cubre',
      html: '<p>No sustituye la norma, el expediente técnico aprobado ni tu criterio profesional. Nunca prometas resultados de valorizaciones, adicionales, ampliaciones, arbitrajes o del control.</p>' }
  ],
  keypoints: [
    'Ensayas, no predices.',
    'Cada actor solo sabe lo suyo.',
    'Tú decides quién se entera de qué.',
    'Nada fabricado; lo de terceros es simulado.',
    'Contrasta con la realidad y aprende de la diferencia.'
  ],
  flashcards: [
    { q: '¿Regla 1?', a: 'Ensayas; no predices.' },
    { q: '¿Qué son las probabilidades de los agentes?', a: 'Juicios declarados.' },
    { q: '¿Qué se hace con los resultados de terceros?', a: 'Marcarlos como resultado simulado.' },
    { q: '¿Qué cierra el ciclo?', a: 'Contrastar con la realidad.' }
  ],
  quiz: [
    { q: 'Una corrida única permite:', opts: ['Conocer la distribución completa', 'Explorar un camino posible', 'Predecir con certeza'], correct: 1, why: 'Una corrida es un camino, no una distribución.' },
    { q: 'La decisión de quién se entera de qué la toma:', opts: ['Cada actor', 'El orquestador', 'El azar'], correct: 1, why: 'El orquestador tiene la vista de dios.' },
    { q: 'Un ensayo de laboratorio inventado por la simulación se presenta como:', opts: ['Dato real', 'Resultado simulado', 'Norma'], correct: 1, why: 'Nada fabricado se presenta como real.' }
  ]
});
