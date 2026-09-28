Lesson.start({
  id: 'caso-adicional-y-paralizacion', area: 'Casos de obra pública', areaIcon: '🏗️', icon: '🚧',
  title: 'Caso: adicional y paralización',
  subtitle: 'Un adicional sin expediente aprobado paraliza un frente: quién decidió qué, y quién cree que lo decidió otro.',
  norma: 'Caso ficticio; los adicionales y la ejecución de prestaciones adicionales se rigen por la Ley de Contrataciones del Estado y su Reglamento y por el contrato: verificar la norma vigente y el expediente técnico aprobado.',
  intro: '<p>Cuando aparece una necesidad no prevista en el expediente, la obra se convierte en un cruce de silencios. Este caso ficticio (Municipalidad Distrital de Villa Esperanza, Consorcio Andino, Consorcio Supervisor Horizonte) ensaya un frente que se detiene porque el trabajo adicional aún <b>no tiene expediente aprobado</b>. No promete que el adicional se apruebe ni fija su monto: ensaya <b>quién cree que la decisión le corresponde a otro</b>.</p>',
  sections: [
    { h: 'El evento y la pregunta',
      html: '<p><b>Evento (ficticio):</b> durante una excavación aparece una condición no contemplada. La supervisión anota que se requiere un trabajo adicional. El contratista detiene el frente afectado porque no ejecutará sin aprobación previa.</p><p><b>Pregunta:</b> ¿cuánto tarda cada actor en asumir su parte y qué frentes alternativos aparecen?</p>' },
    { h: 'Los actores y lo que solo cada uno sabe',
      html: '<table><tr><th>Actor</th><th>Información privada</th></tr><tr><td>Residente del Consorcio Andino</td><td>Tiene personal y equipo ociosos; sabe que su consulta sobre la partida se anotó tarde.</td></tr><tr><td>Jefe de supervisión</td><td>Sabe que su anotación fue oportuna pero su sustento técnico aún es preliminar.</td></tr><tr><td>Área usuaria de la Municipalidad</td><td>Sabe que aún no tiene previsión presupuestal clara para un adicional.</td></tr><tr><td>Proyectista (tercero)</td><td>Sabe cuánto de la condición era razonablemente previsible desde el estudio; no está en la mesa, responde a consulta.</td></tr></table><p>Nada de esto es un documento: es lo que cada silla sabe y aún no ha dicho.</p>' },
    { h: 'Qué pasó, ronda a ronda',
      html: '<table><tr><th>Ronda</th><th>Qué se ensayó</th></tr><tr><td>1</td><td>El contratista paraliza el frente y avisa por carta. La supervisión no comparte todavía su sustento.</td></tr><tr><td>2</td><td>La Entidad pide sustento y culpa la demora al contratista. El contratista reitera que espera aprobación.</td></tr><tr><td>3</td><td>La supervisión completa su sustento preliminar. <span class="hl">Resultado simulado:</span> el proyectista responde con reservas sobre la previsibilidad de la condición, sin comprometer a nadie.</td></tr><tr><td>4</td><td><span class="hl">Resultado simulado:</span> se reprograman frentes alternativos mientras el expediente sigue su trámite; el orquestador lo decide para ver qué actor se mueve primero.</td></tr></table><p>Indicadores tipo: <i>Indicadores: frente sigue parado 60 | frente alterno activado 50 | reclamo de mayores costos 45</i> (juicios declarados).</p>' },
    { h: 'Las brechas de percepción halladas',
      html: '<ul><li>El contratista creía que la paralización era <b>cautela</b>; la Entidad la leía como <b>decisión unilateral</b>.</li><li>La supervisión creía que había cumplido al anotar; el contratista creía que le faltaba respaldo técnico.</li><li>La Entidad creía que el problema era administrativo; el área usuaria sabía que también era presupuestal.</li></ul>' },
    { h: 'Qué se aprendió',
      html: '<ol><li>El frente parado sube el costo de todos; el que se mueve primero (frente alterno) suele ser el que más información tiene.</li><li>La brecha «cautela» frente a «decisión unilateral» se cierra con información compartida a tiempo, no con más cartas.</li><li>El ensayo no evalúa la procedencia del adicional ni su monto: verificar la norma vigente y el expediente técnico aprobado.</li><li>Los riesgos hallados pasan al registro con Riesgos Obra PRO; el efecto en el plazo se calcula con Ruta Crítica PRO.</li></ol>' }
  ],
  keypoints: [
    'El adicional sin expediente aprobado deja un frente parado y muchos silencios.',
    'El caso no promete aprobación ni monto de adicional.',
    'Las palabras clave de la brecha son cautela frente a decisión unilateral.',
    'El proyectista es un tercero: su respuesta es resultado simulado.',
    'Los riesgos pasan al registro y el plazo se calcula con otra herramienta.'
  ],
  flashcards: [
    { q: 'Evento del caso', a: 'Un frente se detiene porque el adicional no tiene expediente aprobado.' },
    { q: 'Brecha principal', a: 'Cautela del contratista frente a decisión unilateral según la Entidad.' },
    { q: 'Qué es el reprogramar frentes', a: 'Un resultado simulado elegido para ver quién se mueve primero.' },
    { q: 'Qué no evalúa el caso', a: 'La procedencia ni el monto del adicional.' }
  ],
  quiz: [
    { q: '¿Qué pretende ensayar el caso?', opts: ['El monto del adicional', 'Quién cree que la decisión es de otro', 'La aprobación del expediente'], correct: 1, why: 'Se ensayan percepciones y decisiones, no resultados.' },
    { q: 'La opinión del proyectista es:', opts: ['Un resultado simulado', 'Un dato real', 'Un acuerdo'], correct: 0, why: 'Es un tercero fuera de la mesa; su respuesta se decide y se marca.' },
    { q: '¿Con qué herramienta se calcula el efecto en el plazo?', opts: ['Con la simulación', 'Con Ruta Crítica PRO', 'Con el proyectista'], correct: 1, why: 'El plazo se calcula con cronograma, no con la simulación.' }
  ]
});
