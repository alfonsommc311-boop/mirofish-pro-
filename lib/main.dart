import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:flutter_tts/flutter_tts.dart';

const int kServerPort = 9050;

final InAppLocalhostServer _server =
    InAppLocalhostServer(port: kServerPort, documentRoot: 'assets/web');
final FlutterTts _tts = FlutterTts();

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  try {
    await _server.start();
  } catch (e) {
    debugPrint('Servidor local no iniciado: $e');
  }
  await _tts.setLanguage('es-ES');
  await _tts.setSpeechRate(0.5);
  runApp(const MiroFishProApp());
}

class MiroFishProApp extends StatelessWidget {
  const MiroFishProApp({super.key});
  @override
  Widget build(BuildContext context) => MaterialApp(
        title: 'MiroFish PRO',
        debugShowCheckedModeBanner: false,
        theme: ThemeData.dark(useMaterial3: true),
        home: const Shell(),
      );
}

class Shell extends StatefulWidget {
  const Shell({super.key});
  @override
  State<Shell> createState() => _ShellState();
}

class _ShellState extends State<Shell> {
  InAppWebViewController? _c;

  @override
  Widget build(BuildContext context) => PopScope(
        canPop: false,
        onPopInvokedWithResult: (didPop, _) async {
          if (didPop) return;
          if (_c != null && await _c!.canGoBack()) {
            _c!.goBack();
          }
        },
        child: Scaffold(
          backgroundColor: const Color(0xFF0B1A2E),
          body: SafeArea(
            child: InAppWebView(
              initialUrlRequest:
                  URLRequest(url: WebUri('http://localhost:$kServerPort/index.html')),
              initialSettings: InAppWebViewSettings(javaScriptEnabled: true, transparentBackground: true),
              onWebViewCreated: (c) {
                _c = c;
                c.addJavaScriptHandler(handlerName: 'speak', callback: (a) async {
                  await _tts.stop();
                  await _tts.speak(a.first as String);
                });
                c.addJavaScriptHandler(handlerName: 'stop', callback: (a) async {
                  await _tts.stop();
                });
              },
            ),
          ),
        ),
      );
}
