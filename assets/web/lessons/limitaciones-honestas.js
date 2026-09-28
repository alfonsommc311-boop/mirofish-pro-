Lesson.start({
  id: 'limitaciones-honestas', area: 'El informe y la conversación con el mundo', areaIcon: '📝', icon: '⚠️',
  title: 'Limitaciones honestas',
  subtitle: 'Lo que el informe debe decir de sí mismo para que se le crea.',
  norma: 'Ensayo de escenarios, no predicción ni asesoría legal; normas solo por su nombre (verificar la norma vigente y el expediente técnico aprobado).',
  intro: '<p>Un informe que no declara sus límites no es más fuerte: es menos creíble. Quien lo lea sabrá, si sabe algo de modelos, que las respuestas salen de un modelo de lenguaje interpretando papeles. La sección de limitaciones te adelanta a esa duda. Escribirla bien es lo que separa a un orquestador confiable de uno que vende humo. Aquí ves qué debe contener y cómo redactarla sin anular el valor del ensayo.</p>',
  sections: [
    { h: 'Por qué se le cree más a quien dice sus límites',
      html: '<p>Piensa en un informe de supervisión que dice «todo conforme» sin mencionar qué no se revisó. Nadie confía. Con un informe de simulación pasa igual. Declarar los límites le dice al lector <i>hasta dónde</i> usarlo, y eso lo hace utilizable.</p>' },
    { h: 'Qué debe decir el informe de sí mismo',
      html: '<ul><li><b>Es un ensayo, no una predicción.</b> Muestra un camino plausible entre otros, no el más probable.</li><li><b>Las probabilidades son juicios declarados.</b> Cada actor dio un número como opinión de ese momento; no son frecuencias medidas.</li><li><b>Una corrida no es una distribución.</b> Otra corrida podría diferir; no se sabe cuánto sin repetir (ver lecciones del área 8).</li><li><b>Los actores dependen del perfil y del modelo.</b> Un perfil distinto o una hipótesis distinta cambia la conducta.</li><li><b>Hay hipótesis no verificadas.</b> Se listan, con su marca.</li><li><b>Hay resultados simulados.</b> Ensayos, decisiones de terceros o el clima que la simulación decidió de forma plausible.</li><li><b>No es asesoría legal ni cálculo de plazo o costo.</b> Para eso, la norma vigente, el expediente técnico aprobado y las herramientas de cálculo.</li></ul>' },
    { h: 'Ejemplo de texto',
      html: '<p>Un párrafo de la sección, en caso ficticio:</p><p><i>«Este informe resume una corrida de cuatro rondas con cinco actores simulados. Las probabilidades que aparecen son juicios de cada actor en su ronda, no frecuencias. No se repitió la corrida, por lo que no se conoce la variabilidad. Los resultados de ensayos y las decisiones de la asesoría jurídica son resultado simulado. El contenido no sustituye la consulta a la norma vigente ni al expediente técnico aprobado, y no anticipa el resultado de ninguna valorización, ampliación o controversia.»</i></p>' },
    { h: 'Cómo redactarla sin anular el valor',
      html: '<table><tr><th>Evita</th><th>Prefiere</th></tr><tr><td>«Los resultados podrían no ser fiables»</td><td>«Este ensayo sirve para ver reacciones y flancos, no para fijar plazos ni montos»</td></tr><tr><td>Una lista de veinte advertencias</td><td>Cinco o seis límites que cambian cómo se lee el informe</td></tr><tr><td>Esconderla al final</td><td>Una línea en la respuesta corta y la sección completa antes del anexo</td></tr></table><p>Sobre los datos técnicos de MiroFish o de Claude Code que menciones, remite a verificar en la documentación vigente.</p>' },
    { h: 'La silla del lector escéptico',
      html: '<p>Antes de entregar, imagina a quien discrepa: «¿y si el contratista fuera menos agresivo?». Si tu sección de limitaciones ya responde eso («el perfil asumió una postura firme; una postura distinta es una rama posible»), la sección hizo su trabajo. Lo que quedó sin verificar, dilo; lo que puedes comprobar más adelante, anótalo para contrastarlo con la realidad.</p>' }
  ],
  keypoints: [
    'Declarar los límites hace al informe más creíble y más utilizable.',
    'Debe decir: ensayo y no predicción; probabilidades como juicios; una sola corrida; dependencia del perfil y del modelo.',
    'Lista las hipótesis no verificadas y marca los resultados simulados.',
    'No es asesoría legal ni cálculo de plazo o costo.',
    'Pocos límites bien escogidos valen más que una lista interminable.'
  ],
  flashcards: [
    { q: '¿Por qué incluir limitaciones?', a: 'Porque le dicen al lector hasta dónde usar el informe; eso lo hace creíble.' },
    { q: '¿Qué son las probabilidades de los actores?', a: 'Juicios declarados de cada actor en su ronda, no frecuencias.' },
    { q: '¿Qué implica haber hecho una sola corrida?', a: 'Que no se conoce la variabilidad: otra corrida podría diferir.' },
    { q: '¿Qué se marca siempre como simulado?', a: 'Resultados de ensayos y decisiones de terceros.' },
    { q: '¿Qué no es el informe?', a: 'Asesoría legal, ni cálculo de plazo o costo.' }
  ],
  quiz: [
    { q: 'La frase mejor redactada es:', opts: ['«Todo esto podría estar mal»', '«Este ensayo sirve para ver reacciones y flancos, no para fijar plazos ni montos»', '«Los resultados son exactos»'], correct: 1, why: 'Dice para qué sirve y para qué no, sin anular el valor.' },
    { q: 'Con una sola corrida, el informe debe:', opts: ['Callar la variabilidad', 'Decir que no se conoce la variabilidad', 'Calcular un intervalo de confianza'], correct: 1, why: 'Una corrida no es una distribución; no hay base para un intervalo.' },
    { q: '¿Dónde conviene ubicar las limitaciones?', opts: ['Solo al final del anexo', 'Una línea en la respuesta corta y la sección completa antes del anexo', 'No conviene ponerlas'], correct: 1, why: 'Así el lector las ve antes de usar las conclusiones.' }
  ]
});
