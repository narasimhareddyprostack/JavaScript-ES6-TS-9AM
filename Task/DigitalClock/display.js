/* //document.getElementsByTagName('p')[0].innerHTML="GM"
//document.getElementsByTagName('p')[0].innerHTML=new Date()
document.getElementsByTagName('p')[0].innerHTML=new Date().toLocaleTimeString() */

setInterval(() => {
    document.getElementsByTagName('h3')[0].innerHTML=new Date().toLocaleTimeString();
}, 1000);