// 6



function nth_prime(n) {
    // Write your code here
    let primo = []
    for (let i = 0; i < n; i++) {
        
        if (i === 2) {
            
            primo.push(i)
            
        } else if ((i % 3) == 1 || (i % 5) == 1 || (i % 7) == 1 || (i % 11) == 1) {
            
            if ((i % i) == 0) {
                primo.push(i)    
            }   
             
        }
        
    }
    
    return primo[primo.length - 1]
    
}

console.log(nth_prime(21))

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const result = nth_prime(n);

    ws.write(result + '\n');

    ws.end();
}