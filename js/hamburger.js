const burgerMenuBtn = document.querySelector(".burger-menu");
const navbar = document.querySelector(".listItems");
let menuOpen = false;

burgerMenuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    burgerMenuBtn.classList.add("open");
    navbar.classList.add("active");
    menuOpen = true;
  } else {
    burgerMenuBtn.classList.remove("open");
    navbar.classList.remove("active");
    menuOpen = false;
  }
});
