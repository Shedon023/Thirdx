const swiper = new Swiper(".MySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    320: { enabled: true },
    768: { enabled: false },
  },
});

const btn = document.querySelector(".show_all");
const content = document.querySelector(".hidden");

btn.addEventListener("click", btnClick);

function btnClick() {
  if (content.classList.contains("stealth")) {
    btn.textContent = "Скрыть";
  } else {
    btn.textContent = "Показать всё";
  }
  document.querySelectorAll(".hidden").forEach((el) => el.classList.toggle("stealth"));
}

/*const contentTwo = document.querySelectorAll(".swiper-slide");
const myArray = Array.from(contentTwo);
const sliceArray = myArray.slice(7, 11);
console.log(myArray);

btn.addEventListener("click", btnClickTwo);

function btnClickTwo() {
  if (window.innerWidth < 1120) {
    sliceArray.forEach((c) => (c.style.display = "flex"));
  }
} */
