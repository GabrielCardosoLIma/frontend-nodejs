// criar elemento 
var el = document.createElement("div");
// adicinando uma class na div

el.classList = "div-criada";

console.log(el);

var container = document.querySelector("#container");

// inserindo elemento filho
container.appendChild(el);

// inserindo elemnto antes el element
// insertBefore - INSERE ANTES...

var el2 = document.createElement('div');
el2.classList = "div-before";

var el3 = document.querySelector('#container .div-criada');

console.log(el3);
// inserindo el antes
// são os dois parametros 
// 1 o el que vou inserir 
// 2 o el é a posição de onde será a base para inserir antes
container.insertBefore(el2, el3)