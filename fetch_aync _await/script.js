

async function getDaya(){
    try{
        const data= await fetch('https://reqres.in/api/users?page=2');
        
        const result =data.json();

        return result = data.json();

        // console.log(result);

        return result;
    }catch(err){
        console.log(err)
    }finally {
        console.log("Sucessfully executed..");
    }
}

getData().then(result =>{
    console.log(result);
    result.data.forEach(user =>{
        console.log(user.first_name);
    });
});






