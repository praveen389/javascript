const friends =['raj','kiran'];

console.log(friends)

//Json (java script object notation)

//json .stringify an array or object to string

localStorage.setItem('friends', JSON.stringify(friends));

//JSON.parse - we can parse the data and the data becomes an array 
// or object.


const values =JSON.parse(localStorage.getItem('friends'));

console.log(values);

let fruits;

if(localStorage.getItem('fruits'))
{
    fruits=JSON.parse(localStorage.getItem('fruits'));

}else{
    fruits=[];

}

console.log(fruits);

fruits.push('Apple');
fruits.push('Orange');
fruits.push('Banana');

console.log(fruits);

localStorage.setItem('fruits',JSON.stringify(fruits));



// we should not store sensitive information inlocal Storage
// while data is present in localStorage data does not expire.

// local storage is not secure compare than using cookies.

//local storage can be used for storing the data on client side

//maximium data saving is about 5MB in localStorage , which
// has no expiration time
// we candelete data from local storage manually otherwise

// it will be there in the browser.