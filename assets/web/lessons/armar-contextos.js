Lesson.start({
  id: 'armar-contextos', area: 'Una corrida de principio a fin', areaIcon: '🔄', icon: '🧮',
  title: 'Armar contextos',
  subtitle: 'Convertir la resolución en lo que sabe cada actor, y evitar los errores típicos de visibilidad.',
  norma: 'El contexto refleja solo lo que cada rol pudo conocer por los canales de la obra (verificar la norma vigente y el expediente técnico aprobado).',
  intro: '<p>Entre una ronda y la siguiente, el orquestador escribe una <b>resolución</b>: la lista fechada de lo que ocurrió. Pero cada actor no debe recibir la lista completa, sino <b>solo los hechos que le llegaron</b>. Según el plan de esta app, un script del skill (<span class="hl">armar_contextos.py</span>) hace esa conversión: de la resolución a un archivo de contexto por actor. Aquí entiendes la lógica, que es la misma de la herramienta «Tablero de visibilidad» de la app, y los errores que se cometen. Detalles del script: verificar en tu copia viva del skill.</p>',
  sections: [
    { h: 'La lógica: un hecho, una etiqueta',
      html: '<p>Cada hecho de la resolución lleva <b>fecha</b>, <b>quiénes lo ven</b> y el <b>texto</b>. Un formato de ejemplo (ficticio):</p><p><span class="hl">- dia 4 [A1 A2 A3] La supervision comunica por carta el diferimiento parcial de la valorizacion.<br>- dia 5 [A2] El contratista decide, internamente, revisar su flujo de caja.<br>- dia 6 [A1 A3] Resultado simulado: el laboratorio informa demora en los ensayos.</span></p><p>El script recorre las líneas y, para cada actor, junta solo las que lo incluyen. Resultado: un contexto por actor, en orden de fecha.</p>' },
    { h: 'Ejemplo de lo que ve cada uno',
      html: '<table><tr><th>Hecho</th><th>A1 Entidad</th><th>A2 Contratista</th><th>A3 Supervisión</th></tr><tr><td>Carta de diferimiento (día 4)</td><td>Sí</td><td>Sí</td><td>Sí</td></tr><tr><td>Revisión interna de caja (día 5)</td><td>No</td><td>Sí</td><td>No</td></tr><tr><td>Demora del laboratorio (día 6)</td><td>Sí</td><td>No</td><td>Sí</td></tr></table><p>Fíjate que el contratista aún no sabe de la demora: podría actuar con una premisa distinta a la de los otros. Ahí nace una brecha de percepción, que es justo lo que quieres observar.</p>' },
    { h: 'Errores típicos de visibilidad',
      html: '<ul><li><b>Filtrar de más:</b> un hecho que sí llegó a un actor por carta con copia no se le da, y el actor «no se entera».</li><li><b>Filtrar de menos:</b> un memorando interno aparece en el contexto de otro actor y contamina su decisión.</li><li><b>Olvidar la fecha:</b> sin fecha, el actor no ordena los hechos y confunde qué pasó primero.</li><li><b>Etiqueta con código equivocado:</b> A2 por A3; el error se ve recién cuando el actor reacciona a algo raro.</li><li><b>Mezclar lo simulado con lo real:</b> un resultado de laboratorio o una decisión de un tercero debe llevar la marca de resultado simulado.</li></ul>' },
    { h: 'Cómo verificar antes de lanzar',
      html: '<p>Antes de la ronda siguiente, abre el contexto de <b>un actor</b> y hazte dos preguntas: <i>«¿Todo lo que aquí figura pudo conocerlo este rol por sus canales?»</i> y <i>«¿Falta algo que sí le llegó?»</i>. Los canales típicos (carta con copias, cuaderno de obra, memorando interno, control, proveedores, lo público) se trabajan en el área 6. Si el resultado es dudoso, corrige la etiqueta en la resolución y vuelve a armar: el script se puede repetir sin costo de consumo, porque no usa subagentes.</p>' }
  ],
  keypoints: [
    'La resolución es una lista fechada; cada hecho lleva etiqueta de quién lo ve.',
    'El script del skill arma un contexto por actor con solo los hechos que lo incluyen.',
    'La visibilidad desigual es la que produce brechas de percepción, el hallazgo valioso.',
    'Errores típicos: filtrar de más, de menos, olvidar la fecha, etiquetar mal y no marcar lo simulado.',
    'Antes de lanzar, revisa el contexto de al menos un actor con dos preguntas de control.',
    'Rearmar contextos no gasta subagentes; equivocarse en la etiqueta sí cuesta una ronda.'
  ],
  flashcards: [
    { q: '¿Qué convierte el script de armado de contextos?', a: 'La resolución con etiquetas en un archivo de contexto por actor.' },
    { q: '¿Qué lleva cada línea de la resolución?', a: 'Fecha, quiénes lo ven y el texto del hecho.' },
    { q: '¿Qué pasa si filtras de menos?', a: 'Un actor conoce algo que no debía y contamina su decisión.' },
    { q: '¿Cómo se marca la decisión de un tercero, como un laboratorio?', a: 'Como resultado simulado, siempre.' },
    { q: '¿Qué dos preguntas haces al revisar el contexto de un actor?', a: '¿Todo lo que figura pudo conocerlo? ¿Falta algo que sí le llegó?' }
  ],
  quiz: [
    { q: 'Un memorando interno del contratista aparece en el contexto de la Entidad. Es:', opts: ['Un filtrado de menos que contamina al actor', 'Un caso de transparencia deseable', 'Un detalle sin efecto'], correct: 0, why: 'Rompe el aislamiento: la Entidad no habría conocido ese documento interno.' },
    { q: '¿Qué ventaja tiene que cada actor reciba solo lo suyo?', opts: ['Ahorra papel', 'Permite que aparezcan brechas de percepción reales', 'Evita usar fechas'], correct: 1, why: 'La información desigual es el motor del ensayo.' },
    { q: 'Al rearmar los contextos con el script:', opts: ['Se gastan subagentes', 'No se gastan subagentes', 'Se debe repetir la ronda anterior'], correct: 1, why: 'Es un script local; el consumo está en lanzar a los actores, no en armar los archivos.' }
  ]
});
