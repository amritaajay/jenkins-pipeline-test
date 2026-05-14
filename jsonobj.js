// A JSON (JavaScript Object Notation) object is a lightweight format for storing and transporting data. While it looks almost identical to a standard JavaScript object literal, there are strict rules that make it a universal data format.
// JSON Syntax Rules
// To be valid JSON, the data must follow these constraints:

// Double Quotes: All keys must be wrapped in double quotes (e.g., "name": "Anu"). Single quotes are not allowed.

// Data Types: Values must be one of the following: string, number, object, array, boolean, or null. (Functions and undefined are not allowed).

// No Trailing Commas: Unlike standard JavaScript, you cannot have a comma after the last item in an object or array.
 
// let pen =
// {
//     color : "red",
//     price : 15,
//     brand :"Reynolds"
// }
// console.log (pen.color)
// console.log(pen["color"])

// console.log (pen)
// pen.location ="Mumbai"
// console.log (pen)
// pen.color ='blue'
// console.log (pen)
// delete pen.location
// console.log (pen)

// let stud=
// // (Nested JSON Object, where values can be other objects or arrays, allowing for complex data hierarchies.)
// {
//     Name :"Amrita",
//     rollNo : 15,
//     marks:{
//        java :75,
//        c : 65,
//        js:99
//     },
//   sub:["java","js","playwright"] ,
//    isPass:true 


// }
// console.log(stud)
// console.log(stud.marks.js)

// console.log (stud)
// console.log(stud.sub[2])
// console.log(stud.isPass)

// // The for...in Loop
// console.log ("looping java script  using  for...in")

// for(let key in stud) 
//    {
//     console.log(key + ":" + stud[key]);
//   }
// 1. A simple JSON-style object
// let fruit ={
//     "name": "Apple",
//     "color":"Red",
//     "isSweet" :true
// };
// // 2. A basic conditional check
// if (fruit.isSweet === true){
//     console.log("The "+ fruit.name + " is ready to eat! ");
// } else {
//     console.log("The "+ fruit.name + " is still sour! ")
// }
  


// A nested object representing a car
// let myCar = {
//   "brand": "Tesla",
//   "model": "Model 3",
//   "isElectric": true,        // Boolean
//   "engine": {                // Nested Object
//     "batteryLevel": 85,
//     "isCharging": false,     // Boolean
//     "dualMotor": true        // Boolean
//   },
//   "features": ["Autopilot", "Glass Roof", "Heated Seats"]
// };

// // Conditional Logic using the nested Boolean
// if (myCar.isElectric === true && myCar.engine.isCharging === false) {
//   console.log("Amrita's" + myCar.brand + " is ready to drive!");
// } else if (myCar.engine.isCharging === true) {
//   console.log("Please wait, the car is still charging.");
// } else {
//   console.log("Check engine status.");
// }
// 
// let stud ={
//     name :"Amrita",
//     rollNo :20,
//     ispass :true,
//     fun:function()
//     {
//         console.log("it's a function inside js object")
//     }
// }
// // console.log(stud.fun())
// console.log("looping  java script object using for..in")

// stud.fun();
// for(let key in stud)
// {
//     if(typeof stud[key]=== 'function')
//         {
//         stud[key]()
//     }
//      else   {
//         console.log(key + ":" + stud[key])
//     }
// }


// This is a JavaScript Object (NOT JSON)


// const calculator = {
//     owner: "Alex",
//     // This is a function inside the object
//     add: function(a, b) {
//         return a + b;
//     },
//     // Modern shorthand syntax
//     greet() {
//         console.log(`Hello, I am ${this.owner}'s calculator.`);
//     }
// };

// // How to call the functions
// calculator.greet(); 
// const result = calculator.add(10, 5);

// console.log("Result of addition:", result);

let stud ={
    name :"Amrita",
    rollNo :20,
    ispass :true,
    fun:function()
    {
        return this.name
    }
}
// console.log(stud.fun())
console.log("looping  java script object using for..in")

stud.fun();
for(let key in stud)
{
    // console.log(' Stud value : ',stud[key]);
    if(typeof stud[key]=== 'function')
        {// { console.log('checking key value :',key);
        //   console.log('checking stud key value :',stud[key]);


        console.log(key + ":" + stud[key]())
        
    }
     else   {
        console.log('checking key value :',key);
          console.log('checking stud key value :',stud[key]);
        console.log(key + ":" + stud[key])
    }
}