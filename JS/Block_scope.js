/*

A BLOCK is defines by curly braces {}.
Block combines  multiple statement into a single compound statement.

LET and CONST are block-scoped, meaning they are only accessible within the block they are defined in. 
VAR is function-scoped, meaning it is accessible throughout the entire function it is defined in, regardless of block boundaries.


*/

{
    var a = 10 ; 
    let b = 20;
    const c = 30;

    console.log(a); // This will print 10.
    console.log(b); // This will print 20.
    console.log(c); // This will print 30.  

}

console.log(a); // This will print 10, as var is function-scoped and is not limited to the block scope.
console.log(b); // This will throw a ReferenceError, as let is block-scoped and is not accessible outside of the block.
console.log(c); // This will throw a ReferenceError, as const is block-scoped and is not accessible outside of the block.



// -------- Shadowing variables with var, let, and const -------- //

var x = 10 ;
let y = 20;
const z = 30;
{
    var x = 20;
    let y = 40;
    const z = 50;
    console.log(x); // shadowing -  This will print 20, as the value of x has been overwritten by the inner declaration.
    console.log(y); // This will print 40, as the inner declaration of y shadows the outer declaration within the block scope.
    console.log(z); // This will print 50, as the inner declaration of z shadows the outer declaration within the block scope.
}

console.log(x); // This will also print 20, as the inner declaration of x has overwritten the outer declaration due to var's function-scoped nature.
console.log(y); // This will print 20, as the outer declaration of y is still accessible outside of the block scope.
console.log(z); // This will print 30, as the outer declaration of z is still accessible outside of the block scope.

var h = 100;
function f(){
    var h = 300;
    console.log(h); // This will print 300, as the inner declaration of h shadows the outer declaration within the function scope.

}
f();
console.log(h); // This will print 100, as the outer declaration of h is still accessible outside of the function scope.



// ----------Lexical Scope -----------//

const g = 20; 
{
    const g = 30;
    {
        const g = 40;
        console.log(g); // This will print 40, as the innermost declaration of g shadows the outer declarations within the nested block scope.  
    }
    console.log(g); // This will print 30, as the declaration of g in the outer block scope shadows the global declaration within that block scope.
}
console.log(g); // This will print 20, as the global declaration of g is still accessible outside of the block scopes.
