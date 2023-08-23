const closeMenu = document.getElementById("close-btn");
const menu = document.getElementById("popup_menu");

closeMenu.addEventListener("click", () => {
  menu.style.display = "none";
});

const humburgerMenu = document.getElementById("humburger_menu");

humburgerMenu.addEventListener("click", () => {
  menu.style.display = "block";
});
