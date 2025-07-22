class Account{
    acc_Name;
    acc_Addrress;
    acc_Mobile;
    update_Address(){}
    updte_Mobile(){}
}
class SA extends Account{
    acc_Id;
    acc_Bal;
    min_Bal=500;
    open_Account(){}
    deposit_Amount(amount){}
    withdrwl(amount){}
    get_Bal(){}
}

new SA(101,'Rahul','Wayanad',9591619191,5000)
class CA extends Account{
    acc_Id;
    acc_Bal;
    min_Bal=5000;
    deposit_Amount(amount){}
    withdrwl(amount){}
    get_Bal(){}
}
new CA(1001,'Sonia','ND',9591619192,50001)
