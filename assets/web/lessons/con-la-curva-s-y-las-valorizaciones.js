Lesson.start({
  id: 'con-la-curva-s-y-las-valorizaciones', area: 'Combinar con tus otras herramientas', areaIcon: '🧰', icon: '💹',
  title: 'Con la curva S y las valorizaciones',
  subtitle: 'La caja del contratista como motor de sus decisiones.',
  norma: 'Valorizaciones, pagos y adelantos se rigen por la norma de contrataciones y el contrato; la simulación no anticipa su resultado (verificar la norma vigente y el expediente técnico aprobado).',
  intro: '<p>Muchas decisiones que en la simulación parecen «de conducta» son en realidad de <b>caja</b>: un contratista que aún no cobra una valorización decide distinto que uno holgado. Como supervisor conoces la curva S programada y la ejecutada; el contratista simulado, en cambio, solo sabe lo que tu perfil le da. Esta lección enseña a llevar la <b>situación de caja</b> al perfil como hecho con fuente, y a leer sus efectos sin prometer nada sobre cómo se valorizará o se pagará.</p>',
  sections: [
    { h: 'Por qué la caja mueve al actor',
      html: '<p>Un contratista con flujo ajustado suele priorizar frentes que facturan, demorar compras, negociar con proveedores o presionar por el pago. Ese comportamiento no aparece si el perfil no dice nada de su caja. El orquestador decide <b>cuánta caja mostrar</b> al actor y cuánta ocultar al resto: es un buen ejemplo de información privada que mueve la historia.</p><ul><li>Lo que el contratista sabe: su flujo, sus deudas con proveedores, cuándo necesita cobrar.</li><li>Lo que la supervisión y la Entidad ven: la curva S y las valorizaciones presentadas.</li></ul>' },
    { h: 'De la curva S al dossier y al perfil',
      html: '<p>La curva S y las valorizaciones son datos que sí puedes citar con fuente. Un ejemplo de línea para el dossier (ficticio):</p><p><span class="hl">Avance programado acumulado al mes 8: 48 %; ejecutado: 39 % (informe mensual de supervisión, mes 8).</span></p><p>Y un fragmento del perfil del Consorcio Andino, en el campo «lo que sé y otros no»:</p><p><i>Mi flujo cubre planilla y combustible por unas semanas; tengo una deuda con el proveedor de acero. Esto no consta en ningún documento de la Entidad.</i></p><p>Si esa caja privada es una <b>hipótesis</b> tuya y no un hecho verificado, se marca como hipótesis de simulación. No inventes montos reales de una obra.</p>' },
    { h: 'La brecha entre el avance y la caja',
      html: '<p>Una diferencia entre lo programado y lo ejecutado en la curva S es un hecho visible para todos; lo que hay detrás (caja, proveedores, cuadrillas) solo lo ve el contratista. Esa asimetría es la que hace que la supervisión y la Entidad lean el retraso como incumplimiento y el contratista como problema de liquidez. La simulación te deja <b>ensayar esas dos lecturas</b> ante el mismo hecho.</p><table><tr><th>Hecho visible</th><th>Lectura probable de la supervisión</th><th>Lectura del contratista (con su caja)</th></tr><tr><td>Avance ejecutado por debajo del programado</td><td>Riesgo de incumplimiento de plazo</td><td>Retraso por demora en el pago de la valorización anterior</td></tr></table>' },
    { h: 'Con las valorizaciones: solo ensayo, nunca veredicto',
      html: '<ul><li>Puedes ensayar cómo reaccionaría cada parte si una valorización se difiere o se observa; el caso <i>valorización diferida</i> del área de casos lo desarrolla.</li><li>El cálculo de la valorización, su metrado y su aprobación se rigen por el contrato y la norma; corresponden a tus herramientas de valorización, no a la simulación.</li><li>Ningún actor decide un monto, y ningún informe de la simulación promete que una valorización, un adelanto o un pago serán aprobados.</li></ul><p>Verificar la norma vigente y el expediente técnico aprobado.</p>' },
    { h: 'Cómo pedirlo en la consigna',
      html: '<p>Añade a la decisión central una línea que obligue al actor a explicitar su caja en esa ronda: <i>«Declara qué haces con tu flujo si no cobras antes del día 15»</i>. Así la caja deja de ser un supuesto y pasa a ser un hecho de la decisión que puedes leer y contrastar con tu curva S. Recuerda: cifras y fechas de terceros que no estén en el dossier son <b>resultado simulado</b>.</p>' }
  ],
  keypoints: [
    'La caja del contratista explica decisiones que parecen de conducta.',
    'La curva S y las valorizaciones son hechos citables; la caja privada es hipótesis salvo que tengas fuente.',
    'La asimetría entre lo visible (avance) y lo privado (liquidez) genera lecturas distintas del mismo hecho.',
    'La simulación ensaya reacciones ante una valorización diferida; no calcula ni anticipa su resultado.',
    'Ninguna lección promete que una valorización, un adelanto o un pago serán aprobados.'
  ],
  flashcards: [
    { q: '¿Por qué incluir la caja en el perfil del contratista?', a: 'Porque mueve sus decisiones y es información privada que genera asimetría.' },
    { q: '¿Cómo se marca una caja que no está documentada?', a: 'Como hipótesis de simulación.' },
    { q: '¿Qué hecho es visible para todos y qué solo para el contratista?', a: 'El avance en la curva S es visible; la liquidez y deudas son privadas.' },
    { q: '¿Qué hace la simulación con una valorización diferida?', a: 'Ensaya las reacciones de las partes; no calcula ni promete su aprobación.' }
  ],
  quiz: [
    { q: 'El avance ejecutado está por debajo del programado. ¿Qué aporta la simulación?', opts: ['El monto exacto que se pagará', 'Distintas lecturas del mismo hecho según lo que sabe cada actor', 'La fecha de término'], correct: 1, why: 'Ensaya percepciones y reacciones; no calcula pagos ni plazos.' },
    { q: 'Escribes la caja del contratista sin tener documento. ¿Qué haces?', opts: ['La presentas como hecho', 'La marcas como hipótesis de simulación', 'La omites siempre'], correct: 1, why: 'Lo no verificado se marca; así no se fabrica información.' },
    { q: '¿Quién decide el monto de una valorización?', opts: ['Un actor simulado', 'El proceso contractual según la norma vigente y el expediente técnico aprobado', 'El informe de la simulación'], correct: 1, why: 'La simulación no decide ni promete montos.' }
  ]
});
