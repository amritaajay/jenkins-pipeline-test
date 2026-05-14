// async/await  makes your asynchronous code look and behave like normal,top-to-bottom synchronous code.
//  The two golden rules 1.async : you must put the keyword async before a function to tell javascript,"This function will handle asynchronous tasks."
// await : you use await inside that function before promise. it tells javascript "pause here until the promise is finished"

async function task1(){
    await console.log ("task 1")

    await console.log ("task 2")

    await console.log ("task 3")
}
task1();

