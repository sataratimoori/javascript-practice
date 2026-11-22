console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);


for (let index = 10; index > 0; index--) {
    console.log(index); 
}

// solution 1
for (let a = 2; a <= 20; a++) {
    if (a % 2 == 0){
        console.log(a);
    }
    
    
}


// solution 2
for (let b = 2; a <= 20; b += 2) {
    console.log(b);
}



// solution 3
for (let d = 1; d < 11; d++) {
    console.log(d * 2);
}


// solution 4
// while loop
let c = 2
while (c <= 20) {
    console.log(c);
    c += 2
}





// solution 1 even
for (let e = 1; e <= 20; e++) {
    if (e % 2 != 0){
        console.log(e);
    }   
}

// solution 2 even
for (let e = 1; e <= 20; e += 2) {
    console.log(e);  
}


// solution 3 even
for (let e = 1; e <= 20; e += 2) {
    console.log(e);  
}



// solution 1 *5
for (let f = 5; f < 51; f += 5) {
    console.log(f);
}


// while (condition) {
    
// }


// solution 1 *5
for (let f = 1; f < 21; f++) {
    if (f % 5 != 0){
        console.log(f);
    }
}

// solution 2 *5
let f = 1;
while (f <= 20) {
     if (f % 5 != 0){
        console.log(f);
    }
    f++;
}



// solution 1 *5
for (let f = 1; f < 21; f++) {
    if (f % 5 == 0){
        continue
    }
    console.log(f);
}


for (let g = 10; g > 0; g--) {
    console.log(g); 
}
 console.log("finish");


for (let h = 1; h <= 30; h++) {
   if (h % 5 == 0){
        continue
    }
    if (h == 27){
        break
    }
    console.log(h); 
}






