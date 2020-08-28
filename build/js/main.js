// Slider
const btnNext = document.querySelector(".realty__picture-toggle--next");
const btnPrev = document.querySelector(".realty__picture-toggle--prev");
const images = document.querySelectorAll(".realty__list-item");

const slider = () => {
  let i = 0;
  const next = () => {
    images[i].classList.remove("realty__list-item--active");
    i++;

    if (i == images.length) {
      i = 0;
    }
    images[i].classList.add("realty__list-item--active");
  };

  const prev = () => {
    images[i].classList.remove("realty__list-item--active");
    i--;

    if (i < 0) {
      i = images.length - 1;
    }
    images[i].classList.add("realty__list-item--active");
  };

  btnNext.addEventListener("click", next);
  btnPrev.addEventListener("click", prev);
};
slider();

// Block info
const realtyBtn = document.querySelector(".realty__btn");
const realtySlider = document.querySelector(".realty__slider");

realtyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const clientWidth = document.documentElement.clientWidth;
  if (clientWidth >= 1400) {
    realtySlider.classList.toggle("active");
  }
});
