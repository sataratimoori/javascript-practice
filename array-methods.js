let names = ["ali", "ahmad", "laila"];

let upperName = names.map((upper)  => upper.toUpperCase());

console.log(upperName);




let stu = [
    {
        name: "ali",
        age: 20,
        add: "herat"
    },
    {
        name: "ahmad",
        age: 21,
        add: "kabul"
    },
    {
        name: "laila",
        age: 17,
        add: "kabul"
    },
    {
        name: "fatimah",
        age: 25,
        add: "herat"
    }
]


let stuKabul = stu.filter((kabul) => kabul.add === "kabul")

console.log(stuKabul.length);



let stuAge = stu.filter((ages) => ages.age > 20).map(names => names.name)

console.log(stuAge);

