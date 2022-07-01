var roupas = [
    { produto:'Camisa', preco: 25, cor: 'Amarelo' },
    { produto:'Calça', preco: 80, cor: 'Azul' },
    { produto:'Jaqueta', preco: 100, cor: 'Preto' },
    { produto:'Camiseta', preco: 15, cor: 'Rosa' },
    { produto:'Calção', preco: 20, cor: 'Azul' },
]

console.log(roupas);

var precoAlto = roupas.filter( (filtrar) =>{
    return roupas.precos >25
})

console.log(precoAlto);