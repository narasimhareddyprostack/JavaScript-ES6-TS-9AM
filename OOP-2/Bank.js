class Account{
    min_Bal=500;
    constructor(id,name,amount){
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Bal=amount;
    }
    open_Account(){
        console.log("Account Opened Successfully!")
    }
    deposit_Amount(amount){
        this.acc_Bal=this.acc_Bal+amount;
    }
    withdrawl_Amount(amount){
        this.acc_Bal=this.acc_Bal-amount;
    }
    get_Bal(){  
        return this.acc_Bal-this.min_Bal;
    }
}
let a1=new Account(101,"Rahul",5000)
let a2=new Account(102,"Sonia",25000)
console.log(a1)
console.log(a2)




a1.deposit_Amount(500)
a1.deposit_Amount(50)
a1.withdrawl_Amount(15)
console.log(a1)
console.log(a1.get_Bal())

a2.deposit_Amount(500000)
a2.withdrawl_Amount(5500)
console.log(a2)
console.log(a2.get_Bal())
