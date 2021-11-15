// 3
function count_down(x) {
    // Write your code here
    // n terah sempre o valor de x, o parametro da funcao
    let n = x;
    let arr = [];
    
    // i comeca com zero e serah iterado de +1 enquanto ele for menor ou igual a 10
    for (let i = 0; i <= x; i++) {
        
        // se n = 0
        if (n == 0) {
            // serah guardado em arr o valor 0!!!
            arr.push(0 + '!!!')

            // senao
        } else {
            // serah guardado para arr o valor de n - 1 concatenado com a string ...
            arr.push(n-- + '...')
        }
        
    }
    
    // como arr eh um array e a resposta pede uma string, o metodo join vai converter o array em uma string
    return arr.join("")
    
}
count_down()
console.log(count_down(10))

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const x = parseInt(readLine().trim(), 10);

    const result = count_down(x);

    ws.write(result + '\n');

    ws.end();
}