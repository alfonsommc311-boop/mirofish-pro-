Lesson.start({
  id: 'cuando-algo-sale-mal', area: 'Una corrida de principio a fin', areaIcon: '🔄', icon: '🩹',
  title: 'Cuando algo sale mal',
  subtitle: 'Actor fuera de personaje, formato roto, agente caído: diagnostica y relanza solo lo necesario.',
  norma: 'Un fallo de la simulación no es un hallazgo de obra; los datos de límites y reanudación de Claude Code se verifican en la documentación vigente.',
  intro: '<p>Tarde o temprano una ronda fallará: un actor responde como si fuera otro, ignora el formato o simplemente no termina porque se agotó el límite de sesión. Lo importante es <b>no repetir toda la ronda</b>. Como cada actor es un subagente con su propio archivo de salida, puedes diagnosticar al actor afectado y relanzar solo ese. La documentación indica también que un subagente terminado puede reanudarse conservando su historial (verificar en la documentación vigente). Esta lección te da un cuadro de diagnóstico y el criterio de cuándo relanzar, corregir o dejar pasar.</p>',
  sections: [
    { h: 'Cuadro de diagnóstico',
      html: '<table><tr><th>Síntoma</th><th>Causa probable</th><th>Qué hacer</th></tr><tr><td>Actor fuera de personaje (demasiado razonable, o caricatura)</td><td>Perfil vago o sin palancas reales</td><td>Reforzar perfil y relanzar solo a ese actor</td></tr><tr><td>Formato roto o pasado de palabras</td><td>Consigna sin formato fijo ni tope</td><td>Precisar formato y relanzar</td></tr><tr><td>Sabe lo que no debía</td><td>Fuga: contexto o ruta mal armados</td><td>Corregir visibilidad, relanzar a los afectados</td></tr><tr><td>No hay archivo de salida</td><td>Agente caído o sin permiso de escritura</td><td>Revisar aviso, relanzar o reanudar</td></tr><tr><td>Inventa un documento</td><td>Consigna sin la regla de nada fabricado</td><td>Descartar esa respuesta y relanzar con la regla</td></tr></table>' },
    { h: 'Relanzar solo lo necesario',
      html: '<p>Antes de tocar nada, cuenta: ¿cuántos actores tienen problema? Si de cinco respuestas cuatro están bien, relanzas <b>uno</b>. Las cuatro buenas quedan en disco y no se rehacen.</p><ol><li>Identifica al actor y el archivo de salida.</li><li>Corrige la causa en el perfil, el contexto o la consigna, no solo el síntoma.</li><li>Relanza únicamente a ese actor con el mismo contexto de esa ronda.</li><li>Vuelve a revisar formato, personaje, aislamiento e indicadores.</li></ol><p>Si el fallo afectó a la <b>resolución</b> ya escrita (por ejemplo una fuga que cambió lo que decidió alguien), evalúa si la ronda entera pierde validez.</p>' },
    { h: 'El agente caído por límite de sesión',
      html: '<p>Los límites de uso de la cuenta pueden cortar una ronda a medias. No los tratamos con cifras: cambian y se verifican en la documentación vigente. La estrategia es la misma de siempre.</p><ul><li>Mira qué archivos de salida existen; los que faltan son los caídos.</li><li>Espera a que se reponga la cuota si hace falta; el disco guarda el estado del mundo.</li><li>Relanza o reanuda solo a los caídos, con su mismo contexto.</li></ul><p>Por eso conviene guardar cada respuesta en su archivo desde la consigna: una corrida en archivos sobrevive a una sesión cortada.</p>' },
    { h: 'Cuándo dejarlo pasar',
      html: '<p>No todo defecto obliga a relanzar. Un exceso menor de palabras o un indicador con decimales raros se corrige a mano al leerlo. Relanza cuando el fallo cambia la <b>decisión</b> del actor o rompe el aislamiento. Y anota lo aprendido: cada corrida deja una lección para mejorar tu skill (área 14). Ningún fallo se corrige «arreglando» la respuesta por el actor: sería inventar lo que ese rol habría decidido.</p>' }
  ],
  keypoints: [
    'Un subagente por actor permite relanzar solo al afectado.',
    'Diagnostica primero: personaje, formato, fuga, ausencia de salida o documento inventado.',
    'Corrige la causa en perfil, contexto o consigna, no solo el síntoma.',
    'Ante un límite de sesión, los archivos que faltan son los caídos; el disco conserva el resto.',
    'Un subagente terminado puede reanudarse; verificar en la documentación vigente.',
    'Nunca se corrige una respuesta escribiéndola tú por el actor.'
  ],
  flashcards: [
    { q: '¿Por qué se puede relanzar a un solo actor?', a: 'Porque cada actor es un subagente con su propio archivo de salida.' },
    { q: '¿Qué indica que falte un archivo de salida tras la ronda?', a: 'Un agente caído o sin permiso de escritura.' },
    { q: '¿Qué haces si un actor inventa un documento?', a: 'Descartas esa respuesta y relanzas con la regla de nada fabricado.' },
    { q: '¿Cuándo vale la pena relanzar?', a: 'Cuando el fallo cambia la decisión del actor o rompe el aislamiento.' },
    { q: '¿Cómo sobrevive una corrida a una sesión cortada?', a: 'Guardando cada respuesta y contexto en archivos.' }
  ],
  quiz: [
    { q: 'De cinco respuestas, una tiene el formato roto. Lo mejor es:', opts: ['Repetir toda la ronda', 'Corregir la consigna y relanzar solo a ese actor', 'Reescribir tú la respuesta'], correct: 1, why: 'Las otras cuatro quedan en disco; reescribirla sería inventar lo que el actor habría dicho.' },
    { q: 'Un actor responde con información de otro. La causa más probable es:', opts: ['Un error de ortografía', 'Una fuga por contexto o ruta mal armados', 'Cansancio del modelo'], correct: 1, why: 'Hay que revisar la visibilidad y las carpetas permitidas.' },
    { q: 'Ante un límite de sesión, ¿qué sabes con certeza?', opts: ['La cifra exacta del límite', 'Que los archivos existentes se conservan y los faltantes son los caídos', 'Que la corrida se perdió'], correct: 1, why: 'Las cifras se verifican en la documentación; el disco conserva lo hecho.' }
  ]
});
