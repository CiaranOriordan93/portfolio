const navBtn = document.getElementById("navi-toggle");
const navMenu = document.querySelector(".dropdown");
const carouselBtn = document.querySelectorAll(".client-button");
const carouselContent = document.querySelectorAll(".testimonials__carousel");

navBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

carouselBtn.forEach((button, i) => {
  button.addEventListener("click", () => {
    currentContainer(i + 1);
  });
});

let carouselCounter = 1;
showContainer(carouselCounter);

function currentContainer(n) {
  showContainer((carouselCounter = n));
}

function showContainer() {
  for (let i = 0; i < carouselContent.length; i++) {
    carouselContent[i].style.display = "none";
    carouselBtn[i].classList.remove("active");
  }

  if (carouselCounter > carouselContent.length) {
    carouselCounter = 1;
  }

  carouselContent[carouselCounter - 1].style.display = "block";
  carouselBtn[carouselCounter - 1].classList.add("active");

  carouselCounter++;
  setTimeout(showContainer, 20000);
}
