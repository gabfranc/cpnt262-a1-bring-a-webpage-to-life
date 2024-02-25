"use strict"
let imageIndex = 0;

//DONE: set function for carousel animation
function autoSlide() {
  setTimeout(autoSlide, 5000);
  
  let x;
  const images = document.querySelectorAll(".img-item");
  for(x = 0; x < images.length; x++){
    images[x].style.display = "none";
  }

  imageIndex++;
  if(imageIndex > images.length){
    imageIndex = 1;
  }
  images[imageIndex -1].style.display = "block";
}

autoSlide();

//DONE: set up text arrays

// Text will change constantly on loading page
const textAnimate = document.getElementById('words');
const messages = ['Fearleass', 'Stylish', 'Bold', 'Fierce', 'Carefree', 'Wild', 'Reputation', 'Unique', 'Beauty'];

let myIndexNum = 0;

function rotate(){
  textAnimate.textContent = messages[myIndexNum];
  myIndexNum = (myIndexNum + 3) % messages.length;
}

let myColorNum = 0;

textAnimate.style.transform = "rotate(360deg)";
textAnimate.style.color = "#024282";
// Setting the intervals for the text to change
setInterval(rotate, 2000); // For every 3 seconds, the text will rotate constantly.


 