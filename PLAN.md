# MiroFish PRO — plan de la app

**Nombre visible:** MiroFish PRO · *Simulación de actores con Claude Code* (nombre a confirmar; ver «Decisión pendiente»)
**Carpeta:** `D:\MiroFish PRO` (ASCII sin tildes ni ñ: Gradle falla con rutas con tildes).
**Puerto:** 9050 (reservado en `ports.md` el 2026-09-28) · **applicationId:** `com.alfonso.mirofishpro`
**Prefijo de storage:** `mfp` · **Clon previsto de:** la última app de la cadena al momento de construir
(hoy **Ruta Crítica PRO**, `D:\Ruta Critica PRO`, 9049), que trae el motor más completo (`Calc` en
`tools.js` y gráficos SVG de series y redes).
**Estado:** plan listo, a la espera de tiempo y cuota. No se ha clonado ni construido nada todavía.

---

## Por qué esta app (y por qué no es un refrito)

El 28/09/2026 el usuario instaló MiroFish para «predecir escenarios en obra», vio que exige pagar API
(modelo de lenguaje + Zep Cloud) y eligió hacer lo mismo **dentro de Claude Code con subagentes** de su
plan Max. Ese mismo día se corrió la primera simulación real (Val 09 de un paso a desnivel, 5 actores,
4 rondas, informe Word) y el método quedó empaquetado en el skill `/mirofish`. Esta app enseña a dominar
ese método: pensar como orquestador, diseñar actores creíbles y leer lo que sale sin creerle de más.

Antes de diseñar se consultó la base de aplicativos (`apps_db.py planear` y una búsqueda directa en
`aplicativos.db` con 25 palabras clave: simulación, actor, stakeholder, subagente, orquestación,
multiagente, escenario, Delphi, predicción, negociación, mapa de actores…).

| Lo que ya existe | Dónde | Qué cubre en realidad |
|---|---|---|
| Subagentes, skills, workflows y orquestación | Claude Code Experto (1 lección cada uno) | **La herramienta**: qué es un subagente y cómo se lanza. |
| Patrones multiagente, subagentes y orquestación | Agentes IA Experto (2) | **Arquitectura** de agentes que trabajan juntos para producir algo, no que se enfrentan. |
| Juicio de expertos, Delphi, Jev como experto sintético, Monte Carlo | Decisiones PRO | **Estimar una cifra o una probabilidad** con expertos; no cómo reaccionan partes con intereses opuestos. |
| Intereses, MAAN, ZOPA, negociación en obra pública | Negocia PRO | **Negociar tú**, no ensayar qué harán los demás. |
| Stakeholders, matriz poder-interés, mapa de actores | Planifica PRO (1), Gobierna PRO (1), Ciudadanía Sostenible PRO (1) | **Mapear** a los actores, no ponerlos a actuar. |
| Actores y responsabilidades de la obra pública | Legal Obra PRO, Expediente Experto, Valoriza PRO | **Quién es quién** y sus plazos. |

**Lo que no existe en ninguna de las 70 apps:**

- MiroFish, OASIS, simulación social con agentes o inteligencia de enjambre: **cero lecciones**.
- Juego de roles con agentes, ensayo de escenarios entre partes, «qué haría el contratista si…»: **cero**.
- Información privada y asimetrías como motor de una simulación: **cero**.
- Resolver la visibilidad entre actores («quién se entera de qué») y leer brechas de percepción: **cero**.
- Convertir una simulación en un informe honesto (sin vender predicción): **cero**.

La app se construye sobre ese hueco. La herramienta Claude Code, el juicio de expertos y la negociación se
**enlazan** a sus apps en una frase y no se repiten.

## La idea que ordena la app

> **No predices lo que harán los demás: lo ensayas, con lo que cada uno sabe, y miras dónde se rompe.**

El valor no está en «acertar el futuro» sino en descubrir, antes de mandar la carta, la reacción que no
viste venir, el flanco propio que otro va a usar y la brecha entre lo que tú crees de tu riesgo y lo que
creen los demás. Por eso la app recorre un camino en tres partes:

1. **El motor**: qué es MiroFish, por qué se puede replicar en Claude Code y cómo (áreas 1 y 2).
2. **El oficio**: semilla, actores, consignas, resolución, corrida, lectura e informe (áreas 3 a 9).
3. **La práctica**: casos de obra, otros usos, rigor, combinaciones y el especialista (áreas 10 a 14).

Filtro de cada lección: *¿qué sabe este actor que los demás no, y qué haría con eso?*

