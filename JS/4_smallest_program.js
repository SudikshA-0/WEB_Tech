/*

If we run blank jS file, it will not show any output a global execution context is created by java script engine and also sets the memory space.
JavaScript engine cretes lots of functions and variables in the memory space.

JavaScript engine creates:
Window object: It is the global object in the browser environment. It represents the browser window and provides access to various properties and methods related to the browser.
This keyword: It refers to the current execution context. In the global execution context, this refers to the window object.

At Global level : this = window = global object

Whenever any JS program is run, a global execution context is created, a golbal object is created and along with that exectuion context , a this keyword is created.
Whenever we create any variable or function, it get attached to the global object and we can access it using this keyword or window object.

*/


var a = 10;
function fun(){
    var x = 20;
}
console.log(a)
console.log(this.a) //output: 10 because a is a global variable and it is attached to the global object and we can access it using this keyword
console.log(global.a) //output: 10 because a is a global variable and it is attached to the global object and we can access it using window keyword

console.log(this.fun) //output: Prints the whole function because fun is a global function and it is attached to the global object and we can access it using this keyword
