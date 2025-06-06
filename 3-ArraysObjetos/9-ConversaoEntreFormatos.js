// 9. Conversão Entre Formatos
// Escreva duas funções:

//      ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
//        valor], ... ] e retorna o objeto equivalente.
//      ○ objetoParaPares(obj) faz o inverso, retornando um array de
//        pares.

// 1- irá receber um array [chave, valor]
// 2- tranformar em um obj onde {chave: valor}

function paresParaObjeto(pares){
    const objPares = {}

    // utilizando o for para iterar sobre os elementos do array e add cada em seu devido local
    for(let i = 0; i < pares.length; i++){
        let par = pares[i]; // par = '['chave', 'valor']'
        let chave = par[0]; // coloca na primeira posição que é a 'chave:'
        let valor = par[1]; // coloca na segunda posiçã oque é o ': valor'

        objPares[chave] = valor // add no obj
    }
    
    return objPares
}

const exemplo1 = [['chave', 'valor']]
const resultado1 = paresParaObjeto(exemplo1)

console.log('Resultado de paresParaObjeto: ');
console.log(resultado1);

console.log('----------------------------------');


function objetoParaPares(obj){ 
    const entries = Object.entries(obj)
    return entries
}

const exemplo2 = {chave: 'valor'}
const resultado2 = objetoParaPares(exemplo2)
console.log('Resultado de objetoParaPares: ');
console.log(resultado2);



