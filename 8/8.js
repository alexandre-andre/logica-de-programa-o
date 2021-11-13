// 8
function caixa(values) {
    // Write your code here

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const valuesCount = parseInt(readLine().trim(), 10);

    let values = [];

    for (let i = 0; i < valuesCount; i++) {
        const valuesItem = parseInt(readLine().trim(), 10);
        values.push(valuesItem);
    }

    const result = caixa(values);

    ws.write(result + '\n');

    ws.end();
}