// 1st example

let i=0;

for(i=0;i<4;i++){
    console.log(i);
}


// (i=0) initially i is 0 that means it executes once upon entering the loop

// (i<4) it checked bedforce every loop iteration , if false the loop steps.

// console.log(i) body of the loop runs again and again untill the condition is true

//  (i++) it excutes or increments after the body on each iteration.


//2nd example

for(let i=0;i<4;i++){
    console.log(i);
}

//3rd example

let i= 0; // global variable

for(i=0;i<4;i++){
    console.log(i);
}

console.log(i);

// 4th example

//skipping parts inside for loop

let i=0;

for(i=0;i<4;i++){
    console.log(i);
}

// we can amit the beginning or start mode inside the for loop, if we need to do anything at the loop start.

// 5th example
let i=0;

for (; i<5;){
    console.log(i);
    i++;
}

// we can also remove the starting or ending point inside the for loop as shown in the above example

// we actually remove everything , if we do that we will create infinite loop which is as shown below

// for (; ;){

// }

// note  that inside for loop we need to specify ; otherwise we will get syntax  error.


// 6th example:

for (let number = 11 ; number>=0 ; number --){
    console.log(`Number is : ${number}`);

}

// 7th example

for(let i=1;i<10;i++){
    if(i%2==0){
        console.log(`even number :${i}`)
    }else{
        console.log(`odd number:${i}`);
    }
}

//8th example

// display only odd number and skip even number 
// continue is keyword which skips
for(let i=0; i<=10; i++){
    if(i%2==0) continue;
    console.log(i);
}

