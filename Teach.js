import { Workers } from "./Workers.js";
class Teach extends Workers{
    Teach()
    {
        console.log ("Teach")
    }
    overTime()
    {
        console.log ("Teach over time")
    }
}

let t1 = new Teach();
t1.overTime()
t1.Teach ()
let w1= new Workers();
w1.overTime()