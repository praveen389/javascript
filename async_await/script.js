/*


async/await keyword allows us to write asynchronous code that build 

on the top of promise which is introduced in ES2017

that looks more redable and easier to write the code

it is technically we can say that asncc and await is syntatic sugar promise
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


async function favoriteLanguages(){

    const result = await addLanguagesInarray;

    console.log(result);

    const languages =await displayLanguages();
    console.log(languages);

    const language =await languagesOfTheDay();

    console.log(language);

}

favoriteLanguages();


// using try and catuc
// we can catch the error using try .. catch statements
// errorlens


async function favoriteLanguages(){

    try{
        const result = await addLanguagesInarray;

    console.log(result);

    const languages =await displayLanguages();
    console.log(languages);

    const language =await languagesOfTheDay();

    console.log(language);
    } catch (err){
        console.log('Error:' +err);
        console.error(err);
    }

    finally{
        console.log("Sucessfully Executed....");
    }

}

favoriteLanguages();