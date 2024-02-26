"use strict"
let imageIndex = 0;

//DONE: set function for carousel animation
function autoSlide() {
  setTimeout(autoSlide, 4000);
  
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
const messages = ['Fearless', 'Stylish', 'Bold', 'Fierce', 'Carefree', 'Wild', 'Reputation', 'Unique', 'Beauty'];

let myIndexNum = 0;

function rotate(){
  textAnimate.textContent = messages[myIndexNum];
  myIndexNum = (myIndexNum + 4) % messages.length;
}

let myColorNum = 0;

textAnimate.style.transform = "rotate(360deg)";
textAnimate.style.color = "#024282";
// DONE: Setting the intervals for the text to change
setInterval(rotate, 3000); // For every 3 seconds, the text will change constantly.

// Button animation setting

//DONE: create element for buttons

const buttonEl = document.querySelectorAll(".btn");

//DONE: set function element for button animation
buttonEl.onmousemove = function(e) {
  const btnX = e.pageX - buttonEl.offsetLeft;
  const btnY = e.pageY - buttonEl.offsetTop;

  buttonEl.style.setProperty('--x', btnX + 'px');
  buttonEl.style.setProperty('--y', btnY + 'px');
}


//TODO: set up function for dark mode toggle on logo

function toggleEvent() {
  btn.classList.toggle("darkBtn");
}









 