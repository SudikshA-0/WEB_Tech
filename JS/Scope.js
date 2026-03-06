function a(){
    c(); // This will print 10, as function c() has access to the variable b defined in the global scope.
    // console.log(b);
    function c(){
        console.log(b);
    }
}

var b = 10;
a(); // prints 10 , as b is defined in the global scope and is accessible inside function a() due to JavaScript's scope chain.


/*

FUNCTION SCOPE:
In JavaScript, each function creates a new scope. Variables defined within a function are not accessible outside of that function. However, functions can access variables defined in their outer scopes (including the global scope) due to the scope chain.


LEXICAL EnVIRONMENT::
Whenever a execution context is created, a lexical environment is also created. 
A lexical environment is a data structure that holds variable and function declarations.

lexical means in hirarchical order.
Lexical enviromnment - local memory + reference to the lexical enivronment of its parent (outer).

It consists of two components: the environment record, which stores the actual variables and functions, and a reference to the outer lexical environment (if any). This allows for the concept of closures, where inner functions can access variables from their outer functions even after the outer function has finished executing.

*/

function x(){
    var z = 30;
    y();
    function y(){

    }

}

x(); // This will print 30, as function y() has access to the variable b defined in its outer scope (function x()) due to JavaScript's scope chain.
console.log(z); // This will throw a ReferenceError, as variable z is defined within function x() and is not accessible outside of that function.
