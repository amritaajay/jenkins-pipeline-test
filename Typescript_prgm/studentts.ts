class studentts{
    name: string;
    age:number
    // The constructor initializes the properties
    constructor(name:string,age:number)
    {
       this.name=name;
       this.age=age;
       console.log(name);
       console.log(age)
    }
    // // A method to display details
    showDetail():void
    {
       console.log("student name is=" +this.name)
       console.log("student age is=" + this.age)
    }
    displayMark(sub:string,mark:number):string
    {
        return sub + "=" +mark
  
    }
}

// object creation
let s= new studentts("Sam",24);
s.showDetail();
let samMark=s.displayMark("Maths",90)
let s1 =new studentts("Amrita",30)
s1.showDetail();
let amritaMark =s1.displayMark("English",30)
console.log(samMark)
console.log(amritaMark)
