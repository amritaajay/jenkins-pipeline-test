function fun1(callback){
    callback()
    console.log("fun1 is called")
}
function fun2(callback){
    callback()
    console.log("fun2 is called")
}
function fun3(callback){
    callback()
    console.log("fun3 is called")
    
}
// fun1(function()
// {
//     fun2(function() {
   
//         fun3(function (){

//             console.log ("all function are called")
//     }}
//     }

  fun1(function()
  {
     fun2(function()
     {
          fun3(function(){

             console.log("all function are called")
          }

          )
     }

     )
  }

  
)      








   
        
            
    

    
