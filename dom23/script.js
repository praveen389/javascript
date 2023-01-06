


const copy= document.querySelector('.copy-p');

copy.addEventListener('copy', ()=>{
    console.log('content is copyrighted!!!');

});

const box = document.querySelector('.box');

box.addEventListener('mousemove',(e)=>{
    box.textContent=`x pos-${e.offsetX} y post-${e.offsetY}`;

});