## Desde qué silla se aprende

El usuario es **ingeniero supervisor de obra pública** que ya usa Claude Code a diario. La voz principal
es la del **orquestador**: quien arma el mundo, decide qué pasa entre rondas y responde por el informe.
Cada lección técnica muestra también la silla del actor (cómo razona un contratista, una Entidad, un OCI)
para que el usuario diseñe perfiles que no sean caricaturas.

## Fronteras explícitas (no duplicar)

| Tema | Aquí | Se enlaza a |
|---|---|---|
| Instalar y usar Claude Code, subagentes y skills en general | Solo lo que la simulación necesita | Claude Code Experto, Agentes IA Experto |
| Juicio de expertos, Delphi, experto sintético, calibración | Solo para distinguirlo de simular actores | Decisiones PRO, Jev PRO |
| Técnicas de negociación | Solo como caso de uso de la simulación | Negocia PRO |
| Mapa de actores y matriz poder-interés | Como paso previo a elegir actores | Planifica PRO, Gobierna PRO |
| Plazo, ruta crítica, what-if de retrasos | Solo para contrastar lo que un actor promete | Ruta Crítica PRO, Planifica PRO |
| Registro y tratamiento de riesgos | Solo cómo pasa un hallazgo al registro | Riesgos Obra PRO |
| Redacción de informes y cartas reales | Solo el informe de la simulación | Informe Obra PRO, Redacción PRO |

## Estructura propuesta: 14 áreas / 82 lecciones

### 1. 🐟 Qué es MiroFish (6)
- `que-es-mirofish` — Motor de predicción multiagente de código abierto: subes una semilla, describes la
  pregunta y recibes un mundo paralelo con un informe.
- `inteligencia-de-enjambre` — De un modelo que opina a muchos agentes que interactúan: qué es la emergencia
  y qué da que un solo prompt no da.
- `los-cinco-pasos-de-mirofish` — Grafo, entorno, simulación, informe e interacción profunda: el flujo que
  todo el curso replica.
- `oasis-camel-y-zep` — Las piezas por dentro: el simulador social OASIS (CAMEL-AI), la memoria en Zep
  Cloud y el grafo de conocimiento (versiones y datos solo desde `INV-MIROFISH.md`).
- `instalar-mirofish-y-lo-que-cuesta` — Requisitos, `.env` con la clave del modelo y de Zep, interfaz en
  español, puertos, y por qué cada corrida consume API (método para estimar el costo, sin precios).
- `que-predice-y-que-no` — Narrativa plausible de actores, sí; plazo, costo y ruta crítica, no: para eso MS
  Project y la curva S.

### 2. 🤖 Claude Code como motor de simulación (6)
- `por-que-claude-code-y-no-la-api` — El mismo método sin API de pago: pocos actores ricos con información
  privada frente a miles de agentes simples.
- `un-subagente-un-actor` — Contexto aislado: por qué cada actor es un subagente propio y no un personaje
  dentro de un solo chat.
- `el-orquestador-vista-de-dios` — La sesión principal ve todo, decide qué pasa y quién se entera.
- `paralelo-y-segundo-plano` — Todos los actores de una ronda en un mensaje, esperar las notificaciones sin
  sondear, límites de sesión y cómo recuperar un agente caído.
- `archivos-como-memoria-del-mundo` — Dossier, perfiles, rondas y contextos: el disco como estado del mundo y
  como memoria entre sesiones.
- `el-skill-mirofish` — `/mirofish`: qué hace solo, qué te pregunta y cómo se mejora con cada corrida.

### 3. 🌱 La semilla: el dossier común (5)
- `que-va-en-el-dossier` — Seis bloques: obra, historia, evento, hechos técnicos, reglas y puntos débiles
  visibles.
- `hechos-con-fuente` — Extraer de informes, cartas, cuaderno y resoluciones; el MCP de expedientes; cifras
  exactas con su documento.
- `el-evento-que-dispara` — Un solo hecho concreto e inyectable; ejemplos buenos y malos.
- `puntos-debiles-visibles` — Lo que cualquier actor atento usaría contra otro: sin esto no hay conflicto.
- `datos-personales-y-confidencialidad` — Roles, no nombres; nada de DNI ni sueldos; qué cambia si el texto
  sale a una API externa.

### 4. 🎭 Diseñar actores creíbles (7)
- `elegir-los-actores` — De 3 a 6: quién decide, quién puede bloquear, quién tiene la información; cuándo
  sumar un actor colectivo.
