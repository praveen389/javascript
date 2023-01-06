

const para =document.querySelector('p');

para.innerText='Rajesh is learnning Javascript';

const paras = document.querySelectorAll('p');

paras.forEach(p =>{
    console.log(p.innerText);
});

const content=document.querySelector('.content');

console.log(content);

content.innerHTML=`<h2> this sentence is comming dynamically through Javascript</h2>`;

content.innerHTML += `<h3> this is heading 3 adding dynamically through javascript </h3>`;

console.log(content.innerHTML);

// const person =['Rakesh' , 'Suraj','Kiran'];

// person.forEach (pers =>{
//     content.innerHTML +=`<p>${pers}</p>`
// });

// console.log(content.children);

// console.log(content.children[0].textContent);


