// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

let produtos = [
    { nome: 'nome1', preco: 1 },
    { nome: 'nome2', preco: 5 },
    { nome: 'nome3', preco: 3 },
]

function ordenaCrescente(array){
    let newArray = array.map(prod => prod)
    //console.log(newArray);

    let crescente = newArray.sort((a,b) => a.preco - b.preco)
    //console.log(crescente);

    let nomeProdutos = crescente.map(produto => produto.nome)
    return console.log(nomeProdutos);
}

ordenaCrescente(produtos)





// // 1 - Cria um novo array
// let newArray = produtos.map(prod => prod)
// console.log(newArray);

// // 2 - Ordena de forma crescente com base no valor
// let crescente = newArray.sort((a,b) => a.preco - b.preco)
// console.log(crescente);

// // 3 - Mostra os names já em ordem crescente com base no preço
// let nomeProdutos = crescente.map(produto => produto.nome)
// console.log(nomeProdutos);






