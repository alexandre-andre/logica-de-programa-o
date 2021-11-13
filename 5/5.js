// 5
function even_fibonacci_numbers(roof) {
    // Write your code here
    

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const roof = parseInt(readLine().trim(), 10);

    const result = even_fibonacci_numbers(roof);

    ws.write(result + '\n');

    ws.end();
}