"use strict"

//:DONE add arrays for message
const textAnimate = document.getElementById('messages');
const messages = ['MODELLING', 'BEAUTY', 'FEARLESS', 'REPUTATION', 'CAREFREE'];

let textIndex = 0;

//DONE: Create function for rotating text
function rotateText() {
  textAnimate.textContent = messages[textIndex];
  textIndex = (textIndex + 1) % textAnimate.length;
}

//TODO: set Intervals for text to rotate

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