let x = 16;
let multiplosDe3 = 0;
for (let i = 0; i < x; i += 3){
    multiplosDe3 = multiplosDe3 + i;
}

let multiplosDe5 = 0;
for (let i = 0; i < x; i += 5){
    multiplosDe5 = multiplosDe5 + i;
}

let multiplosDe15 = 0;
for (let i = 0; i < x; i += 15){
    multiplosDe15 = multiplosDe15 + i;
}

//console.log(multiplosDe3+multiplosDe5-multiplosDe15);

let sum = 0;
for (let i = 1; i < x; i++) {
    if(i % 3 === 0 || i % 5 === 0)
        sum += i;
}
//console.log(sum);

function multiples_of_3_or_5(roof) {
	let sum = 0;
	let number = 0;
	for (let i = 1; i < roof; i = i + 1){
		if (i % 3 === 0 || i % 5 === 0) {
			number = number + i;
			//console.log(number);
			}
		
	}
	return number;
}

let test_cases = [11, 15, 16]
let results = [33,45, 60]


for (let i = 0 ; i < test_cases.length; i += 1){
    let result = multiples_of_3_or_5(test_cases[i]);
    console.log (result);
    if (result != results[i]){
        console.log("Deu erro no exemplo " + i);
    }
    else {
        console.log("O exemplo " + i + " passou");
    }
}

console.log(multiples_of_3_or_5(x));

