



const container =document.querySelector('.container');
const btn = document.querySelector('.btn');

btn.addEventListener('click',function(e){
    const element = document.createElement('h1');
    element.classList.add('blue');
    element.textContent='I am  inside container';

    container.appendChild(element);
});

// container.addEventListener('click',function(e){
//     console.log('container clicked');
//     if(e.target.classList.contains('blue')){
//         console.log('Blue class added');
//     };
// });
