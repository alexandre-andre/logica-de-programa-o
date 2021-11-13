function is_prime(n){
    if(n < 2) 
        return false;
    
    let raiz = Math.floor(Math.sqrt(n));
    // Testa a divisibilidade de todos os números de 2 a raiz de n. Se for divisível por algum, o número não é primo. 
    for(let i = 2; i <= raiz; i = i + 1) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

function get_divisores_ordem_crescente(n){
    let divisores = [];
    // Testa a divisibilidade de todos os números de 2 a n-1. Os que forem divisíveis são inseridos no array 
    for (let i = 2; i < n; i = i + 1){
        if (n % i === 0){
            divisores.push(i);
        }
    }
    return divisores;
}

function get_prime_divisores(n){
    let divisores = get_divisores_ordem_crescente(n);
    // Pega a lista de divisores (obtidos pela função) e testa a primalidade de cada um
    // Começamos pelo final da lista pois desta forma sabemos que o primeiro número encontrado é o maior divisor 
    // (algo que só é possível porque a lista de divisores está em ordem crescente)
    
    for (let i = divisores.length-1 ; i >= 0 ; i = i - 1){
        if (is_prime(divisores[i])){
            return divisores[i];
        }
    }
    return n;
}
console.log(get_prime_divisores(13195))