- `anatomia-de-un-perfil` — Quién eres, qué quieres, qué temes, qué sabes y otros no, qué puedes hacer.
- `la-informacion-privada-es-el-motor` — Sin asimetrías todos llegan a la misma conclusión; cómo se siembra
  una asimetría útil.
- `hipotesis-de-simulacion` — Lo no verificado se marca; cómo elegir la hipótesis que vale la pena probar.
- `palancas-reales-de-cada-actor` — Lo que de verdad puede hacer la Entidad, el contratista, la supervisión,
  el control y los proveedores.
- `el-actor-colectivo` — Vecinos, trabajadores, prensa y redes en un solo agente: voces, clima y acciones
  colectivas.
- `actores-demasiado-razonables` — El sesgo complaciente de los modelos: pedir estrategia agresiva sin
  caricatura y sin fabricar documentos.

### 5. ✍️ La consigna de cada ronda (6)
- `anatomia-de-la-consigna` — Archivos permitidos, ventana de fechas, situación, decisión central, formato y
  archivo de salida.
- `la-decision-central` — Por qué «qué entregas el día 12» rinde más que «qué haces»; ofrecer opciones sin
  empujar ninguna.
- `formato-exacto-y-limite` — Secciones fijas y tope de palabras: respuestas comparables y fáciles de
  resolver.
- `reglas-condicionales` — «Si … → …»: el actor decide ante lo que no sabe y te ahorra rondas.
- `numeros-e-indicadores` — Probabilidades propias de la ronda y la línea fija de indicadores que alimenta
  el gráfico.
- `lo-que-el-actor-no-debe-ver` — Aislamiento: rutas absolutas, carpetas prohibidas y cómo detectar una fuga
  de información.

### 6. ⚖️ La resolución «vista de dios» (6)
- `que-hace-el-orquestador-entre-rondas` — Leer todo, decidir qué pasó, fecharlo y etiquetar quién lo ve.
- `quien-se-entera-de-que` — Carta y copias, cuaderno de obra, memorando interno, control, proveedores, lo
  público.
- `acciones-incompatibles` — Decide quien tiene la competencia; los plazos burocráticos se cumplen tarde más
  a menudo que a tiempo.
- `terceros-y-resultados-simulados` — Asesoría jurídica, laboratorios, clima: decidir de forma plausible y
  marcarlo siempre.
- `avanzar-el-reloj` — Ventanas de tiempo, saltos entre rondas y cuándo sale un actor.
- `la-rama-de-estres` — Un resultado adverso plausible para ver dónde se rompe el sistema.

### 7. 🔄 Una corrida de principio a fin (6)
- `arrancar-la-simulacion` — Las cuatro cosas que pide el skill (fuente, evento, pregunta y horizonte,
  perspectiva) y cómo contestarlas bien.
- `el-caso-json` — Actores, indicadores y plan de rondas en un solo archivo.
- `lanzar-y-esperar-una-ronda` — El mensaje con N subagentes, las notificaciones y qué revisar cuando llegan.
- `armar-contextos` — El script que convierte la resolución en lo que sabe cada actor; errores típicos de
  visibilidad.
- `cuando-algo-sale-mal` — Actor fuera de personaje, formato roto, agente caído por límite de sesión:
  relanzar solo lo necesario.
- `cuanto-cuesta-una-corrida` — Subagentes por corrida, cuota del plan, modelo para los actores y cómo
  ahorrar sin perder calidad.

### 8. 📊 Leer lo que salió (6)
- `de-respuestas-a-cronologia` — Ordenar hechos y decisiones en una línea de tiempo.
- `brechas-de-percepcion` — El hallazgo más valioso: lo que un actor cree de su propio riesgo frente a lo
  que creen los demás.
- `puntos-de-quiebre` — La decisión o el hecho a partir del cual el caso cambió de rumbo.
- `convergencias-y-divergencias` — Lo que todos vieron venir y lo que solo uno vio.
- `el-grafico-de-indicadores` — Leerlo sin sobreinterpretarlo: juicios declarados, no frecuencias.
- `una-corrida-no-es-una-distribucion` — Variabilidad entre corridas, ramas y cuándo repetir.

