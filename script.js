"use strict"

//:DONE add arrays for carousel
const textAnimate = document.getElementById('messageS');
const messages = ['MODELLING', 'BEAUTY', 'FEARLESS', 'REPUTATION', 'CAREFREE'];

let textIndex = 0;

//TODO: Create function for rotating text
function rotateText() {
  textAnimate.textContent = messages[textIndex];
}
let myColorNum = 0;

textAnimate.style.transform = "rotate(360deg)";
