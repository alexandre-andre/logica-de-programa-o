// 4
function multiples_of_3_or_5(roof) {
    // Write your code here
    let nat = 0
    
    // i comeca em zero; e enquanto i for < roof; add +1 ao valor de i
    for (let i = 0; i < roof; i++) {
        
        // se o resto de i/3 = 0
        if ((i % 3) == 0) {
            // soma i a variavel nat
            nat += i;
            
            // se o resto de i/5 = 0
        } else if ((i % 5) == 0) {
            // soma o valor de i a variavel nat
            nat += i;
            
        }  
    };
    
    return nat
}
multiples_of_3_or_5()
console.log(multiples_of_3_or_5(10))


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const roof = parseInt(readLine().trim(), 10);

    const result = multiples_of_3_or_5(roof);

    ws.write(result + '\n');

    ws.end();
}