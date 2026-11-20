// 1
function numStatistics(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10) {
    let a = 0;
    if (num1 > a) {
        a = num1;
    }
    if (num2 > a) {
        a = num2;
    }
    if (num3 > a) {
        a = num3;
    }
    if (num4 > a) {
        a = num4;
    }
    if (num5 > a) {
        a = num5;
    }
    if (num6 > a) {
        a = num6;
    }
    if (num7 > a) {
        a = num7;
    }
    if (num8 > a) {
        a = num8;
    }
    if (num9 > a) {
        a = num9;
    }
    if (num10 > a) {
        a = num10;
    }
    console.log(a);



    if (num1 < a ) {
        a = num1;
    }
    if (num2 < a) {
        a = num2;
    }
    if (num3 < a) {
        a = num3;
    }
    if (num4 < a) {
        a = num4;
    }
    if (num5 < a) {
        a = num5;
    }
    if (num6 < a) {
        a = num6;
    }
    if (num7 < a) {
        a = num7;
    }
    if (num8 < a) {
        a = num8;
    }
    if (num9 < a) {
        a = num9;
    }
    if (num10 < a) {
        a = num10;
    }
    console.log(a);

    let even = 0;
    let odd = 0;
    if (num1 % 2 == 0) {
        even += 1
        
    }else{
        odd += 1
    }
    if (num2 % 2 == 0) {
         even += 1
        
    }else{
        odd += 1
    }
    if (num3 % 2 == 0) {
         even += 1
        
    }else{
        odd += 1
    }
    if (num4 % 2 == 0) {
         even += 1
        
    }else{
        odd += 1
    }
    if (num5 % 2 == 0) {
        even += 1
        
    }else{
        odd += 1
    }
    if (num6 % 2 == 0) {
         even += 1
        
    }else{
        odd += 1
    }
    if (num7 % 2 == 0) {

        even += 1
        
    }else{
        odd += 1
    }
    if (num8 % 2 == 0) {
        even += 1
        
    }else{
        odd += 1
    }
    if (num9 % 2 == 0) {
        even += 1
        
    }else{
        odd += 1
    }
    if (num10 % 2 == 0) {
        even += 1
        
    }else{
        odd += 1
    }
    console.log("even is " + even);
    console.log("odd is " + odd);
    
}
numStatistics(3, 6, 7, 2, 9, 8, 5, 2, 45, 23);


function num1to10(num1, num2) {
    let a = num1;
    let even = 0;
    let odd = 0
    for (let n = num1; n <= num2; n++) {
        if (n > a) {
           a = n;
        } 
        if (n % 2 == 0) {
            even += 1;
        }else{
            odd += 1;
        }
    }
    console.log(a);

    for (let n = num1; n <= num2; n++) {
        if (n < a) {
           a = n;
        }  
    }
    console.log(a);
    console.log("even is " + even);
    console.log("odd is" + odd);
    
}
num1to10(2, 5);

// 2

function bill(count) {
    if (count == 100) {
        console.log("$5");
        
    }else if (count > 101 && count < 200) {
        console.log("$10");
        
    }else if (count == 200) {
        console.log("$20");
        
    }
}
bill(120);

// 3
function fees(hours) {
    if (hours == 2) {
        console.log("Free");
    }else if (hours > 3) {
        console.log("$2/hour");
    }else if (hours > 5) {
        console.log("$3/hour");
    }
}
fees(5);

// mission 1

function countdown(num) {
    for (let index = num; index >= 1; index--) {
        console.log(index);  
    }
    console.log("Blast Off!");
    
}
countdown(6);

// mission 2
let ba = ""
for (let b = 1; b <= 5; b++) {
    
    ba += b;
    console.log(ba);
    
}
// for (let c = 1; c <= 5; c++) {
//     let ba = ""
//     for (let ca = 0; ca <= c; ca++) {
//         ba += ca
        
//     }
// }

// mission 3


let pin = "12345"
let blance = 70;
if (pin === "12345") {
    console.log("access granted");
    if (blance <= 100) {
        console.log("Low blance");
    }
}else{
    console.log("access denied");
}



function tecket(age, day, student, vip) {
    if (age < 12) {
        price += 5;
    }else if (age >= 60) {
        price += 10;
    }else{
        price += 7;
    }
    if (day === "monday") {
        
    }
}
tecket(15, "satarday", true, false)
