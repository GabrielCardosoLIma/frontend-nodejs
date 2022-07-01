const chances = 6;
var chute = 0;
var acertos;

function jogar(clicado) {
    var letra = document.getElementById(clicado).value;
    var cont;
    var contador = 0; 
    for (i = 1; i <= tamanho; i++){
        cont = document.getElementById('letra_'+i);
        if(letra.toLowerCase() == cont.value){
            cont.style.color = "black";
            contador++;
            acertos++;
        }
    }

    if(acertos == tamanho){
        setTimeout(function() {
            window.location.href = "youwin.html";
        },2000);
        }

    if (contador == 0){
    chute++;
    document.querySelector('[name="c'+chute+'"]').style.visibility = "visible";
    }
    if (chute == chances)setTimeout(function() {
        window.location.href = "gameover.html";
    },2000);
    }
