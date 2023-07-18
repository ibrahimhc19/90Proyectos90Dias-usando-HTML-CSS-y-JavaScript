
document.getElementById("btn").addEventListener("click", toggleMenu);

function toggleMenu() {
  let menu = document.getElementById("menu");
  menu.classList.toggle("list-oculto");
  menu.classList.toggle("list-visible");
}