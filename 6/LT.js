
function get_nth_prime(n){
    let num = 0;
    let cont = 0;
    for (let i = 0; cont < n; i = i + 1){
        if(is_prime(i)){
            num = i;
            cont = cont + 1;
        }
    }
    return num;
}

function is_prime(n){
    if(n < 2) 
        return false;

    let raiz = Math.floor(Math.sqrt(n));

    for(let i = 2; i <= raiz; i = i + 1){
        if (n % i === 0)
            return false;
    }

    return true;
}

console.log(get_nth_prime(10000));