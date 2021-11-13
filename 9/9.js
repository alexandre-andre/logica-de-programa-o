// 9
function smallest_multiple(roof) {
    // Write your code here

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const roof = parseInt(readLine().trim(), 10);

    const result = smallest_multiple(roof);

    ws.write(result + '\n');

    ws.end();
}
