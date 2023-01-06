// // functions

// // functions name_of_function(){
// //     {
// //        //body of function 
// //     }
// // }


// // ex1

// // function showMessage()
// // {
// //     console.log('hi javascript');
// // }

// // showMessage();
// // showMessage();

// // ex2

// // let username="sam";

// // function showMessage(){
// //     let message=`hello ${username};`
// //     console.log(message);
// // }

// // showMessage();



// // let username="sam";

// // function showMessage(){

// //     let username="kiran";
// //     let message=`hello ${username};`
// //     console.log(message);
// // }
// // console.log(username);

// // showMessage();

// // console.log(username);


// // function showMessage(color1,color2,color3,color4,color5){
// //     let colors=${color1}$ {color2}${color3}${color4}${color5};
// //     console.log(colors);

// // }

// // showMessage("green","yellow","blue","voilet","yellow");


// // default values:

// // function colors(color1,color2="red"){

// //     let colors=color1+color2;
// //     console.log(colors);

// // }

// // colors("blue");
// // colors("ywllow","green");

// // airthematic operations

// // function add(x,y){
// //     let result= x+y;
// //     console.log(result);

// // }
// // function mul(x,y){
// //     let result= x*y;
// //     console.log(result);

// // }
// // function sub(x,y){
// //     let result= x-y;
// //     console.log(result);

// // }
// // function div(x,y){
// //     let result= x/y;
// //     console.log(result);

// // }

// // add(2,3);
// // mul(1,3);
// // sub(4,5);

// // return statement in a function 

// // the return statement can be used to return the value to a function call

// // if nothing is returned the function retursns an undefined value

// // function add(a,b){
// //     return a+b;
// // }
// // function mul(a,b){
// //     return a*b;
// // }
// // function sub(a,b){
// //     return a-b;
// // }

// // let addition = add(3,5);
// // console.log(addition);

// // let multiplication = add(3,5);
// // console.log(multiplication);

// // let subtraction = add(3,5);
// // console.log(subtraction);


// // let addition = function add(a,b){
// //     return a+b;
// // }
// // console.log(addition(12,13));

// // here the variable addition is used to store the fuction here the function is treated as an XPathExpression


// // let sub= function subt(a,b){
// //     return a-b;

// // }

// // console.log(sub(4,1));


// // square of a number 

// // let sq_number=function sq(n){
// //     return n*n;
// // }



// // let check_score= function checkScore(currentScore,passingScore){
// //     if(currentScore >=passingScore)
// //     {
// //         return "passed";

// //     }else{
// //         return"failed";

// //     }
// // }

// // let first_Score =check_Score(90,55);

// // console.log(`the first result is :$(first_score)`)

// // let second_Score = check_Score (55,15);

// // console.log(`the second result is :$(second_Score)`)

// // let third_score = check_Score (45,55);

// // console.log(`the third result is :$(third_Score)`)


// // function can be pssed as value


// // function add(a,b){
// //     return a+b;
// // }
// // function mul(a,b){
// //     return a*b;
// // }
// // function sub(a,b){
// //     return a-b;
// // }
// // function div(a,b){
// //     return a/b;
// // }


// // let arithmetic_operations =[add,sub,mul,div];

// // for(let fnc of arithmetic_operations)
// // {
// //     console.log(fnc);
// //     console.log(fnc == add);
// //     let result=fnc(20,10);

// //     console.log(`the airthematic operations:${result}`);

// // }


// //example 

// // function add(a,b){
// //     return a+b;
// // }
// // function mul(a,b){
// //     return a*b;
// // }
// // function sub(a,b){
// //     return a-b;
// // }
// // function div(a,b){
// //     return a/b;
// // }


// // let arithmetic_operations =[add,sub,mul,div];

// // for(let fnc of arithmetic_operations)
// // {
// //     if (fnc == add){
// //         let r=fnc(22,33);
// //         console.log(`the addition is ${r}`)
// //     }
// //     if (fnc == sub){
// //         let r=fnc(22,33);
// //         console.log(`the subtraction is ${r}`)
// //     }
// //     if (fnc == mul){
// //         let r=fnc(22,33);
// //         console.log(`the multiplication is ${r}`)
// //     }
// //     if (fnc == div){
// //         let r=fnc(22,33);
// //         console.log(`the division is ${r}`)
// //     }
// // }


// // function accepts another function as an argument

// // function call_Function(func){
// //     func();
// //     func();
// //     func();

// // }

// // function shout(){
// //     console.log("shouting");
// // }
// // function shout(){
// //     console.log("crying");

// // }

// // call_Function(shout);
// // call_Function(cry);


// // example

// // function call_Function(func){
// //    if (func == shout){
// //     func();
// //     func();
// //     func();
// //    }
// //    if (func == cry){
// //     func();
// //    }
// // }


// // function shout(){
// //     console.log("shouting");
// // }
// // function shout(){
// //     console.log("crying");

// // }

// // call_Function(shout);
// // call_Function(cry);

// // example

// // function call_Function(func){
// //   for(let i=1;i<=num ; i++){
// //     func();
// //   }
// //  }
 
 
// //  function shout(){
// //      console.log("shouting");
// //  }
// //  function cry(){
// //      console.log("crying");
 
// //  }
 
// //  call_Function(shout,5);
// //  call_Function(cry ,2);


