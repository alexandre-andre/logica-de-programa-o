function supermercado1(array){
    let aux = [];
    // Percorre o array, adiciona os números diferentes de zero e, para cada zero, remove o último número no array
    for(let i = 0 ; i < array.length ; i = i + 1){
        if (array[i] === 0){
            aux.pop();
        }
        else{
            aux.push(array[i]);
        }
    }
    let soma = 0;
    // Já removido os números que precisavam, só somar todos
    for (let i = 0 ; i < aux.length; i ++){
        soma += aux[i];
    }

    return soma;
}

/*
Indo de trás para frente, é possível usar uma lógica diferente. Neste caso, conta-se os zeros encontrados;
Cada zero encontrado quer dizer um número que deve ser saltado (ou seja, um número que, percorrendo da forma normal, seria subtraído).
Usa-se uma variável para contar a quantidade de zeros encontrados. Sempre que encontra um valor igual a zero, acumula um no número a pular.

Se o valor encontrado for diferente de zero, verifica-se se existe algum zero no acumulador. Se existe, pula o número e reduz em um o 
valor no acumulador de zeros. Somente se o acumulador estiver vazio que se soma o número no resultado final.
*/
function supermercado2(array){
    let soma = 0;
    let nums_a_pular = 0;

    for (let i = array.length-1; i >= 0; i = i-1){

        if (array[i] === 0){
            nums_a_pular = nums_a_pular + 1;
        }
        else{
            if(nums_a_pular > 0){
                nums_a_pular = nums_a_pular - 1;
            }
            else{
                soma = soma + array[i];
            }
        }
    }
    return soma;
}

let test_cases = [[0, 0, 0], [0, 2, 0, 0, 2], [7, 8, 0 , 9 , 0 , 2, 3, 0 , 7]]
let results = [0,2,16]

for (let i = 0 ; i < test_cases.length; i += 1){
    let result = supermercado2(test_cases[i]);
    console.log (result);
    if (result != results[i]){
        console.log("Deu erro no exemplo " + i);
    }
    else {
        console.log("O exemplo " + i + " passou");
    }
}