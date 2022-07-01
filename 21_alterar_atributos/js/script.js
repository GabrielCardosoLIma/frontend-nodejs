//adiccionar atributo
var title = document.querySelector("#title");
title.setAttribute("clas","trocando-atributo");

console.log(title);

var btn = document.querySelector("#btn");
btn.setAttribute("disabled", "disabled");

var subtitle = document.querySelector(".subtitle");
subtitle.setAttribute("id","titulo2");

// remover atributo
var lista = document.querySelector("#lista");
lista.removeAttribute("id");