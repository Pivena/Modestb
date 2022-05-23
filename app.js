// mobile menu
const mobileMenu = document.querySelector(".nav-mobile-menu");
const mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active-menu");
    if (mobileMenu.classList.contains("active-menu")) {
      mainMenu.classList.add("active-menu");
    } else {
      mainMenu.classList.remove("active-menu");
    }
  });
  

