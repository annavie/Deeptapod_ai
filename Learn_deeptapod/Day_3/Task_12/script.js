const images = [
  "img2.png",
  "img3.png"
];

let index = 0;
const img = document.getElementById('slider-image');
const btn1 = document.getElementById('prev-btn');
const btn2 = document.getElementById('next-btn');

function showImage(newIndex) {
  if (newIndex < 0) {
    index = images.length - 1;
  } else if (newIndex >= images.length) {
    index = 0;
  } else {
    index = newIndex;
  }
  img.src = images[index];
}

btn1.addEventListener('click', () => {
  showImage(index - 1);
});

btn2.addEventListener('click', () => {
  showImage(index + 1);
});

showImage(index);