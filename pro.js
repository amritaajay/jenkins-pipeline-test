// Promise is a placeholder for a value that you don't have yet,but you expect to receieve in the future.
// console.log ("task 1")
// console.log("task 2")

// console.log ("task3")
// // synchronous code
// // asynchronous code promise

// let promise = new Promise ((resolve,reject) => {
//     // code
// })
// // new promise   --- create a promise object
// // resolve --  success
// // reject -- failure
// // handling promise
// promise.then (()=>{
//     // code to execute on success
// })
// .catch(()=>{

// })

 let number =13
 let oddoreven =new Promise((resolve, reject) => {
     
    if(number%2==0){
        resolve("even number")
    }

     else{
        reject("odd number")
     }
 })
//  handling promise
oddoreven.then((Resolvedmsg) =>{
    console.log(Resolvedmsg)

})
.catch((errMsg) =>{
    console.log(errMsg)
})