// 4
function multiples_of_3_or_5(roof) {
    // Write your code here
    let nat = 0
    
    for (let i = 0; i < roof; i++) {
        
        if ((i % 3) == 0) {
            nat += i;
            
        } else if ((i % 5) == 0) {
            nat += i;
            
        }  
    };
    
    return nat
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const roof = parseInt(readLine().trim(), 10);

    const result = multiples_of_3_or_5(roof);

    ws.write(result + '\n');

    ws.end();
}