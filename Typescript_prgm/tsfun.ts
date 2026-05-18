// In TypeScript, a function that does not take any parameters and does not return a value is typically defined with the void return type.
// function without parameter 
// Empty Parentheses (): Indicates that the function accepts no input arguments.

// : void: This is the return type annotation. It explicitly tells TypeScript that the function performs an action but does not send a value back 
// via a return statement.

function sayHello():void
{
  console.log("Hello all")
  console.log ("function with no parameters and no return type")
}
sayHello()

// function with parameters and no return value

function greet(name:string,age:number)
{
console.log("hello my name is" + name + " and my age is" + age);

}
greet("Amrita", 15)

// function with parameters and return type

function addition(a:number,b:number):number
{
  return a+b
}
let sum=addition(10,50)
console.log("the sum is" + sum)