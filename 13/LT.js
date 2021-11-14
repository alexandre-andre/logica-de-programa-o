/*
Para extrair o último digito de um número, usa-se o resto da sua divisão por 10.
Para extrair o segundo, é necessário dividir o número por 10 e arredondar para baixo. Desta forma, podemos 
extraí-lo usando o resto por 10.
Para extrair os próximos números, repete o processo.
*/
function get_digitos(x){
    let digitos = [];

    for ( let aux = x; aux > 0; aux = Math.floor(aux/10)){
        digito = aux % 10;
        digitos.unshift(digito);
    }
    return digitos;
}

function soma_digitos(x){
    let num = get_digitos(x);
    let soma = 0;
    for(let i = 0; i < num.length; i = i + 1){
        soma = soma + num[i];
    }
    return soma;
}

function solucao(x){
    let qtd = 0;
    for(let i = 0; i < 1000; i = i + 1){
        let soma = soma_digitos(i);
        if ( soma === x){
            qtd = qtd + 1;
        }
    }
    return qtd;
}

console.log(solucao(25))