// //  function pickOne( fcn1 ,fnc2){
// //     let rndm = Math.random();
// //     if (rndm<0.5){
// //         fcn1();
// //     }else {
// //         fnc2();
// //     }
// //  }

// //  function shout(){
// //     console.log("crying");

// // }

// // function cry(){
// //     console.log("crying");

// // }

// // pickOne(shout , cry);


// // returning multiple values from a function using an array


// // function names(){
// //     let name1 ="rohit";
// //     let name2 ="rahul";
// //     let name3 ="seema";
// //     let name4 ="krishna";
// //     let name5 ="suraj";

// //     //  returning as an array 
// //     return [names1, names2, names3 , names4 , names5]

// // }

// // let name_list = names();

// // console.log(`list of names:${name_list}`);


// // exe2

// // function names(n1,n2,n3,n4,n5){

// //     let name1 =n1;
// //     let name2 =n2;
// //     let name3 =n3;
// //     let name4 =n4;
// //     let name5 =n5;

// //     returning as an array 
// //     return [names1, names2, names3 , names4 , names5]

// // }

// // let name_list = names("rohit","rahul","seema","krishna","suraj");

// // console.log(`list of names:${name_list}`);



// // function returns a function

// // function multipleBy(num){
// //     return function x(n1){
// //         return n1*num;

// //     }
// // }

// // let triple = multipleBy(3);
// // console.log(triple);
// // // console.log(triple(4));
// // // console.log(triple(5));
// // let double =multipleBy(2);
// // console.log(double(3));

// // ex3

// // function makeBetweenFunc(x,y){

// //     return function x(num){
// //         return num >=x && num <=y;
// //     }
// // }


// // this function checks if a value is between the range

// // let range1=makeBetweenFunc(0,18);
// // console.log(range1(19));


// // anonymus function 


// // an anonymus function is a function without a name.

// // this function has no name between the function keyword and paranthasis().

// // let func =function (){
// //     console.log("anonymus function");

// // }

// // func();


// // iife ( immediately invoked function expression)

// // if you want to create a function that will execute immediately after the declaration,
// // then we can use anonymus function.

// // (
// //     function(){
// //         console.log("anonymus function");

// //     }
// // )();


// // ex 1
// // (
// //     function add(a,b){
// //         let x=a+b;
// //         console.log(x);
// //     }
// // )(12,10);

// // arrow function :

// // ES6 introduced arrow function expression that provides a short hand for declaring anonymus function

// // normal function

// // let display= function(){
// //     console.log("anonymus function");
// // }

// // display();


// // syntax of arrow function:

// // let func=(arg1,arg2...argN)=>XPathExpression;

// // the above code creates a function name func that accepts arg1 , to argN then avaluatres

// // the expression on the right side and returns a result


// // let display = () => {
// //     console.log("anonymus function");
// // }
// // display();

// // let display2 =() => console.log("anonymus function 2");

// // display2();


// // let sum = function (a,b) => {
// //     console.log(`${a+b}`);
// // }

// // sum (12,12);

// // let mult = (a,b) => a*b ;

// // console.log(mult(12,12));


// //recursion

// // recursion ia afunction which calls itself

// // let factorial =function(x)
// // {
// //   if( x==1 )
// //   {
// //     return 1;
// //   } else{
// //     return factorial(x-1)*x;
// //   }
// // }

// // console.log(factorial(5));

// //arguments keyword

// /*

// argument keyword represents the list of arguments
// received inthe current function , we can access each argument value by using
// index , arguments[0] ,arguments[1] ...

// */


// // let addition = function()
// // {
// //   let sum=0;
// //   for(let i=0; i<arguments.length;i++)
// //   {
// //     sum =sum+arguments[i];
// //   }
// //   return sum;
// // }

// // console.log(addition(36,45,66,77));

// // console.log(addition(55,85,99,11,44,76,12,33));

// // currying 

// /*

// curring is a technique of converting a function that takes multiple arguments 
// into a sequence of nested function that each take a single argument.


// advantage : we can simplyfy the large code into smaller

// function that performs each  smaller task.
// */

// let multiply = function(a){
//   return function (b){

//     let result =a*b;

//     return function (c){
      
//       let result2 =result *c;

//       return result2;
//     };
//   };
// };

// let fun2 = multiply(10); // calls first function

// let fun3 =fun2(20); // calls second function.

// console.log(fun3(30)); //calls third funnction


// console.log(multiply(10)(20)(50));


// // @Praveen: Hi Today Meeting at 8pm - from sandeep


// let logMessage =function(receiver){
//   let result1 ='@${receiver}';

//   return function(message){

//     let result2 = `${result1}:${message}`;

//     return function (hour , timePeriod)
//     {
//       let result3 = `${result2} at ${hours} ${timePeriod}`;

//       return function (sender)
//       {
//         let result4 = `${result3} -From ${sender}`;

//         return result4;
//       };
//     };
//   };
// };

// console.log(logMessage("Praveen") ("HI Today Meeting") (6,"pm")("Sandeep"));



// //Built in function

// charAt() -- returns character using index

// let x= "Hyderabad";

// let y=x.charAt(3);

// console.log(y);

// // charCodeAt -- returns character first ASCII Value

// // let x ="HYDERABAD";
// // let z="Bengaluru";

// // let y= z.charCodeAt("B");

// // console.log(y);







