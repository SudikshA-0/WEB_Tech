/*

- let and const decalations are hoisted but not initialized, they are in temporal dead zone until they are initialized.
- TEMPORAL DEAD ZONE is the time between the start of the block and the point where the variable is declared. During this time, the variable cannot be accessed and will throw a ReferenceError if accessed.


*/

// ------ HOISTING WITH VAR, LET, AND CONST ------ //

console.log(a); // ReferenceError: Cannot access 'a' before initialization
console.log(b); // undefined
console.log(c); // ReferenceError: Cannot access 'c' before initialization

let a = 10;
var b = 20;
const c = 30;



// ------ Accessing variables with this keyword --- //

this.b; // output 20 , as var can be accessed wuth this keyword. 
this.a; // undefined, as let and const do not create properties on the global object (window in browsers), while var does.



// ------ Redeclaration of variables with var, let, and const ------ //

let x = 70;
let x  = 80; // SyntaxError: Identifier 'x' has already been declared, as let does not allow redeclaration of the same variable within the same scope.
var x  = 99; // syntaxError: Identifier 'x' has already been declared using let.

var y = 90;
var y = 100; // This is allowed, as var allows redeclaration of the same variable within the same scope. The value of y will be updated to 100.

const z = 50;
const z = 60; // SyntaxError: Identifier 'z' has already been declared, as const does not allow redeclaration of the same variable within the same scope.



// ------ Reassignment of variables with var, let, and const ------ //

let m = 10;
m = 20; // This is allowed, as let allows reassignment of the variable. 

var n = 30;
n = 40; // This is allowed, as var allows reassignment of the variable.

const o = 50;
o = 60; // TypeError: Assignment to constant variable, as const does not allow reassignment of the variable.



