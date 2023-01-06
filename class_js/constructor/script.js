/* Constructor is a special function in the class that executes every time
when  a new  object is created for the class 
constructor is mainly used for initializing  properties in the class

constructor can receive one or more parameters and a class can have only one 
constructor in java script

In javascript multiple constructor in the same class are not allowed


*/

class Employee{

    empName;
    empAge;
    empEmail;

    constructor(empName,empAge,empEmail){
        //console.log("Employee constructor");
        this.empName=empName;
        this.empAge=empAge;
        this.empEmail=empEmail;

    }
}

let employee1 = new Employee( "Suresh",44,"suresh@gmail.com");
console.log(employee1);
console.log(employee1.empName,employee1.empAge,employee1.empEmail)


let employee2 = new Employee( "praveen",44,"suresh@gmail.com");
console.log(employee2);
console.log(employee2.empName,employee2.empAge,employee2.empEmail)




