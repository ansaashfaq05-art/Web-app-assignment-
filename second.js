                            // PROGRAM NO 1

// Item prices and quantities
let price1 = 1000;
let qty1 = 2;

let price2 = 500;
let qty2 = 3;

let price3 = 200;
let qty3 = 1;
let total1 = price1 * qty1;   // ×
let total2 = price2 * qty2;   // ×
let total3 = price3 * qty3;   // ×
let totalPrice = total1 + total2 + total3;   

console.log("Total Price:", totalPrice);

                              //  PROGRAM NO 2

let price = 1000; 
let discount = price * 0.10;

let finalPrice = price - discount;

console.log("Original Price:", price);
console.log("Discount:", discount);
console.log("Final Price:", finalPrice);

                            // PROGRAM NO 3

let price = 2000;  
let tax = price * 0.18;
let totalBill = price + tax;

console.log("Price:", price);
console.log("Tax (18%):", tax);
console.log("Total Bill:", totalBill);            

                          // PROGRAM NO 4

let weight = 60;  
let height = 1.7;  

let bmi = weight / (height * height);
console.log("Your BMI is:", bmi);                          
 
                          //  PROGRAM NO 5

let salary = 50000;  
let taxRate = 0.10;
let tax = salary * taxRate;
let finalSalary = salary - tax;

console.log("Salary:", salary);
console.log("Tax:", tax);
console.log("Final Salary:", finalSalary);

                        // PROGRAM NO 6

let r1 = 4;
let r2 = 5;
let r3 = 3;
let r4 = 4;
let r5 = 5;

let average = (r1 + r2 + r3 + r4 + r5) / 5;

console.log("Average Rating:", average); 

                    //  PROGRAM NO 7

let orderAmount = 1500;
let deliveryCharge = 200 - (orderAmount / 1000) * 100;
let totalBill = orderAmount + deliveryCharge;

console.log("Order Amount:", orderAmount);
console.log("Delivery Charge:", deliveryCharge);
console.log("Total Bill:", totalBill);  

                    // PROGRAM NO 8

let principal = 10000;  
let rate = 5;          
let time = 2;         
let simpleInterest = (principal * rate * time) / 100;

console.log("Simple Interest:", simpleInterest);                    

                      // PROGRAM NO 9

let balance = 5000;    
let withdraw = 1500;    
let remainingBalance = balance - withdraw;

console.log("Initial Balance:", balance);
console.log("Withdraw:", withdraw);
console.log("Remaining Balance:", remainingBalance);     

                          //  PROGRAM NO 10

let totalMinutes = 135;
let hours = totalMinutes / 60;
let remainingMinutes = totalMinutes % 60;

console.log("Hours:", hours);
console.log("Remaining Minutes:", remainingMinutes);   


                        // IF-ELSE PROGRAMS

                      //  PROGRAM NO 1

let username = "admin";
let password = "1234"; 

let inputUsername = prompt("Enter username:");
let inputPassword = prompt("Enter password:");

// check login
if (inputUsername === username && inputPassword === password) {
  console.log("Login Successful!");
} else {
  console.log("Invalid username or password");
}                      
                      
                                //  PROGRAM NO 2

let age = 20;

if (age >= 18) {
  console.log("Access Granted. Welcome to the website!");
} else {
  console.log("Access Denied. You must be 18 or older.");
}                                

                            // PROGRAM NO 3

let orderAmount = +prompt("Enter your order amount:");

let discount = 0;

if (orderAmount > 200) {
  discount = orderAmount * 0.20;  
} else if (orderAmount > 100) {
  discount = orderAmount * 0.10;   
} else {
  discount = 0; 
}


let finalPrice = orderAmount - discount;

console.log("Order Amount:", orderAmount);
console.log("Discount:", discount);
console.log("Final Price:", finalPrice);                            

                            // PROGRAM NO 4

let result = 50
if (result >= 80){
    console.log("a grade")
}
else if (result >= 60){
    console.log("b grade")
}
else if (result >= 50){
    console.log("c grade")
}
else {
    console.log("you have failed the exam")
}


                      // PROGRAM NO 5

let weather = prompt("Enter weather (hot, cold, rainy):");
weather = weather.toLowerCase();

if (weather === "hot") {
  console.log("Weather is hot: Stay hydrated and avoid sun exposure.");
} 
else if (weather === "cold") {
  console.log("Weather is cold: Wear warm clothes.");
} 
else if (weather === "rainy") {
  console.log("Weather is rainy: Carry an umbrella.");
} 
else {
  console.log("Invalid input. Please enter hot, cold, or rainy.");
}                      