// let student ={
//     studentName:"suraj",
//     getStudentName:function (){ 
//         console.log("getStudentName regular function",this);
//         setTimeout(function(){
//             console.log("settimeout regular function",this);

//         },3000);

//         setTimeout(()=>{
//             console.log("settimeout arrow function",this);
//         },6000);
//     }

//     getStudentName:()=>{
//         console.log("getStudentName arrow function" ,this);
//     }
// };

// student.getStudentName();

//for in loop executes once per each property of the object,
//this loop reads each property of an object , this for in loop should 
//not be used for arrays.

// let  student ={
//     studentName:"Sam",
//     email:"sam@gmail.com",
//     branch:"CS",
//     sub1:"Graph Theory",
//     sub2:"Dta Structure",
//     sub3:null
// };

// for(let prop in student){
//     console.log(prop,student[prop]);

//     if(student[prop] = null|| student[prop] ==undefined){
//         console.error("Value null or undefined are not allowed");
//     }
// }





//Destructuring objects

/*
It assigns each property value into respective variable

if the variable name is same as property name writing variable name is optionla

*/

// let person ={

//     firstName:"Rahul",
//     lastName:"Kumar",
//     age:25,
//     email:"rahul@gmail.com"
// }

// let fn = person.firstName;
// let ln =person.lastName;
// let age=person.age;
// let email =person.email;
// console.log(fn,ln,age,email);
// let {firstName:fn ,lastName:ln,age,email}=person;
// let {firstName,lastName,age,email} =person;
// console.log(firstName,lastName,age,email);
// let{firstName,lastName,...others}=person;
// console.log(firstName,lastName,...others);
// let{...personDetails} =person;
// console.log(personDetails);
// console.log(personDetails.firstName);

// let {firstName:fn,email="r@gmail.com",age,lastName:ln,}=person;

// console.log(email);

//Destructuring function parameters

// let func1 =function({employeeName:empName,email,phone})
// {
//     console.log(empName,email,phone);

// }
// let employee ={employeeName:"suresh",email:"suresh@gmail.com",phone:"5654567656"};

// func1(employee);

//Inheritance using __proto__

// let person ={personName:"Suresh",age:35};//parent object

// let teacher ={mainSubject:"Mathematics",};//child

// let student ={rollNo:33,marks:55};

// teacher.__proto__=person;

// console.log(teacher);
// console.log(teacher.personName,teacher.age);
// console.log(teacher.__proto__);
// console.log(teacher.__proto__.personName);
// student.__proto__=person;
// console.log(student.__proto__.personName);


// let user ={
//     userName:"",
//     password:"",
//     isLoggedIn:false,
//     login:function(){
//       if(this.userName=="Admin"&&this.password=="password134"){
//         this.isLoggedIn=true;
//         return true;
//       }else{
//         this.isLoggedIn=false;
//         return false;
//       }
//     }
// }

// let manager ={
//     departmentName:"HR",
//     approvesLeaves:function(){
//       return "Apprive leaves";
//     },
//     dashboard:function(){
        
//             return `${this.userName}'s dashboard`
//         }
//     }
// manager.__proto__=user;
// manager.userName="Admin";
// manager.password="password134";
// console.log(manager.login());
// console.log(manager.approvesLeaves());
// console.log(manager.dashboard());

//closure 

//closure is a function that contains private variable and private function which

//cannot be  acessed from outside the closure

//the closure function returns an object or function , which can be acessiable from outside the closure

// function bankAccountDeposit()
// {
//     let currentBalance =1000;
//     let deposit =function (depositAmount){
//         currentBalance=currentBalance+deposit;
//         return`Account Balance:${currentBalance}`;
//     }

//     return deposit;
// }

// let deposit1 =bankAccountDeposit();

// console.log(deposit1(1500));

// console.log(deposit1.currentBalance);

// let Teacher = function (teacherName){
//     this.teacherName=teacherName;


// }
// let MathTeacher =function(teacherName,mainSubject){

//     Teacher.call(this,teacherName);
//     //here we are invoking parent constructor function using call , so we 
//     // are supplying current object to thiskeyword of aprent constructor function.

//     this.mainSubject=mainSubject;
// }

// let MathTeacher =new MathTeacher("Sam","Mathematics");
// console.log(mathTeacher);
// console.log(mathTeacher.teacherName);
// console.log(mathTeacher.mainSubject); 


// new keyword
//the new keyword creates a new object and supplies the same to
// a constructor function as "this" object and returns the same object at the end of function.

//In case of new keyword the constructor function does not create new object, it
// receives a new object , initializes properties and methods into the same

//Inside the constructor function , "this " keyword acesses the current object.


let Employee =function (employeeName , employeeID,salary){
    this.employeeName=employeeName;
    this.employeeID =employeeID;
    this.salary =salary;
    this.getEmployeeName=function(){
        return this.employeeName;
    };
}

let employee1= new Employee("Sam",2323,56000);
let employee2= new Employee("Rahul",4423,66000);

console.log(employee1,employee2);
console.log(employee1.getEmployeeName());
console.log(employee2.getEmployeeName());