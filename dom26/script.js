

const form=document.querySelector(".signup");
 
form.addEventListener('submit',e=>{
    e.preventDefault();
    console.log(form.username.value);
 });

 // regex101.com


 // In javascript , regex(regular expression) 
 // is an object that describes a sequence of character
 // used for defining a search pattern.



 const username='javasc';

 const pattern = /^[a-z]{6}$/;

 
 let result =pattern.test(username);

 console.log(result);

 if(result)
 {
    console.log('regex test passed');
 }else{
    console.log('regex test failed');

 }
 

//  let result= username.search(pattern);

//  console.log(result);
