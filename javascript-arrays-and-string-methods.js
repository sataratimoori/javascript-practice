// 1. Student List
let students = [];

// Add Students
students.push("Zainab", "Ali", "Mohammad", "Fatimah", "Zahra");

console.log(students);
console.log(students.length);





// 2. Remove the Last Student
console.log(students.pop());
console.log(students);





// 3. Add a New Class Captain
let captain = prompt("Whats your name, captain?");
students.unshift(captain);

console.log(students);





// 4. First Student Graduated
console.log(students.shift());
console.log(students);




// 5. Favorite Colors
let favColor = ["Red","Blue","Green","Black","White"];
let favColorLower = favColor.map((colors) => colors.toLowerCase());

let color = prompt("Whats your favorite color?").toLowerCase();

if (favColorLower.includes(color)) {
    console.log(favColorLower.indexOf(color));
    
    
}else{
    console.log("Color not found.");
}



// 6. Shopping List
let shoppingList = ["Milk","Eggs","Bread","Rice","Apple","Banana","Orange"];

console.log(shoppingList.slice(2,5));





// 7. Replace Fruits
let fruits = ["Apple","Banana","Orange","Mango","Peach"];

fruits.splice(2, 2, "Kiwi", "Pineapple");

console.log(fruits);




// 8. Word Counter
let sentence = prompt("Enter a sentence:");

let arraySentence = sentence.split(" ");


console.log(arraySentence);
console.log(arraySentence.length);



// 9. Uppercase Converter
let fullName = prompt("Enter your full name:");
console.log(fullName.toUpperCase());




// 10. Lowercase Converter
let email = prompt("Enter your email address:");
console.log(email.toLowerCase());




// 11. Sentence Analyzer
let sentenceAnalyzer = prompt("Enter a sentence:");

console.log(sentenceAnalyzer);

console.log(sentenceAnalyzer.toUpperCase());

console.log(sentenceAnalyzer.toLowerCase());

let words = sentenceAnalyzer.split(" ");
console.log(words.length);
console.log(words.slice(0,3));

