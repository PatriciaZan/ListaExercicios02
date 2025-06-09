// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

function palavrasUnicas(string){
    let words = []
    words = string.toLowerCase().split(" ")
    console.log(words);

    // conta quantas repetem
    let count = {}
    // manda aqui as palavras que estão repitidas
    let reptidas = []

    for(const palavra of words){
        count[palavra] = (count[palavra] || 0) + 1
        if(count[palavra] === 2){
            reptidas.push(palavra)
        }
    }
    return reptidas
}

console.log(palavrasUnicas("olá olá mundo mundo"))

console.log('--------------------------');

console.log(palavrasUnicas("olá olá mundo mundo World world Mundo"))