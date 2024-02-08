document.addEventListener("DOMContentLoaded", function () {
  const invitation = document.querySelector('.invitation');
  const response = document.querySelector('.response');
  const responseGif = response.querySelector('.gif');
  const yesBtn = document.querySelector('.yes-btn');
  const noBtn = document.querySelector('.no-btn');

  responseGif.onload = function() {
      response.style.display = 'block';
  };

  yesBtn.addEventListener("click", () => {
     
      invitation.style.display = 'none';
      // Response GIF 
      responseGif.src = "https://media.giphy.com/media/PFc4ohINrJWCY/giphy.gif";
  });

  noBtn.addEventListener("mouseover", () => {
      const noBtnRect = noBtn.getBoundingClientRect();
      const maxX = window.innerWidth - noBtnRect.width;
      const maxY = window.innerHeight - noBtnRect.height;
      
      noBtn.style.position = 'fixed';
      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      noBtn.style.left = randomX + "px";
      noBtn.style.top = randomY + "px";
  });
});