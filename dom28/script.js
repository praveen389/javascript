// localstorage 
// it is a data storage in the browser which is a web
// storage , which allows site to store data which will be available even ofter 
// closing the browser window.

// web Storage API -Localstorage

localStorage.setItem('name','kiran');

localStorage.setItem('friend','peter');

localStorage.setItem('job','Developer');

const name1=localStorage.getItem('name');

const friend1=localStorage.getItem('friend');

const job1= localStorage.getItem('job');


console.log(name1,friend1,job1);

// localStorage.removeItem('name');

// const anotherName=localStorage.getItem('name');

// console.log(anotherName);

localStorage.clear();

