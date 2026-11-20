function avr(num1, num2, num3, num4) {
    let total = num1 + num2 + num3 + num4;
    let av = total / 4;
    console.log(av);
    
}
avr(33, 87, 90, 56);


function cal(num1, num2) {
    let sum = num1 + num2;
    let diff = num1 - num2;
    let prod = num1 * num2;
    let quot = num1 / num2;
    console.log(num1 + " + " + num2 + " =  " + sum);
    console.log(num1 + " - " + num2 + " =  " + diff);
    console.log(num1 + " * " + num2 + " =  " + prod);
    console.log(num1 + " / " + num2 + " =  " + quot);
}
cal(10, 5);



const mul = num => {
    for (let a = 1; a <= 10; a++) {
        console.log(a * num);
    }
}
mul(12);

const mul2 = (a, b) => {
    
    return a * b;
}

mul2(2, 7);

const odd = (numStart, numEnd) => {
    let oddNum = "";
    for (let index = numStart; index <= numEnd; index++) {
        if (index % 2 !== 0) {
            oddNum += index + " , ";
        }
    }
    for (let index = numStart; index >= numEnd; index--) {
        if (index % 2 !== 0) {
            oddNum += index + " , ";
        }
    }
    return oddNum;
}
console.log(odd(20, 10));

let books = ["book1", "book2", "book3", "book4", "book5"];
console.log(books);

for (let index = 0; index < books.length; index++) {
    console.log(books[index]);
}