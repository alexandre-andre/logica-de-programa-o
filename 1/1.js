// 1
function fahrenheit_to_celsius(temp_fahrenheit) {
    // Write your code here
    let convert = (temp_fahrenheit - 32) / 1.8; 
    // toFixed() fixa o valor de uma casa decimal apos a virgula
    return convert.toFixed(1)
}
fahrenheit_to_celsius()
console.log(fahrenheit_to_celsius(95))

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const temp_fahrenheit = parseInt(readLine().trim(), 10);

    const result = fahrenheit_to_celsius(temp_fahrenheit);

    ws.write(result + '\n');

    ws.end();
}
