// ternary operator

// terinary operator evaluates a condition and executes a block of code based on condition


//syntax:

//condition?expression1:expression2

// if the condition evaluates to true then expression1 is executed,
// if the condition evaluates to false then expression2 is executed.

// ternary operator is also known as condition operator

// example 1

let age =parseInt(prompt("please enter age:"));

let result =(age>=18)? "eligible to vote" :"not eligible";

console.log(result);

//example 2

let marks =parseInt(prompt("please enter marks:"));

let result =(marks>=35)? "Passed" :"Failed";

console.log(result);


// nested ternary operator

// we can nest one ternary operator as an expression inside another ternary operator

let a=10;

let result=(a>=0)?(a==0 ?"zero":"positive"):"negative";
console.log(`the number is $(result)`);