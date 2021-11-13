// 15
function poligrama(word) {
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const word = readLine();

    const result = poligrama(word);

    ws.write(result + '\n');

    ws.end();
}