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

function get_next_palyndrome(x){
    for (let i = x - 1; i > 0; i = i - 1){
        if (is_palyndrome(i))
            return i;
    }
}

function nao_divisivel (x, max){
    let raiz = Math.ceil(Math.sqrt(x));
    for(let i = raiz; i < max; i = i + 1){
        if (x % i === 0 )
            return false;
    }

    return true;
}

function solucao1(x){
    let max = Math.pow(10, x);
    let palyndrome = (max * max) - 1;

    for (; nao_divisivel(palyndrome,max); palyndrome = get_next_palyndrome(palyndrome)){

    }
    return palyndrome;
}

let produtos_palindromos = [];

function gerarProdutos(max){
    for(let i = 1; i < max; i = i + 1){
        for (let j = i ; j < max; j = j + 1){
            let produto = i * j;
            if(is_palyndrome(produto)){
                produtos_palindromos.push(produto);
            }
        }
    }
}

function solucao2(x){
    let max = Math.pow(10, x);
    gerarProdutos(max);
    return Math.max(...produtos_palindromos);
}
let palyndrome = 999999;
    
for (let i = 0; i < 20; i = i + 1){
    console.log(palyndrome);
    palyndrome = get_next_palyndrome(palyndrome);
}