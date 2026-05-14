// callback function that pass another function as an argument

// function greet (name)
// {
//     console.log("Hello" +name)
// }
// greet("Vihaan")


function wishMe(name,callbackfun){
    console.log ("Good Morning" + name)
    callbackfun()
}
function sayHi(){
    console.log("Hello")
}
wishMe("Vihaan",sayHi)