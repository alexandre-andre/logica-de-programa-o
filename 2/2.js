// 2
function difference(x) {
    // Write your code here
    let result = x - 10
    
    // se o valor de result for menor que zero
    if (result < 0) {
        // result serah multiplicado por -1 para que o valor negativo seja convertido para positivo
        result *= (- 1);
        
    }
    
    return result
}
difference()
console.log(difference(1))


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const x = parseInt(readLine().trim(), 10);

    const result = difference(x);

    ws.write(result + '\n');

    ws.end();
}