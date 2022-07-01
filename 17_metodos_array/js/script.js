// lenght => número de elementos array 

var valores = [1,2,4,5];

console.log(`valores tem ${valores.length}`);

//push => adicionar elementos array
console.log('push')
valores.push(6);
valores.push('qualquer coisa')

console.log(valores);

//pop => remover o ultimo elemento do array
console.log('pop')
valores.pop();
console.log(valores);

// unshift => adicionar elemento no começo do array
console.log('unshift')
valores.unshift(0);
console.log(valores);

// shift => remove o elemento no comeco do array
console.log('shift')
valores.shift();
console.log(valores);

//acessar o ultimo elemento do array
console.log('ultimo elemento do array')
console.log();

// isArray => verifica se isso é uma array
console.log('isArray')
console.log(Array.isArray(5));
console.log(Array.isArray(valores));

//splice => adiciona elemento no meio do Array
console.log('splice')
// parametro do array...
// onde vou inserir, 0 vou deletar, 999 o que vou inserir

valores.splice(2, 0, 999);
console.log(valores)


valores.splice(4,1)

// indexOf
console.log('indexOf')
console.log(valores.indexOf(5));
 // qual elemento do Array

// join 
console.log('join')
var texto = ["0", "rato", "roeu", "a roupa", "do rei", "de roma"];
console.log(texto)
console.log(texto.join(" "));

// reverse => inverter os elementos do array
console.log('reverse')
console.log(texto.reverse());

//acessar o ultimo elemento do Array
console.log(`ultimo elemento do array`)
console.log(valores);
console.log(valores[valores.length - 1]);