const canvasE1 =document.querySelector("canvas");

const canvasContext =canvasE1.getContext("2d");

canvasE1.width =600;
canvasE1.height= 600;

canvasContext.fillStyle ="white";

//canvasContext.fillReact(100,200,50,50);

canvasContext.fillRect(50,50,50,50);
canvasContext.fillRect(100,100,50,50);
canvasContext.fillRect(150,150,50,50);
canvasContext.fillRect(200,200,50,50);
canvasContext.fillRect(250,250,50,50);
canvasContext.fillRect(300,300,50,50);