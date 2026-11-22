let num = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]


for (let i = 0; i < num.length; i++) {
    let sum = 0;
    for (let j = 0; j < num[i].length; j++) {
        sum += num[i][j];
    }
    console.log(sum);
}
// console.log(total);

for (let i = 0; i < num.length; i++) {
    let st = "";
    for (let j = 0; j < num[i].length; j++) {
        st += num[i][j] + " ";
    }
    console.log(st);
}


let total = 0;
for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num[i].length; j++) {
        total += num[i][j];
    }
}
console.log(total);
