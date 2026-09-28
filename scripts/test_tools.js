// Prueba del motor de herramientas: cd assets/web/assets && node ../../../scripts/test_tools.js
var path = require('path');
var T = require(path.resolve(process.argv[2] || 'assets/web/assets/tools.js'));
var Calc = T.Calc, fails = 0;
function eq(a, b, m) { if (JSON.stringify(a) !== JSON.stringify(b)) { fails++; console.log('FALLA', m, JSON.stringify(a), '!=', JSON.stringify(b)); } }

var ids = ['A1', 'A2', 'A3'];
eq(Calc.actores('A1 Entidad\nContratista').map(function (a) { return a.id; }), ['A1', 'A2'], 'actores numerados');

var res = [
  '# Resolución R1 (vista de dios)',
  '- 29/09 [A1 A2] Carta de la supervisión a la Entidad',
  '  con copia al contratista',
  '- 30/09 [todos] Asiento público',
  '> Nota privada [A3] no pasa',
  '## R2',
  '- 05/10 [A3] Memorando interno del control',
  '- 06/10 [A1, A9] Actor que no existe'
].join('\n');
var r = Calc.leerResoluciones(res, ids);
eq(r.orden, [1, 2], 'rondas');
eq(r.rondas[1].length, 2, 'hechos R1');
eq(r.rondas[1][0].texto, 'Carta de la supervisión a la Entidad con copia al contratista', 'línea continuada');
eq(r.rondas[1][1].vis, ids, 'todos');
eq(r.errores.length, 1, 'actor desconocido detectado');

var c3 = Calc.contexto(r.rondas, 1, 'A3', 'Control');
eq([c3.antes, c3.nuevos], [0, 1], 'A3 solo ve lo público (la nota > no pasa)');
var c1 = Calc.contexto(r.rondas, 2, 'A1', 'Entidad');
eq([c1.antes, c1.nuevos], [2, 1], 'A1 antes/nuevos en R2');
eq(Calc.ocultos(r.rondas, 2, ['A2']).length, 2, 'hecho que nadie activo ve');

var ln = Calc.lineas([{ fecha: '01/10', texto: 'Hecho', vis: ['A1', 'A2', 'A3'] }, { fecha: '', texto: 'Otro', vis: ['A2'] }], ids);
eq(ln, '- 01/10 [todos] Hecho\n- s/f [A2] Otro', 'líneas');

var ind = Calc.indicadores('# R1 — A1 ENTIDAD\n**Indicadores:** controversia=55 · paralizacion=20\n# R1 — A2 CONTRATISTA\ntexto sin línea\n# R2 — A1 ENTIDAD\n**Indicadores:** controversia=70 · paralizacion=40');
eq(ind.filas.length, 4, 'filas indicadores');
eq(ind.sinLinea, ['R1 A2'], 'sin línea');
var s = Calc.series(ind.filas);
eq(s.rondas, [1, 2], 'rondas serie');
eq(s.s.controversia.A1[2], 70, 'valor');
eq(Calc.svg(s, 'controversia', { A1: 'Entidad' }).indexOf('<svg') === 0, true, 'svg');

var av = Calc.avisosPerfil({ quien: 'x', quieres: 'x', temes: 'x', puedes: 'x', sabes: '' });
eq(av.length >= 1, true, 'aviso sabes vacío');
eq(Calc.avisosPerfil({ quien: 'x', quieres: 'y', temes: 'z', puedes: 'w', sabes: 'algo', hipotesis: true }).length, 0, 'perfil sano');
eq(/HIPÓTESIS/.test(Calc.perfilMd({ sabes: 'algo', hipotesis: true })), true, 'md marca hipótesis');
eq(Calc.avisosPerfil({ quien: 'a', quieres: 'b según artículo 12', temes: 'c', puedes: 'd', sabes: 'e', hipotesis: true }).length, 1, 'artículo con número');

var cons = Calc.consigna({ ruta: 'D:\\casos\\x', actor: 'A2', nombre: 'Contratista', ronda: 2, indicadores: 'controversia: prob. de controversia\npago: pago antes del cierre', situacion: 'Recibes la carta', decision: 'Qué entregas el día 12' });
eq(/R2_contexto_A2\.md/.test(cons) && /controversia=__ · pago=__/.test(cons), true, 'consigna ronda 2');
eq(/Lee SOLO estos tres archivos/.test(cons), true, 'tres archivos');

console.log(fails ? fails + ' fallas' : 'todas las pruebas pasan');
process.exit(fails ? 1 : 0);
