// // // arrays in javascript is an object that represents a collection of similar type of elements

// // //syntax:

// // // <type> var_name=[value1, value2,value3.....valueN]

// // // example 1:

// // // let fruits1="apple";
// // // let fruits2="orange";
// // // let fruits3="blueberries";
// // // let fruits4="pinapple";
// // // let fruits5="grapes";


// // // let fruits=["apple ", "orange","blueberries","pinapple","grapes"];

// // // console.log(fruits);

// // // console.log(fruits[0]);

// // // console.log(fruits[1]);

// // // console.log(fruits[2]);

// // // console.log(fruits[3]);


// // //example 2:

// // // let vegitables=[];

// // // console.log(vegetables);
// // // vegetables[0] ="potato";

// // // vegetables[1] ="onion";

// // // vegetables[2] ="tomato";

// // // vegetables[3] ="peas";

// // // vegetables[4] ="cabbage";


// // // console.log(vegetables);
// // // console.log(typeof(vegetables));

// // // vegetables[2]="califlower";

// // // console.log(vegetables);



// // // example 3:

// // // let mixed =['apple',45,"onion",undefined,null,"tomato"];

// // // console.log(mixed);

// // // let value=mixed[1];

// // // console.log(`value is:${value }\n type:${typeof(value)} }`);



// // // let veg_items=mixed[0]+""+mixed[1]+""+mixed[5];

// // // console.log(`veg items : ${veg_items} \nType:${typeof(veg_items)}`);


// // // for of loop

// // //for of loop can be used to iterate over iterable objects (arrays,string maps etc..)

// // syntax:

// // // for(element of iterable){
// // //     body of for of loop
// // // }

// // // here iterable can be iterable object like arrays ,strings ,sets etc: 
// // // elements can be items in the iterable

// // //normal for loop


// // // let students=["dev", "rahul","priya","kiran","abhishek"];

// // // for(let i=0; i<students.length; i++){
// // //     console.log(students[i]);
// // // }

// // //for of loop:

// // // let students =["dev", "rahul","priya","kiran","abishiek"];

// // // for (let elem of students){
// // //     console.log(elem);
// // // }

// // // let string1 ="javascript";
// // // for (let name of string1){
// // //     console.log(name);
// // // }

// // // methods

// // // tostring() method

// // // this method converts an array to string of common seperated values.

// // // let fruits =["apple", "orange" , "bluebeery", "grapes",];

// // // console.log(`arrays:${fruits}\n type:${typeof(fruits)}`);

// // // console.log("converting from array to string using toString() method...");

// // // let new_items=fruits.toString();

// // // console.log(`string:${new_items}\n type:${typeof(new_items)}`);


// // // join () method

// // // this method  joins all array elements into a string so basically it behaves like 
// // // toString(), but along with that we need to specify the seperator

// // let fruits =["apple", "orange" , "bluebeery", "grapes",];
// // console.log(`arrays:${fruits}\n Type:${typeof(fruits)}`);

// // let new_items =fruits.join("_");

// // console.log(`string:${new_items}\n Type:${typeof(new_items)}`);

// // // pop() method
// // // this method removes the last element from an array

// // let fruits =["apple", "orange" , "bluebeery", "grapes",];

// // fruits.pop();
// // console.log(fruits);

// // let remove_items =fruits.pop();

// // console.log(`Removed items :${removed_item}`);

// // console.log(fruits);

// // // pop method (second example)

// // let fruits=["Apple", "orange", "Blueberries", "pinapple","Grapes,"];

// // let arr_length=fruits.length;

// // console.log(`the length of fruits:${arr_length}`);

// // for (let i=0 ; i<=arr_length ; i++){
// //     console.log('extracted elements :${fruits.pop()}\n');

// // }

// // // push() method

// // // the push() method adds one or more elements to the end of given array

// // // this method changes the length of the original array.


// // let fruits=["Apple", "orange", "Blueberries", "pinapple","Grapes,"];

// // console.log


// // fruits.push('lemon');

// // fruits.push('Banana');

// // console.log('modified array:${fruits}...\nlength array:${fruits.length}');

// // for(let i=0; i<fruits.length;i++){
// //     console.log(`Elements present inside the array fruits:${fruits}`);

// // }


// // // concat() method

// // // this method combines two or more array and returs a new string

// // let fruits1=["apple", "banana","pinapple"];

// // let fruits2 =["orange", "blueberries","grapes"];

