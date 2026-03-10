/*

-------------------------------- ARROW FUNCTION ------------------------------

1️⃣ What is an Arrow Function?
An Arrow Function is a shorter way to write functions in JavaScript.
Introduced in ES6 (2015).

Syntax:
const functionName = (parameters) => {
    // function body
}

*/

//---------------------------------2️⃣ Basic Syntax----------------------------------------//

// Normal function

function add(a,b) {
    return a+b;
};
console.log(add(10,20));

//arrow function

const add1 = (a,b) => {
    return a+b;
}
console.log(add1(10,20));

//----------------------------3️⃣ Arrow Function With Parameters------------------------------//

// One parameter

const square = x => {
    return x*x;
}
square(89);  
console.log(square(89));   

// Multiple parameters

const product =(a,b) => {
    return a*b;
}
product(10,20);
console.log(product(10,20));

// No parameters

const greet = ()=>{
    console.log("Hello");
}
greet();


//----------------------------4️⃣ Implicit Return (Short return)------------------------------//

//  Normal arrow function

const sum = (a,b) =>{
    return a+b;
}
add(10,50);
console.log(add(10,50));

// Arrow function with implicit return

const  multiply = (a, b) => a*b; // This is an arrow function with an implicit return. It will return the result of a * b without needing the 'return' keyword or curly braces.
console.log(multiply(10,20));



//----------------------------5️⃣ Arrow Functions Returning Objects------------------------------//


//Example wrong 

const user = () => {name:"Sudiksha"};
console.log(user());


//Example correct

const user1 = () => ({name:"Sudiksha"});
console.log(user1());


//Example 2

const getPerson = () => ({ name: "sudiksha",age:20});
console.log(getPerson());


//Example 3

const details =() =>({
    name : "Khushi",
    Deprt : "cs",
    Sec : "D"
})
console.log(details());


//Example 4

const createuser =(name , age)=>({
    name :  name,
    age : age
})
console.log(createuser("sudiksha",20))













