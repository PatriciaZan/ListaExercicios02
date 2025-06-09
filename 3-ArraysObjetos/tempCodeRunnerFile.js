function exercicio(produtos){
    let copia = produtos.slice()
    copia.sort((a,b) => a.preco - b.preco)

    let nomes = copia.map(prod => prod.nome)

    return nomes
}

console.log('Exercicio =>' + exercicio(produtos));