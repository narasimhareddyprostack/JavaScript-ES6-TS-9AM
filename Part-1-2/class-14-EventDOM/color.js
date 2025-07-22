let changeColor1=()=>{
   // let tag_Ref=document.getElementById('btn1')
    //document.getElementById('btn1').innerHTML="GM"
    document.getElementById('btn1').style.backgroundColor="blue"
}
let changeColor2=()=>{
   /*  let tag_Ref = document.getElementsByTagName('button')[1]
    console.log(tag_Ref) */
    document.getElementsByTagName('button')[1].style.backgroundColor="yellow"
}
let changeColor3 = ()=>{
    document.getElementById('focusEx').style.backgroundColor="Yellow"
}
let changeCase = ()=>{
    let name=document.getElementById('todayLate').value;
    //alert(name)
    document.getElementById('todayLate').value=name.toUpperCase();
}