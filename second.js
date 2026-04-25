operator
arithmetic (+ , _  ,* ,%)
assignment  (*= , +=, -=, %=)
comparison ( >=,<=)
 Operands 

text + variable
const username = 'Alishba'
console.log('Hello' , username , 123 , 'welcome')
let first_no = 2
let second_no = 4
let result ;
result = second_no+first_no
result = second_no-first_no
result = second_no%first_no
result = second_no*first_no
result = second_no/first_no
console.log( `Hello ${username}`)
console.log(first_no+second_no)
console.log(first_no-second_no)
console.log(first_no*second_no)
console.log(first_no%second_no)
console.log(first_no/second_no)

operations
increment , decrement
let first_no = 9
first_no++
console.log(first_no)   
first_no = first_no + 1 
console.log(first_no)
first_no--
console.log(first_no)
console.log(`first no is ${first_no} + 1`)
console.log(`first no is` , first_no + 1)

let text1 = "John";
let text2 = "Doe";
console.log(text1 , text2)
let text3 = text1 + "" + text2;
console.log(text3)

let text4 = "What a very ";
text4 += "nice day";
console.log(text4)

let value1 = 5;
let value2 = 10;
console.log(value1 > value2);
console.log(value2 < value1);
console.log(value1 <= value2);
console.log(value2 >= value1);
console.log(value1 == value2);
console.log(value1 != value2);

// true, false,-> boolean data type
console.log(value1 > value2 && value2 < value1);
console.log(value1 > value2 || value1 < value2); 
let value3 = value1 > value2 && value2 < value1
console.log(!value3)


conditional statements
let x = 5;
let y = 10;

if(x == y){
    console.log( "x and y are not equal")
}
// if(x > y){
//     console.log("x is greater than y")
// }
else if(x > y){
    console.log("x is greater than y")
}
if, else

let result = 50
if (result >= 80){
    console.log("a grade")
}
else if (result >= 60){
    console.log("b grade")
}
else {
    console.log("you have failed the exam")
}