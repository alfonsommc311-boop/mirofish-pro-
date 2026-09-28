# MiroFish PRO

App formativa Android (Flutter WebView + TTS, offline) sobre **simulación de actores con Claude Code**, al estilo MiroFish.
Puerto 9050 · `com.alfonso.mirofishpro` · prefijo de storage `mfp`. 14 áreas, 82 lecciones.

- `PLAN.md` / `CLAUDE.md`: plan y reglas del proyecto.
- `_brief/`: investigación (INV-MIROFISH, INV-CLAUDECODE) y brief de redacción. No se empaqueta.
- `assets/web/`: la app (home, visor de lección, motor, catálogo, lecciones).
- `lib/main.dart`, `pubspec.yaml`: shell Flutter. Ver `android-overrides/README.md` para generar `android/`.
- `scripts/validate_lessons.js`: `cd assets/web && node ../../scripts/validate_lessons.js` (debe dar `problemas=0 faltantes=0 huerfanos=0`).

Vista previa en navegador: `cd assets/web && python3 -m http.server 9050`.

Pendiente en tu PC: `flutter create`, ícono (`make_icon.py` del skill), `flutter build apk --release`, instalación por adb,
y el cierre del `CLAUDE.md` (ports.md, LINAJE, apps_db, PENDIENTES-APPS). Las 7 herramientas propias del PLAN (perfil, consigna,
visibilidad, indicadores, checklist, plantillas, glosario) no están hechas todavía.
