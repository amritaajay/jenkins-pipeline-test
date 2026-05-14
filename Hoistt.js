// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope before code execution. This means you can sometimes use a variable or function before it is actually written in the code.

// However, Classes behave differently than functions.
// Function Hoisting vs. Class Hoisting
// In OOP, we use classes to create blueprints. Here is the critical difference:

// Functions are Hoisted: You can call a function before you define it.

// Classes are NOT Hoisted: You cannot create an object (instance) of a class before the class is defined.


console.log (a)
var a=2;
// function invocation before declaration
sayHoist()


function sayHoist(){
    console.log ("Hoist print")
}
let b=2;
const c =4;
console.log (b)
console.log (c)

sayHoist()