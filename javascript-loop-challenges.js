

// 1. Factorial Calculat
let a = 8;
for(var i = 7; i >= 1; i--){
    a *= i
}
console.log(a);




// 2. Prime Numbers from 1 to 20

for (let b = 2; b <= 20; b++) {
    let isPrime = true;
    for (let ba = 2; ba < b; ba++) {
        if (b % ba === 0) {
            isPrime = false; 
        }
    } 
    if (isPrime) {
        console.log(b);
    }
}



// 3. FizzBuzz

for (let c = 1; c <= 50; c++) {
    if (c % 3 == 0 && c % 5 == 0) {
        console.log("FizzBuzz");
        continue
    }
    else if (c % 3 == 0) {
        console.log("Fizz");
        continue
    }
    else if (c % 5 == 0) {
        console.log("Buzz");
        continue
    }
    console.log(c);
}


// 4. Star Pattern
let d = "";
for (let star = 1; star <= 5; star++) {
    d += "*";
    console.log(d); 
}



// 5. Even Number Counter

count = 0
for (let e = 1; e <= 100; e++) {
    if (e % 2 == 0) {
        console.log(e);
        count++
    }
}
console.log(count);





// 6. Sum of Odd Numbers

let sum = 0;
for (let f = 1; f <= 100; f++) {
    if (f % 2 != 0) {
        sum += f;
    } 
}
console.log(sum);





// 7. Skip Multiples of 7

for (let g = 1; g <= 50; g++) {
    if (g % 7 == 0) {
        continue
    }
    console.log(g);
}



// 8. Countdown with Break

for (let h = 20; h >= 1; h--) {
    if (h == 8) {
        console.log("Countdown Stopped");
        break
    }
    console.log(h);  
}


// 9. Multiplication Table Generator

for (let i = 1; i <= 10; i++) {
    let mul = i * 12;
    console.log(mul);
}



// 10. Number Analyzer

for (let j = 1; j <= 50; j++) {
    if (j % 2 == 0 && j % 3 == 0) {
        console.log("Divisible by 2 and 3");
    }else if (j % 2 == 0){
        console.log("Even");
    }else if (j % 3 == 0){
        console.log("Divisible by 3");
    }else{
        console.log(j);
    }
}