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


//DONE: set up function for dark mode toggle on logo

function toggleEvent() {
  btn.classList.toggle("darkBtn");
}


//DONE: set up functions for hamburger bar icon 

function showSidebar(){
  const sidebar = document.querySelector('#sidebar')
  sidebar.style.display= 'flex'
}

function hideSidebar(){
  const sidebar = document.querySelector('#sidebar')
  sidebar.style.display= 'none'
}

//DONE: set up variables for the contact section

const inputForm = document.querySelector("form");
const nameValue = document.getElementById("name");
const emailValue = document.getElementById("email");
const phoneValue = document.getElementById("phone-num");
const textValue = document.getElementById("message-box");


//DONE: set up alert for when submit is clicked

function submitEvent () {
  const message = `Name: ${nameValue.value} <br> Email: ${emailValue.value} <br> Phone Number: ${phoneValue.value} <br> Message: ${textValue.value}`;
  alert("THANK YOU!!!");
}

//DONE: add event listener to form


inputForm.addEventListener("submit", (e) => {
  e.preventDefault();


  submitEvent();
});


//DONE: create function for audio player toggle 

document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('myAudio');
  const playPauseCheckbox = document.getElementById('playPauseCheckbox');

  playPauseCheckbox.addEventListener('change', function () {
      if (playPauseCheckbox.checked) {
          audio.play();
      } else {
          audio.pause();
      }
  });
});





 