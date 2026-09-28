# INV-CLAUDECODE: Claude Code para orquestar simulaciones multi-actor con subagentes

Fecha de consulta: 2026-09-28. Fuentes: https://code.claude.com/docs/en/sub-agents, https://code.claude.com/docs/en/skills, https://code.claude.com/docs/en/memory (leídas con WebFetch) y una búsqueda web (WebSearch, fuentes secundarias).
Marcas: [verificado: URL] = leído en la doc oficial; [no verificado] = no confirmado en doc oficial (blogs, memoria propia o no encontrado).
Sin precios ni planes.

## 1. Subagentes: qué son y contexto aislado
- Los subagentes son archivos Markdown con frontmatter YAML. [verificado: https://code.claude.com/docs/en/sub-agents]
- Ubicaciones: `.claude/agents/` (proyecto), `~/.claude/agents/` (usuario), managed settings, flag `--agents` (solo sesión) y carpetas `agents/` de plugins. [verificado: https://code.claude.com/docs/en/sub-agents]
- Cada subagente (no fork) arranca limpio con este contexto:
  - su system prompt (el cuerpo del .md);
  - el mensaje de tarea de quien lo lanza;
  - los CLAUDE.md (salvo `omitClaudeMd: true`);
  - un snapshot de git status;
  - las skills precargadas con `skills:`.
  [verificado: https://code.claude.com/docs/en/sub-agents]
- NO recibe: el historial de conversación, los ajustes de output style, la auto memory de la conversación principal ni los archivos leídos antes. Todo lo que necesite debe ir en el prompt de tarea o en disco. [verificado: https://code.claude.com/docs/en/sub-agents]
- Hay un "roster" de agentes hermanos si `SendMessage` está disponible. [verificado: https://code.claude.com/docs/en/sub-agents]

## 2. Herramienta Agent y tipos
- La herramienta "Task" se renombró a "Agent" en la v2.1.63. Las referencias `Task(...)` siguen funcionando como alias. [verificado: https://code.claude.com/docs/en/sub-agents]
- Tipos integrados:
  - Explore: solo lectura, rápido, omite CLAUDE.md y git status.
  - Plan: solo lectura, para plan mode.
  - General-purpose: todas las herramientas, para tareas multipaso.
  [verificado: https://code.claude.com/docs/en/sub-agents]
- Campos de frontmatter: `name` y `description` son obligatorios. Los opcionales incluyen `tools`, `disallowedTools`, `model`, `permissionMode`, `maxTurns`, `skills`, `memory`, `background`, `omitClaudeMd`, `isolation: worktree`, `effort`, `mcpServers`, `hooks`, `initialPrompt`, `color`. [verificado: https://code.claude.com/docs/en/sub-agents]
- Se invocan por delegación automática (según `description`), con @-mention `@"nombre (agent)"`, o con `claude --agent nombre` para toda la sesión. [verificado: https://code.claude.com/docs/en/sub-agents]
- Herramientas que siempre se quitan a un subagente: `Agent`, `AskUserQuestion`, `EnterPlanMode`, `ExitPlanMode`, `ScheduleWakeup`, `Workflow`, entre otras. [verificado: https://code.claude.com/docs/en/sub-agents]
- Para dar contexto de "actor" a cada subagente, el patrón natural es un system prompt por rol (archivo .md por actor) o un prompt de tarea con la ficha del actor. Es una inferencia de diseño, no una receta oficial. [no verificado]

## 3. Ejecución en segundo plano y notificaciones
- En sesión interactiva el "fork mode" viene activo por defecto y los subagentes corren en segundo plano. Fork mode está desactivado en modo no interactivo (`-p`) y en el Agent SDK, salvo que se active. [verificado: https://code.claude.com/docs/en/sub-agents]
- `background: true` en el frontmatter fuerza segundo plano. `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS=1` fuerza primer plano. [verificado: https://code.claude.com/docs/en/sub-agents]
- El resultado llega como notificación de finalización en un turno posterior. Claude espera esa notificación antes de reportar. Si se pregunta el progreso antes, informa que sigue en ejecución. [verificado: https://code.claude.com/docs/en/sub-agents]
- Los subagentes en segundo plano conservan un set reducido de herramientas: Read, Grep, Glob, Bash, Edit, Write, WebFetch, WebSearch, Skill, SendMessage, Monitor, TaskStop, entre otras. [verificado: https://code.claude.com/docs/en/sub-agents]
- Los de segundo plano auto-deniegan lo que pediría permiso y no ya concedido. Esto proviene de una fuente secundaria. [no verificado]
- Un subagente terminado devuelve un agent ID y se puede reanudar con `SendMessage` conservando su historial. Explore y Plan son one-shot y no se reanudan. [verificado: https://code.claude.com/docs/en/sub-agents]

## 4. Varios subagentes en paralelo
- Para investigaciones independientes, la doc indica lanzar varios subagentes a la vez y que Claude sintetiza los resultados. [verificado: https://code.claude.com/docs/en/sub-agents]
- Límite de concurrencia por defecto: 20 simultáneos. Al superarlo falla con `Concurrent subagent limit reached`. Es configurable con `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`. [verificado: https://code.claude.com/docs/en/sub-agents]
- Profundidad máxima de anidación: 3 niveles por debajo de la conversación principal (por defecto), configurable con `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH`. [verificado: https://code.claude.com/docs/en/sub-agents]
- Tope de 200 subagentes lanzados por sesión (contando anidados, forks y reanudaciones). Solo aparece en una fuente secundaria; la página oficial consultada no lo declara. [no verificado]
- Para muchos actores (más de 20), toca lanzarlos por oleadas o rondas. Es una consecuencia del límite de concurrencia. [verificado: https://code.claude.com/docs/en/sub-agents]

## 5. Skills (SKILL.md e invocación)
- Estructura: carpeta con `SKILL.md` obligatorio (frontmatter YAML y luego instrucciones en Markdown), más archivos de apoyo opcionales (reference.md, scripts/). [verificado: https://code.claude.com/docs/en/skills]
- Ubicaciones: personal `~/.claude/skills/<nombre>/SKILL.md`, proyecto `.claude/skills/<nombre>/SKILL.md`, anidada en subdirectorios y enterprise. [verificado: https://code.claude.com/docs/en/skills]
- Invocación: `/nombre` o `/nombre argumentos`. El nombre sale de `name` o, si falta, del directorio. [verificado: https://code.claude.com/docs/en/skills]
- Campos útiles: `description`, `disable-model-invocation`, `user-invocable`, `allowed-tools`, `context: fork` (corre la skill en un subagente aislado), `agent` (Explore, Plan, general-purpose o custom), `paths`, `arguments`. [verificado: https://code.claude.com/docs/en/skills]
- Sustituciones: `$ARGUMENTS`, `$0`, `$1`, argumentos con nombre, `${CLAUDE_SKILL_DIR}`. Los comandos con backtick precedidos de `!` se ejecutan antes de que Claude lea la skill. [verificado: https://code.claude.com/docs/en/skills]
- Una skill con `context: fork` y `agent:` es una vía para que `/simular` lance un actor aislado. [verificado: https://code.claude.com/docs/en/skills]
- Un subagente puede precargar skills con el campo `skills:`. [verificado: https://code.claude.com/docs/en/sub-agents]

## 6. Modelo por subagente y límites
- Orden de resolución del modelo:
  1. parámetro `model` en la invocación;
  2. `model` del frontmatter;
  3. variable `CLAUDE_CODE_SUBAGENT_MODEL`;
  4. modelo de la conversación principal.
  [verificado: https://code.claude.com/docs/en/sub-agents]
- Alias vistos en la doc: `sonnet`, `opus`, `haiku`, `fable`, IDs completos y `inherit`. `CLAUDE_CODE_SUBAGENT_MODEL_FORCE=1` fuerza el modelo para todos. [verificado: https://code.claude.com/docs/en/sub-agents]
- `maxTurns` corta al subagente tras N turnos y marca la salida como parcial. [verificado: https://code.claude.com/docs/en/sub-agents]
- Idea de diseño: modelo barato para actores menores y uno fuerte para el moderador o analista. Es una recomendación, no una cita. [no verificado]
- Límites de uso de la cuenta (ventanas, tope por periodo): no se consultaron ni se citan. [no verificado]

## 7. El disco como memoria
- Cada sesión empieza con contexto fresco. Dos mecanismos persisten conocimiento: archivos CLAUDE.md (instrucciones escritas por la persona) y auto memory (notas que Claude escribe). [verificado: https://code.claude.com/docs/en/memory]
- Los subagentes pueden tener memoria persistente con `memory: user | project | local`, en `~/.claude/agent-memory/<nombre>/`, `.claude/agent-memory/<nombre>/` o `.claude/agent-memory-local/<nombre>/`. Se antepone `MEMORY.md` (primeras 200 líneas o 25KB). [verificado: https://code.claude.com/docs/en/sub-agents]
- Los subagentes disponen de Write/Edit (según permisos y tools). La doc consultada no dice explícitamente que compartan disco con la sesión principal. En la práctica lo comparten porque es el mismo sistema de archivos; `isolation: worktree` los aísla en un git worktree. [no verificado] para la parte "en la práctica"; `isolation: worktree` [verificado: https://code.claude.com/docs/en/sub-agents]
- Patrón recomendado (diseño propio): un archivo de estado por actor y un log de turnos en disco. Cada subagente lee su ficha y el estado, escribe su acción, y el orquestador consolida. Así se evita depender del contexto, que no se hereda. [no verificado]
- Cuidado con escrituras concurrentes al mismo archivo: usar un archivo por actor. [no verificado]

## 8. Qué NO afirmar en lecciones (datos que cambian rápido)
- Cifras de límites: 20 concurrentes, profundidad 3, 200 por sesión. Son valores por defecto configurables y pueden cambiar. Decir "hay un límite de concurrencia configurable".
- Nombres y alias de modelos (`fable`, IDs completos) y cuál es el modelo por defecto. No fijar nombres.
- El número de versión del renombre Task a Agent (2.1.63) y el nombre exacto de la herramienta a futuro.
- Que fork mode sea el comportamiento por defecto. Depende de modo interactivo, `-p` o SDK, y ha cambiado.
- Lista exacta de herramientas disponibles en segundo plano y de las que se quitan siempre.
- Nombres exactos de campos de frontmatter (`omitClaudeMd`, `initialPrompt`, `experimental.*`) y de variables de entorno.
- Límites de uso de cuenta, ventanas y topes: no se verificaron y cambian con frecuencia.
- Ubicaciones y tamaños de memoria (200 líneas o 25KB).
- Cualquier afirmación de blogs (claudefa.st, inventivehq, etc.) sin respaldo en code.claude.com.
- Recomendar siempre revisar https://code.claude.com/docs antes de enseñar un dato concreto.
