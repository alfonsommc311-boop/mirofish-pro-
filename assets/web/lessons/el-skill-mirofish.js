Lesson.start({
  id: 'el-skill-mirofish', area: 'Claude Code como motor de simulación', areaIcon: '🤖', icon: '🧩',
  title: 'El skill /mirofish',
  subtitle: 'El método empaquetado: qué hace solo, qué te pregunta y cómo mejora con cada corrida.',
  norma: 'El skill vivo manda sobre cualquier copia; si cambió, gana el vivo (verificar en la documentación vigente de Claude Code).',
  intro: '<p>Todo lo anterior (dossier, perfiles, rondas, resolución, informe) quedó empaquetado en un <b>skill</b> de Claude Code que se invoca escribiendo <span class="hl">/mirofish</span>. No es un programa aparte: es un conjunto de instrucciones, plantillas y scripts que la sesión sigue. Como orquestador, tu trabajo cambia de <i>escribir cada prompt</i> a <i>responder cuatro preguntas y revisar cada ronda</i>.</p>',
  sections: [
    { h: 'Qué es un skill, en lo que importa aquí',
      html: '<p>Según la documentación de Claude Code, un skill es una carpeta con un archivo de instrucciones y, si hace falta, archivos de apoyo. Se invoca por su nombre con una barra. El skill de esta app vive en tu carpeta personal de skills; sus plantillas, lecciones y scripts van al lado. Campos, ubicaciones y opciones cambian con las versiones: <b>verificar en la documentación vigente</b>. Instalar y escribir skills en general está en Claude Code Experto.</p>' },
    { h: 'Qué te pregunta al arrancar',
      html: '<p>Antes de tocar nada, el skill te pide cuatro cosas:</p><ol><li><b>Fuente:</b> el material real del que sale el dossier.</li><li><b>Evento:</b> el hecho concreto que dispara la simulación.</li><li><b>Pregunta y horizonte:</b> qué quieres ensayar y hasta cuándo.</li><li><b>Perspectiva:</b> desde qué actor eres tú.</li></ol><p>Contestar bien esas cuatro es gran parte del oficio (área 7 lo desarrolla). Ejemplo ficticio: fuente, informe y cartas del expediente de Villa Esperanza; evento, la supervisión difiere parte de la última valorización; pregunta, cómo reacciona el Consorcio Andino en las dos semanas siguientes; perspectiva, la Entidad.</p>' },
    { h: 'Qué hace solo',
      html: '<p>Con esas respuestas, el skill sigue el método que ya conoces: arma el dossier, propone actores y perfiles, prepara la consigna de cada ronda, lanza los subagentes, ayuda a armar el contexto de cada actor con un script y redacta al final un informe. Lo que <b>no</b> hace solo es decidir por ti: la resolución y la lectura de los resultados siguen siendo tuyas, porque son la vista de dios. Los detalles internos del skill no se enseñan de memoria aquí: se aprenden abriendo el skill vivo.</p>' },
    { h: 'Cómo mejora con cada corrida',
      html: '<p>El skill trae un archivo de <b>lecciones</b> donde se anota lo que salió mal o bien en cada corrida (un formato que se rompió, un actor demasiado razonable, una fuga de información). En la siguiente corrida, esas notas se leen antes de empezar. Así el método se afina con <i>tu</i> manera de trabajar. Trabajarás esto a fondo en «Mejorar tu skill» (área 14).</p><p>Si tienes una copia del skill guardada como fuente y el skill vivo cambió desde entonces, <b>manda el vivo</b>: compara ambos antes de enseñar o citar algo.</p>' },
    { h: 'La silla del actor y el rigor',
      html: '<p>Para el actor, usar el skill o escribir todo a mano es indistinguible: recibe perfil, dossier y consigna. El skill no le da poderes que el método no le da. Y hereda las reglas del rigor: ensayo, no profecía; normas solo por su nombre (verificar la norma vigente y el expediente técnico aprobado); nada de documentos ni resultados de terceros inventados; todo lo de terceros, como resultado simulado.</p>' }
  ],
  keypoints: [
    '/mirofish es un skill de Claude Code: instrucciones, plantillas y scripts, no un programa aparte.',
    'Te pregunta cuatro cosas: fuente, evento, pregunta con horizonte y perspectiva.',
    'Arma, lanza y redacta, pero la resolución y la lectura siguen siendo tuyas.',
    'Un archivo de lecciones registra qué mejorar y se lee en la siguiente corrida.',
    'Si la copia guardada y el skill vivo difieren, manda el vivo.',
    'Los detalles de skills en Claude Code se verifican en la documentación vigente.'
  ],
  flashcards: [
    { q: '¿Cómo se invoca el método completo?', a: 'Con el skill /mirofish en Claude Code.' },
    { q: '¿Qué cuatro cosas te pide el skill?', a: 'Fuente, evento, pregunta y horizonte, y perspectiva.' },
    { q: '¿Qué no hace el skill por ti?', a: 'La resolución vista de dios ni la lectura crítica de resultados.' },
    { q: '¿Cómo mejora el skill con el uso?', a: 'Cada corrida deja notas en un archivo de lecciones que se lee en la siguiente.' },
    { q: 'Si la copia del skill y el skill vivo difieren, ¿cuál manda?', a: 'El skill vivo.' }
  ],
  quiz: [
    { q: '¿Qué es /mirofish?', opts: ['Un programa que se instala aparte', 'Un skill de Claude Code con instrucciones, plantillas y scripts', 'El MiroFish original con otro nombre'], correct: 1, why: 'Es un método empaquetado dentro de Claude Code, no el programa de terceros.' },
    { q: '¿Cuál de estas NO es una de las cuatro cosas que te pide al arrancar?', opts: ['El evento que dispara', 'La perspectiva desde la que participas', 'El resultado que quieres obtener'], correct: 2, why: 'Pedir el resultado sería empujar la simulación; se pide fuente, evento, pregunta con horizonte y perspectiva.' },
    { q: 'Al terminar una corrida, ¿qué conviene hacer con lo aprendido?', opts: ['Olvidarlo', 'Anotarlo en el archivo de lecciones del skill', 'Cambiar el rigor de las normas'], correct: 1, why: 'Así la siguiente corrida arranca ya con esas correcciones.' }
  ]
});
