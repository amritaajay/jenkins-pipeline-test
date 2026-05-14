// Abstraction is the concept of hiding the complex implementation details and showing only the necessary features of an object. Think of it as a "need-to-know" basis for your code.
class jeep {
    start()
    {  this.#engineOn()
        console.log (" Jeep start")
      
    }
    #engineOn(){
        console.log ("Jeep engine on")
    }
}

let j1 = new jeep();
// j1.start ()