let table = document.querySelector(".table");
let tboday = document.querySelector("tbody");
let form = document.querySelector("form")

let id = document.querySelector("#id");
let fName = document.querySelector("#finame");
let lName = document.querySelector("#lname");
let faName = document.querySelector("#faname");
let phone = document.querySelector("#phone");
let age = document.querySelector("#age");
let className = document.querySelector("#class");
let genFemale = document.querySelector("#female");
let genMale = document.querySelector("#male");


let stu = [
    {
        id: 1,
        firstName: "satara",
        lastName: "timoori",
        fatherName: "gul aqa",
        age: 20,
        gen: "female",
        phone: "0704371622",
        class: "js",
    },
    {
        id: 2,
        firstName: "ali",
        lastName: "ahmadi",
        fatherName: "ahmad",
        age: 15,
        gen: "male",
        phone: "0704322",
        class: "html",
    }
]
function genderChoice() {
    if (genFemale.checked) {
        return genFemale;
    } else {
        return genMale;
    }
}


for (let a = 0; a < stu.length; a++) {
    tboday.innerHTML += `
        <tr>
            <td>${stu[a].id}</td>
            <td>${stu[a].firstName}</td>
            <td>${stu[a].lastName}</td>
            <td>${stu[a].fatherName}</td>
            <td>${stu[a].age}</td>
            <td>${stu[a].gen}</td>
            <td>${stu[a].phone}</td>
            <td>${stu[a].class}</td>
        </tr>
    `
    
}
function display (){
    tboday.innerHTML=""
     for (let a = 0; a < stu.length; a++) {
        tboday.innerHTML += `
            <tr>
                <td>${stu[a].id}</td>
                <td>${stu[a].firstName}</td>
                <td>${stu[a].lastName}</td>
                <td>${stu[a].fatherName}</td>
                <td>${stu[a].age}</td>
                <td>${stu[a].gen}</td>
                <td>${stu[a].phone}</td>
                <td>${stu[a].class}</td>
            </tr>
        `  
    }
}
display();

form.addEventListener('submit',  (e) =>{
    e.preventDefault();
    stu.push({
        id: id.value,
        firstName: fName.value,
        lastName: lName.value,
        fatherName: faName.value,
        age: age.value,
        gen: genderChoice().value,
        phone: phone.value,
        class: className.value,
    })
   
    display();
    
})
