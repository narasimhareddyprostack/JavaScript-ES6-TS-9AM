//create
let emp={
    'eid':101,
    'ename':'Rahul',
    'esal':45000.45
}
//read
console.log(emp)
//how to read object properites
console.log(emp.eid)
console.log(emp.ename)
console.log(emp.esal)
console.log(emp.loc)  //undefined
//update
emp.ename = 'Rahul Gandhi'
console.log(emp)
emp.email = "rg@gmail.com"
console.log(emp)
//delete
delete emp.esal
console.log(emp)