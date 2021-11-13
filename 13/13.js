// 13
function digits_sum(number_s) {
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const number_s = parseInt(readLine().trim(), 10);

    const result = digits_sum(number_s);

    ws.write(result + '\n');

    ws.end();
}