




const content = document.querySelector('p');

console.log(content.classList);

content.classList.add('error');

content.classList.add('success');


const paras = document.querySelector('p');


 paras.forEach (p=>{
   if (p.textContent.includes('error')){
     p.classList.add('error');

    }
    else if(p.textContent.includes('success')){
       p.classList.add('success');
    }
 });