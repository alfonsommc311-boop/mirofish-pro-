var CATALOG = [
  { area: 'Qué es MiroFish', icon: '🐟', acc: 'a1',
    desc: 'El motor de simulación multiagente que inspira todo el curso, y lo que sí y no puede decirte.',
    lessons: [
      { id: 'que-es-mirofish', icon: '🐟', t: 'Qué es MiroFish', d: 'Motor multiagente de código abierto: subes una semilla, describes la pregunta y recibes un mundo paralelo con informe.' },
      { id: 'inteligencia-de-enjambre', icon: '🐝', t: 'Inteligencia de enjambre', d: 'De un modelo que opina a muchos agentes que interactúan: qué es la emergencia.' },
      { id: 'los-cinco-pasos-de-mirofish', icon: '🪜', t: 'Los cinco pasos de MiroFish', d: 'Grafo, entorno, simulación, informe e interacción profunda: el flujo que este curso replica.' },
      { id: 'oasis-camel-y-zep', icon: '⚙️', t: 'OASIS, CAMEL y Zep', d: 'Las piezas por dentro: simulador social, memoria y grafo de conocimiento.' },
      { id: 'instalar-mirofish-y-lo-que-cuesta', icon: '🧰', t: 'Instalar MiroFish y lo que cuesta', d: 'Requisitos, claves y por qué cada corrida consume API; método para estimarlo, sin precios.' },
      { id: 'que-predice-y-que-no', icon: '🔮', t: 'Qué predice y qué no', d: 'Narrativa plausible de actores, sí; plazo, costo y ruta crítica, no.' }
    ] },
  { area: 'Claude Code como motor de simulación', icon: '🤖', acc: 'a2',
    desc: 'El mismo método dentro de Claude Code: un subagente por actor y tú como orquestador.',
    lessons: [
      { id: 'por-que-claude-code-y-no-la-api', icon: '🔌', t: 'Por qué Claude Code y no la API', d: 'Pocos actores ricos con información privada frente a miles de agentes simples.' },
      { id: 'un-subagente-un-actor', icon: '🧑‍🤝‍🧑', t: 'Un subagente, un actor', d: 'Contexto aislado: por qué cada actor es un subagente propio y no un personaje en un chat.' },
      { id: 'el-orquestador-vista-de-dios', icon: '👁️', t: 'El orquestador: vista de dios', d: 'La sesión principal ve todo, decide qué pasa y quién se entera.' },
      { id: 'paralelo-y-segundo-plano', icon: '⏱️', t: 'Paralelo y segundo plano', d: 'Todos los actores de una ronda a la vez, esperar sin sondear y recuperar un agente caído.' },
      { id: 'archivos-como-memoria-del-mundo', icon: '🗂️', t: 'Archivos como memoria del mundo', d: 'Dossier, perfiles, rondas y contextos: el disco como estado del mundo.' },
      { id: 'el-skill-mirofish', icon: '🧩', t: 'El skill /mirofish', d: 'Qué hace solo, qué te pregunta y cómo mejora con cada corrida.' }
    ] },
  { area: 'La semilla: el dossier común', icon: '🌱', acc: 'a3',
    desc: 'El documento base que todos los actores comparten: hechos, evento y puntos débiles visibles.',
    lessons: [
      { id: 'que-va-en-el-dossier', icon: '📁', t: 'Qué va en el dossier', d: 'Seis bloques: obra, historia, evento, hechos técnicos, reglas y puntos débiles visibles.' },
      { id: 'hechos-con-fuente', icon: '🔎', t: 'Hechos con fuente', d: 'Extraer de informes, cartas, cuaderno y resoluciones; cifras exactas con su documento.' },
      { id: 'el-evento-que-dispara', icon: '⚡', t: 'El evento que dispara', d: 'Un solo hecho concreto e inyectable; ejemplos buenos y malos.' },
      { id: 'puntos-debiles-visibles', icon: '🎯', t: 'Puntos débiles visibles', d: 'Lo que cualquier actor atento usaría contra otro: sin esto no hay conflicto.' },
      { id: 'datos-personales-y-confidencialidad', icon: '🔒', t: 'Datos personales y confidencialidad', d: 'Roles, no nombres; qué cambia si el texto sale a una API externa.' }
    ] },
  { area: 'Diseñar actores creíbles', icon: '🎭', acc: 'a4',
    desc: 'Perfiles que no sean caricaturas: qué quiere, qué teme, qué sabe y qué puede hacer cada uno.',
    lessons: [
      { id: 'elegir-los-actores', icon: '👥', t: 'Elegir los actores', d: 'De 3 a 6: quién decide, quién bloquea, quién tiene la información.' },
      { id: 'anatomia-de-un-perfil', icon: '🪪', t: 'Anatomía de un perfil', d: 'Quién eres, qué quieres, qué temes, qué sabes y otros no, qué puedes hacer.' },
      { id: 'la-informacion-privada-es-el-motor', icon: '🗝️', t: 'La información privada es el motor', d: 'Sin asimetrías todos llegan a la misma conclusión; cómo sembrar una útil.' },
      { id: 'hipotesis-de-simulacion', icon: '🧪', t: 'Hipótesis de simulación', d: 'Lo no verificado se marca; cómo elegir la hipótesis que vale la pena probar.' },
      { id: 'palancas-reales-de-cada-actor', icon: '🛠️', t: 'Palancas reales de cada actor', d: 'Lo que de verdad puede hacer la Entidad, el contratista, la supervisión y el control.' },
      { id: 'el-actor-colectivo', icon: '📣', t: 'El actor colectivo', d: 'Vecinos, trabajadores, prensa y redes en un solo agente.' },
      { id: 'actores-demasiado-razonables', icon: '😇', t: 'Actores demasiado razonables', d: 'El sesgo complaciente de los modelos: estrategia agresiva sin caricatura ni documentos falsos.' }
    ] },
  { area: 'La consigna de cada ronda', icon: '✍️', acc: 'a5',
    desc: 'El prompt que recibe cada actor: qué puede ver, qué decide y en qué formato responde.',
    lessons: [
      { id: 'anatomia-de-la-consigna', icon: '🧱', t: 'Anatomía de la consigna', d: 'Archivos permitidos, ventana de fechas, situación, decisión central, formato y salida.' },
      { id: 'la-decision-central', icon: '❓', t: 'La decisión central', d: 'Por qué «qué entregas el día 12» rinde más que «qué haces».' },
      { id: 'formato-exacto-y-limite', icon: '📏', t: 'Formato exacto y límite', d: 'Secciones fijas y tope de palabras: respuestas comparables y fáciles de resolver.' },
      { id: 'reglas-condicionales', icon: '🔀', t: 'Reglas condicionales', d: '«Si … → …»: el actor decide ante lo que no sabe y te ahorra rondas.' },
      { id: 'numeros-e-indicadores', icon: '🔢', t: 'Números e indicadores', d: 'Probabilidades propias de la ronda y la línea fija que alimenta el gráfico.' },
      { id: 'lo-que-el-actor-no-debe-ver', icon: '🙈', t: 'Lo que el actor no debe ver', d: 'Aislamiento, rutas absolutas y cómo detectar una fuga de información.' }
    ] },
  { area: 'La resolución vista de dios', icon: '⚖️', acc: 'a6',
    desc: 'Lo que haces entre rondas: decidir qué pasó, cuándo y quién se entera.',
    lessons: [
      { id: 'que-hace-el-orquestador-entre-rondas', icon: '🧭', t: 'Qué hace el orquestador entre rondas', d: 'Leer todo, decidir qué pasó, fecharlo y etiquetar quién lo ve.' },
      { id: 'quien-se-entera-de-que', icon: '📬', t: 'Quién se entera de qué', d: 'Carta y copias, cuaderno de obra, memorando interno, control, proveedores, lo público.' },
      { id: 'acciones-incompatibles', icon: '⚔️', t: 'Acciones incompatibles', d: 'Decide quien tiene la competencia; los plazos burocráticos se cumplen tarde más a menudo.' },
      { id: 'terceros-y-resultados-simulados', icon: '🧾', t: 'Terceros y resultados simulados', d: 'Asesoría, laboratorios, clima: decidir de forma plausible y marcarlo siempre.' },
      { id: 'avanzar-el-reloj', icon: '🕰️', t: 'Avanzar el reloj', d: 'Ventanas de tiempo, saltos entre rondas y cuándo sale un actor.' },
      { id: 'la-rama-de-estres', icon: '🌪️', t: 'La rama de estrés', d: 'Un resultado adverso plausible para ver dónde se rompe el sistema.' }
    ] },
  { area: 'Una corrida de principio a fin', icon: '🔄', acc: 'a7',
    desc: 'El recorrido operativo completo: arrancar, lanzar rondas, armar contextos y resolver fallos.',
    lessons: [
      { id: 'arrancar-la-simulacion', icon: '🚦', t: 'Arrancar la simulación', d: 'Las cuatro cosas que pide el skill: fuente, evento, pregunta y horizonte, perspectiva.' },
      { id: 'el-caso-json', icon: '📄', t: 'El caso.json', d: 'Actores, indicadores y plan de rondas en un solo archivo.' },
      { id: 'lanzar-y-esperar-una-ronda', icon: '🚀', t: 'Lanzar y esperar una ronda', d: 'El mensaje con N subagentes, las notificaciones y qué revisar al llegar.' },
      { id: 'armar-contextos', icon: '🧮', t: 'Armar contextos', d: 'Convertir la resolución en lo que sabe cada actor; errores típicos de visibilidad.' },
      { id: 'cuando-algo-sale-mal', icon: '🩹', t: 'Cuando algo sale mal', d: 'Actor fuera de personaje, formato roto, agente caído: relanzar solo lo necesario.' },
      { id: 'cuanto-cuesta-una-corrida', icon: '📉', t: 'Cuánto cuesta una corrida', d: 'Subagentes por corrida, cuota del plan y cómo ahorrar sin perder calidad.' }
    ] },
  { area: 'Leer lo que salió', icon: '📊', acc: 'a8',
    desc: 'Convertir respuestas sueltas en hallazgos: cronología, brechas y puntos de quiebre.',
    lessons: [
      { id: 'de-respuestas-a-cronologia', icon: '📆', t: 'De respuestas a cronología', d: 'Ordenar hechos y decisiones en una línea de tiempo.' },
      { id: 'brechas-de-percepcion', icon: '🪞', t: 'Brechas de percepción', d: 'Lo que un actor cree de su riesgo frente a lo que creen los demás.' },
      { id: 'puntos-de-quiebre', icon: '💥', t: 'Puntos de quiebre', d: 'La decisión o el hecho a partir del cual el caso cambió de rumbo.' },
      { id: 'convergencias-y-divergencias', icon: '🔀', t: 'Convergencias y divergencias', d: 'Lo que todos vieron venir y lo que solo uno vio.' },
      { id: 'el-grafico-de-indicadores', icon: '📈', t: 'El gráfico de indicadores', d: 'Leerlo sin sobreinterpretarlo: juicios declarados, no frecuencias.' },
      { id: 'una-corrida-no-es-una-distribucion', icon: '🎲', t: 'Una corrida no es una distribución', d: 'Variabilidad entre corridas, ramas y cuándo repetir.' }
    ] },
  { area: 'El informe y la conversación con el mundo', icon: '📝', acc: 'a9',
    desc: 'Un informe honesto, y cómo interrogar a los actores y al mundo simulado.',
    lessons: [
      { id: 'estructura-del-informe', icon: '🗒️', t: 'Estructura del informe', d: 'De la respuesta corta al anexo: las nueve secciones y para qué sirve cada una.' },
      { id: 'recomendaciones-que-se-pueden-hacer', icon: '✅', t: 'Recomendaciones que se pueden hacer', d: 'Esta semana, dos semanas, hacia el cierre; con responsable.' },
      { id: 'limitaciones-honestas', icon: '⚠️', t: 'Limitaciones honestas', d: 'Lo que el informe debe decir de sí mismo para que se le crea.' },
      { id: 'entrevistar-a-un-actor', icon: '🎤', t: 'Entrevistar a un actor', d: 'Preguntarle en personaje, solo con lo que conoció.' },
      { id: 'preguntar-al-mundo', icon: '🌐', t: 'Preguntar al mundo', d: 'Preguntas al orquestador: por qué se cayó el acuerdo, qué habría cambiado.' },
      { id: 'ramas-y-si', icon: '🌿', t: 'Ramas y «¿y si…?»', d: 'Cambiar un hecho, volver a correr desde una ronda y comparar con la base.' }
    ] },
  { area: 'Casos de obra pública', icon: '🏗️', acc: 'a10',
    desc: 'Siete casos ficticios: Municipalidad Distrital de Villa Esperanza, Consorcio Andino y Consorcio Supervisor Horizonte.',
    lessons: [
      { id: 'caso-valorizacion-diferida', icon: '💵', t: 'Caso: valorización diferida', d: 'La supervisión difiere parte de la última valorización hasta que lleguen los ensayos.' },
      { id: 'caso-ampliacion-denegada', icon: '⛔', t: 'Caso: ampliación denegada', d: 'La Entidad deniega una ampliación de plazo y el contratista amenaza con controversia.' },
      { id: 'caso-adicional-y-paralizacion', icon: '🚧', t: 'Caso: adicional y paralización', d: 'Un adicional sin expediente aprobado paraliza un frente.' },
      { id: 'caso-bloqueo-vecinal', icon: '🚷', t: 'Caso: bloqueo vecinal', d: 'El cierre de una vía lleva a los vecinos a bloquear el acceso a la obra.' },
      { id: 'caso-alza-del-acero', icon: '🔩', t: 'Caso: alza del acero', d: 'Sube el precio del acero a mitad de obra: contratista, proveedores y Entidad.' },
      { id: 'caso-cambio-de-gestion', icon: '🔁', t: 'Caso: cambio de gestión', d: 'Nueva gestión en la Entidad a mitad de la ejecución.' },
      { id: 'caso-hito-de-control-concurrente', icon: '🕵️', t: 'Caso: hito de control concurrente', d: 'El OCI llega en el hito de recepción: quién se protege y cómo.' }
    ] },
  { area: 'Más allá de la obra', icon: '🧭', acc: 'a11',
    desc: 'La misma técnica aplicada a negociaciones, licitaciones, opinión pública y decisiones de gestión.',
    lessons: [
      { id: 'simular-una-negociacion', icon: '🤝', t: 'Simular una negociación', d: 'Tu alternativa frente a la del otro, ensayada antes de sentarte.' },
      { id: 'simular-una-licitacion', icon: '📑', t: 'Simular una licitación', d: 'Competidores, comité y consultas: anticipar observaciones y ofertas.' },
      { id: 'simular-la-reaccion-publica', icon: '📢', t: 'Simular la reacción pública', d: 'La capa de redes: cuándo sí conviene MiroFish original con cientos de agentes.' },
      { id: 'simular-una-decision-de-gestion', icon: '🏛️', t: 'Simular una decisión de gestión', d: 'Autoridad, asesores y operadores políticos.' }
    ] },
  { area: 'Rigor, ética y límites', icon: '🛡️', acc: 'a12',
    desc: 'Cómo ensayar sin engañarte ni engañar a otros.',
    lessons: [
      { id: 'ensayo-no-profecia', icon: '🎭', t: 'Ensayo, no profecía', d: 'Ni predicción ni asesoría legal: cómo decirlo sin quitarle valor.' },
      { id: 'normas-por-su-nombre', icon: '📜', t: 'Normas por su nombre', d: 'Ningún actor cita artículos inventados; la coletilla obligatoria.' },
      { id: 'nada-fabricado', icon: '🚫', t: 'Nada fabricado', d: 'Documentos, ensayos y decisiones de terceros: siempre marcados como simulados.' },
      { id: 'documento-interno', icon: '🔐', t: 'Documento interno', d: 'Por qué el informe no se mezcla con lo que se envía a la Entidad.' },
      { id: 'contrastar-con-la-realidad', icon: '🧪', t: 'Contrastar con la realidad', d: 'Anotar qué predijo cada actor y comparar cuando ocurra.' },
      { id: 'cuando-no-simular', icon: '🛑', t: 'Cuándo no simular', d: 'Cuando la respuesta es un cálculo, una norma clara o no hay decisión en juego.' }
    ] },
  { area: 'Combinar con tus otras herramientas', icon: '🧰', acc: 'a13',
    desc: 'La simulación frente al cronograma, el juicio de expertos, la caja, el riesgo y tus informes.',
    lessons: [
      { id: 'con-ms-project', icon: '📅', t: 'Con MS Project', d: 'Los días que un actor promete, contra la ruta crítica.' },
      { id: 'con-delphi-y-jev', icon: '🧠', t: 'Con Delphi y Jev', d: 'Juicio de expertos y experto sintético frente a actores simulados.' },
      { id: 'con-la-curva-s-y-las-valorizaciones', icon: '💹', t: 'Con la curva S y las valorizaciones', d: 'La caja del contratista como motor de sus decisiones.' },
      { id: 'con-el-analisis-de-riesgos', icon: '⚠️', t: 'Con el análisis de riesgos', d: 'De un hallazgo de la simulación a una fila del registro de riesgos.' },
      { id: 'con-tus-informes', icon: '📄', t: 'Con tus informes', d: 'Qué pasa de la simulación a un informe real y qué no pasa nunca.' }
    ] },
  { area: 'El simulador destacado', icon: '🏆', acc: 'a14',
    desc: 'Tu biblioteca de casos, tu skill afinado y un examen integrador.',
    lessons: [
      { id: 'tu-biblioteca-de-casos', icon: '📚', t: 'Tu biblioteca de casos', d: 'Guardar cada corrida con lo que pasó después para aprender de tus predicciones.' },
      { id: 'mejorar-tu-skill', icon: '🔧', t: 'Mejorar tu skill', d: 'Cada corrida deja una lección en lecciones.md.' },
      { id: 'presentar-una-simulacion', icon: '🎬', t: 'Presentar una simulación', d: 'A tu jefe o a la Entidad sin prometer ni asustar.' },
      { id: 'el-perfil-del-simulador', icon: '🧑‍💼', t: 'El perfil del simulador', d: 'Qué sabe, qué pregunta y qué no hace.' },
      { id: 'decalogo-del-simulador', icon: '🔟', t: 'Decálogo del simulador', d: 'Diez reglas para ensayar el futuro sin engañarte.' },
      { id: 'examen-integrador', icon: '🎓', t: 'Examen integrador', d: 'Un caso completo: dossier, actores, dos rondas resueltas y el informe.' }
    ] }
];
