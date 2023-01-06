// Sychronous Javascript

const func2 =()=>{
    console.log("This is function2");
}


const func1 =()=>{
    console.log("This is function1");
    func2();
    console.log("called both functions successfully ")
}

func1();


// asunchronous function

// const func2 =() =>{
//     setTimeout(() =>{
//         console.log("This is function 2");
//     },3000)
// }

// func1 =() =>{
//     console.log("this is function 1");
//     func2();
//     console.log("function 1 called ..");
//     console.log("function 2 called ...");
//     console.log("Both function executed sucessfully ..");

// }

// func1();