const sliderContainer = document.querySelector(".slider-container");
const slider = document.querySelector(".slider");

let clicked = false;
let clicked2;
let x;

sliderContainer.addEventListener("mouseup", () => {
  sliderContainer.style.cursor = `grab`;
});

sliderContainer.addEventListener("mousedown", (e) => {
  clicked = true;
  clicked2 = e.offsetX - slider.offsetLeft;
  sliderContainer.style.cursor = `grabbing`;
});

window.addEventListener("mouseup", () => {
  clicked = false;
});

sliderContainer.addEventListener("mousemove", (e) => {
  if (!clicked) {
    return;
  }
  e.preventDefault();

  x = e.offsetX;
  slider.style.left = `${x - clicked2}px`;
});
