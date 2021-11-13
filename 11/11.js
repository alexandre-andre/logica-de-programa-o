// 11
function square_digit_chains(n) {
    // Write your code here

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const result = square_digit_chains(n);

    ws.write(result + '\n');

    ws.end();
}