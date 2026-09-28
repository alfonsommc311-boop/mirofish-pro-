Lesson.start({
  id: 'que-va-en-el-dossier', area: 'La semilla: el dossier común', areaIcon: '🌱', icon: '📁',
  title: 'Qué va en el dossier',
  subtitle: 'Seis bloques que todos los actores leen igual: el mundo compartido antes de que cada uno tenga su secreto.',
  norma: 'El dossier es lo que todos saben; lo que solo sabe uno va en su perfil (verificar la norma vigente y el expediente técnico aprobado para todo dato de obra).',
  intro: '<p>En MiroFish la entrada es una <b>semilla</b>: material real del que sale el mundo. En nuestro método esa semilla es un <b>dossier común</b>, un solo archivo que leen todos los actores. Si el dossier es pobre, los actores inventan; si está sobrecargado, todos concluyen lo mismo. Desde mi silla de supervisor te propongo seis bloques, y desde la silla del actor verás por qué cada uno importa: es lo único que puede dar por cierto sin discutirlo.</p>',
  sections: [
    { h: 'Los seis bloques',
      html: '<table><tr><th>Bloque</th><th>Contiene</th></tr><tr><td>1. La obra</td><td>Qué es, dónde, quién contrata, quién ejecuta, quién supervisa</td></tr><tr><td>2. La historia</td><td>Los hechos previos en orden cronológico</td></tr><tr><td>3. El evento</td><td>El hecho que arranca el ensayo</td></tr><tr><td>4. Los hechos técnicos</td><td>Cifras y documentos, cada uno con su fuente</td></tr><tr><td>5. Las reglas</td><td>Marco contractual y normativo, solo por su nombre</td></tr><tr><td>6. Los puntos débiles visibles</td><td>Lo que un actor atento vería del otro</td></tr></table><p>El orden importa: primero el mundo, luego lo que pasó, luego lo que lo rompe.</p>' },
    { h: 'Qué NO va en el dossier',
      html: '<ul><li>Lo que solo sabe un actor (una carta interna, un temor, una presión política): eso es <b>información privada</b> y va en su perfil.</li><li>Mi opinión de orquestador sobre quién tiene la razón.</li><li>El desenlace que espero. Si lo escribo, el ensayo solo lo confirma.</li></ul><p>Regla práctica: si al leerlo un actor podría decir «esto no lo debería saber», está en el archivo equivocado.</p>' },
    { h: 'Mini-dossier ficticio de ejemplo',
      html: '<p>Caso inventado, sin datos reales:</p><p><b>1. Obra.</b> Mejoramiento de una vía de acceso en el distrito de Villa Esperanza. Entidad: Municipalidad Distrital de Villa Esperanza. Contratista: Consorcio Andino. Supervisión: Consorcio Supervisor Horizonte.<br><b>2. Historia.</b> Inicio de plazo en el mes 1; en el mes 4 se anotó en cuaderno la aparición de suelo blando en un tramo.<br><b>3. Evento.</b> El contratista presenta una carta solicitando ampliación de plazo por el suelo blando.<br><b>4. Hechos técnicos.</b> Los que figuren en el informe de supervisión y el cuaderno, cada uno con su fecha y documento.<br><b>5. Reglas.</b> Contrato de obra y normativa de contrataciones del Estado, por su nombre: verificar la norma vigente y el expediente técnico aprobado.<br><b>6. Puntos débiles.</b> La carta no cita el asiento del cuaderno; la supervisión respondió fuera de plazo interno.</p>' },
    { h: 'Cuánto de largo',
      html: '<p>Lo bastante corto para que cada subagente lo lea completo en cada ronda, lo bastante largo para que nadie tenga que suponer. Una o dos páginas suelen alcanzar; si se dispara, es señal de que estás metiendo perfiles dentro del dossier. Se guarda como archivo en disco: es la memoria compartida del mundo (ver <i>Archivos como memoria del mundo</i>).</p>' },
    { h: 'La idea rectora',
      html: '<p>No predices lo que harán los demás: lo ensayas con lo que cada uno sabe. El dossier fija <b>lo que todos saben</b>; los perfiles fijan <b>lo que solo uno sabe</b>. Del contraste sale el conflicto, y de ahí lo que vale la pena mirar. Ninguna cifra ni desenlace del dossier ficticio es un pronóstico.</p>' }
  ],
  keypoints: [
    'El dossier es la semilla común: un archivo que todos los actores leen igual.',
    'Seis bloques: obra, historia, evento, hechos técnicos, reglas y puntos débiles visibles.',
    'Lo que solo sabe un actor va en su perfil, no en el dossier.',
    'No incluyas el desenlace esperado ni tu opinión de quién tiene la razón.',
    'Una o dos páginas: completo para leerlo cada ronda, sin suposiciones.',
    'Las normas se citan por su nombre; verificar la norma vigente y el expediente técnico aprobado.'
  ],
  flashcards: [
    { q: '¿Cuáles son los seis bloques del dossier?', a: 'Obra, historia, evento, hechos técnicos, reglas y puntos débiles visibles.' },
    { q: '¿Qué diferencia hay entre dossier y perfil?', a: 'El dossier es lo que todos saben; el perfil, lo que solo sabe ese actor.' },
    { q: '¿Por qué no escribir el desenlace esperado?', a: 'Porque el ensayo solo lo confirmaría y dejaría de ser ensayo.' },
    { q: '¿Cómo saber si un dato está en el archivo equivocado?', a: 'Si un actor podría decir «esto no lo debería saber».' }
  ],
  quiz: [
    { q: '¿Dónde va una presión política que solo conoce el contratista?', opts: ['En el dossier', 'En el perfil del contratista', 'En el informe final'], correct: 1, why: 'Es información privada; en el dossier la conocerían todos.' },
    { q: '¿Qué pasa si el dossier incluye el desenlace esperado?', opts: ['Mejora la precisión', 'El ensayo tiende a confirmarlo', 'Nada'], correct: 1, why: 'Los actores razonan hacia lo que ya leyeron.' },
    { q: 'Las normas en el dossier se citan:', opts: ['Con número de artículo', 'Por su nombre, con verificación de la vigente', 'No se citan'], correct: 1, why: 'Se verifica la norma vigente y el expediente técnico aprobado.' }
  ]
});
