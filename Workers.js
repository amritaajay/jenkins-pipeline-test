// parent class (parent file) eg of polymorphism

export class Workers {
    overTime(){
        console.log ("worker over Time")
    }

}


// Polymorphism is one of the "big four" pillars of Object-Oriented Programming (OOP). Derived from Greek, 
// it literally means "many forms." In programming, it allows a single interface (like a method or an operator) to be used for different underlying forms (data types).
// extends keyword: This establishes the parent-child relationship.

// Method Overriding: Notice how Teach and Admin have the same work() method name as the parent, but different logic inside. This is the heart of Runtime Polymorphism.

// super(): You must call this in your constructor to ensure the parent class (Workers) is initialized before you add specific details to the subclass.