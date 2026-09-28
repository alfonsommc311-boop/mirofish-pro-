Lesson.start({
  id: 'normas-por-su-nombre', area: 'Rigor, ética y límites', areaIcon: '🛡️', icon: '📜',
  title: 'Normas por su nombre',
  subtitle: 'Ningún actor cita artículos inventados: la coletilla obligatoria y cómo se aplica en cada archivo.',
  norma: 'Verificar la norma vigente y el expediente técnico aprobado.',
  intro: '<p>Los modelos de lenguaje escriben con seguridad incluso cuando no saben. Un actor «contratista» o «supervisor» puede soltar una cita normativa con número que suena perfecta y es falsa o desactualizada. Peor: si esa cita entra al informe, alguien podría repetirla en una carta real. Por eso, en este curso, <b>las normas se nombran, no se numeran</b>, y siempre con la coletilla: <i>verificar la norma vigente y el expediente técnico aprobado</i>.</p>',
  sections: [
    { h: 'Qué significa «por su nombre»',
      html: '<table><tr><th>Sí</th><th>No</th></tr><tr><td>«la ley y el reglamento de contratación pública»</td><td>Un número de artículo, numeral o inciso</td></tr><tr><td>«las bases y el contrato de obra»</td><td>Una cláusula con número</td></tr><tr><td>«el expediente técnico aprobado»</td><td>Un plazo en días atribuido a un artículo</td></tr></table><p>El nombre orienta el razonamiento del actor («esto se rige por el contrato y la norma de contrataciones») sin fingir precisión que no tienes.</p>' },
    { h: 'Por qué es una regla dura',
      html: '<ul><li>Las normas cambian y los modelos pueden citar una versión vieja.</li><li>Un número inventado, dicho por un actor plausible, parece autoridad.</li><li>El informe circula: un dato falso se copia y se convierte en «lo dijo el análisis».</li></ul><p>El plazo real de una actuación lo confirma quien lo verifica en la fuente vigente, no un agente.</p>' },
    { h: 'Dónde se aplica la regla',
      html: '<ol><li><b>Perfil del actor</b>: escribe «conoce las reglas de contratación» y no «cita los artículos X».</li><li><b>Consigna</b>: incluye la línea fija <i>«cita las normas solo por su nombre; no uses números de artículo, numeral ni cláusula»</i>.</li><li><b>Revisión de respuestas</b>: busca a mano cifras que parezcan referencias normativas; si aparecen, quítalas o anótalas como error del actor.</li><li><b>Informe</b>: cierra con la coletilla.</li></ol>' },
    { h: 'Ejemplo de corrección',
      html: '<p>Respuesta de un actor (caso ficticio, Consorcio Andino):</p><p><i>«Presentaré mi solicitud dentro del plazo que fija la norma.»</i></p><p>Correcto: no numera. Se deja tal cual y en el informe se añade: «el plazo aplicable debe verificarse en la norma vigente y el expediente técnico aprobado».</p><p>Si el actor hubiera escrito un número de artículo, el orquestador lo <b>elimina o lo marca</b> como cita no verificada antes de resolver la ronda, para que los demás actores no razonen sobre un dato inventado.</p>' }
  ],
  keypoints: [
    'Las normas se citan por su nombre; nunca con número de artículo, numeral o cláusula.',
    'La coletilla obligatoria: verificar la norma vigente y el expediente técnico aprobado.',
    'Un número inventado por un actor plausible parece autoridad y se copia.',
    'La regla va en el perfil, en la consigna, en la revisión y en el informe.',
    'El orquestador elimina o marca las citas numeradas antes de resolver.'
  ],
  flashcards: [
    { q: '¿Cómo se cita una norma en esta app?', a: 'Solo por su nombre, sin número de artículo, numeral ni cláusula.' },
    { q: '¿Cuál es la coletilla obligatoria?', a: 'Verificar la norma vigente y el expediente técnico aprobado.' },
    { q: '¿Por qué es riesgoso un número inventado?', a: 'Parece autoridad, puede estar desactualizado y se copia a cartas reales.' },
    { q: '¿Qué línea fija va en la consigna?', a: 'Citar las normas solo por su nombre, sin números.' },
    { q: '¿Qué haces si un actor citó un artículo?', a: 'Lo eliminas o lo marcas como cita no verificada antes de resolver la ronda.' }
  ],
  quiz: [
    { q: '¿Cuál es una forma correcta en un perfil?', opts: ['Cita el artículo que fija el plazo', 'Conoce las reglas de contratación y el contrato de obra', 'Sabe todos los plazos de memoria'], correct: 1, why: 'Se orienta el razonamiento sin pedir precisión numérica.' },
    { q: 'Encuentras un número de artículo en una respuesta. Lo correcto es:', opts: ['Dejarlo, suena bien', 'Quitarlo o marcarlo como no verificado', 'Copiarlo al informe'], correct: 1, why: 'Los demás actores razonarían sobre un dato inventado.' },
    { q: 'El informe cierra siempre con:', opts: ['Una lista de artículos', 'La coletilla de verificar la norma vigente y el expediente técnico aprobado', 'Nada'], correct: 1, why: 'Es la salvaguarda obligatoria.' }
  ]
});
