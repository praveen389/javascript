// do while loop excutes at least once if the condition is false

// do while loop execute at least once if the condition is false


// example 1

let i=1;
do{
   console.log(i);
    i++;
}while(i>5);


// exaple2

let sum=0;
let num=0;
num=parseInt(prompt("please enter a number:"));

do{
   sum += num;
   num--;
}while(num>=0);
console.log(`the sum is ${sum}`);
