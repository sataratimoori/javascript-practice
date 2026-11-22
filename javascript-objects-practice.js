const person = {
    name: "ahmad",
    lastName: "ahmadi",
    age: 30,
    gender: "male",
    marriageStatus: "single",
    favorites: ["football", "coding", "music"],
    eat: function (time, food) {
        return `I am eating ${food} at ${time}`;
    }
};

console.log(person.lastName);
console.log(person.favorites[1]);
console.log(person["age"]);
console.log(person.eat("12:00 PM", "pizza"));
