Lesson.start({
  id: 'el-caso-json', area: 'Una corrida de principio a fin', areaIcon: '🔄', icon: '📄',
  title: 'El caso.json',
  subtitle: 'Actores, indicadores y plan de rondas en un solo archivo que ordena toda la corrida.',
  norma: 'El archivo es solo estructura de la simulación; los hechos y normas viven en el dossier (verificar la norma vigente y el expediente técnico aprobado).',
  intro: '<p>Según el plan de esta app, el skill reúne en un solo <b>caso.json</b> tres cosas: <b>los actores</b>, <b>los indicadores</b> que cada uno declarará y <b>el plan de rondas</b>. Es el tablero de control del orquestador: los scripts y el gráfico de indicadores leen de ahí. Los nombres exactos de los campos los define tu copia del skill; verifícalos en su archivo vivo. Aquí verás un <b>ejemplo ficticio</b> con la lógica que importa, para que entiendas qué decide cada bloque y por qué.</p>',
  sections: [
    { h: 'Qué contiene y por qué en un solo archivo',
      html: '<ul><li><b>Actores:</b> un código (A1, A2…), el rol y el archivo de perfil de cada uno.</li><li><b>Indicadores:</b> lo que cada actor estima al cierre de cada ronda, siempre las mismas casillas.</li><li><b>Rondas:</b> qué ventana de fechas cubre cada una y qué actores participan.</li></ul><p>Un solo archivo evita que los actores, las rondas y el gráfico se desincronicen: cambias un dato en un sitio y todo lo demás lo hereda.</p>' },
    { h: 'Ejemplo ficticio',
      html: '<p>Ilustración con nombres de campo de ejemplo (los reales, en tu skill):</p><p><span class="hl">{ &quot;caso&quot;: &quot;Valorizacion diferida - Villa Esperanza&quot;,<br>&nbsp;&nbsp;&quot;actores&quot;: [<br>&nbsp;&nbsp;&nbsp;&nbsp;{ &quot;id&quot;: &quot;A1&quot;, &quot;rol&quot;: &quot;Entidad (Municipalidad Distrital de Villa Esperanza)&quot;, &quot;perfil&quot;: &quot;perfiles/A1.md&quot; },<br>&nbsp;&nbsp;&nbsp;&nbsp;{ &quot;id&quot;: &quot;A2&quot;, &quot;rol&quot;: &quot;Contratista (Consorcio Andino)&quot;, &quot;perfil&quot;: &quot;perfiles/A2.md&quot; },<br>&nbsp;&nbsp;&nbsp;&nbsp;{ &quot;id&quot;: &quot;A3&quot;, &quot;rol&quot;: &quot;Supervision (Consorcio Supervisor Horizonte)&quot;, &quot;perfil&quot;: &quot;perfiles/A3.md&quot; } ],<br>&nbsp;&nbsp;&quot;indicadores&quot;: [ &quot;riesgo_percibido&quot;, &quot;probabilidad_controversia&quot; ],<br>&nbsp;&nbsp;&quot;rondas&quot;: [<br>&nbsp;&nbsp;&nbsp;&nbsp;{ &quot;n&quot;: 1, &quot;ventana&quot;: &quot;dias 1 a 5&quot;, &quot;actores&quot;: [&quot;A1&quot;, &quot;A2&quot;, &quot;A3&quot;] },<br>&nbsp;&nbsp;&nbsp;&nbsp;{ &quot;n&quot;: 2, &quot;ventana&quot;: &quot;dias 6 a 12&quot;, &quot;actores&quot;: [&quot;A1&quot;, &quot;A2&quot;] } ] }</span></p><p>Todo es ficticio: roles, fechas relativas y nombres de indicadores.</p>' },
    { h: 'Cómo decidir cada bloque',
      html: '<table><tr><th>Bloque</th><th>Criterio</th></tr><tr><td>Actores</td><td>Quien decide, quien puede bloquear, quien tiene la información (área 4). De 3 a 6.</td></tr><tr><td>Indicadores</td><td>Pocos, con la misma definición para todos; son juicios declarados, no frecuencias.</td></tr><tr><td>Ventanas</td><td>Tramos de fechas seguidos y sin solaparse; el reloj avanza por la resolución.</td></tr><tr><td>Quién participa</td><td>No todos actúan en todas las rondas; a veces un actor sale.</td></tr></table>' },
    { h: 'Errores frecuentes',
      html: '<ul><li><b>Indicadores que cambian de una ronda a otra:</b> el gráfico deja de ser comparable.</li><li><b>Un actor listado sin perfil:</b> el lanzamiento falla o el actor improvisa.</li><li><b>Ventanas que se pisan:</b> dos rondas describen los mismos días y la cronología se confunde.</li><li><b>Meter hechos en el JSON:</b> los hechos van en el dossier con su fuente; aquí solo estructura.</li></ul><p>Antes de lanzar, revisa con la checklist de la app que cada actor tenga perfil y que las ventanas sean consecutivas.</p>' }
  ],
  keypoints: [
    'El caso.json reúne actores, indicadores y plan de rondas en un solo archivo.',
    'Los nombres exactos de campos se verifican en tu copia viva del skill; el ejemplo es ilustrativo.',
    'Pocos indicadores, definidos igual para todos y sin cambiarlos entre rondas.',
    'Las ventanas de fechas son consecutivas y no se solapan.',
    'Los hechos y su fuente viven en el dossier, no en el JSON.',
    'Un actor sin perfil o una ventana pisada rompen la corrida antes de empezar.'
  ],
  flashcards: [
    { q: '¿Qué tres cosas reúne el caso.json?', a: 'Actores, indicadores y plan de rondas.' },
    { q: '¿Por qué mantener las mismas casillas de indicadores en todas las rondas?', a: 'Para que el gráfico compare la misma cosa a lo largo del tiempo.' },
    { q: '¿Qué NO debe ir en el caso.json?', a: 'Hechos con su fuente: esos van en el dossier.' },
    { q: '¿Cuántos actores conviene?', a: 'De 3 a 6, según quién decide, quién bloquea y quién tiene la información.' },
    { q: '¿Dónde confirmas los nombres de campo reales?', a: 'En tu copia viva del skill, verificando en su documentación.' }
  ],
  quiz: [
    { q: '¿Qué pasa si cambias la definición de un indicador a mitad de la corrida?', opts: ['Nada, el gráfico se adapta', 'Las rondas dejan de ser comparables', 'Mejora la precisión'], correct: 1, why: 'El gráfico compara la misma casilla ronda a ronda; cambiarla rompe la comparación.' },
    { q: '¿Dónde va la cifra de la valorización y su documento de respaldo?', opts: ['En el caso.json', 'En el dossier, con su fuente', 'En el perfil de cualquier actor'], correct: 1, why: 'El JSON solo da estructura; los hechos con fuente viven en el dossier.' },
    { q: 'Las ventanas de las rondas deben ser:', opts: ['Consecutivas y sin solaparse', 'Idénticas en todas', 'Lo más largas posible'], correct: 0, why: 'Así la cronología se reconstruye sin confusiones entre rondas.' }
  ]
});
