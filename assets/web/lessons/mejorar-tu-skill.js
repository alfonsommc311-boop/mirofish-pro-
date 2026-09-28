Lesson.start({
  id: 'mejorar-tu-skill', area: 'El simulador destacado', areaIcon: '🏆', icon: '🔧',
  title: 'Mejorar tu skill',
  subtitle: 'Cada corrida deja una lección que el método debe recordar la próxima vez.',
  norma: 'Un método que no aprende de sus fallos repite los mismos errores (verificar en la documentación vigente cómo se definen los skills).',
  intro: '<p>El skill <b>/mirofish</b> empaqueta tu método. Su valor crece si, al terminar cada corrida, anotas en un archivo de lecciones qué salió mal y qué funcionó. Así el siguiente arranque ya trae esas correcciones.</p>',
  sections: [
    { h: 'El archivo de lecciones',
      html: '<p>Un archivo <span class="hl">lecciones.md</span> junto al skill, con una entrada corta por corrida: fecha, qué falló, qué cambió en el método.</p><ul><li>«Actor X salió de personaje: añadir límite de palabras en la consigna.»</li><li>«Fuga de información: usar rutas absolutas en los archivos permitidos.»</li></ul>' },
    { h: 'Qué merece convertirse en regla',
      html: '<table><tr><th>Señal</th><th>Regla</th></tr><tr><td>El mismo fallo dos veces</td><td>Pasa a la plantilla</td></tr><tr><td>Un actor demasiado razonable</td><td>Pedir estrategia agresiva sin caricatura</td></tr><tr><td>Un resultado sin marcar como simulado</td><td>Añadir la etiqueta obligatoria</td></tr></table>' },
    { h: 'Versionar y revisar',
      html: '<p>Guarda copia del skill antes de cambiarlo y compara con la versión viva antes de redactar material nuevo. Si tu copia y la viva difieren, manda la viva.</p>' },
    { h: 'No sobreajustar',
      html: '<p>Una regla nacida de un solo caso raro puede estorbar en otros. Espera a ver el patrón dos veces antes de endurecer el método.</p>' }
  ],
  keypoints: [
    'Cada corrida deja una entrada en lecciones.md.',
    'Lo que falla dos veces pasa a la plantilla.',
    'Guarda copia antes de modificar el skill.',
    'Si la copia y el skill vivo difieren, manda el vivo.',
    'No endurezcas el método por un solo caso raro.'
  ],
  flashcards: [
    { q: '¿Dónde se anotan las lecciones?', a: 'En un archivo lecciones.md junto al skill.' },
    { q: '¿Cuándo una lección se vuelve regla?', a: 'Cuando el mismo fallo aparece dos veces.' },
    { q: '¿Qué versión manda?', a: 'La del skill vivo.' },
    { q: '¿Qué riesgo hay al sobreajustar?', a: 'Reglas que estorban en otros casos.' }
  ],
  quiz: [
    { q: 'Un fallo aparece por segunda vez. Lo mejor es:', opts: ['Ignorarlo', 'Pasarlo a la plantilla', 'Cambiar de modelo'], correct: 1, why: 'La repetición indica un patrón que el método debe absorber.' },
    { q: 'Tu copia del skill difiere del skill vivo:', opts: ['Manda tu copia', 'Manda el vivo', 'Se borra ambos'], correct: 1, why: 'El vivo refleja los últimos ajustes.' },
    { q: 'Endurecer el método tras un caso raro único puede:', opts: ['Ser perfecto', 'Estorbar en otros casos', 'Ahorrar cuota'], correct: 1, why: 'Una regla de un solo caso puede sobreajustar el método.' }
  ]
});
