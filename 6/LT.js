
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



let test_cases = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let results = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59,  61,  67, 71]


for (let i = 0 ; i < test_cases.length; i += 1){
    let result = get_nth_prime(test_cases[i]);
    console.log (result);
    if (result != results[i]){
        console.log("Deu erro no exemplo " + i);
    }
    else {
        console.log("O exemplo " + i + " passou");
    }
}
