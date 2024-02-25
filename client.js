//DONE: create element for cursor

const cursor = document.querySelector("#mousemove");

//DONE: add event listener so that the cursor will move

document.addEventListener("DOMContentLoaded", function() {
  const mouseMove = document.getElementById('mousemove');

  document.addEventListener('mousemove', function(e) {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      // Set follower position
      mouseMove.style.left = mouseX + 'px';
      mouseMove.style.top = mouseY + 'px';
  });
});