Lesson.start({
  id: 'terceros-y-resultados-simulados', area: 'La resolución vista de dios', areaIcon: '⚖️', icon: '🧾',
  title: 'Terceros y resultados simulados',
  subtitle: 'Asesoría jurídica, laboratorios, clima: decidir de forma plausible y marcarlo siempre.',
  norma: 'Ningún resultado de un tercero es real dentro de la simulación: siempre se marca como resultado simulado (verificar la norma vigente y el expediente técnico aprobado antes de actuar en la obra real).',
  intro: '<p>No todos los que influyen en una obra son actores con perfil: hay asesores legales, laboratorios de ensayos, el clima, un banco que emite una fianza. No tienen subagente propio, pero sus resultados cambian la ronda. Alguien debe producirlos, y ese alguien eres tú. El riesgo es evidente: si inventas un resultado de laboratorio y lo presentas como dato, la simulación fabricó un documento. La regla del método es clara: <b>decidir de forma plausible y marcarlo siempre</b>.</p>',
  sections: [
    { h: 'Qué es un tercero en la simulación',
      html: '<p>Un tercero es cualquier fuente de hechos que <b>no es un actor con intereses y perfil</b> pero condiciona lo que pasa:</p><ul><li>Asesoría jurídica de una parte.</li><li>Laboratorio de ensayos de materiales.</li><li>Clima (lluvias, heladas).</li><li>Entidades financieras, proveedores lejanos, autoridades externas al caso.</li></ul><p>Si un tercero se vuelve central, evalúa promoverlo a actor (lección «elegir los actores»); si solo aparece un momento, resuélvelo tú.</p>' },
    { h: 'La regla: plausible, sin favorecer, y marcado',
      html: '<ol><li><b>Plausible</b>: elige lo que razonablemente pasaría según el hecho técnico del dossier, no lo que dé mejor historia.</li><li><b>Sin empujar a nadie</b>: no uses al tercero para castigar o premiar a un actor.</li><li><b>Marcado</b>: cada resultado de tercero lleva la etiqueta <span class="hl">(resultado simulado)</span> en la resolución y en el informe.</li></ol><p>Ejemplo: la resolución dice <i>«- 18/05 [A3] resultado simulado: el laboratorio reporta un valor de resistencia por debajo de lo esperado en una probeta»</i>. Nunca dice «el laboratorio reportó 187 kg/cm2» como si fuera un dato del expediente.</p>' },
    { h: 'Ejemplo de resolución con terceros (caso ficticio)',
      html: '<p>Ronda 3. Supervisión (A3), Consorcio Andino (A2), Villa Esperanza (A1).</p><p><span class="hl">- 14/05 [A3] La supervisión solicita los ensayos de laboratorio de la partida discutida.<br>- 21/05 [A3] resultado simulado: el laboratorio informa un resultado en el límite inferior aceptable; no concluyente.<br>- 21/05 [A2] La asesoría jurídica del contratista sugiere reservar sus derechos por escrito (resultado simulado: consejo plausible, no dictamen).<br>- 22/05 [A1 A2 A3] Semana de lluvias intensas (resultado simulado): se suspende el vaciado de concreto en dos frentes.</span></p><p>Fíjate en tres cosas: la audiencia depende del canal, cada resultado va marcado y ninguno es un documento inventado que un actor cite como real.</p>' },
    { h: 'La silla del actor frente al resultado simulado',
      html: '<p>El actor recibe el resultado en su contexto <i>ya marcado</i> como simulado. Eso importa porque debe razonar «ese resultado es hipotético en este ensayo»; no debe citarlo en una carta como si fuera un informe firmado. Ningún ejemplo debe mostrar a un actor <b>inventando</b> o adornando un documento: si necesita algo que aún no existe, lo pide o lo condiciona con un «si… entonces…».</p><p>Una asesoría jurídica simulada es una hipótesis de consejo, no una opinión legal: el ensayo no reemplaza a un abogado.</p>' },
    { h: 'Errores comunes',
      html: '<ul><li>Inventar cifras de ensayos con precisión que suena real.</li><li>Olvidar la etiqueta en el informe final.</li><li>Usar el clima para «arreglar» un cuello de botella narrativo.</li><li>Dejar que un tercero decida el caso: entonces el ensayo ya no trata de los actores.</li></ul><p>Para el documento interno del informe y por qué no se mezcla con lo real, ver el área 12.</p>' }
  ],
  keypoints: [
    'Los terceros (laboratorio, asesoría, clima) no tienen perfil, pero sus resultados cambian la ronda.',
    'Los resuelve el orquestador de forma plausible, sin empujar a ningún actor.',
    'Todo resultado de tercero se marca como resultado simulado, en la resolución y en el informe.',
    'Un actor nunca inventa ni adorna un documento; si le falta uno, lo pide o lo condiciona.',
    'Una asesoría jurídica simulada es una hipótesis de consejo, no un dictamen.'
  ],
  flashcards: [
    { q: '¿Quién produce el resultado de un laboratorio en la simulación?', a: 'El orquestador, de forma plausible, marcándolo como resultado simulado.' },
    { q: '¿Qué etiqueta llevan estos resultados?', a: '«Resultado simulado», en la resolución y en el informe.' },
    { q: '¿Cuándo un tercero debería convertirse en actor?', a: 'Cuando su papel es central y tiene intereses y decisiones propias.' },
    { q: '¿Puede un actor citar un ensayo simulado como si fuera real?', a: 'No: el resultado llega marcado como simulado y no se presenta como documento real.' },
    { q: '¿Es una asesoría jurídica simulada un dictamen?', a: 'No: es una hipótesis de consejo dentro de un ensayo.' }
  ],
  quiz: [
    { q: 'El laboratorio no tiene perfil. ¿Cómo resuelves su resultado?', opts: ['Con una cifra exacta sin etiqueta', 'De forma plausible y marcado como resultado simulado', 'Lo omites'], correct: 1, why: 'Debes producirlo, pero jamás presentarlo como dato real.' },
    { q: '¿Qué no debe hacer nunca un actor con un documento?', opts: ['Pedirlo', 'Inventarlo o adornarlo', 'Condicionar su decisión a que exista'], correct: 1, why: 'Ningún ejemplo muestra a un actor fabricando documentos.' },
    { q: 'Usas la lluvia para desbloquear un conflicto entre dos actores. Es:', opts: ['Un uso legítimo del tercero', 'Empujar la historia: el resultado debe ser plausible y neutro', 'Obligatorio'], correct: 1, why: 'El tercero no debe castigar ni premiar a nadie.' }
  ]
});
