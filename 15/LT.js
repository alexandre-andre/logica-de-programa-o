function sort(x) {
    for(let i = 0; i < x.length - 1; i ++){
        let menor = i;
        
        for (let j = i+1; j < x.length; j = j + 1){
            if (x[j] < x[menor]){
                menor = j;
            }
        }
        let aux = x[i];
        x[i] = x[menor];
        x[menor] = aux;
    }
}

function dividir_string (string, partes){
    let dividido = [];
    let step = string.length/partes;
    for(let i = 0; i < string.length; i = i + step){
        let parte = string.substring(i,i+step);
        dividido.push(parte);
    }
    return dividido;
}

function are_equal(array){
    for (let i = 0; i < array.length; i++){
        if (array[i].toString() !== array[0].toString())
            return false;
    }
    return true;
}

function solucao(x){
    for (let i = 2; i <= x.length; i = i + 1){
        if (x.length % i === 0)
        {
            let dividido = dividir_string(x,i);
            //console.log(dividido);
            let partido = [];
            for(let j = 0; j < dividido.length;j++)
            {
                let parte = dividir_string(dividido[j],dividido[j].length);
                partido.push(parte);
            }
            for (let j = 0; j < partido.length; j = j + 1)
            {
                sort(partido[j]);
            }
            //console.log(partido);
            if(are_equal(partido))
            {
                return dividido[0];
            }
        }
    }
    return "Nada";
}

console.log(solucao("xadsre rdaxse"));

let x = ["abacaxi","d","e","c","a","z","l","k"];
sort(x);
//console.log(dividir_string("abacaxi",2))

function recursao(x){
    if (x < 0) {
        return;
    }
    recursao (x-1);
    console.log (x);
}

recursao(10);