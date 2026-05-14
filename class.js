class vegetable{
    constructor(name,price)
    {
      this.name=name
      this.price=price
      console.log("this is constructor")
    }
    info() {
        console.log(this.name)
        console.log(this.price)
        
    }

}
//object creation
let v=new vegetable("carrot",123)
v.info()
let v1 =new vegetable ("potatoe",234)
v1.info()