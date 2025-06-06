// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.


// Com um delay de 2 segundos 
function debounce(fn, delay = 2000){
  let timer;

  // retona uam função anonima com o número de argumentos não definidos
  return (...args) => {
    // limpa o timer (tempo)
    clearTimeout(timer);

    timer = setTimeout(() => { fn.apply(this, args); }, delay);
  };
}


