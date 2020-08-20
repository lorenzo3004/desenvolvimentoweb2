function calcularFibonacci(numero){
    
    var num = 0;
    var proximo_numero = 1;
    var auxiliar;
  

    while ( num <= numero )
    {
        numero += num+", ";
        auxiliar = proximo_numero;
        proximo_numero = proximo_numero + num;
        num = auxiliar;
    }
}


  module.exports = {calcularFibonacci};