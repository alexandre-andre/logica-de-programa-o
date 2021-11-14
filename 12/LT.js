/*
Para extrair o último digito de um número, usa-se o resto da sua divisão por 10.
Para extrair o segundo, é necessário dividir o número por 10 e arredondar para baixo. Desta forma, podemos 
extraí-lo usando o resto por 10.
Para extrair os próximos números, repete o processo.
*/
function get_digitos(x, reverse){
    let digitos = [];
    for ( let aux = x; aux > 0; aux = Math.floor(aux/10)){
        digito = aux % 10;
        if(reverse === false)
            digitos.unshift(digito);
        else 
            digitos.push(digito);
    }
    return digitos;
}

function is_palyndrome(x){
    let num = get_digitos(x, false);
    let reverse = get_digitos(x, true);
    if (num.toString() === reverse.toString()){
        return true;
    }
    else{
        return false;
    }
}

function to_number(x){
   return (x.join(''))*1;
}
let lychrel_numbers = [];
function is_lychrel(x){
    let num = x;

    for (let i = 0; i < 50; i = i + 1){
        if (is_palyndrome(num) === true){
            return false;
        }
        let digitos_reverse = get_digitos(num,true);
        let reverse = to_number(digitos_reverse);
        num = num + reverse;
    }
    lychrel_numbers.push(x);
    return true;
}

function solucao(x){
    let qtd = 0;
    for(let i = 0; i < x; i = i + 1){
    is_lychrel(i);
     //       qtd = qtd + 1;
    }
    //return qtd;
    return lychrel_numbers;
}
console.log(solucao(1000))