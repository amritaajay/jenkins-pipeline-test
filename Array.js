// let numbers =[1,2,3,4,5,6,7] // number of elements in the array is 7 (length)
// // // index.     0,1,2,3,4,5,6
//  //console.log (numbers)// print  the array

// let fruits =["apple","banana","cherries"]
// console.log (fruits)
// console.log(fruits[2])
// numbers[2] =40 // update the value of index 2
// console.log (numbers)   
// console.log (numbers.length) 
// console.log (fruits.length) 

// // iterate the array using loop

// console.log ("using for loop")
// for (let i =10; i<numbers.length; i++)
//     {
//     console.log (numbers[i])
// }
// Adding and Removing Elements
// These methods modify the array by adding or removing items from the ends or specific positions.

//push(): Adds one or more elements to the end of an array.

// pop(): Removes the last element from an array.

// shift(): Removes the first element from an array.

// unshift(): Adds one or more elements to the beginning of an array.

//Used to find specific values or check for the existence of data.
// indexOf(): Returns the first index at which a given element can be found.

// includes(): Checks if an array contains a certain value (returns true or false).

// find(): Returns the value of the first element that passes a test.

// slice(): Selects a portion of an array and returns it as a new array (does not modify the original).
//he length property returns the number of elements currently stored in the array.

// let arr= [1,2,3]
// console.log(arr)

// arr.push(5)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.unshift(15)
// console.log(arr)

// arr.shift()
// console.log(arr)

// console.log (arr.length)
// console.log (arr.indexOf(5))// it returns the index of  the first occurance of the element -1 return

// let bool =arr.includes(3)
// console.log(bool)// false it  returns true if the element  is present  in the array  otherwise false.


// let ar1 = [2,3,4,7,9]
// console.log (ar1)
// let newArr =ar1.slice(1,4)
// console.log(newArr)
// // remove the  element  at index 0
// ar1.splice(0,2)
// console.log(" after removing element from index 0: "+ar1)
// ar1.splice(1,3,10,2)
// console.log("after replacing  elements : "+ar1)

//The for...of loop creates a loop iterating over "iterable" objects (like arrays). It is designed to give you the value of each element directly, so you don't have to deal with indices ($i$) or the .length property manually.
// let arr = [1,3,5,6,7,8,9]
// console.log ("****************for..of loop**********")
// for (let  a of arr)
// {
//     console.log(a)
// }
// let clrs  = ["red","green","blue"];
// for (let clr of clrs) {
//     console.log (clr);
   
// }
// let mark =[12,22,10,8];
// let sum =0;
// for (let i =0; i<mark.length; i++) // sum= sum (0)+12, 12+22, 34+ 10 ,44+8
// {
//     sum =sum + mark[i];
// }
// console.log ("totalmark is"+ sum);
// //reduce(): Executes a reducer function on each element, resulting in a single output value (like a sum or a flattened object).

// let totalMark =mark.reduce((total,val)=> total +val,0)// call back function
// console.log("using reduce method"+ totalMark);

// //filter(): Creates a new array with all elements that pass a specific test (condition).
// let filterarray = mark.filter(v=> v>10)
// console.log(filterarray)

//Functional / Iteration Methods. 
// These methods are used to process each element in an array. They are often preferred for their readability and for maintaining "clean" code.
//map(): Creates a new array by applying a function to every element of the original array.
//filter(): Creates a new array with all elements that pass a specific test (condition).
//reduce(): Executes a reducer function on each element, resulting in a single output value (like a sum or a flattened object).

// let gracemark =mark.map(x=> x+5);
// console.log(gracemark);
// console.log(mark);

//Assignment 1
// let factors = [2, 3, 4];
// let product = factors.reduce((total, val) => total * val, 1);
// console.log("product:"+ product);

// Assigment 2
// let orginalArray =[10,20,30,40];
// // Use map to multiply each element by 2
// let doubleArray =  orginalArray.map ( x => x * 2 );
// console.log ("Orginal",orginalArray);
// console.log ("Doubled", doubleArray);

// Assignment 3
let numbers =[1,2,3,4,5,6,7,8,9,10];
// let evenNumbers = numbers.filter(v=> v % 2 === 0);
// console.log("Even Numbers :", evenNumbers);
let oddNumbers = numbers.filter(n=> n % 2  !== 0);
console.log ("Odd Numbers:",oddNumbers);
