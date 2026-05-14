// Starts at 2, adds 2 on every iteration
//for (let i = 2; i <= 20; i += 2) {
   // console.log(i);
//}

//print odd number

//for (let i = 1; i <= 10; i++) {
  //  if (i % 2 !== 0) {
   //     console.log(i);
   // }
//}
//
 //{
//     1. Setup - Using const for fixed data
//     const accountHolder = "Amrita";
//     const pin = 1234;
//     let balance = 1000; // let because balance will change

//      2. Arrow Functions for ATM Logic
//     const checkBalance = () => console.log(`Current Balance: $${balance}`);

//     const deposit = (amount) => {
//         balance += amount;
//         console.log('Successfully deposited $${200}.');
//     };

//     //const withdraw = (amount) => {
//         if (amount > balance) {
//             console.log("Insufficient funds!");
//         } else {
//             balance -= amount;
//             console.log(`Successfully withdrew $${amount}.`);
//         }
//     };

//     3. Simulating a Session
//    console.log(`--- Welcome to the ATM, ${accountHolder} ---`);
    
//     checkBalance();      // Check initial balance
//    deposit(500);        // Add money
//    withdraw(300);       // Take money out
//    checkBalance();      // See final balance
//   };

{
//     // 1. Define the arrow function using const
//     const printEvens = (limit) => {
//         for (let i = 1; i <= limit; i++) {
//             if (i % 2 === 0) {
//                 console.log(i);
//             }
//         }
//     };

//     // 2. Define a constant for our range
//     const maxNumber = 100;

//     // 3. Call the function
//     console.log("Even numbers up to " + maxNumber + ":");
//     printEvens(maxNumber);
// }

// let factors =[2, 3, 4]
// let product = factors.reduce((total,val)=> total* val,1)
// console.log("product:"+product)

let factors = [2, 3, 4];

// The 'total' starts at 1, then multiplies by each 'val'
let product = factors.reduce((total, val) => total * val, 1);

console.log("Product: " + product); 
// Output: 24 (because 2 * 3 * 4 = 24)