Lesson.start({
  id: 'convergencias-y-divergencias', area: 'Leer lo que salió', areaIcon: '📊', icon: '🔀',
  title: 'Convergencias y divergencias',
  subtitle: 'Lo que todos vieron venir y lo que solo uno vio: dos lecturas, dos tipos de aviso.',
  norma: 'Que todos coincidan no prueba que sea cierto; que uno discrepe no prueba que se equivoque (verificar la norma vigente y el expediente técnico aprobado en todo caso real).',
  intro: '<p>Después de la cronología y las brechas, una tercera lectura compara los actores entre sí: <b>¿en qué coincidieron todos?</b> y <b>¿qué vio solo uno?</b> Lo que todos anticipan es un riesgo casi seguro dentro del mundo simulado, pero también puede ser un sesgo compartido del modelo. Lo que ve uno solo es una pista valiosa o un capricho de un perfil. Distinguir entre ambos es el oficio.</p>',
  sections: [
    { h: 'La matriz de lectura',
      html: '<p>Arma una tabla con una fila por asunto y una columna por actor. En cada celda anota si lo <b>anticipó</b>, lo <b>ignoró</b> o lo <b>vio con otra lectura</b>. Con eso salen dos listas:</p><ul><li><span class="hl">Convergencias</span>: asuntos que tres o más actores vieron venir.</li><li><span class="hl">Divergencias</span>: asuntos que solo uno o dos vieron, o que leyeron distinto.</li></ul>' },
    { h: 'Ejemplo ficticio',
      html: '<p>Caso ficticio: la supervisión difiere parte de una valorización de la Municipalidad Distrital de Villa Esperanza. Actores: Entidad, Consorcio Andino, Consorcio Supervisor Horizonte, control y vecinos (colectivo).</p><table><tr><th>Asunto</th><th>Entidad</th><th>Contratista</th><th>Supervisión</th><th>Control</th></tr><tr><td>El diferimiento será cuestionado</td><td>Sí</td><td>Sí</td><td>Sí</td><td>Sí</td></tr><tr><td>La Entidad tardará en responder</td><td>No</td><td>Sí</td><td>Sí</td><td>No</td></tr><tr><td>El sustento de caja del contratista se agota</td><td>No</td><td>Sí</td><td>No</td><td>No</td></tr><tr><td>Un tercer frente se afectaría</td><td>No</td><td>No</td><td>No</td><td>Sí</td></tr></table><p>Convergencia: el cuestionamiento. Divergencias: la tardanza (la ven dos, la Entidad no se ve a sí misma), la caja (solo el contratista, porque es información suya) y el tercer frente (solo el control).</p>' },
    { h: 'Cómo interpretar cada tipo',
      html: '<p><b>Convergencia alta</b> significa que el escenario es robusto <i>dentro del mundo que armaste</i>. Cuidado: los modelos tienden a coincidir entre sí y a ser complacientes. Si todos coinciden en algo cómodo, sospecha.</p><p><b>Divergencia</b> significa que hay información o interés distinto. Pregúntate: ¿lo vio uno porque sabía algo que los demás no (información privada legítima) o porque su perfil lo empuja a exagerar? Solo lo primero es una pista sólida.</p>' },
    { h: 'Qué hacer con cada lista',
      html: '<ul><li>De las convergencias, prepara <b>lo que ya es casi seguro</b> en el ensayo: respuesta lista, documento en orden.</li><li>De las divergencias, decide <b>qué información sacar a la luz</b> o qué verificar. En el ejemplo, ¿qué sabe el control sobre el tercer frente, y cómo confirmarlo con hechos reales?</li></ul><p>Todo lo que pase a la realidad se verifica con el expediente y la norma vigente por su nombre; nunca con lo que dijo un agente.</p>' },
    { h: 'Desde ambas sillas',
      html: '<p>El actor que ve algo solo se siente en <b>soledad razonable</b>: sabe algo y nadie le cree. Para el orquestador esa soledad es un aviso: si ese actor tuviera razón, ¿quién debería enterarse y cuándo? Esa pregunta suele revelar una fuga de información o un plazo mal calculado.</p>' }
  ],
  keypoints: [
    'Una matriz asunto por actor separa lo que todos vieron de lo que vio uno.',
    'La convergencia es robusta solo dentro del mundo armado; puede ser sesgo compartido.',
    'La divergencia vale si nace de información privada legítima.',
    'Convergencias: prepara lo casi seguro. Divergencias: verifica y decide qué revelar.',
    'Nada pasa a la realidad sin contrastar con el expediente.',
    'Si todos coinciden en algo cómodo, sospecha del modelo.'
  ],
  flashcards: [
    { q: '¿Qué es una convergencia?', a: 'Un asunto que tres o más actores anticiparon.' },
    { q: '¿Qué es una divergencia?', a: 'Un asunto que solo uno o dos vieron, o que leyeron distinto.' },
    { q: '¿Por qué desconfiar de una convergencia cómoda?', a: 'Los modelos tienden a coincidir y a ser complacientes.' },
    { q: '¿Cuándo una divergencia es pista sólida?', a: 'Cuando nace de información privada legítima del actor.' }
  ],
  quiz: [
    { q: 'En el ejemplo, la caja agotada la ve solo el contratista. Es:', opts: ['Una convergencia', 'Una divergencia que nace de información privada', 'Un error del control'], correct: 1, why: 'Es información suya que los demás no tienen.' },
    { q: 'Una convergencia total indica:', opts: ['Certeza del futuro', 'Robustez dentro del mundo armado, con posible sesgo compartido', 'Que sobran actores'], correct: 1, why: 'El acuerdo entre agentes de un mismo modelo no equivale a verdad.' },
    { q: 'Ante una divergencia relevante debes:', opts: ['Ignorarla', 'Verificar con hechos reales y decidir qué revelar', 'Citar al agente como fuente'], correct: 1, why: 'Se contrasta con el expediente, nunca con lo que dijo un agente.' }
  ]
});
