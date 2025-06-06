// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

// Utilizado para evitar que uma função re execute um "calculo" que já foi realizado

// Será composta for uma função, um armazenamento em cache
//  e a re chamada da função utilizando-se do cache

function memoize(fn){
    // cria um cache
    let cache = new Map();

    return (...args) => {
        let key = JSON.stringify(args);

        if( cache.has(key)){
            return cache.get(key);
        }

        const resultado = fn(...args);

        cache.set(key, resultado);
        
        return resultado;
    }
}


