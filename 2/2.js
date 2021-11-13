// 2
function difference(x) {
    // Write your code here
    let result = x - 10
    
    if (result < 0) {
        result *= (- 1);
        
    }
    
    return result
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const x = parseInt(readLine().trim(), 10);

    const result = difference(x);

    ws.write(result + '\n');

    ws.end();
}