// hexadecimal - 0 to 9 a to f

const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.getElementById("btn1");

console.log(btn);

const color = document.querySelector(".color");

console.log(color);

 btn.addEventListener("click",function(){
    let hexColor = '#';
   for(let i=0; i<6; i++){
        hexColor += hex[getRandomNumber()];
        console.log(hexColor);
   }

   console.log(hexColor);
   document.body.style.backgroundColor= hexColor;
   color.textContent=hexColor;
 });

 function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);

}