// // console.log(`fruits:${fruits}`);

// // console.log(`fruits:${fruits2.concat(fruits1)}`);




// // let fruits1=["apple", "banana","pinapple"];

// // let fruits2 =["orange", "blueberries","grapes"];

// // let fruits3=["peach","goldenberries","blackberries"];


// // let fruits=fruits1.concat(fruits2,fruits3);


// // console.log(`fruits:${fruits}`);

// // let fruits_new=["apple", "banana","pinapple"];


// // let fruits_new1=fruits_new.concat("orange", "blueberries","grapes");

// // console.log(`fruits:${fruits_new1}`);

// // // splice () method:

// // // the splice() method returs an array adding or removing its elements in place

// // // syntax :

// // //arr.splice(start,deleteitem,item1...itemN)

// // let numbers=[2,3,4,5,4,3,2,];

// // let removed_item =numbers.splice(4,1,25);

// // console.log(`iems removed :${removed_item}`);

// // console.log(`new itesm added  :${numbers}`);


// // // spice() 2nd example

// // let fruits=["Apple", "orange", "Blueberries", "pinapple","Grapes,"];

// // //removed items are blueberries and pinapple which replaced by golden berries and lemon
// // let removedItem=fruits.splice(2,2 "goldenberries","lemon");

// // console.log(`removed items:${removedItem}`);

// // console.log(`new items:${fruits}`);


// // // adding the elements without deleting existing elements


// // removedItem=fruits.splice(1,0,"cherry","mango");

// // console.log(`removed items: ${removedItem}`);

// // console.log(`new items:${fruits}`);

// // // removed 3 items

// // removedItems=fruits.splice(2,3);

// // console.log(`removed items:${removedItems}`);

// // console.log(`new items:${fruits}`);

// // // splice() example 3


// // let fruits=["Apple", "orange", "Blueberries", "pinapple","Grapes,"];

// // // if start position is > length of array , then it doesnot delete any thing and

// // // starts adding to the end of the array

// // let removedItems=fruits.splice(5,2,"lemon");
// // console.log(`removed items:${removedItems}`);
// // console.log(`new items:${fruits}`);

// // // if start<0 , the index is conted from backword and items all added in the lastNameposition after removing


// // let removedItems=fruits.splice(-1,1,"lemon","mango","grapes");
// // console.log(`removed items:${removedItems}`);
// // console.log(`new items:${fruits}`);


// // //if delete count is omitted , or is greater than the number of items left in the array

// // // it deletes all elements from start to end of the Array.


// // let removedItems=fruits.splice(1);
// // console.log(`removed items:${removedItems}`);
// // console.log(`new items:${fruits}`);

// // // if delete count is negative , then no items will be removed


// // let removedItems=fruits.splice(1,-2,"lemon","mango","grapes");
// // console.log(`removed items:${removedItems}`);
// // console.log(`new items:${fruits}`);




// // // slice method 

// // // slice method returns a copy of a portion of an array into anew array object

// // // syntax arr.slice(start,end)


// // let numbers=[2,3,4,5,11,13,22];

// // let new_array=number.slice(2,5);

// // console.log(new_array);

// // new_array=number.slice(2);

// // console.log(new_array);

// // new_array=number.slice(-3);
// // console.log(new_array);


// // // shift method:
// // // the shift() method removes the first element from an array and returs the array


// // let numbers=[2,3,4,5,11,13,22];

// // let first =number.shift();

// // console.log(number);

// // // nested array

// // let numbers=[
// //     [1,2,3],
// //     [4,5,6],
// //     [-5,-4,-1]
// // ]

// // console.log(`Index number 1: ${numbers[0]}`);
// // console.log(`Index number 2: ${numbers[0]}`);
// // console.log(`Index number 3: ${numbers[0]}`);

// // console.log(`exact second Index : ${numbers[0][1]}`);
// // console.log(`exact third Index : ${numbers[1][2]}`);
// // console.log(`exact first Index : ${numbers[2][0]}`);

// // console.log(numbers.shift());

// // console.log(numbers);

// // // unshift () method
// // // the unshift () method adds one or more elements to the beginning of the array and
// // // returs the new length of the array


// // let numbers=[2,3,4,5,11,13,22];
// // let x=numbers.unshift("javascript");

// // console.log(numbers);
// // let c1 =numbers.unshift(100,222,"c#");
// // console.log(numbers);
// // console.log(numbers.length);

