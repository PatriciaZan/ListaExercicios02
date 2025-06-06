// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

let vendas = [
    {cliente: 'Anna',   total: 100},
    {cliente: 'Maria',  total: 200},
    {cliente: 'Pedro',   total: 300},
    {cliente: 'Anna',   total: 150},
    {cliente: 'Pedro',   total: 500},
    {cliente: 'Marcos', total: 10},
]

function somaVendas(vendas){

    let vendasArray = vendas.reduce((acc, venda) => {
        let cliente = venda.cliente;
        let total = venda.total

        // verifica se o cliente possue mais entradas e soma seu total
        if(acc[cliente]){
            acc[cliente] += total
        }else{
            acc[cliente] = total
        }

        return acc
    },{})

    return vendasArray
}

console.log(somaVendas(vendas));

