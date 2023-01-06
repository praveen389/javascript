const languages =[];
//Callback Hell means complex nested callback;

function favoriteLanguages(){
    setTimeout(() => {
        languages.push('python','c#','javascript','c#','java');
        console.log('Languages are added in the array...');

        setTimeout(()=>{
            console.log('...Displaying array after using push method');
            console.log(languages);

            setTimeout(()=>{
                const randomIndex = Math.floor(Math.random() *((languages.length-
                    1) -0) +0);
                console.log(`Favorite Languages : ${languages[randomIndex]}`);
            },8000);
        },6000);
    }, 3000);
}

favoriteLanguages();

