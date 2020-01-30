const body = document.querySelector("body");

const IMG_NUMBER = 3;

function handleImgLoad() {
  console.log("image loaded");
}

function fullfilImage(number) {
  const image = new Image();
  image.src = `images/background${number}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function generateRandomNumber() {
  const number = Math.floor(Math.random() * IMG_NUMBER) + 1;
  return number;
}

function init() {
  const randomNumber = generateRandomNumber();
  fullfilImage(randomNumber);
}

init();
