// 1
const dataStu = (name, lNAME, age, add) => {
    return "Name:" + name + ", Last Name: " + lNAME + ", Age: " + age + ", Address: " + add;
}
console.log(dataStu("Satara", "Timoori", 19, "Herat"));
console.log("\n");
console.log(dataStu("Sara", "Aamadi", 23, "Kabul"));
console.log("\n");
console.log(dataStu("Zahra", "Mohammdi", 21, "Balkh"));
console.log("\n");
console.log(dataStu("Ali", "Taheri", 20, "Ghazni"));
console.log("\n");
console.log(dataStu("Mohammad", "Alizadah", 21, "farah"));
console.log("\n");



// 2
const number = (start, end) => {
    let result = "";
    for (let a = start; a <= end; a++) {
        if (a > 50) {
            result += a +  ": The number is greater than 50" + "\n";
        }
        else if (a < 50) {
            result += a + ": The number is less than 50" + "\n";
        }
        else {
            result +=  a + ": The number is equal to 50" + "\n";
        }
    }
    return result;
};
console.log(number(1, 100));
console.log("\n");
console.log("\n");




// 3
const fac = num => {
    let i = 1;
    for (let a = num; a >= 1; a--) {
        i *= a;
    }
    return i;
}
console.log(fac(5));
console.log("\n");
console.log("\n");





// 4
const eligible = (name, age) => {
    if (age >= 18) {
        return name + " is eligible to vote.";
    } else {
        return name + " is not eligible to vote.";
    }
};
console.log(eligible("Satara", 19));
console.log("\n");
console.log(eligible("Sara", 12));
console.log("\n");
console.log(eligible("Zahra", 21));
console.log("\n");
console.log(eligible("Ali", 20));
console.log("\n");
console.log(eligible("Mohammad", 17));
console.log("\n");




// 5
const Rectangle = (length, width) => {
    let area = length * width;
    return area;
}
console.log(Rectangle(5, 10));
console.log("\n");
console.log(Rectangle(7, 8));
console.log("\n");





// 6
const subjects = num => {
    if (num === 1) {
        return "dari , math, bio, chem, phy, jeology";
    }
    else if (num === 2) {
        return "jeology, english, dari , math, bio, chem, phy";
    }
    else if (num === 3) {
        return "jeology, english, dari , math, bio, chem, phy";
    }
    else if (num === 4) {
        return "jeology, english, dari , math, bio, chem, phy";
    }
    else if (num === 5) {
        return "jeology, english, dari , math, bio, chem, phy";
    }
    else if (num === 6) {
        return "jeology, english, dari , math, bio, chem, phy";
    }
    else if (num === 7) {
        return "jeology, english, dari , math, bio, chem, phy";
    }
    else if (num === 8) {
        return "jeology, english, dari , math, bio, chem, phy";
    }
    else if (num === 9) {
        return "jeology, english, dari , math, bio, chem, phy";
    }
    else if (num === 10) {
        return "jeology, english, dari , math, bio, chem, phy";
    }
    else if (num === 11) {
        return "jeology, english, dari , math, bio, chem, phy";
    }
    else if (num === 12) {
        return "jeology, english, dari , math, bio, chem, phy";
    }
    else {
        return "The class number is wrong.";
    }
};

console.log(subjects(6));
console.log("\n");
console.log("\n");


// 7
const primeNumber = num => {
    let isPrime = true;
    for (let a = 2; a < num; a++) {
        if (num % a === 0) {
            isPrime = false; 
        }
    } 
    if (isPrime) {
        return num + " is a prime number.";
    }else {
        return num + " is not a prime number.";
    }
}
console.log(primeNumber(6));
console.log("\n");
console.log("\n");



// 8
const bignum = (num1, num2, num3) => {
    let largest = 0;
    if (num1 > largest) {
        largest = num1;
    }
    if (num2 > largest) {
        largest = num2;
    }
    if (num3 > largest) {
        largest = num3;
    }
    return largest;
}
console.log(bignum(5, 10, 15));
console.log("\n");
console.log("\n");




// 9
const mul = num => {
    let result = "";
    for (let a = 1; a <= 10; a++) {
        result += num + " x " + a + " = " + (num * a) + "\n";
    }
    return result;
}
console.log(mul(5));
console.log("\n");
console.log("\n");




// 10
const month = num => {
    switch (num) {
        case 1:
            return "January";
        case 2:
            return "February";
        case 3:
            return "March";
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "October";
        case 11:
            return "November";
        case 12:
            return "December";
        default:
            return "Invalid month number.";
    }
};
console.log(month(2));
