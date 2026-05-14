// Scope is the set of rules for finding variables.

let b =2 // global variable
function outerFunction()
{
let a=8;
console.log(a)
let b=7;
function innerFunction()
{
let a =90
console.log (a)
console.log (b)
}
innerFunction()
}

outerFunction()

let x= 10
function fun1(){
    console.log(x)
}
function fun2 ()
{
  let x =20
  fun1()
}
fun2()