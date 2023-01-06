class Employee
{
    constructor(name ,salary,tax){

        this.name =name;
        this.salary=salary;
        this.tax =tax;
    }

    calculatorSalary(){
        this.netSalary =Math.round(this.salary -((this.tax/100)* this.salary));

        return this.netSalary;
    }

    generateID(){

        this.id =Math.floor(Math.random()* 100000);

        return this.id;
    }
}

class EmployeeUI
{
    alertMessage(messageType,messageText){

        const markup =`
        <div class="alert text-center alert-${messageType}" role="alert">
        ${messageText}
        </div>
        `;

        const form =document.querySelector('form');
        form.insertAdjacentHTML('beforebegin',markup);

        setTimeout(()=>{
            document.querySelector('.alert').remove();
        },2000); 
    }

    addEmployee(employee){

        const employeelist =document.querySelector('tbody');
    
        const markup =`
        <tr>
        <th scope="row">${employee.id}</th>
        <th>${employee.name}</th>
        <th>${employee.salary}</th>
        <th>${employee.tax}</th>
        <th>${employee.netSalary}</th>
        <th>
        <a href="#" class="btn btn-danger delete">Delete</a>
        </th>
        </tr>
        `;
        employeelist.insertAdjacentHTML('afterbegin',markup);
    }
    
    clearfields(){
        document.querySelector('#nameField').value='';
        document.querySelector('#salaryField').value='';
        document.querySelector('#taxField').value='';
    }

    deleteEmployee(target){
        if(target.matches('.delete'))
        {
            console.log(target.parentElement.parentElement);
            target.parentElement.parentElement.remove();

            return true;
        }
    }
}

class StoreEmployee{

    static getEmployees(){
        let employees;

        if (localStorage.getItem('employees')==null){
            employees =[];
        } else {
            employees =JSON.parse(localStorage.getItem('employees'));
        }
        return employees;
    }
    static addEmployee(employee){

        const employees=StoreEmployee.getEmployees();

        employees.push(employee);

        localStorage.setItem('employee',JSON.stringify(employee));
    }

    static displayEmployees(){
        const employees = StoreEmployee.getEmployees();

        const employee_UI = new EmployeeUI();

        employees.forEach((employee)=>{
            employee_UI.addEmployee(employee);
        });
    }

    static removeEmployee(id){
        const employees =StoreEmployee.getEmployees();

        employees.forEach((employee,index)=>{
            if (employee.id === parseInt(id)){
                employee.splice(index,1);
            }
        });

        localStorage.setItem('employees',JSON.stringify(employees));
    }
}





const addEmployeeButton =document.querySelector('#add_employee');

addEmployeeButton.addEventListener('click',e=>{

    e.preventDefault();

    const name =document.querySelector('#nameField').value;

    const salary =document.querySelector('#salaryField').value;

    const tax =document.querySelector('#taxField').value;

    // console.log(name,salary,tax);

    const employee_UI =new EmployeeUI();

    console.log(employee_UI);

    if(name ===''|| salary===''|| tax===''){
        employee_UI.alertMessage('danger','Please complete the form');

    }else {
        const employee =new Employee(name,salary,tax);

        console.log(employee);
        employee.id = employee.generateID();
        employee.netSalary=employee.calculatorSalary();

        employee_UI.addEmployee(employee);

        StoreEmployee.addEmployee(employee);
        employee_UI.alertMessage('sucess','Employee is aded sucessfully....');
        employee_UI.clearfields();
    }

});

document.querySelector('tbody').addEventListener('click',e=>{
    //console.log('clicked....')
    const employee_UI =new EmployeeUI();
    const isDeleted =employee_UI.deleteEmployee(e.target);

    console.log(e.target.parentElement.parentElement.firstElementChild.textContent);

    const e_id =e.target.parentElement.parentElement.firstElementChild.textContent;

    StoreEmployee.removeEmployee(e_id);

    if(isDeleted)
    {
        employee_UI.alertMessage('sucess','Employee deleted sucessfully....');

    }
});

StoreEmployee.displayEmployees();
