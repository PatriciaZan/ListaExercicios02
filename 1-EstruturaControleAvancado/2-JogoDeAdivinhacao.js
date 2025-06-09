// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')();

let userGuess
let count = 0;
let randomNumber = Math.floor(Math.random() * 100) + 1
//console.log(randomNumber);

do{
    userGuess = Number(prompt("Adivinhe um número entre 1 - 100: "))
    if(userGuess > randomNumber){
        console.log("Muito alto");
    } else if(userGuess < randomNumber){
         console.log("Muito baixo!");
    }

    count++
} while(userGuess !== randomNumber)

console.log(`Você acertou o número ${randomNumber}!`);
console.log(`Você levou ${count} tentativas para acertar!`);
