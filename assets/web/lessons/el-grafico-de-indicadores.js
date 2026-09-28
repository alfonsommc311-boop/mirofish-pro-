Lesson.start({
  id: 'el-grafico-de-indicadores', area: 'Leer lo que salió', areaIcon: '📊', icon: '📈',
  title: 'El gráfico de indicadores',
  subtitle: 'Leerlo sin sobreinterpretarlo: son juicios declarados por agentes, no frecuencias.',
  norma: 'Un indicador simulado no es una medición ni una probabilidad calibrada (verificar la norma vigente y el expediente técnico aprobado en todo caso real).',
  intro: '<p>Cada respuesta de actor termina con una línea fija de indicadores: unos pocos números que el agente declara para esa ronda. Juntas esas líneas alimentan un gráfico por actor y por ronda. Es un resumen visual muy tentador, y por eso peligroso: parece un dato y es un <b>juicio</b>. Esta lección enseña qué sí se puede leer ahí y qué no.</p>',
  sections: [
    { h: 'Qué dibuja el gráfico',
      html: '<p>Eje horizontal: las rondas. Eje vertical: el valor declarado (por ejemplo, 0 a 100). Una línea por actor o por indicador. Con eso ves <b>tendencias, cruces y separaciones</b>. La línea de indicadores viene con formato fijo desde la consigna (ver Números e indicadores), para que los valores sean comparables entre actores y rondas.</p>' },
    { h: 'Ejemplo ficticio: una línea de indicadores',
      html: '<p>Una línea típica al final de una respuesta (formato ilustrativo; el formato real lo fija tu consigna):</p><p><span class="hl">Indicadores:</span> riesgo de controversia 65 · disposición a negociar 40 · confianza en la supervisión 30</p><p>Recogiendo tres rondas del contratista ficticio (Consorcio Andino) frente a la supervisión:</p><table><tr><th>Indicador declarado</th><th>Ronda 1</th><th>Ronda 2</th><th>Ronda 3</th></tr><tr><td>Riesgo de controversia</td><td>30</td><td>35</td><td>65</td></tr><tr><td>Disposición a negociar</td><td>70</td><td>60</td><td>40</td></tr><tr><td>Confianza en la supervisión</td><td>55</td><td>45</td><td>30</td></tr></table><p>El gráfico mostraría dos líneas que bajan y una que sube, con un cruce en la ronda 3. Eso es lo que <b>sí</b> puedes leer: la dirección y el momento del cambio.</p>' },
    { h: 'Qué no puedes leer',
      html: '<ul><li><b>Un 65 no es «65 % de probabilidad» en el mundo real.</b> Es un juicio del agente interpretando su perfil.</li><li>Una diferencia de 5 puntos <b>no significa nada</b>; los modelos redondean y varían.</li><li>La <b>escala</b> puede cambiar entre actores: uno declara 70 donde otro declararía 50 con la misma convicción.</li><li>Una línea suave <b>no prueba consenso</b>; puede reflejar un actor demasiado razonable.</li></ul>' },
    { h: 'Lecturas sanas',
      html: '<ol><li>Mira <b>cambios grandes y sostenidos</b>, no valores absolutos.</li><li>Compara <b>un actor consigo mismo</b> entre rondas antes que contra otros.</li><li>Ubica el cambio en la cronología y pregunta qué hecho lo provocó.</li><li>La <b>separación entre líneas</b> de dos actores sobre el mismo asunto es la brecha de percepción, resaltada.</li></ol><p>Para juicios de expertos calibrados y estimación de probabilidades, ver Decisiones PRO; aquí el número es ensayo.</p>' },
    { h: 'Cómo presentarlo',
      html: '<p>Si el gráfico va al informe, rotúlalo: «juicios declarados por agentes simulados; no son frecuencias ni probabilidades calibradas». Evita el eje con decimales que sugieran precisión. Y no mezcles el gráfico con lo que se envía a la Entidad: es documento interno.</p>' }
  ],
  keypoints: [
    'El gráfico resume las líneas fijas de indicadores de cada respuesta.',
    'Los valores son juicios declarados por agentes, no frecuencias ni mediciones.',
    'Lee tendencias, cruces y separaciones; no valores absolutos ni diferencias pequeñas.',
    'Compara a cada actor consigo mismo entre rondas primero.',
    'Conecta cada cambio grande con un hecho de la cronología.',
    'Rotula el gráfico como juicios simulados y mantenlo como documento interno.'
  ],
  flashcards: [
    { q: '¿Qué son los números del gráfico?', a: 'Juicios declarados por agentes simulados, no frecuencias.' },
    { q: '¿Qué sí se puede leer?', a: 'Dirección, cruces y momento de los cambios grandes y sostenidos.' },
    { q: '¿Qué no se debe leer?', a: 'Valores absolutos ni diferencias de pocos puntos.' },
    { q: '¿Qué muestra la separación entre dos líneas sobre el mismo asunto?', a: 'La brecha de percepción.' }
  ],
  quiz: [
    { q: 'Un indicador de 65 en «riesgo de controversia» significa:', opts: ['65 % de probabilidad real', 'Un juicio declarado por el agente en esa ronda', 'Que ocurrirá 65 de cada 100 veces'], correct: 1, why: 'Es un juicio del agente según su perfil, no una frecuencia.' },
    { q: 'Entre las rondas 1 y 2 un indicador sube 5 puntos. Lo razonable es:', opts: ['Reportar un cambio importante', 'No interpretarlo: es ruido probable', 'Reescribir la estrategia'], correct: 1, why: 'Solo los cambios grandes y sostenidos merecen lectura.' },
    { q: 'Al llevar el gráfico al informe conviene:', opts: ['Quitarle todo rótulo', 'Rotularlo como juicios simulados y mantenerlo interno', 'Enviarlo a la Entidad como sustento'], correct: 1, why: 'Es un documento interno de ensayo, no un sustento formal.' }
  ]
});
