Lesson.start({
  id: 'cuanto-cuesta-una-corrida', area: 'Una corrida de principio a fin', areaIcon: '🔄', icon: '📉',
  title: 'Cuánto cuesta una corrida',
  subtitle: 'El método para estimar el consumo antes de lanzar: contar subagentes, no adivinar cifras.',
  norma: 'Sin precios ni cuotas: los límites y modelos de Claude Code cambian; verificar en la documentación vigente.',
  intro: '<p>Cada actor por ronda es un subagente, y cada subagente consume parte de tu cuota. Antes de lanzar conviene una <b>estimación por conteo</b>: cuántos subagentes gastará la corrida, cuánto lee y escribe cada uno y qué modelo usa. Esta lección no da cifras ni precios porque cambian con el plan y con el tiempo; te da el <b>método</b> para razonar el consumo y decidir dónde ahorrar sin dañar el ensayo. Es la misma idea con la que el plan de esta app estimó su propio consumo: por comparación con una obra anterior.</p>',
  sections: [
    { h: 'Paso 1: contar subagentes',
      html: '<p>La base es una multiplicación:</p><p><span class="hl">subagentes = actores por ronda x número de rondas (+ relanzamientos)</span></p><p>Ejemplo ficticio: 5 actores y 4 rondas dan 20 lanzamientos. Si en una ronda participan menos actores (uno salió, otro no actúa), réstalos: el caso.json ya te dice quién participa en cada ronda. Suma un margen para relanzamientos y, si harás una rama de estrés o una entrevista, súmalas aparte.</p>' },
    { h: 'Paso 2: ponderar el tamaño de cada lanzamiento',
      html: '<p>No todos los subagentes pesan igual. Lo que hace pesado a uno:</p><ul><li><b>Lo que lee:</b> dossier largo, perfil extenso, contexto acumulado de muchas rondas.</li><li><b>Lo que escribe:</b> respuestas con tope de palabras gastan menos que respuestas libres.</li><li><b>Cuántas herramientas usa:</b> abrir muchos archivos suma consumo.</li></ul><p>Regla práctica: el contexto crece ronda a ronda, así que la última ronda pesa más que la primera. Estima por categorías (liviano, medio, pesado) y compara con una corrida anterior tuya en lugar de inventar un número.</p>' },
    { h: 'Paso 3: el modelo de cada actor',
      html: '<p>La documentación indica que el modelo de un subagente se resuelve en un orden (parámetro de la invocación, frontmatter, variable de entorno, modelo de la conversación principal); verifícalo vigente. Como idea de diseño, no como norma: un modelo más ligero puede bastar para actores secundarios o de poca profundidad, y uno más fuerte para los actores decisivos y para la resolución que hace el hilo principal. Prueba con una ronda corta y compara la calidad antes de generalizar.</p>' },
    { h: 'Paso 4: ahorrar sin perder calidad',
      html: '<table><tr><th>Palanca</th><th>Efecto</th><th>Cuidado</th></tr><tr><td>Menos actores</td><td>Baja lanzamientos</td><td>No quitar al que tiene la información clave</td></tr><tr><td>Formato fijo y tope de palabras</td><td>Respuestas cortas y comparables</td><td>No cortar la decisión central</td></tr><tr><td>Dossier compacto</td><td>Menos lectura por lanzamiento</td><td>Conservar hechos con fuente</td></tr><tr><td>Relanzar solo al afectado</td><td>Evita rehacer rondas</td><td>Diagnosticar la causa antes</td></tr><tr><td>Corrida de prueba corta</td><td>Detecta errores baratos</td><td>Una ronda no es distribución</td></tr></table><p>Si tu cuota es justa, parte la corrida en dos sesiones: el disco guarda el estado del mundo. Y si la pregunta no necesita actores en conflicto, quizá no toca simular (área 12).</p>' }
  ],
  keypoints: [
    'Consumo estimado = subagentes (actores x rondas + relanzamientos) ponderados por su tamaño.',
    'El contexto crece cada ronda: la última pesa más que la primera.',
    'Formato fijo y topes de palabras reducen consumo sin perder comparabilidad.',
    'El modelo por actor se puede elegir; probar la calidad antes de generalizar.',
    'Relanzar solo al afectado ahorra rondas enteras.',
    'Sin cifras ni precios: los límites se verifican en la documentación vigente.'
  ],
  flashcards: [
    { q: '¿Cómo se cuentan los subagentes de una corrida?', a: 'Actores por ronda multiplicados por las rondas, más los relanzamientos y ramas extra.' },
    { q: '¿Por qué pesa más la última ronda?', a: 'Porque el contexto acumulado de cada actor crece con las rondas.' },
    { q: '¿Qué ahorra un formato fijo con tope de palabras?', a: 'Consumo de escritura y respuestas comparables.' },
    { q: '¿Con qué comparas tu estimación?', a: 'Con una corrida anterior tuya, no con un número inventado.' },
    { q: '¿Qué haces si la cuota es justa?', a: 'Partes la corrida en dos sesiones, apoyado en los archivos en disco.' }
  ],
  quiz: [
    { q: 'Tienes 5 actores y 4 rondas, todos participan siempre. ¿Cuántos lanzamientos base son?', opts: ['9', '20', '5'], correct: 1, why: 'Actores por ronda x rondas: 5 x 4 = 20, más los relanzamientos previstos.' },
    { q: '¿Cuál es una forma segura de ahorrar?', opts: ['Quitar al actor que tiene la información clave', 'Fijar formato y tope de palabras', 'Saltarse la revisión de la ronda'], correct: 1, why: 'Reduce consumo sin quitar lo que hace útil al ensayo.' },
    { q: 'Sobre precios y cuotas del plan, esta lección:', opts: ['Da la cifra exacta', 'No los da: enseña a estimar y a verificar en la documentación vigente', 'Recomienda un plan'], correct: 1, why: 'Cambian con frecuencia; el método de conteo es lo que perdura.' }
  ]
});
