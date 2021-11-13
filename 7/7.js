// 7
function largest_prime_factor(number) {
    // Write your code here

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const number = parseInt(readLine().trim(), 10);

    const result = largest_prime_factor(number);

    ws.write(result + '\n');

    ws.end();
}