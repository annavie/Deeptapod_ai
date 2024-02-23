function toggleParagraph() {
    var paragraph = document.getElementById('paragraph');
    var button = document.getElementById('toggleButton');
    
    if (paragraph.style.display === 'none') {
      paragraph.style.display = 'block';
      button.innerText = 'Hide';
    } else {
      paragraph.style.display = 'none';
      button.innerText = 'Show';
    }
  }