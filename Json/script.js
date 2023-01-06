let obj1 ={
    firstNmae:"Rahul",
    lastName:"Kumar",
    age:24

}

//Json .Strigify

let str1 =JSON.stringify(obj1);

console.log(obj1);

console.log(str1);

//JSON.parse

let obj2 =JSON.parse(str1);

console.log(obj2);