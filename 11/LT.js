
// Arrays que servem para reduzir o esforço computacional
// A proposta é, visto que aonde a cadeia vai terminar depende apenas do valor atual,
// se sabemos aonde ela vai, podemos retornar o resultado de uma vez.
// Para isso, sempre que uma cadeia termina em 89 ou 1, armazenamos todos os seus elementos nos arrays
let oitenta_nove = [];
let um = [];

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

/*
Quebramos o número atual em dígitos através da função get dígitos. Então, geramos o próximo número da cadeia 
a partir de sua soma.
*/
function get_next_number(x){
    let digitos = get_digitos(x);
    let soma = 0;
    for (let i = 0; i < digitos.length; i = i + 1) {
        soma = soma + (digitos[i] * digitos[i]);
    }
    return soma; 
}

/*
Usamos a função get_next_number para pegar o próximo número da sequência. Repetimos até
acharmos 1 ou 89.

Se em algum momento encontrarmos um número que já sabemos previamente que vai resultar em 89 ou 1, 
interrompemos a iteração e retornamos o resultado final.

Independente do caminho que a função tome, uma vez que seu destino seja conhecido, a cadeia gerada até 
então é adiciona no fim do respectivo array
*/
function get_sequence(x){
    let cadeia = [];
    for( var num = x ; num !== 1 && num !== 89; num = get_next_number(num)){
        cadeia.push(num);
        if (oitenta_nove.indexOf(num) !== -1){
            oitenta_nove.push([...cadeia]);
            return 89;
        }
        if (um.indexOf(num) !== -1){
            um.push([...cadeia]);
            return 1;
        }
       // console.log(num);
    }
    if (num === 89){
        oitenta_nove.push([...cadeia]);
    }
    if (num === 1){
        um.push([...cadeia]);
    }

    return num;
}

// Gera as sequências e usa a variável cont para armazenar quantas terminam em 89
function cadeia(n){
    let cont = 0;
    for (let i = 1; i < n; i = i + 1){
        let aux = get_sequence(i);
        if( aux === 89){
            cont = cont + 1;
        }
    }
    return cont;
}

console.log(cadeia(14924));