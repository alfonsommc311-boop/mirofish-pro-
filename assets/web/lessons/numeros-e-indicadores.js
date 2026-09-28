Lesson.start({
  id: 'numeros-e-indicadores', area: 'La consigna de cada ronda', areaIcon: '✍️', icon: '🔢',
  title: 'Números e indicadores',
  subtitle: 'Probabilidades propias de la ronda y una línea fija que alimenta el gráfico, sin creerlas de más.',
  norma: 'Los números de un actor son juicios declarados dentro de su papel, no frecuencias ni pronósticos.',
  intro: '<p>Además de decidir y explicar, cada actor puede darte unos pocos números: qué tan probable ve un hecho, qué tan tenso está, cuánta confianza tiene. Puestos siempre en la misma línea y con los mismos nombres, esos números se pueden graficar ronda a ronda y muestran cómo se mueve la percepción de cada actor. La condición es tratarlos como lo que son: <b>juicios declarados</b>, no estadística.</p>',
  sections: [
    { h: 'Dos clases de números',
      html: '<ul><li><b>Probabilidades propias de la ronda:</b> «probabilidad de que el contratista comunique paralización antes del día 20: 40 %». Es lo que el actor cree, desde lo que sabe.</li><li><b>Indicadores fijos del caso:</b> pocos, definidos al armar el caso (por ejemplo, presión sobre la Entidad, confianza en la supervisión, riesgo percibido de controversia), en la misma escala en todas las rondas.</li></ul><p>Los indicadores se definen en el caso antes de la ronda 1; cómo se guardan lo verás en la lección del archivo del caso.</p>' },
    { h: 'La línea fija',
      html: '<p>Se pide una sola línea, con el mismo encabezado, orden y escala cada vez. Ejemplo de línea (ficticia; resultado simulado, Consorcio Andino, ronda 2):</p><p><span class="hl">**Indicadores:** riesgo_controversia=55 | confianza_supervision=30 | presion_entidad=60</span></p><p>Reglas de la línea:</p><ol><li>Escala fija de 0 a 100 en todos los indicadores.</li><li>Un solo renglón, sin explicaciones dentro.</li><li>Los mismos nombres y el mismo orden en todas las rondas y actores.</li><li>Un número por indicador; si no sabe, que lo diga en «Lo que no sé» y no lo invente.</li></ol><p>Con eso, una herramienta puede leer la línea y dibujar cómo cambió cada indicador ronda a ronda.</p>' },
    { h: 'Por qué una línea fija y no números sueltos',
      html: '<p>Los números en el texto libre son imposibles de recolectar; en una línea fija se copian sin interpretar. Además, cambiar de escala o de nombre entre rondas hace que el gráfico mienta: una subida de 40 a 55 no significa nada si en la ronda 1 la escala era de 0 a 10. Fija el instrumento antes de empezar.</p>' },
    { h: 'Cómo leer los números sin creerlos de más',
      html: '<ul><li>Un 40 % dicho por un actor no es un 40 % de frecuencia: es su juicio, generado por un modelo de lenguaje.</li><li>El modelo tiende a redondear (30, 40, 60) y a evitar los extremos: no tomes diferencias pequeñas como señal.</li><li>Lo valioso es la <b>brecha</b>: lo que un actor cree de su propio riesgo frente a lo que creen los demás.</li><li>Una sola corrida no es una distribución: repetirla puede mover los números.</li></ul><p>Para estimar una cifra con expertos y calibrarla, mira Decisiones PRO y Jev PRO; aquí los números son termómetro de percepción.</p>' },
    { h: 'La silla del actor',
      html: '<p>Al actor se le pide que ponga el número <b>desde lo que sabe</b>, no desde lo que sabes tú. Un contratista que ignora que los ensayos ya están en camino declarará un riesgo mayor que uno informado. Esa diferencia, si la consigna fue limpia, es el hallazgo. Y en la consigna solo se definen los indicadores; nunca se le dice cuál debería subir.</p>' }
  ],
  keypoints: [
    'Hay probabilidades propias de la ronda e indicadores fijos definidos al armar el caso.',
    'La línea de indicadores va en un solo renglón, con nombres, orden y escala idénticos cada ronda.',
    'Una escala o nombre cambiante hace que el gráfico engañe.',
    'Los números son juicios declarados del actor, no frecuencias ni pronósticos.',
    'Lo valioso es la brecha entre lo que un actor cree de su riesgo y lo que creen los demás.'
  ],
  flashcards: [
    { q: '¿Qué es la línea de indicadores?', a: 'Un renglón fijo con pocos números en la misma escala, que se recoge cada ronda para graficar.' },
    { q: '¿Por qué debe ser fija?', a: 'Para copiar los números sin interpretar y evitar que un cambio de escala o nombre distorsione el gráfico.' },
    { q: '¿Qué es un 40 % dicho por un actor?', a: 'Un juicio declarado dentro de su papel, no una frecuencia ni un pronóstico.' },
    { q: '¿Qué hallazgo dan los números?', a: 'La brecha entre lo que un actor cree de su riesgo y lo que creen los demás.' }
  ],
  quiz: [
    { q: '¿Qué pasa si cambias la escala de un indicador en la ronda 3?', opts: ['Nada', 'El gráfico deja de ser comparable y puede mentir', 'Mejora la precisión'], correct: 1, why: 'Los indicadores solo comparan si el instrumento no cambia entre rondas.' },
    { q: 'Un actor dice 70 en riesgo de controversia. ¿Cómo se lee?', opts: ['Hay 70 % de probabilidad real', 'Es su juicio declarado desde lo que sabe', 'Es un dato de la Entidad'], correct: 1, why: 'Son juicios dentro de un papel, generados por un modelo; no son frecuencias.' },
    { q: 'Si el actor no sabe un dato, lo correcto es:', opts: ['Que lo estime igual sin decirlo', 'Que lo anote en «Lo que no sé» y no lo invente', 'Que copie el de otro actor'], correct: 1, why: 'Los vacíos se declaran; el aislamiento impide que copie a otros y nadie inventa datos.' }
  ]
});
