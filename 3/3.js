// 3
function count_down(x) {
    // Write your code here
    let n = x;
    let arr = [];
    
    for (let i = 0; i <= x; i++) {
        
        if (n == 0) {
            arr.push(0 + '!!!')
        } else {
            arr.push(n-- + '...')
        }
        
    }
    
    return arr.join("")
    
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const x = parseInt(readLine().trim(), 10);

    const result = count_down(x);

    ws.write(result + '\n');

    ws.end();
}