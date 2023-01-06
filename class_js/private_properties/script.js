/* 
Private properties and private methods are prefixed with "#" symbol

they are not accessible out side the class , but can be accessible only inside the same class

*/

class Employee{
    employeeID;
    employeeName;
    #empSalary;

    constructor(employeeID,employeeName,emSalary){
        this.employeeID=employeeID;
        this.employeeName=employeeName;
        this.#empSalary=empSalary;
        console.log(this.#getemployeeSalary());
    }
    #getemployeeSalary =function(){
        return this.#empSalary;
    }



}

let employee1 = new Employee(1011,"Rakesh",45000);

console.log(employee1);

//console.log(employee1.empSalary);
//console.log(employee1.getemployeeSalary());

