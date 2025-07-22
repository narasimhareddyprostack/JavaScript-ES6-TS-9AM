class Account{
    //class contains propertis and methods
    acc_Id=101;
    open_Account(){
        console.log("Account Opened Successfully!")
    }
}
let a1=new Account();
let a2=new Account();
console.log(a1)   //Account{acc_Id:101}
console.log(a2)   //Account{acc_Id:101}
console.log(a1.acc_Id)
console.log(a2.acc_Id)
a1.open_Account()
a2.open_Account()