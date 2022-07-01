var roupas = [
    { produto:'Camisa', preco: 25, cor: 'Amarelo' },
    { produto:'Calça', preco: 80, cor: 'Azul' },
    { produto:'Jaqueta', preco: 100, cor: 'Preto' },
    { produto:'Camiseta', preco: 15, cor: 'Rosa' },
    { produto:'Calção', preco: 20, cor: 'Azul' },
]

const produtos = [
    {nome : 'notebook',
    preco: 1100
},
    {nome : 'smartphone',
    preco : 400
}
]

const precosEmReal = produtos.map(p => p.preco *5.12);
console.log(precosEmReal);

console.log(produtos);