Lesson.start({
  id: 'ensayo-no-profecia', area: 'Rigor, ética y límites', areaIcon: '🛡️', icon: '🎭',
  title: 'Ensayo, no profecía',
  subtitle: 'Ni predicción ni asesoría legal: cómo decirlo sin quitarle valor a lo que encontraste.',
  norma: 'Ninguna simulación anticipa ni garantiza el resultado de una valorización, un adicional, una ampliación, un arbitraje o una acción de control (verificar la norma vigente y el expediente técnico aprobado).',
  intro: '<p>La idea que ordena todo este curso cabe en una línea: <b>no predices lo que harán los demás; lo ensayas, con lo que cada uno sabe, y miras dónde se rompe</b>. Es fácil olvidarlo cuando el informe queda bien redactado y los actores suenan convincentes. Esta lección te da el lenguaje para decirlo con honestidad, a ti mismo y a tu jefe, sin regalar el valor real del ensayo: encontrar la reacción que no viste venir.</p>',
  sections: [
    { h: 'Por qué no es una predicción',
      html: '<ul><li>Los actores son un <b>modelo de lenguaje</b> jugando un rol: hablan con la verosimilitud de lo plausible, no con la frecuencia de lo que ocurre.</li><li>El resultado depende de la semilla, de los perfiles y de las consignas que escribiste tú.</li><li>Dos corridas pueden diferir; una corrida no es una distribución.</li><li>Los números de los agentes son <span class="hl">juicios declarados</span>, no frecuencias.</li></ul><p>Incluso el proyecto MiroFish, en lo revisado para esta app, no ofrece evidencia de validación empírica de su precisión: verificar en la documentación vigente.</p>' },
    { h: 'Tampoco es asesoría legal',
      html: '<p>Un actor «asesor jurídico» simulado razona con plausibilidad, no con el expediente ni con la norma vigente. Su opinión no reemplaza a tu asesor ni a la norma. Cuando un caso toque derechos y plazos (una controversia, un arbitraje, una observación del control), el ensayo te ayuda a <b>ver escenarios</b>; la decisión se toma con el marco legal verificado y el expediente técnico aprobado.</p>' },
    { h: 'Cómo decirlo sin quitarle valor',
      html: '<table><tr><th>En vez de…</th><th>Di…</th></tr><tr><td>«La simulación predice que el contratista paralizará.»</td><td>«En el ensayo, con esta información, el contratista consideró paralizar; conviene preparar el flanco X.»</td></tr><tr><td>«Hay 70 % de probabilidad de acuerdo.»</td><td>«El actor declaró un 70 % como juicio propio en la ronda 2.»</td></tr><tr><td>«El control observará esto.»</td><td>«En el ensayo, el OCI observó esto; verificar si el expediente lo sostiene.»</td></tr></table><p>El verbo cambia de <i>ocurrirá</i> a <i>en el ensayo apareció</i>. El valor se mantiene: sigues teniendo un flanco y una acción para esta semana.</p>' },
    { h: 'La frase para tu informe',
      html: '<p>Una coletilla honesta para abrir el informe:</p><p><i>«Este documento es un ensayo interno de escenarios con actores simulados. No es una predicción, no es asesoría legal y no compromete a ninguna de las partes. Las normas se mencionan por su nombre: verificar la norma vigente y el expediente técnico aprobado.»</i></p><p>Si te da vergüenza escribirla, es señal de que estabas vendiendo profecía.</p>' }
  ],
  keypoints: [
    'Ensayas con lo que cada actor sabe y miras dónde se rompe; no predices.',
    'Los números de los agentes son juicios declarados, no frecuencias.',
    'Un actor asesor jurídico simulado no reemplaza a tu asesor ni a la norma vigente.',
    'Cambia el verbo: de «ocurrirá» a «en el ensayo apareció».',
    'Abre el informe con una coletilla que diga qué es y qué no es.'
  ],
  flashcards: [
    { q: '¿Qué frase ordena el curso?', a: 'No predices lo que harán los demás: lo ensayas, con lo que cada uno sabe, y miras dónde se rompe.' },
    { q: '¿Qué son las probabilidades de los agentes?', a: 'Juicios declarados de la ronda, no frecuencias ni garantías.' },
    { q: '¿Reemplaza la simulación a la asesoría legal?', a: 'No: el actor jurídico simulado razona con plausibilidad, sin el expediente ni la norma vigente.' },
    { q: '¿Cómo se reformula un hallazgo sin venderlo como profecía?', a: '«En el ensayo, con esta información, apareció X; conviene preparar Y».' },
    { q: '¿Qué valor conserva el ensayo?', a: 'Descubrir la reacción que no viste venir y tu propio flanco.' }
  ],
  quiz: [
    { q: 'Un agente escribe «70 % de acuerdo». En tu informe lo presentas como:', opts: ['La probabilidad real de acuerdo', 'Un juicio declarado del actor en esa ronda', 'Un resultado estadístico'], correct: 1, why: 'Es un juicio del agente, no una frecuencia.' },
    { q: '¿Qué formulación es honesta?', opts: ['El contratista paralizará', 'En el ensayo el contratista consideró paralizar', 'Seguro habrá controversia'], correct: 1, why: 'Se atribuye al ensayo, no al futuro.' },
    { q: 'Antes de decidir en una controversia real, el ensayo:', opts: ['Basta como sustento', 'Se complementa con el marco legal verificado y el expediente aprobado', 'Se cita como prueba'], correct: 1, why: 'No es asesoría legal ni prueba.' }
  ]
});
