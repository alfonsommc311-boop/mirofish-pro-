Lesson.start({
  id: 'caso-bloqueo-vecinal', area: 'Casos de obra pública', areaIcon: '🏗️', icon: '🚷',
  title: 'Caso: bloqueo vecinal',
  subtitle: 'El cierre de una vía lleva a los vecinos a bloquear el acceso a la obra: el actor que no firma contratos también decide plazos.',
  norma: 'Caso ficticio; las obligaciones de comunicación y de seguridad de la obra se rigen por el contrato y las normas aplicables: verificar la norma vigente y el expediente técnico aprobado.',
  intro: '<p>Los vecinos no aparecen en el contrato, pero pueden detener el frente. Este caso ficticio (Municipalidad Distrital de Villa Esperanza, Consorcio Andino, Consorcio Supervisor Horizonte) ensaya el cierre de una vía para una zanja y la respuesta de un comité vecinal. Se usan <b>roles, nunca nombres</b>, y se cuida que los vecinos no sean caricatura: tienen motivos, información y límites propios.</p>',
  sections: [
    { h: 'El evento y la pregunta',
      html: '<p><b>Evento (ficticio):</b> el contratista cierra una vía secundaria durante varios días para una zanja. Comerciantes y vecinos bloquean el acceso de camiones.</p><p><b>Pregunta:</b> ¿qué le dice cada actor a cuál, y qué mensaje llegó a los vecinos antes del cierre?</p>' },
    { h: 'Los actores y lo que solo cada uno sabe',
      html: '<table><tr><th>Actor</th><th>Información privada</th></tr><tr><td>Dirigente del comité vecinal</td><td>Los comerciantes perdieron ventas y una parte del comité cree que le prometieron horarios de cierre en una reunión previa.</td></tr><tr><td>Residente del Consorcio Andino</td><td>La partida de la zanja no puede quedar a medias; tiene un cronograma corto y personal contratado por días.</td></tr><tr><td>Gerencia de la Municipalidad</td><td>Su plan de desvíos existe, pero cree que fue comunicado; no sabe cuánto llegó a la calle.</td></tr><tr><td>Jefe de supervisión</td><td>Sabe que el cuaderno de obra recoge la comunicación al contratista, pero no la comunicación a vecinos.</td></tr></table>' },
    { h: 'Qué pasó, ronda a ronda',
      html: '<table><tr><th>Ronda</th><th>Qué se ensayó</th></tr><tr><td>1</td><td>Cierre y primera reacción: los vecinos exigen horarios; el contratista responde que la partida no admite pausas.</td></tr><tr><td>2</td><td>El bloqueo se sostiene. La Entidad ofrece una mesa; la supervisión aclara qué se comunicó y a quién.</td></tr><tr><td>3</td><td>Se instala la mesa de diálogo. <span class="hl">Resultado simulado:</span> presencia policial observadora, sin intervención, según decide el orquestador.</td></tr><tr><td>4</td><td><span class="hl">Resultado simulado:</span> acuerdo provisional de cierres parciales por horario y un canal de aviso a comerciantes; queda pendiente lo de las ventas perdidas.</td></tr></table><p>Indicadores tipo: <i>Indicadores: bloqueo continúa 55 | acuerdo de horarios 50 | escalada pública 35</i> (juicios declarados).</p>' },
    { h: 'Las brechas de percepción halladas',
      html: '<ul><li>La Entidad creía que había comunicado; los vecinos creían que <b>nadie les avisó</b>.</li><li>El contratista creía que su riesgo era de cronograma; los vecinos veían un riesgo de ingresos que nadie nombraba.</li><li>Los vecinos creían tener una promesa; la supervisión no tenía registro de ella. La brecha estuvo en la memoria, no en un papel inventado.</li></ul>' },
    { h: 'Qué se aprendió',
      html: '<ol><li>Comunicar no es lo mismo que haber informado: se mide por lo que el receptor recuerda.</li><li>El bloqueo se ensaya como pérdida de un tercero sin contrato: sin mesa, escala.</li><li>El acuerdo provisional es una salida plausible en la simulación, no una fórmula ni una garantía.</li><li>Ver Riesgos Obra PRO para llevar el hallazgo al registro y Planifica PRO para el mapa de actores previo.</li></ol>' }
  ],
  keypoints: [
    'Los vecinos no firman el contrato, pero deciden si el frente avanza.',
    'Se simulan roles, no personas, y con motivos propios.',
    'La brecha central: comunicó frente a nadie me avisó.',
    'La presencia policial y el acuerdo son resultados simulados.',
    'Un acuerdo provisional no es garantía ni fórmula.'
  ],
  flashcards: [
    { q: 'Evento del caso', a: 'El cierre de una vía lleva a los vecinos a bloquear el acceso a la obra.' },
    { q: 'Brecha clave', a: 'La Entidad creía haber comunicado; los vecinos creían que nadie les avisó.' },
    { q: 'Qué marca la presencia policial', a: 'Un resultado simulado decidido por el orquestador.' },
    { q: 'Por qué roles y no nombres', a: 'Para evitar señalar a personas y trabajar con motivos, no con caricaturas.' }
  ],
  quiz: [
    { q: '¿Qué brecha destacó?', opts: ['El plazo del contratista', 'Comunicó frente a nadie me avisó', 'El monto de la zanja'], correct: 1, why: 'La comunicación se mide por lo que el receptor sabe.' },
    { q: 'El acuerdo provisional de la ronda 4 es:', opts: ['Un resultado simulado', 'Un hecho real', 'Una promesa'], correct: 0, why: 'Lo decide el orquestador y se marca.' },
    { q: '¿Cómo se representa a los vecinos?', opts: ['Con nombres reales', 'Como roles con motivos propios', 'Como un obstáculo'], correct: 1, why: 'Roles con información y límites propios evitan la caricatura.' }
  ]
});
