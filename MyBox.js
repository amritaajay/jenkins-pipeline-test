// closure -is the actual link or reference that stays active between the inner function and the variables in its parent scope.

// function myBox(){
//     let myprdt ="phone"
//     function getprdt(){
//         console.log(myprdt)
//     }
//     return getprdt
// }
// let box =myBox();
// box()
// box()
// box()

// function createCounter()
// {
//     let count =0;
//     function increment(){
//         count = count + 10;
//         return count;
//     }
//     return increment;
// }
// const counter =createCounter ();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// const counter2 = createCounter ();

function createCounter()
{
    let count =0;
    function increment(){
        count = count + 5;
        return count;
    }
    return increment;
}
const counter =createCounter ();
for(let i =0; i<=5; i++){
    console.log("count is : "+counter());
}