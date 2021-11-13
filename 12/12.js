// 12
function lychrel_numbers(n) {
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const result = lychrel_numbers(n);

    ws.write(result + '\n');

    ws.end();
}