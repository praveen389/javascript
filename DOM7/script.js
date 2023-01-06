const first = document.querySelector('.first');

const idValue= first.getAttribute('id');

console.log(idValue);

const link = document.getElementById('link');


// link.getAttribute('href');

const showLink =link.getAttribute('href')

console.log(showLink);

const last = link.nextElementSibling;

console.log(last);

last.setAttribute('call','first');

last.textContent='this list item also have class of first';

const link =document.querySelectorAll('.first');

console.log(link);

console.log(link.length);

