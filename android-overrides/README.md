# Android

Este repo no incluye la carpeta `android/` generada. En tu PC:

1. `flutter create --org com.alfonso --project-name mirofish_pro .` dentro de esta carpeta (respeta `lib/`, `pubspec.yaml`, `assets/`).
2. En `android/app/build.gradle.kts` deja `applicationId = "com.alfonso.mirofishpro"`.
3. En `AndroidManifest.xml`: `android:label="MiroFish PRO"`, permiso `INTERNET` y, dentro de `<application>`:
   `<meta-data android:name="io.flutter.embedding.android.EnableImpeller" android:value="false"/>` (evita pantalla negra en Honor/Huawei).
4. `flutter pub get && flutter build apk --release`.
Puerto 9050, prefijo de storage `mfp`.
