
console.log("Hello World");
console.log("Welcome to JavaScript");
console.log("This is a simple JavaScript code.");
 
// variables
username = "John";
console.log(username);
age = 19;
console.log(age);
salary = 50000;
console.log(salary);
x = null;
console.log(x);
y = undefined;
console.log(y);
isfollow = true;
console.log(isfollow);

// variables case sensitivity a and A are different
// only letters digits and _ , $ are allowed in variable names (no spaces)
// reserved keywords cannot be used as variable names

// let 
let fullName = "Alishba";
let age = 19;
age = 20; // reassigning the value of age 
age = 21; // reassigning the value of age again

//  let allows us to declare variables that can be reassigned later, but cannot be redeclared in the same scope.
let totalPrice = 30000;





console.log(fullName);
console.log(age);
console.log(totalPrice);


// const
const pi = 3.14;
const gravity = 9.8;
const speedOfLight = 299792458;
// const allows us to declare variables that cannot be reassigned or redeclared. 
// The value of a const variable must be assigned at the time of declaration and cannot be changed later.
// let dont be intilized but const must be initialized at the time of declaration.
  
console.log(pi);
console.log(gravity);
console.log(speedOfLight);

let username = prompt("Enter your name:");
console.log(username);

let num = prompt("Enter a number:");
console.log(typeof num); // string

let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));

let sum = a + b;
console.log("Sum is:", sum);