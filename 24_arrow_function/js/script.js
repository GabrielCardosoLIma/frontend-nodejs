var x= 10;
var y=15;

function soma(a,b){
    return a+b;
}

console.log(soma(x,y));

var soma = (num1,num2) => num1+num2;

var multiplicar = (num1,num2) => {}

console.log(soma(x,y));

var frase = ('Estou vendo como criar arrow functions');
var fraseToArrays = (frase) => frase.split(' ');

console.log(fraseToArrays(frase));

// arrow function sem parametro
var semParam = () => console.log('Teste arrow function');
semParam();