# Brief para subagentes redactores de lecciones (MiroFish PRO)

Lee, en este orden: `CLAUDE.md`, `PLAN.md` (sobre todo la entrada de tu lección en «Estructura propuesta»),
`_brief/INV-MIROFISH.md`, `_brief/INV-CLAUDECODE.md`, `assets/web/assets/catalog.js` (tu id, título, area, areaIcon)
y la lección modelo `assets/web/lessons/que-es-mirofish.js` (nivel de detalle y formato).

Escribe cada lección con Write en `assets/web/lessons/<id>.js` (rutas relativas a la carpeta `mirofish-pro/`).

## Formato
Una sola llamada `Lesson.start({...})` con: id, area, areaIcon (EXACTOS del catálogo), icon, title, subtitle, norma
(una frase), intro (HTML 3-5 frases), sections (4 a 6, cada una {h, html}), keypoints (5-6), flashcards (4-5 {q,a}),
quiz (3-4 {q, opts[3], correct 0-based, why}). Opcional: `formulas: ['...']`.
JS válido, comillas simples, escapar apóstrofes (\'), NADA de comillas curvas. HTML permitido: p b i ul ol li table tr th td span class="hl" br.

## Voz y rigor (obligatorio)
- Voz del orquestador (ingeniero supervisor de obra pública que ya usa Claude Code); muestra también la silla del actor.
- Idea rectora: no predices, ensayas con lo que cada uno sabe y miras dónde se rompe. Nunca vendas la simulación como predicción; las probabilidades de los agentes son juicios declarados.
- Normas peruanas solo por su nombre, sin número de artículo, con «verificar la norma vigente y el expediente técnico aprobado». Nunca prometer resultados de valorizaciones, adicionales, ampliaciones, arbitrajes ni control.
- Datos de MiroFish y Claude Code (versiones, comandos, límites) solo desde los INV, con «verificar en la documentación vigente». Lo marcado [no verificado] no se afirma. Sin precios de API ni planes.
- Casos ficticios: Municipalidad Distrital de Villa Esperanza, Consorcio Andino, Consorcio Supervisor Horizonte. Roles, nunca nombres de personas. Nada de datos reales de obra.
- Ningún ejemplo muestra a un actor inventando un documento; resultados de ensayos/decisiones de terceros = «resultado simulado».
- No dupliques otras apps: enlaza en una frase (Claude Code Experto, Agentes IA Experto, Decisiones PRO, Jev PRO, Negocia PRO, Ruta Crítica PRO, Planifica PRO, Riesgos Obra PRO, Informe Obra PRO).
- Incluye al menos un ejemplo concreto (texto de perfil, consigna, línea de indicadores, tabla) cuando aplique. Explica el porqué.
- No inventes detalles del skill /mirofish más allá de lo que dice PLAN.md.

## Al terminar
Ejecuta `cd assets/web && node ../../scripts/validate_lessons.js` y corrige los WARN de TUS archivos (los faltantes de otros ids son normales).
Devuelve solo la lista de archivos creados.
