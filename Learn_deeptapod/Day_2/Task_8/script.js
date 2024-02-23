document.addEventListener('DOMContentLoaded', function () {
   
    const button = document.getElementById('clickButton');
    const clickCountDisplay = document.getElementById('clickCount');
  
    let clickCount = 0;
    button.addEventListener('click', function () {
        clickCount++;
        clickCountDisplay.textContent = clickCount;
    });
  });
  