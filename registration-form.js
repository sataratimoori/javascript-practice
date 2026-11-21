let RegForm = document.querySelector("#RegFomr");
let Selectedcountry = document.querySelector("#country");
let nameInp = document.querySelector("#Name");
let LName = document.querySelector("#LName");
let email = document.querySelector("#email");
let Age = document.querySelector("#Age");
let article = document.querySelector("#article");
let country = document.querySelector("#country");

// Error messages
let nameError = document.querySelector("#nameError");
let lastNameError = document.querySelector("#lastNameError");

nameInp.addEventListener("blur", (event) => {
  if (nameInp.value == "" || nameInp.value == null) {
    nameError.innerHTML = " name can not be empty";
  } else {
    nameError.innerHTML = "";
  }
});
LName.addEventListener("blur", (event) => {
  if (LName.value == "" || LName.value == null) {
    lastNameError.innerHTML = "last name can not be empty";
  }
});
email.addEventListener("focus", (event) => {
  if (LName.value == "" || LName.value == null) {
    lastNameError.innerHTML = "last name can not be empty";
  }
  if (nameInp.value == "" || nameInp.value == null) {
    nameError.innerHTML = " name can not be empty";
  }
});

RegForm.addEventListener("submit", function (a) {
  a.preventDefault();
  if (nameInp.value == "" || nameInp.value == null) {
    nameError.innerHTML = " name can not be empty";
  } else {
    nameError.innerHTML = "";
  }

  let userName = document.querySelector("#userName");
  let userLastName = document.querySelector("#userLastName");
  let userEmail = document.querySelector("#userEmail");
  let userAge = document.querySelector("#userAge");
  let userArticle = document.querySelector("#userArticle");
  let userCountry = document.querySelector("#userCountry");

  userName.innerText = nameInp.value;
  userLastName.innerText = LName.value;
  userEmail.innerText = email.value;
  userAge.innerText = Age.value;
  userArticle.innerText = article.value;

  if (country === "afg") {
    country = "Afghanistan";
    CountryCode.value = "+93";
  } else if (country === "Ir") {
    country = "Iran";
    CountryCode.value = "+98";
  } else if (country === "pa") {
    country = "Pakistan";
    CountryCode.value = "+92";
  }
  userCountry.innerText = country;
});

Selectedcountry.addEventListener("change", function () {

  let CountryCode = document.querySelector("#CountryCode");

  if (Selectedcountry.value === "afg") {
    CountryCode.value = "+93";
  } else if (Selectedcountry.value === "Ir") {
    CountryCode.value = "+98";
  } else if (Selectedcountry.value === "pa") {
    CountryCode.value = "+92";
  }
});