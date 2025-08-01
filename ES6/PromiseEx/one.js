let goToGoa=(success,failure)=>{
    let acc_Bal=75000;
    acc_Bal>=20000?success("Go & Enjoy!"):failure("Try Next Month")
}

goToGoa((resp)=>{console.log(resp)},(err)=>{console.log(err)})
//goToGoa(()=>{},()=>{})