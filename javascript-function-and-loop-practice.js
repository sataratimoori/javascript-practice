
// 1
function number(num) {
    if (num % 2 == 0) {
        console.log("Even");
    }else{
        console.log("Odd");
    }
}
number(23)




// 2
function largestNumber(num1, num2, num3) {
    let largeNum = 0;
    if (num1 > num2) {
        largeNum = num1
    }
    if (num2 > num3) {
        largeNum = num2
    }
    if (num3 > num1) {
        largeNum = num3
    }
    console.log(largeNum);
}
largestNumber(789, 342, 875)




// 3
function calculateGrade(score) {
    if (score == 100 && score >= 90) {
        console.log("A");
    }else if (score == 89 && score >= 80) {
        console.log("B");
    }else if (score == 79 && score >= 70) {
        console.log("C");
    }else if (score == 69 && score >= 60) {
        console.log("D");
    }else if (score < 60 && score == 1) {
        console.log("F");
    }else if (score > 100 || score <= 0) {
        console.log("Invalid score");
    }
}

calculateGrade(110)
calculateGrade(0)
calculateGrade(100)




// 4

function numberPNZ(numReturn) {
    if (numReturn > 0) {
        console.log("Positive");
    }else if (numReturn == 0) {
        console.log("Zero");
    }else{
        console.log("Negative");
    }
}

numberPNZ(12)
numberPNZ(-67)
numberPNZ(0)


// 5
function sumNum(numN) {
    let n = 0;
    for (let nN = 1; nN <= numN; nN++) {
        n += nN  
    }
    console.log(n);
}
sumNum(5)
sumNum(6)
sumNum(9)




// 6
function multiplication(numMul) {
    for (let mulN = 1; mulN <= 10; mulN++) {
        let result = numMul * mulN;
        console.log(mulN + " * " + numMul + " = " + result);
    }
}

multiplication(7)


// 7
function sumEvenNum(sumEven) {
    let sum = 0;
    for (let sumN = 1; sumN <= sumEven; sumN++) {
        if (sumN % 2 == 0) {
            sum += sumN;
        }
        
    }
    console.log(sum);
    
}
sumEvenNum(4)



// 8

function calculatePower(base, exponent) {
    result = base ** exponent;
    console.log(base + " ** " + exponent + " = " + result);
    
}
calculatePower(3, 2)



// 9
function squarePattern(numpatt) {
    let patt = ""
    for (let a = 1; a <= numpatt; a++) {
       for (let aa = 1; aa <= numpatt; aa++) {
            patt += "*";
       }
       console.log(patt);
       patt = "";
    }
}
squarePattern(5)





// 10
function numbersDivisible(count) {
    for (let n = 1; n <= count; n++) {
        if (n % 2 == 0 && n % 3 == 0) {
            console.log(n);
            
        } 
    }
}
numbersDivisible(122)

