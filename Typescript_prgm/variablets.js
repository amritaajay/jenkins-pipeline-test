"use strict";
let na = "Amrita";
let age = 16;
let isPass = true;
let d = "hello";
d = "12";
console.log(na);
console.log(age);
console.log(isPass);
console.log(d);
// TypeScript conditional progam
let digit = 0;
if (digit > 0) {
    console.log("The digit is negative");
}
else if (digit < 0) {
    console.log("The digit is negative");
}
else {
    console.log("The digit is zero");
}
// Traffic Light Program- using switch statement
let signal = "pink";
switch (signal) {
    case "red":
        console.log("stop! The light is red.");
        break;
    case "yellow":
        console.log(" Caution! the light is yellow.");
    case "green":
        console.log("Go! The light is green.");
        break;
    default:
        console.log("Invalid signal color.");
        break;
}
// for loop. (this will print numbers 0 to 4) 
// for loops are great for counting or iterating through arrays.
for (let i = 0; i < 5; i++) {
    console.log("Iteration number:" + i);
}
// The while loop
// while loops are great for logic that depends on a changing state (like waiting for a user input or a specific calculation result).
let count = 1;
while (count <= 3) {
    console.log("count is :" + count);
    count++;
}
