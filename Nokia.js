// Nokia is a child class (dervied class)

import { Mobile } from "./Mobile.js";
class Nokia extends Mobile {      // is a relation

    textMsg(){
        console.log ("smart phone")
    }
}
let n=new Nokia()
n.textMsg()
n.phonecall()