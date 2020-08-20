const converter = require('./converterDinheiro');

var dinheiro = 250;
var dolar = converter.converterDolar(dinheiro);
var euro = converter.converterEuro(dinheiro);
var peso = converter.converterPeso(dinheiro);
console.log(dinheiro+" reais equivalem a "+dolar.toFixed(2)+" dólares");
console.log(dinheiro+" reais equivalem a "+euro.toFixed(2)+" euros");
console.log(dinheiro+" reais equivalem a "+peso.toFixed(2)+" pesos argentinos");
