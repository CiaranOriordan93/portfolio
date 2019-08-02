const navBtn = document.getElementById("navi-toggle");
const navMenu = document.querySelector(".dropdown");
const carouselBtn = document.querySelectorAll(".client-button");
const carouselContent = document.querySelectorAll(".testimonials__carousel");
const workHandle = document.querySelector(".work");
const modalHandle1 = document.querySelector(".modal__filmbase");
const modalHandle2 = document.querySelector(".modal__portfolio");
const modalHandle3 = document.querySelector(".modal__sytist");
const modalClose = document.querySelectorAll(".modal__close");

// display the corresponding modal to the appropriate clicked image element
workHandle.addEventListener("click" || "touchend", event => {
  console.log(event.target.parentElement.parentElement);
  if (event.target.nodeName === "IMG") {
    if (
      event.target.parentElement.parentElement.classList.contains(
        "work__filmbase"
      )
    ) {
      modalHandle1.classList.toggle("show");
    } else if (
      event.target.parentElement.parentElement.classList.contains(
        "work__portfolio"
      )
    ) {
      modalHandle2.classList.toggle("show");
    } else if (
      event.target.parentElement.parentElement.classList.contains(
        "work__sytist"
      )
    ) {
      modalHandle3.classList.toggle("show");
    }
  }
});

for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].addEventListener("click", event => {
    event.target.parentElement.parentElement.parentElement.classList.toggle(
      "show"
    );
  });
}

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
