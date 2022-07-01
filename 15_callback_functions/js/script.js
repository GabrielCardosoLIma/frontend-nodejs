function exibir(num){
    console.log(`A operação resultou em ${num}`);
}


function soma(a,b, callback){
    var op = a+b
    callback(op);
}

soma(2,2, exibir);

function multiplicacao(a,b, callback){
    var op = a * b
    callback(op);
}

multiplicacao(7,4, exibir);