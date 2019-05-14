const navBtn = document.getElementById("navi-toggle");
const navMenu = document.querySelector(".dropdown");

navBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
