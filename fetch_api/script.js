/*

fetch api alows us to make http request to server web browser

fetch() uses the promise to deliver more flexible features tomake  request to server

fetch()method which is available in global scope which instructs the 
browser to send a URL.

This method requires only one parameter which is URL of  the resource

which we want to fetch 
*/

function getData(){
    fetch('https://reqres.in/api/users?page=2')
    .then(data =>{
        return data.json();
    }).then(result =>{
        console.log(result);

        result.data.forEach(user =>{
            console.log(user.first_name);
        });
    }).catch(err =>{
        console.log(err);
    }).finally(()=>{
        console.log("Sucessfully Done..")
    });
}

getData();