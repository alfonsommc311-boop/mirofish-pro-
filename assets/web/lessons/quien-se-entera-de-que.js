Lesson.start({
  id: 'quien-se-entera-de-que', area: 'La resolución vista de dios', areaIcon: '⚖️', icon: '📬',
  title: 'Quién se entera de qué',
  subtitle: 'Carta y copias, cuaderno de obra, memorando interno, control, proveedores y lo público.',
  norma: 'La visibilidad sigue al canal, no al deseo: quien no está en la copia no lo sabe (verificar la norma vigente y el expediente técnico aprobado para los canales formales de cada contrato).',
  intro: '<p>Etiquetar la audiencia de un hecho parece un trámite y es la decisión más influyente de la resolución. Un mismo hecho, visto por dos actores o por cuatro, produce rondas distintas. La regla práctica es simple: <b>el canal por el que salió el hecho decide quién lo ve</b>. Un supervisor de obra ya sabe esto de memoria (quién recibe copia, quién firma el cuaderno); aquí lo conviertes en criterio para tus corchetes.</p>',
  sections: [
    { h: 'Un canal, una audiencia',
      html: '<table><tr><th>Canal</th><th>Quién lo ve (regla general)</th></tr><tr><td>Carta con copias</td><td>Destinatario y los que figuran en copia; nadie más</td></tr><tr><td>Anotación en el cuaderno de obra</td><td>Quienes lo firman o tienen acceso: contratista y supervisión; la Entidad si lo revisa</td></tr><tr><td>Memorando o conversación interna</td><td>Solo la organización que lo emite</td></tr><tr><td>Comunicación al control</td><td>El órgano de control y quien la envía</td></tr><tr><td>Conversación con proveedores</td><td>El contratista y ese proveedor</td></tr><tr><td>Hecho público (bloqueo, nota de prensa)</td><td>Todos, con la asimetría de cuándo lo advierten</td></tr></table><p>Ajusta la tabla a lo que diga el contrato y el expediente técnico aprobado: verificar la norma vigente.</p>' },
    { h: 'Ejemplo de líneas con audiencias distintas',
      html: '<p>Caso ficticio: Villa Esperanza (A1), Consorcio Andino (A2), Consorcio Supervisor Horizonte (A3), órgano de control (A4), proveedor de acero (A5).</p><p><span class="hl">- 10/06 [A1 A2 A3] Carta de la supervisión a la Entidad con copia al contratista: observa la calidad del concreto del tramo 2.<br>- 10/06 [A3] Memorando interno de la supervisión: evalúa diferir la valorización.<br>- 11/06 [A2 A5] El contratista pide al proveedor reprogramar la entrega.<br>- 12/06 [A1 A2 A3 A4] Un vecino publica un video del frente cerrado (hecho público).</span></p><p>En la primera línea la Entidad se entera por carta; en la segunda, no. Quien haya dado por hecho que «la Entidad ya sabía que la supervisión dudaba» está proyectando su propio conocimiento.</p>' },
    { h: 'La silla del actor: qué hace con lo que ve y con lo que no ve',
      html: '<p>Un actor que no está en la copia no puede reaccionar, y esa inacción es informativa. El contratista que no sabe del memorando interno puede presentar una valorización confiado; la Entidad que se entera tarde por lo público responde con prisa. Estas reacciones desalineadas son exactamente las brechas que el informe debe mostrar.</p><p>Pregúntate siempre: <i>¿por qué canal llegaría esto a este actor, y cuándo?</i> Si no hay canal, no lo sabe.</p>' },
    { h: 'Hechos públicos y filtraciones',
      html: '<p>Lo público es la excepción que confirma la regla: ahí sí puedes poner a casi todos, pero con matiz de tiempo. Muchas veces una fecha posterior para algunos actores es más realista que el mismo día.</p><ul><li><b>Filtración</b>: si quieres ensayar una, pon el hecho con una segunda línea posterior y la audiencia ampliada; que sea decisión tuya, anotada, no un accidente.</li><li><b>Copia oculta o informal</b>: no la inventes; si nadie la mandó, no existe.</li><li><b>Mismo hecho, dos momentos</b>: es válido fechar dos líneas del mismo hecho con audiencias que crecen.</li></ul>' },
    { h: 'Cómo se comprueba después',
      html: '<p>En la corrida, un script convierte tus líneas en el contexto de cada actor (lo verás en «armar contextos»). Antes de lanzar la ronda siguiente, lee el contexto de cada uno y hazte una pregunta: <b>¿sabe algo que no debía saber?</b> Una fuga de visibilidad es peor que un hecho omitido: contamina toda la simulación sin dejar rastro visible.</p>' }
  ],
  keypoints: [
    'El canal por el que sale un hecho decide quién se entera de él.',
    'Carta con copias, cuaderno, memorando interno, control, proveedores y lo público tienen audiencias distintas.',
    'Un actor fuera de la copia no reacciona, y esa inacción es información para el informe.',
    'Lo público no es instantáneo: la fecha en que cada actor lo advierte puede diferir.',
    'Antes de la ronda siguiente, revisa el contexto de cada actor para descartar fugas de visibilidad.'
  ],
  flashcards: [
    { q: '¿Quién ve una carta con copia?', a: 'El destinatario y quienes figuran en copia.' },
    { q: '¿Quién ve un memorando interno de la supervisión?', a: 'Solo la supervisión; los demás actores no se enteran.' },
    { q: '¿Cómo tratas un hecho público?', a: 'Con audiencia amplia, pero considerando la fecha real en que cada actor lo advierte.' },
    { q: '¿Qué es una fuga de visibilidad?', a: 'Que un actor sepa algo que por su canal no debía conocer; contamina la simulación.' },
    { q: '¿Qué pregunta guía la etiqueta de audiencia?', a: '¿Por qué canal y cuándo llegaría este hecho a este actor?' }
  ],
  quiz: [
    { q: 'La supervisión escribe un memorando interno para decidir diferir la valorización. ¿Quién lo ve?', opts: ['Todos los actores', 'Solo la supervisión', 'La Entidad y el contratista'], correct: 1, why: 'Un documento interno solo lo conoce quien lo emite.' },
    { q: 'Un actor reacciona a algo que no le llegó por ningún canal. Es:', opts: ['Un hallazgo valioso', 'Una fuga de visibilidad', 'Un actor bien diseñado'], correct: 1, why: 'Sabe lo que no podía saber; hay que revisar el contexto que se le armó.' },
    { q: 'Un vecino publica un video del frente cerrado. ¿Cómo lo resuelves?', opts: ['Solo a los vecinos', 'Con audiencia amplia y atención a cuándo lo advierte cada actor', 'No se resuelve'], correct: 1, why: 'Lo público llega a muchos, pero no a todos a la vez.' }
  ]
});
