


const ul= document.querySelector('ul');

const button=document.querySelector('button');

button.addEventListener('click',()=>{
    
    const li=document.createElement('li');

    li.textContent='New element adding';

});

const items =document.querySelectorAll('li');

// items.forEach(item=>{
//     console.log()
//     item.addEventListener('click',e=>{
//         e.stopPropagation();
//         console.log('event in Li');
//         e.target.remove();
//     })
// });

ul.addEventListener('click',e=>{
    console.log('event in ul');
    console.log(e.target);
    if(e.target.tagName ==='LI'){
        e.target.remove();
    }
});

// document.body.addEventListener('click', function(){
//     console.log('event in body');

// });