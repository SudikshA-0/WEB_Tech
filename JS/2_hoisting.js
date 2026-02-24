ggetName() //output: Namaste JavaScript
getName2() //output: TypeError: getName2 is not a function because getName2 is a variable
console.log(x) //output: undefined
console.log(getName) //output: Prints the whole function 
console.log(getName2) //output: undefined because getName2 is a variable and only the declaration of the variable is hoisted not the assignment

var x = 7; //if i remove this line  and try to print x this will show error that x is not defined

function getName() {
    console.log("Namaste JavaScript")
}

var getName2 = ()=> { //arrow function
    console.log("Namaste JavaScript")
}

/*
This above this is hoisting
In JavaScript, hoisting is a behavior in which variable and function declarations are moved to the top of their containing scope during the compilation phase. 
This means that you can use variables and functions before they are declared in the code.
In the example above, the function getName() is hoisted to the top of the scope, allowing us to call it before its declaration.
*/