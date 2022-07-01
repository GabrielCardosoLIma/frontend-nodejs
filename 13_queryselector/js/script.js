var itensClasse = document.getElementsByClassName('item')
console.log(itensClasse);

//query selector volta todos os elementos e volta uma nodelist
var itensQuery = document.querySelectorAll('#listas li')
console.log(itensQuery);

var itensQuery2 = document.querySelectorAll('#listas -item')
console.log(itensQuery2);

//queryselector
var lista = document.querySelector('#lista');
console.log(lista);

////////////////////////////////////////////////////////////////////
// Alterar conteúdo

var title = document.querySelector('#title');
console.log(title);

// InnerHTML
title.innerHTML = 'Mudando o H1';

// textContent => mais utilizada, recomendo...
var subtitle = document.querySelector('.subtitle');
console.log(subtitle);

subtitle.textContent = 'Mudando o H2'