// // // array of method

// // // array.of method creates new array instance from the given arrguments


// // let numbers= array.of(5);
// // console.log(numbers);
// // numbers =array.of(3,4,5,6);
// // console.log(numbers);

// // // is array() method:

// // // is array() method checks if the given argument is an array or not

// // let value1="array";

// // console.log(array.isarray(value1));

// // let array2=[12,34,55,66,77];

// // console.log(array.isarray(array2));
// // let array3=array.of(10,20,30,40,50);
// // console.log(array.isarray(array3));

// // // 09/11/2022

// // // Every 

// // // every method returns true  , if all the elements are matching with the given
// // // condition.

// // let products =[

// //     {id:1, productName:"TV", price:5000},
// //     {id:2, productName:"Monitor",price:1300},
// //     {id:3 , productName:"iPad",price:25000},
// //     {id:4 ,productName:"Phone",price:1800},
// // ]

// // console.log(products.every((p) =>{
// //     return p.price >=1200;
// // }))

// // // some() method
// // // some() method returns true , if at least one element matches  with the given condition

// // let products =[
// //     {id:1, productName:"TV", price:5000},
// //     {id:2, productName:"Monitor",price:1300},
// //     {id:3 , productName:"iPad",price:25000},
// //     {id:4 ,productName:"Phone",price:1800},
  

// // ];

// // console.log(products.some((p) =>{
// //     return p.price >=8000;
// // }))

// // // filter()  method
// // // filter() method returns all the elements that are matching with the given
// // //condition and this method is returning a new  array with new  results.

let products =[
    {id:1, productName: 'LG TV', price: 5000, brand:"LG"},   
    {id:2,productName:'Apple ipod',price:15000,brand:"Apple"},
    {id:3,productName:'Samsung Monitor',price:'79000',brand:"Samsung"},
    {id:4,productName:'Appleipad',price:79000,brand:"Apple"},
    {id:5,productName:'Apple iphone',price:125000,brand:"Apple"}
];

let appleProducts =products.filter((p) =>{
    return p.brand =="Apple";
});

console.log(appleProducts);

// // for (let i=0 ; i<appleProducts.length; i++){
// //     console.log(`ID:${appleProducts[i].id},Product Name:${appleProducts[i].
// //     productName},Price:${appleProducts[i].price},Brand:${appleProducts[i].brand}`);
// // }


// // // find() method 
// // //find() method returns the first matching element , among the element that are
// // //matching with the given condition.

// // let products=[
// //     {id:1 productName: 'LG TV', price: 5000, brand:"LG"},   
// //     {id:2,productName:'Apple ipod',price:15000,brand:"Apple"},
// //     {id:3,productName:'Samsung Monitor',price:'79000',brand:"Samsung"},
// //     {id:4,productName:'Appleipad',price:79000,brand:"Apple"},
// //     {id:5,productName:'Apple iphone',price:125000,brand:"Apple"}

// // ];

// // let firstExpensiveProduct =products.find((p)=>{
// //     return p.price >=91000;
// // });

// // console.log(firstExpensiveProduct)

// // // findIndex() method
// // //findIndex() method returns the index of the first matching element that are
// // // matching with the given condition.

// // let products=[
// //     {id:1 productName: 'LG TV', price: 5000, brand:"LG"},   
// //     {id:2,productName:'Apple ipod',price:15000,brand:"Apple"},
// //     {id:3,productName:'Samsung Monitor',price:'79000',brand:"Samsung"},
// //     {id:4,productName:'Appleipad',price:79000,brand:"Apple"},
// //     {id:5,productName:'Apple iphone',price:125000,brand:"Apple"}

// // ];

// // let firstExpensiveProductIndex =products.findIndex((p)=>{
// //     return p.price >=91000;
// // });

// // console.log(firstExpensiveProductIndex)


// // // forEach
// // //executes the function once each element of the array

// function increaseQuantity(){
//     this.quantity++;
// }

// let products =[

//     {id:1 ,productName: 'LG TV', quantity:0,increaseQuantity:increaseQuantity},   
//     {id:2,productName:'Apple ipod',quantity:0,increaseQuantity:increaseQuantity},
//     {id:3,productName:'Samsung Monitor',quantity:0,increaseQuantity:increaseQuantity},
//     {id:4,productName:'Appleipad',quantity:0,increaseQuantity:increaseQuantity},
//     {id:5,productName:'Apple iphone',quantity:0,increaseQuantity:increaseQuantity}


