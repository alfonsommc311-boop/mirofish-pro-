# MiroFish PRO — instrucciones para la sesión que la construya

Esta carpeta contiene el plan de una app formativa Android de la familia "Experto/PRO": **Simulación de actores con Claude Code, al estilo MiroFish**. **Lee `PLAN.md` completo antes de tocar nada** y construye con el skill `app-formativa-flutter`.

## Identidad ya decidida (no cambiar sin consultar)
- Nombre visible: **MiroFish PRO** (pendiente de confirmar; alternativa «Simula PRO») · carpeta `D:\MiroFish PRO` (ASCII, sin tildes).
- Puerto **9050** (reservado en `ports.md` el 2026-09-28), applicationId `com.alfonso.mirofishpro`, prefijo de storage `mfp`.
- Clon de la última app de la cadena al momento de construir (al planear: **Ruta Crítica PRO**, `D:\Ruta Critica PRO`, puerto 9049). Confírmalo con `apps_db.py planear`.

## Reglas del proyecto
- Idea que ordena la app: **no predices lo que harán los demás: lo ensayas, con lo que cada uno sabe, y miras dónde se rompe.**
- Voz principal: la del **orquestador** (el usuario, supervisor de obra pública que ya usa Claude Code), mostrando siempre también la silla del actor.
- El método se enseña tal como está en `_fuentes\skill-mirofish\` (el skill `/mirofish`); si el skill vivo en `~/.claude/skills/mirofish/` cambió desde la copia, manda el vivo: compara ambos antes de redactar.
- No duplicar: Claude Code en general está en Claude Code Experto y Agentes IA Experto; Delphi y el experto sintético en Decisiones PRO y Jev PRO; la negociación en Negocia PRO; el plazo en Ruta Crítica PRO. Aquí solo se enlazan en una frase.
- Ensayo, no profecía: ninguna lección vende la simulación como predicción; las probabilidades de los agentes son juicios declarados.
- Normas peruanas solo por su nombre, con «verificar la norma vigente y el expediente técnico aprobado». Nunca prometer resultados de valorizaciones, adicionales, ampliaciones, arbitrajes ni del control.
- Datos de MiroFish y de Claude Code (versiones, comandos exactos, límites) solo desde `_brief\INV-MIROFISH.md` e `_brief\INV-CLAUDECODE.md`, con «verificar en la documentación vigente». Sin precios de API ni de planes.
- Casos ficticios (Municipalidad Distrital de Villa Esperanza, Consorcio Andino, Consorcio Supervisor Horizonte). La corrida real de `_fuentes\caso-real-val09-arriola\` solo como estructura: nunca sus nombres, montos ni CUI.
- Fuentes propias en `_fuentes\` (no se empaquetan en el APK).
- Scripts de Python en archivos, no en `python -c`.

## Al terminar
`ports.md` a HECHA, fila en `LINAJE` de `apps_db.py` (`"mirofishpro": ("<slug de la app fuente>", "<fecha>")`), `apps_db.py construir` e `indexar`, entrada en `PENDIENTES-APPS.md` marcada como hecha, y nota en la memoria del proyecto.
