Lesson.start({
  id: 'hipotesis-de-simulacion', area: 'Diseñar actores creíbles', areaIcon: '🎭', icon: '🧪',
  title: 'Hipótesis de simulación',
  subtitle: 'Lo que no puedes verificar se marca; y se elige la hipótesis que vale la pena probar.',
  norma: 'Lo no verificado se declara como hipótesis de simulación, nunca como hecho. Normas solo por su nombre: verificar la norma vigente y el expediente técnico aprobado.',
  intro: '<p>Al diseñar actores tendrás que escribir cosas que no sabes: cuánta caja tiene el contratista, qué le pidió la alcaldía al funcionario, si el laboratorio se atrasará. Escribirlas sin marca contamina todo: en el informe nadie sabrá qué era dato y qué era invención tuya. La solución es la <b>hipótesis de simulación</b>: una afirmación que <b>no está verificada</b>, se declara así en el perfil o en el dossier, y se usa a propósito para ver qué cambia. No es un defecto del método; es su forma de ser honesto.</p>',
  sections: [
    { h: 'Hecho, dato del caso e hipótesis',
      html: '<table><tr><th>Categoría</th><th>Qué es</th><th>Cómo se escribe</th></tr><tr><td>Hecho con fuente</td><td>Consta en un documento real del expediente</td><td>Con su documento (carta, informe, cuaderno)</td></tr><tr><td>Dato de diseño</td><td>Regla del mundo simulado que tú fijas (por ejemplo, el horizonte de fechas)</td><td>Como parte del dossier</td></tr><tr><td>Hipótesis de simulación</td><td>Algo plausible que no puedes verificar</td><td>Marcada: <span class="hl">[hipótesis]</span> junto a la afirmación</td></tr></table><p>Ejemplo en un perfil: <i>«La caja del Consorcio Andino aguanta unas seis semanas [hipótesis: no verificada].»</i> Así, cuando el informe diga «el contratista cedió porque su caja era corta», el lector sabe de dónde salió.</p>' },
    { h: 'Por qué marcar es parte del método',
      html: '<ul><li><b>Evita que el ensayo pase por evidencia.</b> Una hipótesis marcada no puede convertirse, sin darte cuenta, en conclusión sobre la obra real.</li><li><b>Te dice qué contrastar después.</b> Cada hipótesis es una pregunta pendiente: qué habría que averiguar en la realidad.</li><li><b>Permite ramas.</b> Cambias una hipótesis (caja larga en vez de corta) y comparas corridas (lección «Ramas y ¿y si…?»).</li></ul><p>Regla práctica: si al leer el perfil no puedes señalar el documento o la razón de una afirmación, es hipótesis y debe llevar la marca.</p>' },
    { h: 'Elegir la hipótesis que vale la pena probar',
      html: '<p>No todas las hipótesis merecen una corrida. Valora cada candidata con cuatro preguntas:</p><ol><li><b>¿Cambia la decisión central?</b> Si con caja corta o larga el contratista hace lo mismo, no vale la pena.</li><li><b>¿Es incierta de verdad?</b> Si lo sabes o puedes averiguarlo en una llamada, verifícalo y conviértela en hecho.</li><li><b>¿Es plausible?</b> Una hipótesis absurda solo produce una fantasía.</li><li><b>¿Puedo actuar según la respuesta?</b> Si el resultado no cambiaría lo que harías esta semana, es curiosidad, no ensayo.</li></ol><p>Quédate con una o dos hipótesis principales por corrida. Si varias se mueven a la vez, no sabrás cuál explica lo que pasó.</p>' },
    { h: 'Ejemplo: tres hipótesis, una elegida',
      html: '<p>Caso ficticio: la supervisión difiere parte de la valorización final. Candidatas:</p><ul><li>A: <i>el contratista tiene caja para seis semanas.</i> Cambia su disposición a negociar: <b>elegida</b>.</li><li>B: <i>el alcalde inaugurará pronto.</i> Cambia la Entidad, pero es fácil de averiguar con tu propio equipo: se verifica y pasa a hecho o a descarte.</li><li>C: <i>el laboratorio tuvo un fallo de equipos.</i> Es un tercero y su desenlace lo pones tú como resultado simulado; no es una hipótesis del actor.</li></ul><p>La pregunta de simulación queda así: <i>si el contratista está justo de caja y la Entidad no lo sabe, ¿qué carta manda y cómo la lee la Entidad?</i></p>' },
    { h: 'Cierre: cómo llevarlas al informe',
      html: '<p>Lleva un registro sencillo, una línea por hipótesis: afirmación, actor, por qué es plausible, decisión que afecta y cómo se verificaría. Al final, el informe debe listar las hipótesis usadas junto a las limitaciones: lo que sale de una corrida es <b>condicional</b> a ellas. Cuando la realidad responda, anotas si la hipótesis se cumplió (lección «Contrastar con la realidad»). Una simulación con hipótesis declaradas se defiende ante tu jefe; una con inventos escondidos, no.</p>' }
  ],
  keypoints: [
    'Una hipótesis de simulación es una afirmación plausible no verificada, declarada como tal.',
    'Se marca junto a la afirmación (por ejemplo, [hipótesis]) en el perfil o el dossier.',
    'Marcar evita que el ensayo pase por evidencia y señala qué contrastar en la realidad.',
    'Vale la pena probar la hipótesis que cambia la decisión central, es incierta de verdad y es plausible.',
    'Si puedes verificarla con una llamada, verifícala y conviértela en hecho.',
    'Una o dos hipótesis principales por corrida; el informe las lista junto a las limitaciones.'
  ],
  flashcards: [
    { q: '¿Qué es una hipótesis de simulación?', a: 'Una afirmación plausible que no puedes verificar, declarada como hipótesis.' },
    { q: '¿Cómo se marca?', a: 'Con una etiqueta junto a la afirmación, por ejemplo [hipótesis: no verificada].' },
    { q: '¿Qué hace valiosa a una hipótesis?', a: 'Que cambie la decisión central, sea realmente incierta y sea plausible.' },
    { q: '¿Qué haces con una hipótesis que puedes averiguar fácilmente?', a: 'La verificas y la conviertes en hecho o la descartas.' },
    { q: '¿Por qué no probar muchas hipótesis a la vez?', a: 'Porque no sabrás cuál explica el resultado.' }
  ],
  quiz: [
    { q: 'Escribes en un perfil que el contratista tiene caja para seis semanas sin saberlo. ¿Qué haces?', opts: ['Lo dejas como hecho', 'Lo marcas como hipótesis de simulación', 'Lo borras siempre'], correct: 1, why: 'Sin marca, el informe mezclaría datos con suposiciones.' },
    { q: '¿Cuál de estas hipótesis conviene probar?', opts: ['Una que no cambia lo que hará ningún actor', 'Una incierta que cambia la decisión central', 'Una que puedes confirmar hoy con una llamada'], correct: 1, why: 'Las otras dos no aportan ensayo: una es irrelevante y la otra se verifica y listo.' },
    { q: '¿Qué le pasa al informe si usa hipótesis sin declararlas?', opts: ['Gana credibilidad', 'Sus conclusiones parecen evidencia y no se pueden defender', 'Nada'], correct: 1, why: 'Lo que sale de la corrida es condicional a las hipótesis; hay que decirlo.' }
  ]
});