### 9. 📝 El informe y la conversación con el mundo simulado (6)
- `estructura-del-informe` — De la respuesta corta al anexo: las nueve secciones y para qué sirve cada una.
- `recomendaciones-que-se-pueden-hacer` — Esta semana, dos semanas, hacia el cierre; con responsable.
- `limitaciones-honestas` — Lo que el informe debe decir de sí mismo para que se le crea.
- `entrevistar-a-un-actor` — Preguntarle en personaje, solo con lo que conoció.
- `preguntar-al-mundo` — Preguntas al orquestador: por qué se cayó el acuerdo, qué habría cambiado.
- `ramas-y-si` — Cambiar un hecho, volver a correr desde una ronda y comparar con la corrida base.

### 10. 🏗️ Casos de obra pública (7)
Todos ficticios (Municipalidad Distrital de Villa Esperanza, Consorcio Andino, Consorcio Supervisor
Horizonte). Cada caso: evento, actores con su información privada, qué pasó ronda a ronda, qué se aprendió.
- `caso-valorizacion-diferida` — La supervisión difiere parte de la última valorización hasta que lleguen
  los ensayos (estructura tomada de la corrida real de la Val 09, con datos ficticios).
- `caso-ampliacion-denegada` — La Entidad deniega una ampliación de plazo y el contratista amenaza con
  controversia.
- `caso-adicional-y-paralizacion` — Un adicional sin expediente aprobado paraliza un frente.
- `caso-bloqueo-vecinal` — El cierre de una vía lleva a los vecinos a bloquear el acceso a la obra.
- `caso-alza-del-acero` — Sube el precio del acero a mitad de obra: contratista, proveedores y Entidad.
- `caso-cambio-de-gestion` — Nueva gestión en la Entidad a mitad de la ejecución.
- `caso-hito-de-control-concurrente` — El OCI llega en el hito de recepción: quién se protege y cómo.

### 11. 🧭 Más allá de la obra (4)
- `simular-una-negociacion` — Tu alternativa frente a la del otro, ensayada antes de sentarte (enlaza a
  Negocia PRO).
- `simular-una-licitacion` — Competidores, comité y consultas: anticipar observaciones y ofertas.
- `simular-la-reaccion-publica` — La capa de redes: cuándo sí conviene MiroFish original con cientos de
  agentes.
- `simular-una-decision-de-gestion` — Autoridad, asesores y operadores políticos (enlaza a Gobierna PRO).

### 12. 🛡️ Rigor, ética y límites (6)
- `ensayo-no-profecia` — Ni predicción ni asesoría legal: cómo decirlo sin quitarle valor.
- `normas-por-su-nombre` — Ningún actor cita artículos inventados; la coletilla obligatoria.
- `nada-fabricado` — Documentos, ensayos y decisiones de terceros: siempre marcados como simulados.
- `documento-interno` — Por qué el informe no se mezcla con lo que se envía a la Entidad.
- `contrastar-con-la-realidad` — Anotar qué predijo cada actor y comparar cuando ocurra (enlaza a Jev PRO y
  Decisiones PRO para calibración).
- `cuando-no-simular` — Cuando la respuesta es un cálculo, una norma clara o no hay decisión en juego.

### 13. 🧰 Combinar con tus otras herramientas (5)
- `con-ms-project` — Los días que un actor promete, contra la ruta crítica (what-if de retrasos).
- `con-delphi-y-jev` — Juicio de expertos y experto sintético frente a actores simulados: cuándo usar cada
  uno.
- `con-la-curva-s-y-las-valorizaciones` — La caja del contratista como motor de sus decisiones.
- `con-el-analisis-de-riesgos` — De un hallazgo de la simulación a una fila del registro de riesgos.
- `con-tus-informes` — Qué pasa de la simulación a un informe real y qué no pasa nunca.

### 14. 🏆 El simulador destacado (6)
- `tu-biblioteca-de-casos` — Guardar cada corrida con lo que pasó después para aprender de tus propias
  predicciones.
- `mejorar-tu-skill` — Cada corrida deja una lección en `lecciones.md`.
- `presentar-una-simulacion` — A tu jefe o a la Entidad sin prometer ni asustar.
- `el-perfil-del-simulador` — Qué sabe, qué pregunta y qué no hace.
- `decalogo-del-simulador` — Diez reglas para ensayar el futuro sin engañarte.
- `examen-integrador` — Un caso completo: dossier, actores, dos rondas resueltas y el informe.

## Herramientas propias (propuestas)

1. **Armador de perfiles** (`perfil.html`): formulario con los cinco campos del perfil por actor (A1…A6).
   Avisa si «lo que sabes y otros no» está vacío o si hay afirmaciones sin marcar como hipótesis. Copia el
   Markdown al portapapeles, listo para `perfiles/A{k}.md`.
