/*
From Es6 onwards , javascript supports class based oriented programming apart
from prototype based object oriented programming

class is a model of object , objects can be created based on class

An object that is created based on a class, stores all properties and methods
(function) that are defined in the class.


*/

class Employee{
    //properties
    empID;
    empName;
    salary;

    //method
    getEmployeeName(){
        return this.empName;
    }

    getEmployeeID(){
        return this.empID
    }
    hikeSalary(amount){
        this.salary=this.salary+amount;
    }
}

let employee1 =new Employee();

employee1.empID=2345;
employee1.empName="sam";
employee1.salary=35000;
employee1.hikeSalary(1200);

console.log(employee1);
console.log(employee1.getEmployeeID());
console.log(employee1.getEmployeeName());
console,log(employee1.salary);

let employee2 =new Employee();
console.log(employee2);

employee2.empID=4345;
employee2.empName="Rahul";
employee2.salary=75000;
employee2.hikeSalary(1000);

console.log(employee2);
console.log(employee2.getEmployeeID());
console.log(employee2.getEmployeeName());
console,log(employee2.salary);









