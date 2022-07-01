//lembrar que as funções são criadas mas dever 
//ser invocadas ou chamadas

function primeiraFuncao(){
    console.log('Hello ... my first function')
}

// primeiraFuncao();

// function dizerNome(nome){
//     console.log(`O nome é ${nome}`);
// }

// dizerNome('Samuel');
// nome = 'Francisco';
// dizerNome(nome);
// sobrenome = 'Palhares';
// dizerNome(sobrenome);


// exemplo 2

// function dizerNome(nome,sobrenome){

//     console.log(`O nome é ${nome} ${sobrenome}`);

// }



// dizerNome('Samuel','Marciano');

// nome = 'Francisco';

// dizerNome(nome, '');

// sobrenome = 'Palhares';

// dizerNome('Camila',sobrenome);



// exemplo 3

function soma(a , b){

    var soma = a+b;

    return soma;

    // var result = a+b;

    // return result;

}

console.log(soma(1,2));



var outraSoma = soma(2,5)

console.log(outraSoma)

