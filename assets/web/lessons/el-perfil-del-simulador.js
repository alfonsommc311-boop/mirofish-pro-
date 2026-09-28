Lesson.start({
  id: 'el-perfil-del-simulador', area: 'El simulador destacado', areaIcon: '🏆', icon: '🧑‍💼',
  title: 'El perfil del simulador',
  subtitle: 'Qué sabe, qué pregunta y qué no hace quien ensaya bien el futuro.',
  norma: 'La disciplina del orquestador pesa más que la potencia del modelo.',
  intro: '<p>Quien simula bien no es quien lanza más agentes, sino quien <b>diseña mejores preguntas, cuida el aislamiento y desconfía de sus propios resultados</b>. Este perfil resume el oficio del curso en tres columnas.</p>',
  sections: [
    { h: 'Lo que sabe',
      html: '<ul><li>Que cada actor razona solo con lo que conoce.</li><li>Que la información privada mueve la simulación.</li><li>Que una corrida no es una distribución.</li></ul>' },
    { h: 'Lo que pregunta',
      html: '<ul><li>¿Qué sabe este actor que los demás no?</li><li>¿Quién se entera de este hecho, y cuándo?</li><li>¿Qué supuesto mío no está verificado?</li></ul>' },
    { h: 'Lo que no hace',
      html: '<table><tr><th>No hace</th><th>Porque</th></tr><tr><td>Vender la simulación como predicción</td><td>Es un ensayo</td></tr><tr><td>Dejar que un actor invente documentos</td><td>Nada fabricado</td></tr><tr><td>Mezclar el informe con lo que envía a la Entidad</td><td>Es interno</td></tr><tr><td>Simular lo que es un cálculo</td><td>Se resuelve con cálculo</td></tr></table>' },
    { h: 'Cómo se entrena',
      html: '<p>Con la biblioteca de casos y el archivo de lecciones: comparar, anotar, ajustar. Cada corrida mejora tu criterio, no solo tu skill.</p>' }
  ],
  keypoints: [
    'El oficio está en el diseño y la disciplina, no en la cantidad de agentes.',
    'Pregunta siempre qué sabe cada actor que otros no.',
    'Cuida quién se entera de qué y cuándo.',
    'Marca lo no verificado como hipótesis.',
    'No simula lo que se resuelve con un cálculo o una norma clara.'
  ],
  flashcards: [
    { q: '¿Qué mueve una simulación?', a: 'La información privada de cada actor.' },
    { q: '¿Qué pregunta central hace el simulador?', a: '¿Qué sabe este actor que los demás no?' },
    { q: '¿Qué no simula?', a: 'Lo que se resuelve con un cálculo o una norma clara.' },
    { q: '¿Cómo se entrena?', a: 'Con biblioteca de casos y lecciones.' }
  ],
  quiz: [
    { q: 'El buen simulador se distingue por:', opts: ['Usar más agentes', 'Su disciplina de diseño y aislamiento', 'Su velocidad'], correct: 1, why: 'La calidad del ensayo depende del diseño, no de la escala.' },
    { q: '¿Qué hace con un supuesto no verificado?', opts: ['Lo oculta', 'Lo marca como hipótesis', 'Lo trata como hecho'], correct: 1, why: 'Lo no verificado se declara.' },
    { q: 'Ante una duda que es un simple cálculo:', opts: ['Simula', 'Calcula', 'Pregunta a los actores'], correct: 1, why: 'Simular un cálculo no aporta.' }
  ]
});
