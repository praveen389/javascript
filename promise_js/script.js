/*
promise in js is used to handle asynchronous  and this promise have one of the three states

- Pending

-Fulfiled

-Rejected

Promise starts in a pending state which means that the process is not complete

If the operation is sucessful , the process end in a fulfilled state , and if  any
 error occurs then the process ends in a rejected state

 suppose if  we request data or API from the server then initially it will be in pending
 state , if the data arrives sucessfully tehn it will be fulfilled state  , or

 if any error occurs tehn it will be rejected state

 we can create a promise using promise constructor

 const promise = new Promise ((resolve , reject)=>{

 });
if the promise returns sucessfully then resolve () function is called, if an error

occurs then  reject() function is called.


finally () will be executed always either resolve or rejected
 */


let languages =[];

//creating promises

const addLanguagesInarray =new Promise((resolve , reject)=>{
    setTimeout(()=>{
        languages.push('Python ','c#','JavaScript','C++','java','c');

        resolve('Languages addes sucessfully in the array...');
        //reject('Languages are not added sucessfully in the array...);

    },2000);
});

const displayLanguages =() =>{

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve(languages);
        },5000);
    });
}

const languagesOfTheDay =() =>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            const randomIndex = Math.floor(Math.random() *((languages.length-
                1) -0) +0);
            resolve(`Favorite Languages : ${languages[randomIndex]}`);
        },7000);
    });
}

addLanguagesInarray.then(result =>{
    console.log(result);
    return displayLanguages();

}).then(languages =>{
    console.log(languages);
    return languagesOfTheDay();
}).then(languages =>{
    console.log(languages);

}).catch(err=>{
    console.log("Error");
    console.log(err);
}).finally(()=>{
    console.log('Processing done sucessfully....')
});



// addLanguagesInarray.then(result =>{
//     console.log(result);
//     return displayLanguages();

// }).then(languages =>{
//     console.log(languages);
//     return languagesOfTheDay();
// }).then(languages =>{
//     console.log(languages);

// }).finally(()=>{
//     console.log('Processing done sucessfully....')
// });






