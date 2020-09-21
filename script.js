const sliderButtonPrev = document.querySelector(".slider__item__prev");
const sliderButtonNext = document.querySelector(".slider__item__next");
const textOne = document.querySelector(".text-one");
const textTwo = document.querySelector(".text-two");
const photoOne = document.querySelector(".photo-one");
const photoTwo = document.querySelector(".photo-two");

sliderButtonPrev.addEventListener("click", function () {
  textOne.classList.toggle("slide-left");
  textTwo.classList.toggle("slide-right");
  photoOne.classList.toggle("slide-left");
  photoTwo.classList.toggle("slide-right");
});

sliderButtonNext.addEventListener("click", function () {
  textOne.classList.toggle("slide-left");
  textTwo.classList.toggle("slide-right");
  photoOne.classList.toggle("slide-left");
  photoTwo.classList.toggle("slide-right");
});
