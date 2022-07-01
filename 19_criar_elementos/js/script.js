// Outras possibilidades do JS e DOM é criar elementos
// o texto de um elemento é considerado um nó na arvore do DOM

// inserir o elemento div#container
// criando a tag de elemento <P></P>
var novoParagrafo = document.createElement("p");
// criando o novo texto que sera inserido no elemento
var texto = document.createTextNode("Novo paragrafo em javascript");

// appendChild inserir o nó novoParagrafo <P></P> o texto
novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

var body = document.querySelector("body");
var div = document.querySelector("#container");

div.appendChild(novoParagrafo);

var el = document.createElement("span");
el.appendChild(document.createTextNode("Texto do Span"));

console.log(el)
body.appendChild(el)