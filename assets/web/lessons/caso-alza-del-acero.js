Lesson.start({
  id: 'caso-alza-del-acero', area: 'Casos de obra pública', areaIcon: '🏗️', icon: '🔩',
  title: 'Caso: alza del acero',
  subtitle: 'Sube el precio del acero a mitad de obra: qué sabe cada quien y dónde se rompe la conversación.',
  norma: 'Reajuste de precios y fórmula polinómica, según el contrato: verificar la norma vigente y el expediente técnico aprobado.',
  intro: '<p>Caso <b>ficticio</b> para ensayar con el método de la app: la Municipalidad Distrital de Villa Esperanza ejecuta un puente vehicular con el Consorcio Andino, y el Consorcio Supervisor Horizonte lo supervisa. A mitad de obra, el acero corrugado sube de precio y el proveedor cambia sus condiciones. No es una obra real ni una predicción: es un <b>ensayo</b> de lo que cada actor haría con lo que sabe. Todo lo que ocurre en las rondas es <b>resultado simulado</b>.</p>',
  sections: [
    { h: 'El evento y la pregunta',
      html: '<p><b>Evento inyectable (un solo hecho):</b> el proveedor principal de acero comunica por carta al contratista que mantiene el precio de la lista anterior solo para pedidos confirmados y pagados en los próximos diez días.</p><p><b>Pregunta del orquestador:</b> ¿cómo se comportan contratista, proveedores y Entidad en las tres semanas siguientes, y qué brecha de percepción aparece entre lo que el contratista cree de su riesgo y lo que ven la supervisión y la Entidad?</p><p><b>Horizonte:</b> tres rondas de una semana cada una. Es una hipótesis de trabajo, no una previsión.</p>' },
    { h: 'Actores y su información privada',
      html: '<table><tr><th>Actor</th><th>Lo que sabe y otros no</th><th>Lo que teme</th></tr><tr><td>A1 Contratista (Consorcio Andino)</td><td>Su caja real y cuánto acero ya tiene comprado; que sus dos frentes siguientes dependen del acero</td><td>Comprar caro y no ver reconocido el efecto; quedarse sin liquidez</td></tr><tr><td>A2 Proveedor de acero</td><td>Que su propio costo de reposición subió y que otros clientes ya aceptaron la nueva lista</td><td>Perder el pedido grande frente a un competidor</td></tr><tr><td>A3 Proveedor alterno</td><td>Su stock disponible y que no podría atender todo el volumen en un solo despacho</td><td>Comprometerse y no cumplir</td></tr><tr><td>A4 Entidad (Municipalidad)</td><td>Su calendario de pagos y su disponibilidad presupuestal del año</td><td>Una paralización visible antes de fin de año</td></tr><tr><td>A5 Supervisión (Horizonte)</td><td>El avance físico verificado y el calendario de adquisición de materiales vigente</td><td>Avalar algo que luego se cuestione</td></tr></table><p>Sin estas asimetrías los cinco llegarían a la misma conclusión y no habría nada que aprender: por eso la información privada es el motor.</p>' },
    { h: 'Qué pasó, ronda a ronda (resultado simulado)',
      html: '<p><b>Ronda 1.</b> El contratista evalúa dos caminos: confirmar el pedido completo con el proveedor actual o repartirlo con el alterno. En el ensayo confirma la mitad y consulta al alterno por la otra mitad; comunica a la supervisión el riesgo de costo con una carta redactada por él mismo. <i>Resultado simulado.</i></p><p><b>Ronda 2.</b> El alterno responde que solo puede atender parte del volumen. La supervisión pide al contratista sustentar el calendario de adquisición; la Entidad, sin haber recibido nada formal, se entera por comentarios y adopta una postura cautelosa: no anticipa nada y pide que todo pase por la vía contractual. <i>Resultado simulado.</i></p><p><b>Ronda 3.</b> El contratista, con la caja ajustada, propone a la Entidad revisar cómo opera el reajuste según su contrato; la Entidad responde que evaluará con su área legal. Se inyecta como tercero un resultado simulado de asesoría jurídica de la Entidad: «sin criterio definido, se requiere revisar contrato y expediente». <i>Resultado simulado; no es una opinión legal real.</i></p><p>Línea de indicadores de ejemplo (probabilidades como <b>juicios declarados</b>, no frecuencias): <span class="hl">A1 riesgo de liquidez: 0,55 · A4 riesgo de paralización: 0,25 · A5 riesgo de cuestionamiento: 0,35</span>.</p>' },
    { h: 'Brechas de percepción halladas',
      html: '<ul><li><b>Contratista frente a Entidad:</b> el contratista juzga alta la probabilidad de una paralización de frente; la Entidad la juzga baja porque no conoce su caja. Ninguno vio el riesgo del otro.</li><li><b>Proveedor frente a contratista:</b> el proveedor cree tener poder de negociación; ignora que el alterno existe. El contratista, a su vez, sobreestima la capacidad del alterno.</li><li><b>Supervisión:</b> cree que el problema es de costo; el contratista lo vive como problema de liquidez. Son dos problemas distintos que exigen conversaciones distintas.</li></ul><p>Lo valioso es la brecha, no el número: dice <b>dónde conversar primero</b>.</p>' },
    { h: 'Qué se aprendió y qué no se puede afirmar',
      html: '<ol><li>Separar en el perfil del contratista costo de liquidez: cambia la palanca que ve cada actor.</li><li>Sembrar la caja como información privada; sin ella, la Entidad y la supervisión actúan a ciegas y la simulación sale plana.</li><li>El reajuste se trata siempre por su nombre y según el contrato; ningún actor cita cifras de norma ni documentos que no existan en la semilla.</li><li>El ensayo <b>no promete</b> reconocimiento de mayores costos, adicionales ni ampliaciones: eso depende del contrato y del expediente. Verificar la norma vigente y el expediente técnico aprobado.</li></ol><p>Para el efecto en plazo, enlaza a Ruta Crítica PRO; para negociar el pedido con proveedores, a Negocia PRO.</p>' }
  ],
  keypoints: [
    'Un solo evento inyectable: la carta del proveedor con plazo corto de confirmación.',
    'La caja del contratista es la información privada que mueve todo el caso.',
    'Costo y liquidez son problemas distintos y cada actor los percibe distinto.',
    'La brecha de percepción señala dónde conversar primero, no qué pasará.',
    'Las decisiones de terceros (asesoría jurídica) se inyectan siempre como resultado simulado.',
    'Nada en el ensayo garantiza reajuste, adicional ni ampliación: verificar contrato, norma vigente y expediente técnico aprobado.'
  ],
  flashcards: [
    { q: '¿Cuál es el evento del caso?', a: 'El proveedor de acero mantiene el precio anterior solo para pedidos confirmados y pagados en diez días.' },
    { q: '¿Qué información privada mueve al contratista?', a: 'Su caja real y el acero que ya tiene comprado.' },
    { q: '¿Qué brecha de percepción apareció?', a: 'El contratista ve alto el riesgo de paralización; la Entidad lo ve bajo porque no conoce su caja.' },
    { q: '¿Cómo se marca la asesoría jurídica de la Entidad?', a: 'Como resultado simulado, sin presentarla como opinión legal real.' },
    { q: '¿Qué no promete el caso?', a: 'Reajuste, adicionales ni ampliaciones: dependen del contrato y del expediente aprobado.' }
  ],
  quiz: [
    { q: '¿Qué hace que este caso rinda algo útil?', opts: ['Que todos los actores sepan lo mismo', 'Que cada actor tenga información privada distinta', 'Que el resultado sea exacto'], correct: 1, why: 'Sin asimetrías todos llegan a la misma conclusión y no se ve dónde se rompe la conversación.' },
    { q: 'La probabilidad de paralización que da un agente es:', opts: ['Una frecuencia medida', 'Un juicio declarado de ese actor', 'Una predicción calibrada'], correct: 1, why: 'Son juicios de la ronda; una corrida no es una distribución.' },
    { q: 'Si el ensayo muestra que la Entidad aceptaría revisar el reajuste, debes concluir:', opts: ['Que se reconocerá el mayor costo', 'Nada sobre el resultado: se verifica contrato, norma vigente y expediente aprobado', 'Que conviene detener la obra'], correct: 1, why: 'El ensayo no promete resultados de reajustes ni de reclamos.' }
  ]
});