2. **Generador de consignas** (`consigna.html`): elige ronda y actor, llena situación, decisión central y
   secciones del formato; produce el prompt completo con los bloques fijos (archivos permitidos,
   aislamiento, reglas, línea de indicadores) para pegarlo en Claude Code.
3. **Tablero de visibilidad** (`visibilidad.html`): se escriben los hechos de una resolución y se marca con
   casillas quién ve cada uno. Genera las líneas `- fecha [A1 A3] hecho` y una vista previa de lo que sabrá
   cada actor. Motor puro en `tools.js` (misma lógica que `armar_contextos.py`), probado con node.
4. **Graficador de indicadores** (`indicadores.html`): se pegan las líneas `**Indicadores:**` de las
   respuestas y dibuja en SVG la evolución por actor y por ronda, con la brecha de percepción resaltada.
   Reutiliza el motor de gráficos SVG heredado.
5. **Checklist** (`checklist.html`): antes de lanzar (dossier, perfiles, `caso.json`); en cada ronda
   (formato, aislamiento, resultados simulados marcados); antes de entregar el informe (limitaciones,
   coletilla, documento interno).
6. **Plantillas** (`plantillas.html`): dossier, perfil, consigna de ronda 1, consigna de ronda n,
   resolución, informe, entrevista, actor colectivo y rama «¿y si…?», tomadas de
   `_fuentes\skill-mirofish\reference\plantillas.md`.
7. **Glosario** (`glosario.html`): unos 55 términos (enjambre, emergencia, OASIS, CAMEL, Zep, GraphRAG,
   semilla, persona, orquestador, vista de dios, subagente, skill, contexto, visibilidad, rama de estrés,
   brecha de percepción, hipótesis de simulación…).

Se eliminan las herramientas heredadas de la app fuente que no aplican (en Ruta Crítica PRO: `cpm.html`,
`impacto.html`, `registro.html`, `dias.html`) y sus datos, pero se reaprovecha su motor de gráficos SVG.

## Fuentes

