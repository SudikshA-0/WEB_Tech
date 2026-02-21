var x = 1;
a();
b();
console.log(x) //output: 1 because x is a global variable and the x inside function a and b are local variables and they do not affect the global variable x

function a(){
    var x = 10; //scope of x is only inside function a and it does not affect the global variable x
    console.log(x) 
}

function b(){
    var x = 100; //scope of x is only inside function a and it does not affect the global variable x
    console.log(x)
}

/*
behind the scenes JavaScript engine creates a global execution context and a call stack.
When the JavaScript engine starts executing the code, it creates a global execution context and pushes it onto the call stack.
When a function is called, a new execution context is created for that function and pushed onto the call stack.
When the function finishes executing, its execution context is popped off the call stack and control returns to the previous execution context.
*/