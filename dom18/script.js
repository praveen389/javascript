


const changeBtn= document.querySelector(".change-bg");

const restBtn= document.querySelector(".reset-btn");

changeBtn.addEventListener("click",function(){
    document.body.style.backgroundColor="dodgerblue";
    console.log("change button clicked ..")
});


restBtn.addEventListener("click",function(){
    document.body.style.backgroundColor="white";
    console.log("Rest Button Clicked...");
});

changeBtn.addEventListener("dblclick",function(){
    document.body.style.backgroundColor="red";
    console.log("change Button clicked..");
});

restBtn.addEventListener("dblclick",function(){
    document.body.style.backgroundColor="white";
    console.log("Rest Button clicked...")
});

window.addEventListener("scroll", function(){
    console.log("scroll event occcured...");
    document.body.style.backgroundColor="coral";
    document.body.style.color="white";
    document.body.style.lineHeight="2.1";
});
