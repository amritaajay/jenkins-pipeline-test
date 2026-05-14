// Encapsulation is the practice of bundling data and methods into a single unit and restricting access to certain details. In modern JavaScript, we use the # symbol to create private fields that cannot be accessed from outside the class.

// Public: Accessible everywhere.

// Private (#): Accessible only within the class.
  export class BankAccount {
    #balance = 200;

    deposit(amount){
        this.#balance +=amount;
    }
    withdraw(wthamt){
        this.#balance =wthamt;
        console.log("inside withdraw")
    }
    checkBalance()
    {
console.log (this.#balance)
console.log ("inside check balance")
    }
}
let BankAc=new BankAccount()
BankAc.checkBalance()
BankAc.deposit (1000)
BankAc.checkBalance()
BankAc.withdraw(500)
BankAc.checkBalance()
