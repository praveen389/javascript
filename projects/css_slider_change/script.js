let blockE1=document.querySelector('#block');

let verticalPosition=document.querySelector("#position-y");


let horizontalPosition=document.querySelector("#position-x");

let blockSize=document.querySelector("#size");

let shapeSelector =document.querySelector("#shape-select");

let okBtn=document.querySelector("#ok-btn");

let rgbaR=document.querySelector("#rgba-r");


let rgbaG =document.querySelector("#rgba-g");

let rgbaB =document.querySelector("#rgba-b");

let rgbaA =document.querySelector("#rgba-a");

let rgbaContainer =document.querySelector(".rgba-container");

let rgbainputs =rgbaContainer.querySelectorAll("input");

// vertical position changer


verticalPosition.addEventListener("change",function(){
 console.log(verticalPosition.value);
    blockE1.style.top=verticalPosition.value+"px";
});

// Horizontal position changer

horizontalPosition.addEventListener("change",function(){
    //console.log(horizontalPosition.value);

    blockE1.style.left=horizontalPosition.value+"px";
});

//size changer

blockSize.addEventListener("change",function(){
    console.log(blockSize.value);
    blockE1.style.transform="scale("+blockSize.value +")";

});


// shape changer

okBtn.addEventListener("click",function(){
     console.log(shapeSelector.value);

    let shapeOption= shapeSelector.value;
    if(shapeOption ==="1"){
        blockE1.style.borderRadius="0";

    }else if( shapeOption ==="2"){
        blockE1.style.borderRadius="50%";
    }
});

for(let i=0; i<rgbainputs.length;i++)
{
    // console.log(rgbainputs)
    rgbainputs[i].addEventListener("change",function(){
        console.log(rgbaR.value)
        blockE1.style.backgroundColor="rgba("+rgbaR.value +"," +rgbaG.value + "," 
        +rgbaB.value + "," + rgbaA.value+")";
    });
    
};

