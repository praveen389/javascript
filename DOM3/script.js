


const result =document.querySelector('#result');

console.log(result);

result.style.backgroundColor='blue';

result.style.color='white';

const item = document.querySelector('.veg');

console.log(item);

// const item2 =document.querySelector('li:last-child');

// const item2 =document.querySelector('li:nth-child(3)');

// console.log(item2);

// const Iitems= document.querySelectorAll('.veg');

console.log(Iitems);

Iitems.forEach(
    function(item){
       console.log(item);
       item.style.color="green";
   }
)

