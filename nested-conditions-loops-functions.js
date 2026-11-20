let a = 32;

let b = -18;

if (a > 0){
    console.log("postive");
}else{
    console.log("negative");
}

let color = "green";

if (color === "red") {
    console.log("stop");
    
}else if (color === "yellow"){
    console.log("ready");
}else{
    console.log("go");
}

let score = 67;

if (score >= 50){
    console.log("pass");
    if (score >= 80){
        console.log("good")
    }  
}


let email = true;
let pass = true;
let user = "admin";

if (email && pass){
    if (user === "admin"){
        console.log("confirmed");
    }
    
    
}else{
    console.log("welcome");
    
}


let dip = true;

let ev = 89;

let doc = false;

if (dip){
    console.log("Admission Approved");
    if (ev >= 75){
        console.log("Diploma ok");
        if (doc){
            console.log("documents ok");
        }else{
            console.log("Missing Documents");
        }
    }else{
        console.log("Diploma Required");
        if (doc){
            console.log("uploade Diploma");
        } else{
            console.log("Rejected");
        } 
    }
    
}else{
    console.log("Admission Rejected");
    
}












// 1. Factorial Calculat
let a1 = 4;
for(var i = 3; i >= 1; i--){
    a1 *= i
}
console.log(a1);



let b1 = 5
for(var i = 4; i >= 1; i--){
    b1 *= i
}
console.log(b1);


let c = 6
for(var i = 5; i >= 1; i--){
    c *= i
}
console.log(c);

function fac(num) {
    let aa = 1;
    for (let aaa = 1; aaa <= num; aaa++) {
        aa *= aaa
    }
    console.log(aa);
}
fac(4);
fac(5);
fac(6);
fac(7);


function dataStu(name, lName, add) {
    console.log(name + " " + lName + " "  + add);
    
}
dataStu("satara", "timoori", "herat")
dataStu("samira", "habibi", "herat")
dataStu("meena", "jami", "ghazni")
dataStu("samanah", "Qorishi", "kabul")

