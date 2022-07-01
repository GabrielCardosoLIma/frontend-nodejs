// selecionar elemento
var title = document.querySelector('#title');

// adiciona estilo
title.style.color = "brown";

// background-color
// no js as propriedades css utilizam a propriedade
// toda junta com o Camel Case
title.style.backgroundColor = "yellow";

// selecionar elemento
var subtitle = document.querySelector(".subtitle");
// adicionar varios estilos
subtitle.style.cssText = "color: blue; background-color: pink; font-size: 50 px";

subtitle.classList = "subtitle";
subtitle.removeAttribute("style") 