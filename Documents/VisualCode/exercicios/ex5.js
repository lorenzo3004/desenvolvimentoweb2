var idade = Math.floor((Math.random() * 80));

if(idade <= 13){
    console.log(idade+" anos, criança");
}
else if(idade > 13 && idade <=18){
    console.log(idade+" anos, adolescente");
}
else if(idade > 18 && idade <= 60){
    console.log(idade+" anos, adulto");
}
else{
    console.log(idade+" anos, idoso ");
}