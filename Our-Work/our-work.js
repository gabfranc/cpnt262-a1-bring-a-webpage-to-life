//DONE: set up an array for the image gallery

const imageElement = ['../Images/aqua-dress.jpg', '../Images/beauty.jpg', '../Images/black-dress.jpg', '../Images/blue-dress.jpg','../Images/fashion+beauty.jpg', '../Images/fashion-woman.jpg', '../Images/fashionModel.jpg', '../Images/green-dress.jpg', '../Images/model_One.jpg', '../Images/modelOnRunway.jpg','../Images/purple-dress.jpg', '../Images/Runway.jpeg'];

const imageContainer = document.getElementById('image-container');

// DONE: set up for loop for the gallery 

for (let i =0; i < imageElement.length; i++) {
  const img = document.createElement('img');
  img.src = imageElement[i];
  imageContainer.appendChild(img);
}