function quadrado_da_soma(x){
    let soma = 0;
    for (let i = 1; i <= x; i = i + 1){
        soma = soma + i;
    }
    return soma * soma;
}

function soma_dos_quadrados(x){
    let soma = 0;
    for (let i = 1; i <= x; i = i + 1){
        soma = soma + (i*i);
    }
    return soma;
}

function diff(x){
    let quadrado_soma = quadrado_da_soma(x);
    let soma_quadrado = soma_dos_quadrados(x);
    return quadrado_soma - soma_quadrado;
}

console.log(diff(10))