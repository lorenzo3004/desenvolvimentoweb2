const calcular = require('./calculo');

var altura = 3;
var largura = 6;
var area = calcular.calculo(altura, largura);

console.log('resultado:'+ area );
console.log(calcular.imprimir());
