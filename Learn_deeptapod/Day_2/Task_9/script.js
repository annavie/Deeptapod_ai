document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('emailForm').addEventListener('submit', function(event) {
      event.preventDefault();
      var emailInput = document.getElementById('email').value.trim();
      var prefixRegex = /^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*$/;
      var domainRegex = /^[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
      
      var prefixValid = prefixRegex.test(emailInput.split('@')[0]);
      var domainValid = domainRegex.test(emailInput.split('@')[1]);
      
      if (emailInput === '' || !prefixValid || !domainValid) {
        alert('Please enter a valid email address');
      } else {
        alert('Email submitted: ' + emailInput);
      }
    });
  });
  