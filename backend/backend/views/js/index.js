window.addEventListener("DOMContentLoaded", () => {

  let menu_icon = document.getElementById("landing-hamburger");

  function close_menu() {
    let menu_div = document.querySelector(".menu-for-phone");
    menu_div.style.animation = "fadeOut 0.5s ease forwards";
  }

  menu_icon.addEventListener("click", () => {
    let menu_div = document.querySelector(".menu-for-phone");
    menu_div.style.display = "block";
    menu_div.style.animation = "fadeIn 0.5s ease forwards";
  });

  let close_icon = document.getElementById("close_icon");

  close_icon.addEventListener("click", close_menu);

  let arr = document.querySelector(".lins-for-phone").children;

  for (let i = 0; i < arr.length; ++i) {
    arr[i].addEventListener("click", close_menu);
  }

  const headerBtn = document.getElementById('header-btn');
  const landingBtn = document.getElementById("landing-btn");
  const apiBtnReg = document.getElementById("api-btn-reg");
  const apiBtnDoc = document.getElementById("api-btn-doc");
  const aboutBtn = document.getElementById("about-btn");

  headerBtn.addEventListener('click', function() {
    window.location.href = 'signin.html';
  });
  landingBtn.addEventListener('click', function() {
    window.location.href = 'signup.html';
  });
  apiBtnReg.addEventListener('click', function() {
    window.location.href = 'signup.html';
  });
  apiBtnDoc.addEventListener('click', function() {
    window.location.href = 'reference.html';
  });
  aboutBtn.addEventListener('click', function() {
    window.location.href = 'signup.html';
  });

  const faqQuestionIcons = document.querySelectorAll(".faq-question-icon");
  faqQuestionIcons.forEach(function(icon) {
    icon.addEventListener("click", function() {
      const faqAnswerDropdown = icon.nextElementSibling;
      const symbol = icon.querySelector(".material-symbols-outlined");

      if (faqAnswerDropdown.style.height === "0px" || !faqAnswerDropdown.style.height) {
        faqAnswerDropdown.style.height = faqAnswerDropdown.scrollHeight + "px";
        symbol.textContent = "remove";
      } else {
        faqAnswerDropdown.style.height = "0px";
        symbol.textContent = "add";
      }
    });
  });

  const registerBtn = document.getElementById("register");
  const loginBtn = document.getElementById("login");
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    registerBtn.style.display = "none";
    loginBtn.style.display = "none";
  } else {
    registerBtn.style.display = "block";
    loginBtn.style.display = "block";
  }

});
