//1 1 2 3 5 8 13 21 34 55 89

//34: 10
//45: 44 
function fibonacci (x){
    let ult = 1;
    let pult = 1;
    let soma = 0;
    if (x <= 2) return 1;
    else {
        for ( ; ult < x; ){
            if (ult % 2 === 0){
                soma = soma + ult;
            }
            let aux = pult;
            pult = ult;
            ult = pult + aux;
        }
    }
    return soma;
}

fibonacci(34);
even_fibonacci_numbers(34);


function even_fibonacci_numbers(roof){
    var fibonacci = [1, 2, 3];
    var sum = 2;
    var i = 2;
    for( ;fibonacci[i] < roof; ){
        let novo = fibonacci[i] + fibonacci[i-1];
        fibonacci.push(novo);
        if(fibonacci[i] % 2 === 0){
            sum = sum + fibonacci[i];
        }
        i = i + 1;
    }
    console.log(sum);
}

let test_cases = [34, 45]
let results = [10,44]


for (let i = 0 ; i < test_cases.length; i += 1){
    let result = fibonacci(test_cases[i]);
    console.log (result);
    if (result != results[i]){
        console.log("Deu erro no exemplo " + i);
    }
    else {
        console.log("O exemplo " + i + " passou");
    }
}
