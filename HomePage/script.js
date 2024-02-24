"use strict"

//:DONE add arrays for message
const textAnimate = document.getElementById('messages');
const messages = ['MODELLING', 'BEAUTY', 'FEARLESS', 'REPUTATION', 'CAREFREE'];

let textIndex = 0;

//DONE: Create function for rotating text
// Text will change constantly on loading page
function rotate(){
  textAnimate.textContent = messages[myIndexNum];
  myIndexNum = (myIndexNum + 3) % messages.length;
}

let myColorNum = 0;

textAnimate.style.transform = "rotate(360deg)";
textAnimate.style.color = "#024282";
// Setting the intervals for the text to change
setInterval(rotate, 360); // For every 2 seconds, the text will rotate constantly.


 
//TODO: Create animation code for image
let myIndex= 0;

function automaticSlider() {
  let images;
  const imgElement = document.getElementById("#images");
  for(images = 0; images< imgElement.length; images++){
     imgElement[images].style.display="none";
  }
  myIndex++;
  if(myIndex > imgElement.length){
    myIndex=1;
  }
  imgElement[myIndex -1].style.display = "block";
   
}

setInterval(rotate, 2000); 

