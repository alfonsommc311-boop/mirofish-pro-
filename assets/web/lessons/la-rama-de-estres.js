Lesson.start({
  id: 'la-rama-de-estres', area: 'La resolución vista de dios', areaIcon: '⚖️', icon: '🌪️',
  title: 'La rama de estrés',
  subtitle: 'Un resultado adverso plausible para ver dónde se rompe el sistema.',
  norma: 'La rama de estrés ensaya un mal día posible, no anuncia uno probable; nunca se presenta como pronóstico (verificar la norma vigente y el expediente técnico aprobado al contrastar con la obra real).',
  intro: '<p>Una corrida donde todo sale razonable te enseña poco: los actores se acomodan y el caso se apaga. La <b>rama de estrés</b> es una decisión de orquestador: en un punto de la resolución eliges un resultado <b>adverso pero plausible</b> (un ensayo en el límite, una respuesta tardía, una lluvia fuerte) y vuelves a correr para ver dónde se rompe el sistema. No la usas para asustar: la usas para descubrir qué actor se queda sin salida y qué información hacía falta antes de que pasara.</p>',
  sections: [
    { h: 'Qué es y qué no es',
      html: '<ul><li><b>Es</b> una variante de la resolución con un hecho adverso elegido por ti, a partir de una ronda, comparada con la corrida base.</li><li><b>No es</b> el peor caso imaginable, ni un desastre inverosímil, ni una predicción de que eso ocurrirá.</li></ul><p>Su lugar en el método: después de una corrida base, o desde una ronda intermedia, cambias <i>un solo hecho</i> y miras qué se mueve. El área 9 (ramas y «¿y si?») trata cómo comparar; aquí decides qué hecho adverso conviene.</p>' },
    { h: 'Cómo elegir el resultado adverso',
      html: '<ol><li><b>Plausible</b>: debe poder pasar en una obra como la del dossier.</li><li><b>Un solo cambio</b>: si cambias tres cosas no sabrás cuál rompió el sistema.</li><li><b>Punto de tensión</b>: mira dónde el caso base se apoyaba en un supuesto frágil (un ensayo que salió bien, una entrega puntual, una decisión rápida).</li><li><b>Marcado</b>: si el hecho viene de un tercero, va como <i>resultado simulado</i>.</li></ol>' },
    { h: 'Ejemplo (caso ficticio)',
      html: '<p>En la corrida base, el laboratorio (tercero) informó un resultado aceptable (resultado simulado) y la supervisión aprobó la valorización con reservas. La rama de estrés parte de la ronda 3 y cambia solo ese hecho:</p><p><span class="hl">Base: - 21/05 [A3] resultado simulado: ensayo dentro de lo aceptable.<br>Estrés: - 21/05 [A3] resultado simulado: ensayo por debajo de lo aceptable en un elemento.</span></p><p>Todo lo demás se conserva hasta la ronda 3. Preguntas que dejas al informe: ¿qué hace ahora el contratista con su caja?, ¿la Entidad conocía el riesgo?, ¿quién queda más expuesto? Resultados y decisiones legales reales no se prometen: es un ensayo de comportamientos.</p>' },
    { h: 'La silla del actor bajo estrés',
      html: '<p>Un actor que en la corrida base parecía razonable puede mostrar otro lado: el contratista retrasa un pago, la supervisión se cubre con más cartas, la Entidad demora para no comprometerse. Observa si lo hace <b>en personaje</b>. Si el estrés hace que todos se vuelvan agresivos o todos cooperen, revisa los perfiles: probablemente les falte una palanca o un temor propio.</p><p>El estrés revela también <b>qué información le habría servido a cada uno antes</b>: ese es un hallazgo aprovechable, no un desastre.</p>' },
    { h: 'Cómo la lees sin engañarte',
      html: '<ul><li>Compárala con la base ronda a ronda: la diferencia es el dato, no la corrida entera.</li><li>Una rama es <b>una</b> corrida: no es una distribución ni te dice la probabilidad del evento adverso.</li><li>Los indicadores de los actores son juicios declarados; no los cites como frecuencias.</li><li>Al informar, di «en un escenario adverso plausible» y nunca «esto pasará».</li></ul>' }
  ],
  keypoints: [
    'La rama de estrés cambia un hecho por un resultado adverso plausible y compara con la corrida base.',
    'Sirve para ver dónde se rompe el sistema y qué información hacía falta antes.',
    'Elige un solo cambio, en un punto frágil de la base, y márcalo como resultado simulado si viene de un tercero.',
    'Si todos reaccionan igual bajo estrés, revisa los perfiles.',
    'Es una corrida, no una distribución; nunca se informa como pronóstico.'
  ],
  flashcards: [
    { q: '¿Qué es una rama de estrés?', a: 'Una variante de la resolución con un hecho adverso plausible, para ver dónde se rompe el sistema.' },
    { q: '¿Cuántos cambios haces en una rama?', a: 'Uno solo, para poder atribuir lo que se mueve.' },
    { q: '¿Cómo eliges dónde estresar?', a: 'En un supuesto frágil de la corrida base: un ensayo favorable, una entrega puntual, una decisión rápida.' },
    { q: '¿Qué indica que todos reaccionen igual bajo estrés?', a: 'Que los perfiles pueden carecer de una palanca o un temor propios.' },
    { q: '¿La rama dice la probabilidad del evento adverso?', a: 'No: es una corrida, no una distribución.' }
  ],
  quiz: [
    { q: '¿Cuál es un buen uso de la rama de estrés?', opts: ['Anunciar que ocurrirá el peor caso', 'Cambiar un hecho frágil por uno adverso plausible y comparar', 'Repetir la corrida sin cambios'], correct: 1, why: 'Un cambio, plausible, comparado con la base.' },
    { q: 'Cambias el resultado del ensayo, la fecha de entrega y la decisión de la Entidad a la vez. El problema es:', opts: ['Ninguno', 'No sabrás cuál causó la ruptura', 'Es más realista'], correct: 1, why: 'Un solo cambio permite atribuir el efecto.' },
    { q: '¿Cómo se informa el resultado de una rama?', opts: ['Como pronóstico', 'Como escenario adverso plausible ensayado', 'Como frecuencia esperada'], correct: 1, why: 'Ensayo, no profecía.' }
  ]
});
