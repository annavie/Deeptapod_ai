document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
          tabContents.forEach(content => {
          content.classList.remove('active');
        });
        document.getElementById(tabId).classList.add('active');
          tabs.forEach(tab => {
          tab.classList.remove('active');
        });
          this.classList.add('active');
      });
    });
  });
  