class Parent{
    pname;
    constructor(name){
        this.pname=name;
    }
}
class Child extends Parent{
    cname;
    constructor(cn,pn){
        super(pn);
        this.cname=cn;
    }
}
let c1=new Child('Rahul','Rajiv Gandhi')
console.log(c1)