const slides = document.querySelectorAll(".slider__slide");
const buttonPrev = document.querySelector(".prev__slide__button");
const buttonNext = document.querySelector(".next__slide__button");
const bullets = document.querySelectorAll(".slider__pagination__button");
const slidesAmount = slides.length;
let currentIndex = 0;

const onSlideChange = (index) => {
  const activeSlide = document.querySelector(".slider__slide.is__active");
  const activeBullet = document.querySelector(".slider__pagination__button.is__active");
  document.body.style.backgroundColor = slides[index].dataset.color;
  slides.forEach((element) => (element.style.order = ""));
  activeSlide.classList.remove("is__active");
  slides[index].classList.add("is__active");
  slides[index].style.order = "-1";
  activeBullet.classList.remove("is__active");
  bullets[index].classList.add("is__active");
};

const onPrevButtonClick = (evt) => {
  evt.preventDefault();
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = slidesAmount - 1;
  }

  onSlideChange(currentIndex);
};

const onNextButtonClick = (evt) => {
  evt.preventDefault();
  currentIndex++;

  if (currentIndex === slidesAmount) {
    currentIndex = 0;
  }

  onSlideChange(currentIndex);
};

const initSlider = () => {
  buttonPrev.addEventListener("click", onPrevButtonClick);
  buttonNext.addEventListener("click", onNextButtonClick);
  bullets.forEach((element, index) =>
    element.addEventListener("click", () => onSlideChange(index))
  );
};

initSlider();

const feedbackButton = document.querySelector(".feedback__button");
const modalCloseButton = document.querySelector(".modal__close__button");
const modal = document.querySelector(".modal__container");

feedbackButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  modal.classList.add("is__open");
});

modalCloseButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  modal.classList.remove("is__open");
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    evt.preventDefault();
    modal.classList.remove("is__open");
  }
});

document.addEventListener("click", (evt) => {
  if (evt.target === modal) {
    modal.classList.remove("is__open");
  }
});
