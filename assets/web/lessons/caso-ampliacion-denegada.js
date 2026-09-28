Lesson.start({
  id: 'caso-ampliacion-denegada', area: 'Casos de obra pública', areaIcon: '🏗️', icon: '⛔',
  title: 'Caso: ampliación denegada',
  subtitle: 'La Entidad deniega una ampliación de plazo y el contratista amenaza con controversia: dónde se rompe cada relato.',
  norma: 'Caso ficticio; la ampliación de plazo y la solución de controversias se rigen por la Ley de Contrataciones del Estado y su Reglamento y por el contrato: verificar la norma vigente y el expediente técnico aprobado.',
  intro: '<p>Una denegatoria de ampliación de plazo suele leerse como cierre, pero en la simulación se ve como <b>apertura de un segundo juego</b>: quién tiene la mejor historia documentada de la ruta crítica. Este caso es ficticio (Municipalidad Distrital de Villa Esperanza, Consorcio Andino, Consorcio Supervisor Horizonte) y <b>no promete</b> ni la procedencia de una ampliación ni el resultado de una controversia. Lo ensayado son relatos, no fallos.</p>',
  sections: [
    { h: 'El evento y la pregunta',
      html: '<p><b>Evento (ficticio):</b> la Municipalidad comunica que no acepta la solicitud de ampliación de plazo del Consorcio Andino por lluvias y falta de definición de un tramo. El contratista anuncia que acudirá a los mecanismos de solución de controversias.</p><p><b>Pregunta:</b> ¿qué hace cada parte en las tres semanas siguientes y qué flanco propio expone al defender su posición?</p><p>El análisis de plazo en sí (ruta crítica, holguras) no se repite aquí: se ensaya con Ruta Crítica PRO y se traen solo las cifras que el actor declara.</p>' },
    { h: 'Los actores y lo que solo cada uno sabe',
      html: '<table><tr><th>Actor</th><th>Información privada</th></tr><tr><td>Gerente del Consorcio Andino</td><td>Su programa interno muestra que la partida afectada estaba en la ruta crítica, pero tiene anotaciones de cuaderno de obra poco constantes.</td></tr><tr><td>Área usuaria de la Municipalidad</td><td>Sabe que dejó una consulta del tramo sin respuesta durante días; teme que eso pese en su contra.</td></tr><tr><td>Asesoría jurídica de la Entidad</td><td>Su criterio busca evitar precedentes; ignora el detalle del programa del contratista.</td></tr><tr><td>Jefe de supervisión</td><td>Su informe técnico tiene reservas para ambos lados; no lo ha compartido completo.</td></tr></table>' },
    { h: 'Qué pasó, ronda a ronda',
      html: '<table><tr><th>Ronda</th><th>Qué se ensayó</th></tr><tr><td>1</td><td>La Entidad comunica la denegatoria con un fundamento breve. Supervisión y contratista la leen de forma distinta.</td></tr><tr><td>2</td><td>El contratista responde con reserva de derechos y menciona la controversia. La Entidad convoca a asesoría.</td></tr><tr><td>3</td><td>La supervisión aclara qué partes de su informe son técnicas y cuáles no. <span class="hl">Resultado simulado:</span> asesoría de la Entidad recomienda una reunión técnica antes de cualquier paso formal.</td></tr><tr><td>4</td><td><span class="hl">Resultado simulado:</span> las partes aceptan la reunión técnica sin resolver el fondo; queda abierta la vía formal. El orquestador eligió este desenlace para ver qué información cada parte guarda en la mesa.</td></tr></table><p>Línea de indicadores tipo, ronda 2: <i>Indicadores: controversia formal 55 | reunión técnica 40 | acuerdo de fondo 15</i> (juicios declarados).</p>' },
    { h: 'Las brechas de percepción halladas',
      html: '<ul><li>El contratista creía que su causal era <b>evidente</b>; la Entidad creía que el efecto sobre la ruta crítica no estaba mostrado.</li><li>La Entidad creía su posición sólida; el actor de área usuaria sabía, en privado, que la consulta sin respuesta era su punto débil.</li><li>Nadie sabía que la supervisión tenía reservas hacia ambos: esa era la información más valiosa y la menos usada.</li></ul>' },
    { h: 'Qué se aprendió',
      html: '<ol><li>Un anuncio de controversia sube el costo del silencio propio: cada parte tiende a proteger su documento débil.</li><li>El flanco más repetido fue la <b>consulta sin respuesta</b> y el cuaderno con anotaciones irregulares.</li><li>La reunión técnica aparece como salida plausible en la simulación, no como garantía.</li><li>El ensayo prepara qué llevar a la mesa; no decide si procede la ampliación. Para argumentar, ver Negocia PRO; para redactar, Informe Obra PRO.</li></ol>' }
  ],
  keypoints: [
    'La denegatoria abre un segundo juego: quién sostiene mejor su relato.',
    'El caso no promete procedencia ni resultado de controversia.',
    'Cada parte protege su documento más débil.',
    'La supervisión guardaba información valiosa que nadie pidió.',
    'El desenlace de la ronda 4 es un resultado simulado.'
  ],
  flashcards: [
    { q: 'Evento del caso', a: 'La Entidad deniega una ampliación de plazo y el contratista anuncia controversia.' },
    { q: 'Flanco más repetido', a: 'Consulta sin respuesta y anotaciones irregulares en el cuaderno de obra.' },
    { q: 'Quién guardaba información valiosa', a: 'El jefe de supervisión, con reservas hacia ambas partes.' },
    { q: 'Qué es la reunión técnica del final', a: 'Un resultado simulado plausible, no una garantía.' }
  ],
  quiz: [
    { q: '¿Qué ensaya este caso?', opts: ['Si procede la ampliación', 'Los relatos y flancos de cada parte', 'El fallo de una controversia'], correct: 1, why: 'No se promete procedencia ni fallo.' },
    { q: '¿Cuál fue la brecha con la Entidad?', opts: ['Creía su posición sólida mientras su área usuaria conocía su punto débil', 'No conocía el contrato', 'No tenía asesoría'], correct: 0, why: 'La información privada del área usuaria contradecía la seguridad pública.' },
    { q: 'La reunión técnica de la ronda 4 es:', opts: ['Un hecho real', 'Un resultado simulado', 'Una obligación'], correct: 1, why: 'Lo decide el orquestador y se marca así.' }
  ]
});
