class Account{
    acc_Id;
    acc_Name;
    acc_Bal;
    constructor(id,name,amount){
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Bal=amount;

    }
}
let rg=new Account(101,"Rahul",5000);
let sg=new Account(102,"Sonia",15000);
let pg=new Account(103,"Priyanka",25000);
console.log(rg)
console.log(sg)
console.log(pg)