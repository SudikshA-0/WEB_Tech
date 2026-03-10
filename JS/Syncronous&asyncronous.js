/*                                               ----------------synchronous------------------

Synchronous actions are the actions that initate and finsih one-by -one,
eg:

*/
  
const prompt = require("prompt-sync")();

let a = prompt("What is your name?"); // This will block the execution of the next line until the user provides input and clicks "OK".
let b = prompt("What is your age?"); // This will also block the execution until the user provides input and clicks "OK".
let c = prompt("What is ur fav colour?");

console.log(a +" is "+ b +" years old " + c + " is her fav colour!!");

/*
                                         ----------------asynchronous------------------

Asynchronous actions are the actions that we initiate now and they finish later,
eg: setTimeout() 


*/
console.log("Start");
setTimeout(function(){
    console.log("Shut up Bitch!!");
},3000
)
console.log("end");