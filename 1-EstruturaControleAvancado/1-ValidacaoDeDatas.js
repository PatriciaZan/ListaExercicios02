// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) 
// e false caso contrário.

// Anotações
// 1 - Se for bissexto deve mudar daysMonth[2] para 29
// 2 - Ano contém 12 meses então : mes >= 1 || mes <= 12
// 3 - Para verificar dias validos deve levar em conta se o ano é bissexto, e depois comparar o mes ao numero de dias

// Array com o numero de dias nos meses
//                 /  J   F   M   A   Ma  Ju  Jl  Ag  Set Out nov Dez
const daysMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function mesValido(mes){
    if(mes >= 1 && mes <= 12){
        console.log(`Mês válido:  ${mes}`);
        return true
    } else{
        console.log(`Mês inválido!:  ${mes}`);
        return false
    }
}

function anoValido(ano){
    if(ano % 400 === 0 || ano % 4 === 0 && ano % 100 !== 0){
        daysMonth[2] = 29
        console.log(`Ano bissexto!`);
        return true
    } else if(ano != 0){
        console.log(`Ano 'normal'`);   
        return true
    } else{
        console.log(`Ano inválido!`);
        return false   
    }
}

function diaValido(dia, mes){
    mes = mes.replace(/^0+/, '');
    dia = dia.replace(/^0+/, '');
    
    //console.log(daysMonth[mes]);
    //console.log(dia);

    if(dia >= 1 && dia <= daysMonth[mes]){
        console.log(`Dia válido: ${dia}`);    
        return true 
    } else{
        console.log(`Dia inválido: ${dia}`);
        return false
    }  
}

function ehDataValida(dia, mes, ano){

    mesValido(mes);
    anoValido(ano);
    diaValido(dia, mes);

    if(mesValido && anoValido && diaValido){
        return console.log('Data válida');
    } else{
        return console.log('Data inválida');
    }
   
}

//              dia   mes    ano
//ehDataValida('21', '02', '2028');
ehDataValida('01', '06', '2025');

// Verifica se o formato da data é valido dia/mes/ano com o número correspondente de digitos(d{})
// if(!/^\d{2}\/\d{2}\/\d{4}	&#36;/.test(inputData)){
//      return false
//  }