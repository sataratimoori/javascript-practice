// 1: ATM System 

let PIN = "st7654";

let balance = 10000;

let withdrawalAmount = 4500;

if (PIN) {
    if (withdrawalAmount <= balance){
        let remain = balance - withdrawalAmount;
        console.log("The rest of you core" +  " " + remain)
        console.log("Withdraw the money.");
    }else{
        console.log("Insufficient Balance")
    }

}else{
    console.log("Incorrect PIN")
}





// 2: University Admission

let exScore = 78;

let enScore = 90;

if (exScore > 80){
    if (enScore > 60){
        console.log("Admission Accepted");
    }else{
        console.log("English Requirement Not Met");
    }    
}else{
    console.log("Academic Score Too Low");
    
}

// 3: Online Shopping Discount

let amount = 250;

let member = true;

if (amount > 100) {
    if (member) {
        amount -= 50;
        console.log("You got $50 off. Final amount: $" + amount);
        
    }else{
        console.log(amount);
        
    }
}else{
    console.log("No discount");
    
}





// 4: Cinema Ticket 

let age1 = 15;

let cardSt = true;

if (age1 < 12) {
    console.log("Child Ticket");
    
}else{
    if (cardSt) {
        console.log("Student Ticket");
    }else{
        console.log("Adult Ticket");
    }
}




// 5: Employee Bonus

let yearsEx = 9;

let performance = 67;

if (yearsEx > 5) {
    if (performance > 90) {
        console.log("Excellent performance! You earned a $1000 bonus.");
    }else{
        console.log("Good job! You earned a $500 bonus.");
        
    }
    
}else{
    console.log("Not eligible for a bonus.");
    
}


// 6: Hotel Booking

let numRoom = 5;

let VIPnum = false;

if (numRoom >= 3) {
    if (VIPnum) {
        console.log("You get a 20% discount.");
    }else{
        console.log("You get a 10% discount.");
    }
}
else if (VIPnum) {
    console.log("You get a 5% discount.");
}
else{
    console.log("No discount available.");
}



// 7: Passport Application

let agePerson = 20;

let ID1 = true;

let birthCer = false;

if (agePerson > 18) {
    if (ID1) {
        if (birthCer) {
            console.log("Application approved.");
        }else{
            console.log("Birth Certificate is required.");  
        }
    }else{
        console.log("National ID is required.");
    }
}else{
    console.log("You must be at least 18 years old.");
}



// 8: Smart Home Security

let lock = true;

let motionDetected = false;

let owner = false;

if (lock) {
    if (motionDetected) {
        if (owner) {
            console.log("True");
        }else{
            console.log("False");
        }
    }else{
        console.log("False"); 
    }
}else{
    console.log("False");
}








// 9: Student Scholarship

let GPA = 4.3;

let income = 350;

let attendance1 = 90;

if (GPA >= 3.5) {
    if (income < 300) {
       if (attendance1 >= 90) {
            console.log("Scholarship approved.");
       } else{
        console.log("Attendance requirement not met.");
       }
    }else{
        console.log("Family income does not meet the requirement.");
    }
}else{
    console.log("GPA requirement not met.");
}




// Bonus Challenge: School Management System 

let username = "satara";

let password = "jds345";

let score = 90;

let attendance = 59;

if (username === "satara") {
    if (password === "jds345") {
        if (score >= 50) {
            if (attendance >= 75) {
                console.log("Student passed successfully.");
            }else{
                console.log("Attendance is too low.");
            }
        }else{
            console.log("Score is not enough.");
        }
    }else{
        console.log("Incorrect password.");
    }
    
}else{
    console.log("Incorrect username.");
}











// Challenge 1: Smart Parking System

let carPar = 12;

let model = "benz";

let member1 = true;

let  fees6 = false;


if (carPar >= 15) {
    if (model === "benz") {
        if (member1) {
            if (fees6) {
                console.log("Car approved.");
            }else{
                console.log("Fees are not paid.");
            }
        }else{
            console.log("You are not a member.");
        }
    }else{
        console.log("The desired model is not available.");
    }
    
}else{
    console.log("Car parts are not enough.");
}




// Challenge 2: Library Management System

let ID = "w4ri9";
let num = 4;
let time1 = 4;
let fees = true;

