Lesson.start({
  id: 'por-que-claude-code-y-no-la-api', area: 'Claude Code como motor de simulación', areaIcon: '🤖', icon: '🔌',
  title: 'Por qué Claude Code y no la API',
  subtitle: 'El mismo método, con pocos actores ricos en información privada en lugar de miles de agentes simples.',
  norma: 'Cambiar de motor no cambia la regla: ensayas con lo que cada actor sabe, no predices (verificar en la documentación vigente).',
  intro: '<p>MiroFish original pide una clave de modelo de lenguaje y una cuenta de memoria externa, y cada corrida consume API. Como orquestador que ya trabaja en Claude Code, puedes replicar el <b>método</b> con subagentes dentro de tu propia sesión. No es una copia del programa: es una escala distinta. Cambias <b>miles de agentes simples</b> por <b>cinco o seis actores con perfil rico</b>, y eso, para una obra pública, suele ser justo lo que necesitas.</p>',
  sections: [
    { h: 'Qué se conserva y qué se cambia',
      html: '<table><tr><th>Pieza</th><th>MiroFish original</th><th>En Claude Code</th></tr><tr><td>Semilla</td><td>Materiales cargados al sistema</td><td>Un <span class="hl">dossier</span> en archivo</td></tr><tr><td>Agentes</td><td>Muchos, generados como personas</td><td>Pocos, un <span class="hl">subagente por actor</span></td></tr><tr><td>Memoria</td><td>Servicio externo de memoria</td><td>Archivos en disco</td></tr><tr><td>Informe</td><td>ReportAgent</td><td>Lo redacta el orquestador</td></tr></table><p>Lo que se conserva es la lógica: semilla común, actores que responden por separado, un mundo que avanza por rondas y un informe al final. Los datos técnicos de MiroFish (piezas, requisitos, variables) se consultan en su repositorio: <b>verificar en la documentación vigente</b>.</p>' },
    { h: 'Por qué pocos actores ricos bastan en obra',
      html: '<p>Una obra pública no tiene mil voces con peso: tiene la Entidad, el contratista, la supervisión, el control y, a veces, los vecinos. Lo que decide el caso no es el número de agentes sino <b>qué sabe cada uno que los demás no saben</b>. Un contratista sabe su caja; la Entidad sabe qué prioridad política tiene el frente; la supervisión sabe qué ensayo falta. Con cinco actores bien perfilados ya hay asimetría suficiente para que algo se rompa.</p><p>Mil agentes simples sirven para otra pregunta: cómo se propaga una noticia en redes. Para eso sí conviene el MiroFish original (lo verás en el área 11).</p>' },
    { h: 'Lo que ganas y lo que pagas',
      html: '<ul><li><b>Ganas control:</b> lees cada respuesta completa, no un enjambre que no puedes auditar.</li><li><b>Ganas privacidad de flujo:</b> tú decides qué archivos existen y qué ve cada actor.</li><li><b>Ganas ensayo barato de repetir:</b> cambias un hecho y vuelves a correr desde una ronda.</li><li><b>Pagas en escala:</b> no verás emergencia de multitudes ni redes sociales simuladas.</li><li><b>Pagas en cuota:</b> cada actor es un subagente y consume el uso de tu plan. Se estima contando lanzamientos, no con una cifra fija (lo trabajas en el área 7).</li></ul>' },
    { h: 'La silla del actor y la del orquestador',
      html: '<p><b>Como orquestador</b> eliges el motor y respondes por el informe. <b>Como actor</b> (piensa en el contratista) solo importa que reciba un perfil, un dossier y una consigna; no sabe que existe un motor ni cuántos actores más hay. Por eso el cambio de API a Claude Code es invisible para el actor y solo se nota en tu costo y en tu control.</p><p>Si necesitas repasar qué es un subagente o cómo se lanza en general, está en Claude Code Experto y Agentes IA Experto; aquí solo importa lo que la simulación exige.</p>' },
    { h: 'Una advertencia de honestidad',
      html: '<p>Que corra en tu sesión no lo vuelve más predictivo. Sigue siendo un <b>ensayo</b>: depende del modelo, del dossier y de los perfiles, y dos corridas pueden diferir. Las normas peruanas que aparezcan en un caso se citan solo por su nombre: verificar la norma vigente y el expediente técnico aprobado.</p>' }
  ],
  keypoints: [
    'Claude Code replica el método de MiroFish (semilla, actores, rondas, informe), no el programa entero.',
    'Cambias miles de agentes simples por cinco o seis actores con información privada.',
    'En obra pública lo que mueve el caso es la asimetría de información, no el número de agentes.',
    'Ganas control y auditoría de cada respuesta; pagas en escala y en cuota de tu plan.',
    'Para propagación en redes con multitudes sigue teniendo sentido el MiroFish original.',
    'Ejecutar en Claude Code no convierte el ensayo en predicción.'
  ],
  flashcards: [
    { q: '¿Qué se conserva de MiroFish al pasar a Claude Code?', a: 'La lógica: semilla común, actores que responden por separado, rondas e informe.' },
    { q: '¿Qué reemplaza a los miles de agentes?', a: 'Cinco o seis actores con perfil rico, cada uno como un subagente.' },
    { q: '¿Qué reemplaza a la memoria externa de MiroFish?', a: 'Archivos en disco: dossier, perfiles, rondas y contextos.' },
    { q: '¿Cuándo sí conviene el MiroFish original?', a: 'Cuando la pregunta es cómo se propaga algo entre cientos de voces, por ejemplo la reacción pública en redes.' },
    { q: '¿Cómo se estima el consumo de una corrida?', a: 'Contando subagentes lanzados por ronda; sin cifras fijas de plan (verificar en la documentación vigente).' }
  ],
  quiz: [
    { q: '¿Qué decide más un caso de obra pública en esta simulación?', opts: ['El número de agentes', 'Qué sabe cada actor que los demás no', 'El tamaño del dossier'], correct: 1, why: 'La asimetría de información es el motor; con pocos actores bien perfilados ya hay conflicto.' },
    { q: '¿Qué pierdes al usar pocos subagentes en lugar de un enjambre?', opts: ['El control de cada respuesta', 'La emergencia de multitudes y redes', 'El aislamiento entre actores'], correct: 1, why: 'A cambio ganas lectura completa y control; la dinámica de multitudes queda para el MiroFish original.' },
    { q: 'Correr la simulación en tu sesión de Claude Code la vuelve:', opts: ['Una predicción más precisa', 'Igual de ensayo que antes', 'Un dictamen legal'], correct: 1, why: 'Cambia el motor, no la naturaleza del resultado: sigue siendo un ensayo con juicios declarados.' }
  ]
});
