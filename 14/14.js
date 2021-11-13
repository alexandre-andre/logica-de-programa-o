// 14
function largest_palindrome_product(digits) {
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const digits = parseInt(readLine().trim(), 10);

    const result = largest_palindrome_product(digits);

    ws.write(result + '\n');

    ws.end();
}