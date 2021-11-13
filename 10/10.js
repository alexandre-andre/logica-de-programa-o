// 10
function sum_square_difference(n) {
    // Write your code here
    
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const result = sum_square_difference(n);

    ws.write(result + '\n');

    ws.end();
}