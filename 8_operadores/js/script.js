var idade = 18;
// o valor 0 é considerado com false e 1 com true
var possuiCarro = 1;

if (idade >=18){
    console.log('O usuário pode tirar a carteira');
}
if (idade <=17){
    console.log('O usuário não pode tirar a carteira');
}
if(possuiCarro){
    console.log('O usuário já pode andar de carro');
}

var x = 1;
var y = 2;

// operadores de atribuição
//soma 
console.log(x = x + y);
console.log(x +=y);
// multiplicação
console.log(x *= y);
//subtração
console.log(x -= y);


// console.log('while <= 100')
// while (x <= 100){
//     console.log(x)
//     x*=2
// }

// for (var i = 0; i <=100; i*=2){
//     console.log(`Repetindo valor de $(1)`)
// }

// for(let i=8; i<=100; i){
//     console.log(`Repetindo valor de $(i)`);
// }

var nome = "Samuel";

if(nome == "Samuel"){

    console.log('O seu nome é ${nome}');

}

if(nome != "Samuel"){

    console.log ('Seu nome não é Samuel')

}



var age = 15



if (nome == 'Samuel' || age >=15){

    console.log('Pode entrar no curso técnico')

}

if (nome == 'Pedro' || age >=15){

    console.log ("Pode matricular no curso")

}