Lesson.start({
  id: 'una-corrida-no-es-una-distribucion', area: 'Leer lo que salió', areaIcon: '📊', icon: '🎲',
  title: 'Una corrida no es una distribución',
  subtitle: 'Una historia posible no dice cuántas otras lo son: variabilidad, ramas y cuándo repetir.',
  norma: 'Una sola corrida es un ensayo, no una muestra; los resultados dependen del modelo, la semilla y los perfiles (verificar en la documentación vigente).',
  intro: '<p>Es fácil mirar una corrida terminada y sentir que <b>así iba a pasar</b>. Pero es una sola historia posible, generada por un modelo de lenguaje con cierta aleatoriedad. Si la repitieras, algunos rasgos volverían y otros no. Tratar una corrida como distribución, es decir, decir «en 70 % de los casos…», es el error de lectura más serio del método. Esta lección te da criterio para saber cuándo una corrida basta y cuándo conviene repetir.</p>',
  sections: [
    { h: 'Por qué una corrida no es una distribución',
      html: '<p>Una distribución necesita <b>muchas observaciones independientes</b> del mismo proceso. Aquí tienes una, con actores que se influyen ronda a ronda: un pequeño desvío al comienzo se amplifica. Además, MiroFish original y este método no ofrecen intervalos ni garantía de reproducibilidad entre ejecuciones; nada indica que las corridas se repitan igual.</p><ul><li>Una corrida: <span class="hl">una trayectoria posible</span>.</li><li>Varias corridas: <span class="hl">un abanico</span>, aún no una frecuencia.</li></ul>' },
    { h: 'Fuentes de variabilidad',
      html: '<table><tr><th>Fuente</th><th>Efecto</th></tr><tr><td>Aleatoriedad del modelo</td><td>Distintas decisiones ante lo mismo</td></tr><tr><td>Decisiones de resolución del orquestador</td><td>Quién se entera de qué cambia el rumbo</td></tr><tr><td>Redacción del perfil o de la consigna</td><td>Empuja a un actor a ser más duro o más blando</td></tr><tr><td>Resultados simulados de terceros</td><td>Un ensayo conforme o adverso bifurca el caso</td></tr></table><p>La tercera es la más controlable: la fijas tú.</p>' },
    { h: 'Ejemplo ficticio: tres corridas del mismo caso',
      html: '<p>Caso ficticio: Municipalidad Distrital de Villa Esperanza, Consorcio Andino y Consorcio Supervisor Horizonte. Mismo dossier y perfiles; se varía solo el resultado simulado del ensayo.</p><table><tr><th>Corrida</th><th>Resultado simulado</th><th>Desenlace</th><th>Quiebre</th></tr><tr><td>A</td><td>Conforme</td><td>Acuerdo parcial en la ronda 3</td><td>Silencio de la Entidad</td></tr><tr><td>B</td><td>Adverso</td><td>Controversia en la ronda 3</td><td>Resultado del laboratorio</td></tr><tr><td>C</td><td>Conforme</td><td>Acuerdo, con reclamo posterior</td><td>Silencio de la Entidad</td></tr></table><p>Lo que se repite (el silencio de la Entidad como riesgo en A y C) es <b>más confiable como aviso</b> que lo que solo aparece una vez. Pero <b>dos de tres no es 67 %</b>: son tres historias, no una muestra.</p>' },
    { h: 'Cuándo repetir y cuándo no',
      html: '<ul><li><b>Repite</b> cuando el hallazgo central depende de un solo hecho dudoso, cuando vas a tomar una decisión costosa sobre él, o cuando el perfil de un actor fue discutible.</li><li><b>No repitas</b> solo para «promediar»: el promedio de juicios no calibrados sigue sin ser calibrado.</li><li><b>Mejor que repetir a ciegas: hacer ramas.</b> Cambia un hecho, vuelve a correr desde esa ronda y compara con la corrida base (ver Ramas y ¿y si?).</li></ul><p>Cada corrida consume cuota de sesión: ver Cuánto cuesta una corrida.</p>' },
    { h: 'Cómo decirlo en el informe',
      html: '<p>Frase modelo: <i>«Esto es una corrida; lo marcado como repetido se observó en más de una, pero no se estima frecuencia.»</i> No cites porcentajes de corridas como si fueran probabilidades reales, ni prometas el resultado de una valorización, adicional, ampliación o arbitraje. Para calibrar tus juicios contra lo que ocurra, ver Contrastar con la realidad y Decisiones PRO.</p>' }
  ],
  keypoints: [
    'Una corrida es una trayectoria posible, no una muestra.',
    'La variabilidad viene del modelo, la resolución, los perfiles y los resultados simulados.',
    'Lo que se repite entre corridas es más confiable como aviso que lo que aparece una vez.',
    'Dos de tres corridas no son 67 %: no hay frecuencia sin muestra.',
    'Las ramas (cambiar un hecho) enseñan más que repetir a ciegas.',
    'El informe debe decir que es una corrida y no estimar frecuencias.'
  ],
  flashcards: [
    { q: '¿Por qué una corrida no es una distribución?', a: 'Es una sola trayectoria de un proceso encadenado; una distribución necesita muchas observaciones independientes.' },
    { q: 'Cuatro fuentes de variabilidad', a: 'Aleatoriedad del modelo, resolución del orquestador, perfiles o consignas y resultados simulados de terceros.' },
    { q: '¿Qué es más útil que repetir a ciegas?', a: 'Hacer una rama: cambiar un hecho y volver a correr desde esa ronda.' },
    { q: '¿Qué valor tiene lo que se repite en varias corridas?', a: 'Es un aviso más confiable, pero no una frecuencia.' }
  ],
  quiz: [
    { q: 'Tres corridas dan acuerdo en dos y controversia en una. Puedes decir:', opts: ['67 % de acuerdo', 'Se observaron ambas trayectorias; no se estima frecuencia', 'La controversia es imposible'], correct: 1, why: 'Tres historias no forman una muestra que permita estimar frecuencias.' },
    { q: 'Para comprobar el efecto de un hecho concreto conviene:', opts: ['Repetir la corrida 20 veces', 'Crear una rama cambiando ese hecho', 'Cambiar todos los perfiles'], correct: 1, why: 'La rama aísla el efecto de un solo cambio y compara con la corrida base.' },
    { q: 'Un hallazgo que aparece en todas las corridas es:', opts: ['Una probabilidad calibrada', 'Un aviso más confiable, aún no una predicción', 'Un hecho comprobado en la obra'], correct: 1, why: 'Repetirse da robustez al ensayo, no lo vuelve un dato real.' }
  ]
});
