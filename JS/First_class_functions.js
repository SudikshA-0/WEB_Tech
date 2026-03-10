
a();
b(); // This will throw a ReferenceError, as function expressions are not hoisted like function declarations.
     // The variable b is hoisted but not initialized until the assignment is reached, so it cannot be invoked before that point.


//   Function statement or Function declaration :

function a(){
 console.log("Hello, World!");
}
a();


//   Function expression :
//    - we can assign a function to a variable, and that variable can be used to invoke the function.


var b  = function(){
    console.log("Hello, World!");
}
b();

//   Anonymous function : 
//     - A function that does not have a name. 
//     - It is often used in function expressions or as an argument to other functions.


function(){
    // This will throw a SyntaxError.
}


// Named function expression :
//     - A function expression that has a name.         

var c = function d(){
    console.log("Hello, World!");
}   
d();

// Diff erence between parameters and arguments :
// Parameters are the variables that are defined in the function declaration or expression, and they act as placeholders for the values that will be passed to the function when it is invoked.
// Arguments are the actual values that are passed to the function when it is invoked. They correspond to the parameters defined in the function declaration or expression.


// First-class functions :
// In JavaScript, functions are first-class citizens, which means that they can be treated like any other value.
// This means that functions can be assigned to variables, passed as arguments to other functions, and returned from other functions.