Todo en `_fuentes\` (se usa como ancla; **no se empaqueta en el APK**). Ver `_fuentes\LEEME.md`.

- `skill-mirofish\`: copia del skill `/mirofish` al 28/09/2026 (SKILL.md, plantillas, lecciones y los cuatro
  scripts). Es la fuente del método: áreas 2 a 9 y las herramientas.
- `caso-real-val09-arriola\`: la primera corrida real completa (dossier, 5 perfiles, 17 respuestas, 3
  resoluciones, informe Word). **Contiene datos reales de una obra**: sirve solo como estructura y nivel de
  detalle; en las lecciones se reescribe con datos ficticios.
- `mirofish-repo\`: README del repositorio MiroFish (inglés y chino) y la plantilla semilla de obra.
- `notas-instalacion-mirofish.md`: lo aprendido al instalarlo (claves, modelo, idioma, reinicio del
  backend).
- **Investigación que se hace al construir** (agentes de investigación, resultado en `_brief\`):
  - `INV-MIROFISH.md`: qué hace MiroFish y cómo (del código en `D:\MiroFish` y del repositorio), versiones
    de OASIS/CAMEL/Zep, licencia, requisitos y costos por concepto. Cada dato marcado «verificado» o
    «no verificado», con fecha.
  - `INV-CLAUDECODE.md`: subagentes, ejecución en segundo plano, skills, límites de sesión y modelos, contra
    la documentación vigente de Claude Code.
  - `INV-SIMULACION-LLM.md`: qué dice la literatura sobre simular personas y grupos con modelos de lenguaje
    (agentes generativos, sesgos, validez), solo con referencias verificadas.

## Rigor

1. **Ensayo, no profecía.** Ninguna lección presenta una simulación como predicción. Las probabilidades de
   los agentes son juicios declarados, no frecuencias; una corrida no es una distribución.
2. **Normas solo por su nombre**, nunca con número de artículo, numeral o cláusula, con la coletilla
   obligatoria **«verificar la norma vigente y el expediente técnico aprobado»**.
3. **Nunca prometer** el resultado de una valorización, un adicional, una ampliación, un arbitraje o una
   acción de control.
4. **Nada fabricado.** Ningún ejemplo muestra a un actor inventando un documento; los resultados de
   ensayos y las decisiones de terceros aparecen siempre como «resultado simulado».
5. **Casos ficticios.** La obra real de la Val 09 no se cita con sus nombres, montos ni CUI.
6. **Datos de MiroFish y de Claude Code** (versiones, dependencias, comandos exactos, límites) solo desde
   `INV-MIROFISH.md` e `INV-CLAUDECODE.md`, con «verificar en la documentación vigente»: ambos cambian
   rápido.
7. **Sin precios** de API ni de planes: se enseña el método para estimar el consumo, no la cifra.
8. **Datos personales:** los ejemplos usan roles, nunca nombres de personas reales.

## Identidad visual (a definir al construir)

Propuesta de ícono: un pez formado por nodos blancos conectados (el enjambre de agentes), con un nodo coral
más grande que hace de orquestador, sobre un degradado azul océano (#1b6ca8 → #0b2545), acento coral
#ff7a59. Ninguno de esos tres colores aparece en `v_puertos.icono_colores` al 28/09/2026. Glifo nuevo
`enjambre` (script local `make_icon_mirofish.py`, no en el compartido). Confirmar colores al construir.

## Consumo estimado (para elegir cuándo construirla)

Estimado por comparación con Ruta Crítica PRO (82 lecciones: 28 lotes de subagentes + 4 de herramientas +
2 de investigación, sobrevivió a un corte de sesión):

- **Plan base:** unos 35 subagentes (3 de investigación, ~28 lotes de 2 a 3 lecciones, 3 a 4 de
  herramientas) más el trabajo del hilo principal (catálogo, lección modelo, área 14, build e instalación).
  Conviene empezar con la cuota completa del plan y aceptar que pueda partirse en dos sesiones.
- **Opcional, más material real:** antes de escribir el área 10, correr con `/mirofish` una o dos
  simulaciones ficticias completas (unos 15 a 18 subagentes cada una) y guardarlas en
  `_fuentes\casos-ficticios\`. Da ejemplos auténticos de respuestas y resoluciones, pero duplica el consumo
  de esa etapa. Si la cuota es justa, se omite y el área 10 se escribe desde la corrida real reescrita.

## Proceso de construcción (cuando se apruebe)

1. Abrir Claude Code en `D:\MiroFish PRO` y decir **«construye MiroFish PRO»** (el `CLAUDE.md` de esta
   carpeta orienta a la sesión).
2. `apps_db.py planear "simulación de actores MiroFish Claude Code"` para confirmar puerto, app fuente y
   gotchas vigentes (si 9050 ya no está libre, reservar otro y corregir este plan y `ports.md`).
3. Clonar con `clone_app.ps1` desde la última app de la cadena. El script excluye `PLAN.md`, `CLAUDE.md`,
   `README.md`, `_brief` y `_fuentes`, así que este plan no se sobrescribe. Revisar el listado de la carpeta
   tras clonar y borrar la herencia pesada (videos, fuentes, scripts de la app fuente).
4. Lanzar primero los tres agentes de investigación (`INV-MIROFISH.md`, `INV-CLAUDECODE.md`,
   `INV-SIMULACION-LLM.md`).
5. Catálogo, `_brief\brief.md`, anclas por lección y una lección modelo escrita por el orquestador.
6. Motor de visibilidad y de gráfico de indicadores en `tools.js`, probado con node, antes de las lecciones.
7. Lecciones con subagentes: 2 a 3 por agente y unos 5 en vuelo, un lote nuevo por cada notificación. El área
   14 la escribe el orquestador (necesita ver todo el catálogo).
8. Herramientas, `validate_lessons.js` (`problemas=0 faltantes=0 huerfanos=0`), compilación, ícono,
   instalación y verificación en el Honor ABR-LX3.
9. Cierre: `ports.md` a HECHA, fila en `LINAJE` de `apps_db.py`, `apps_db.py construir && indexar`, nota en
   la memoria del proyecto y en `PENDIENTES-APPS.md`.

## Decisión pendiente

- **Nombre:** «MiroFish PRO» dice exactamente de qué va, pero MiroFish es un proyecto de terceros
  (licencia AGPL-3.0). Para uso personal no hay problema; si algún día la app se publica, conviene
  **«Simula PRO»** o **«Escenarios PRO»**. Cambiar el nombre no cambia puerto ni carpeta si se decide antes
  de clonar.
- Aprobar o ajustar las 14 áreas y las 7 herramientas; en particular, si el área 11 («Más allá de la obra»)
  se queda o se reparte.
- Decidir si se corren las simulaciones ficticias de apoyo para el área 10 (más material, más consumo).
- Orden frente a **Excel PRO**, que sigue en la cola desde el 2026-08-22.
