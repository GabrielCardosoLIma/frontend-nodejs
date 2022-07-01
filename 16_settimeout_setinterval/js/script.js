//SetTmeout

console.log("Antes do SetTimeout");
//callback assincrono
//uma função, usando uma função dentro dela
// isso é callback

setTimeout( function() {
    console.log("Testando o SetTimeout")
}, 2000)

console.log("Depois do SetTimeout")

//setInterval
// vai executar de 1000 em 1000 segundos
setInterval( function() {
     console.log("Testando o SetInterval")
}, 1000);

setTimeout( function() {
    console.log("Não precisamos mais repetir")
    clearInterval(myInterval)
},5000);