if (ID === "w4ri9") {
    if (num <= 20) {
        if (time1 <= 15) {
            if (fees) {
                console.log("Your booking is confirmed.");
            }else{
                console.log("Fees are not paid.");
            }
        }else{
            console.log("The selected time exceeds the limit.");
        }
    }else{
        console.log("The number is more than the allowed limit.");
    }
}else{
    console.log("Invalid ID.");
}




// Challenge 3: Online Food Delivery System
let food = "pizza";

let add = "shahr now";

let fees1 = true;

if (food === "pizza") {
    if (add === "shahr now") {
        if (fees1) {
            console.log("Your order has been confirmed.")
            
        }else{
            console.log("Payment has not been completed.");
        }
    }else{
        console.log("The address is not available.");
    }
}else{
    console.log("The selected food is not available.");
}



// Challenge 4: Movie Streaming Platform
let movie = false;

let age2 = 18;

let sub = true;

if (movie) {
    if (age2 >= 18) {
        if (sub) {
            console.log("You can watch this movie.");
        }else{
            console.log("You need a subscription to watch this movie.");
        }
    }else{
        console.log("Your age is not enough for this movie.");
    }
}else{
    console.log("The movie is not available.");
}



// 5: Gym Membership System

let mum = true;

let fees2 = false;

let card = true;


if (mum) {
    if (fees2) {
        if (card) {
            console.log("You can enter the gym.");
        }else{
            console.log("You need your membership card.");
            
        }
    }else{
        console.log("Your membership fee has not been paid.");
        
    }
}else{
    console.log("You are not a gym member.");
    
}



// 6: Theme Park Ticket System

let ticket  = true;

let age3 = 12;

let height = 130;

let health  = true;

if (ticket) {
    if (age3 >= 15) {
        if (height >= 120) {
            if (health) {
                console.log("You can ride this attraction.");
            }else{
                console.log("You cannot ride because of health restrictions.");
            }
        }else{
            console.log("Your height is not enough for this ride.");
        }
    }else{
        console.log("Your age is not enough for this ride.");
    }
}else{
    console.log("You need a valid ticket.");
}




// Challenge 7: Car Rental System


let car = true;

let certificate = true;

let time = 15;

let fees3 = false;


if (car) {
    if (certificate) {
        if (time <= 10) {
            if (fees3) {
                console.log("Your car rental has been confirmed.");
            }else{
                console.log("Rental fee has not been paid.");
            }
        }else{
            console.log("The rental period is too long.");
        }
    }else{
        console.log("You need a valid driving certificate.");
    }
}else{
    console.log("The car is not available.");
}


// Challenge 8: Animal Adoption System


let pet = true;

let applicant = false;

let home = true;

let experience1 = false;

let fees4 = true;


if (pet) {
    if (applicant) {
        if (home) {
            if (experience1) {
                if (fees4) {
                    console.log("Adoption approved. You can adopt this pet.");
                } else {
                    console.log("Adoption fee has not been paid.");
                }
            } else {
                console.log("You need experience with pets.");
            }
        } else {
            console.log("Your home is not suitable for this pet.");
        }
    } else {
        console.log("You do not meet the adoption requirements.");
    }
} else {
    console.log("This pet is not available.");
}





// Challenge 9: Tech Conference Registration

let seats = true;

let age4 = 12;

let experienceRequirements = true;

let fees5 = true;



if (seats) {
    if (age4 >= 15) {
        if (!experienceRequirements) {
            if (fees5) {
                console.log("Registration successful.");
            }else{
                console.log("Registration fee has not been paid.");
            }
        }else{
            console.log("You need the required experience for this workshop.");
        }
    }else{
        console.log("Your age is not enough for this workshop.");
    }
}else{
    console.log("No seats available for this workshop.");
}




// Final Challenge: Space Mission Selection

let education = true;
let age = 16;
let fitness = true;
let medical = false;
let english = true;
let experience = 2;


if (education) {
    if (age >= 25) {
        if (fitness) {
            if (medical) {
                if (english) {
                    if (experience >= 3) {
                        console.log("Candidate accepted for astronaut training.");
                    } else {
                        console.log("You need more work experience.");
                    }
                } else {
                    console.log("English proficiency is required.");
                }
            } else {
                console.log("You failed the medical examination.");
            }
        } else {
            console.log("Physical fitness requirements are not met.");
        }
    } else {
        console.log("Your age is not suitable for this mission.");
    }
} else {
    console.log("Required education is missing.");
}
