document.addEventListener("DOMContentLoaded", function() {

    const listItems = document.querySelectorAll('.list-item');
  

    listItems.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.color = 'blue'; 
      });
  
      item.addEventListener('mouseout', () => {
        item.style.color = 'black'; 
      });
    });
  });
  