// ];

// products.forEach((p)=>{
//     p.increaseQuantity();
// })

// console.log(products);



// // // includes()

// // //returns true if the given value found atleast once in array.

// // let apple ={id:4,productName:'Laptop',price:120000};

// // let products=[
// //     {id:1,productName:'TV',price:50000},
// //     {id:2,productName:'Monitor',price:4000},
// //     {id:3,productName:'iPad',price:45000},
// //     {id:4,productName:'phone',price:34000},
// //     apple,
// // ];

// // let result =products.includes(apple);
// // console.log(result);

// // // indexOf
// // //returns index of the first occurance of the given value in
// // //in the array

// // let firstProduct ={productName:'TV',price:25000};

// // let secondProduct ={productName:'Laptop',price:55000};

// // let thirdProduct ={productName:'Head Phone',price:5000};

// // let fourthProduct={productName:'iPad',price:5000};

// // let products=[firstProduct,secondProduct,thirdProduct];

// // console.log(products);

// // console.log(products.indexOf(secondProduct));

// // console.log(products.indexOf(thirdProduct));

// // console.log(products.indexOf(fourthProduct));

// // let x =products.indexOf(fourthProduct);
// // if(x>=0){
// //     console.log('Product is available');
// // }else{
// //     console.log("product is not available");
// // }

// // // map()

// // //executes the function once for each element in the array This 
// // //rturns new array


// let products=[
//     {id:1,productName:'TV',price:50000},
//     {id:2,productName:'Monitor',price:4000},
//     {id:3,productName:'iPad',price:45000},
//     {id:4,productName:'phone',price:34000},
// ];

// let updatedProducts= products.map((p)=>{
//     p.price +=p.price *10/100;
//     p.productName=p.productName.toUpperCase();
//     return p;
// });

// console.log(updatedProducts);
// console.log(`Product Name:${updatedProducts[0].productName}`);


// let updatedProducts= products.map((p)=>{

//     if(p.price>35000){
//         return{name:p.productName,price:p.price/2};
//     } else{
//         return p;
//     }
  
// });

// console.log(updatedProducts);
// console.log(`Product Name:${updatedProducts[0].name}`);


// // // reduce()

// // // this method allows to reduce an array to single value.

// // //Without reduce() method

// // let numbers =[1,2,3,4,5];

// // let sum =0;

// // for (let i=0;i<number.length;i++){
// //     sum + =number[i];
// // }

// // console.log(sum);

// // //using reduce() method

// // let numbers =[1,2,3,4,5];

// // let sum =numbers.reduce(function(prevValue,current){
// //     return prevValue+current;
// // });

// // console.log(sum);


// let scores =[10,20,60,55,77,89];

// let result =scores.reduce((acc,cur )=>{

//     if(cur>50){
//         acc++;
//     }
//     return acc;

// },0);

// console.log(result);


// let scores =[
//     {player:'Sachin',score:50},
//     {player :'Dhoni',score:67},
//     {player:'Kohli',score:45},
//     {player:'Rahul',score:55},
// ];

// const sachinScore=scores.reduce((acc,cur)=>{
//     if(cur.player ==='Sachin'){
//         acc +=cur.score;
//     }
//     return acc;
// },0);

// console.log(sachinScore);


// // //flat() method
// // //it converts nested array into  plain and simple array

// // let x =[10,[34,55],66,77];

// // console.log(x.flat());


// // flatmap() method

// //this method is similar to map() method, where map is one to one,
// //we should return single value flapmap() method is one to many , wecan return an array


// let products=[
//     {id:1,productName:'TV',price:50000},
//     {id:2,productName:'Monitor',price:4000},
//     {id:3,productName:'iPad',price:45000},
//     {id:4,productName:'phone',price:34000},
// ];


// // flap map executes callback  once for each element can produce 
// // one or more elements

// let updatedProducts =products.flatMap((p)=>{

//     if(p.productName =="Monitor" || p.productName == "ipad"){
//         let p2 ={...p, price:p.price+(p.price*10/100)};
//         return [p,p2];
//     }else {
//         return [p];
//     }
// });


// console.log(updatedProducts);


//practice

let a=[{fname:"praveen",salary:90000},{fname:"naveen",salary:50000},{fname:"saketh",salary:60000}];

const z= a.sort((x,y)=>y.salary-x.salary);

console.log(z)

console.log("a")