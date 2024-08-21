document.addEventListener("DOMContentLoaded", function() {
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
  
    leftBtn.addEventListener('click', function() {
      location.reload(); // Reloads the page when left button is clicked
    });
  
    rightBtn.addEventListener('click', function() {
      location.reload(); // Reloads the page when right button is clicked
    });
  });