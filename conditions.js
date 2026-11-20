let fName = "satara";

var age = 19;

var bol = true;

var a = null;

var b;


console.log(typeof fName)
console.log(typeof age)
console.log(typeof bol)
console.log(typeof a)
console.log(typeof b)



let c = 12;

let d = 32;

let e = 56;

let f = true;

let g = false;

console.log(c--);
console.log(--c);

console.log(d++);
console.log(++d);

console.log(e < e);


let mathScore = 85;
let en = 90;
let san = 75;

let totalScore = mathScore + en + san;
let number = 3;

let avg = totalScore / number;
console.log(avg >= 60);
console.log(avg);



let visa = true;
let passport = false;
if (visa  && passport){
    console.log("you can travel");
}
else{
    console.log("you can not travel");
}


let num = 12.5;
if (num %2 == 0){
    console.log("even");
}

if ( num %2 == 1){
    console.log("odd");
}

else{
    console.log("not even and not odd")
}


let dari = 50;
let math = 80;
let phato = 100;
let dini = 100;
let eng = 85;

let score = (dari + math + phato + dini + eng) / 5;

console.log(score)

if (score >= 79) {
    console.log("A");
}
else if (score >= 60) {
    console.log("B");
}
else if (score >= 50) {
    console.log("C");
}
else if (score == 50) {
    console.log("D");
}
else{
    console.log("F");
}