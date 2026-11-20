let stu = ["zainab", "ali", "mohammad", "fatimah", "zahra", "mahmod"]

stu.push("sharif")

stu[1] = "ali ahmad"

console.log(stu[stu.length -1]);

console.log(stu[1]);

stu.splice(4, 1)


console.log(stu.slice(2, 4));

console.log(stu.slice(4, 2));

console.log(stu.slice(-4, -2));

console.log(stu.slice(-4, -2));

console.log(stu);



let date = "8/6/2026"
let newDate = date.split("/")
console.log(newDate);
let year = newDate[newDate.length - 1] - 621;
console.log(year);


