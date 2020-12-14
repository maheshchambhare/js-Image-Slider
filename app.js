const Array = [
  {
    id: 01,
    img: "images/1.jpg",
  },
  {
    id: 02,
    img: "images/2.jpg",
  },
  {
    id: 03,
    img: "images/3.jpg",
  },
  {
    id: 04,
    img: "images/4.jpg",
  },
];


const content = document.getElementById("image");
const btnP = document.getElementById("btnprev");
const btnN = document.getElementById("btnnext");

let counter = 0;

window.addEventListener("DOMContentLoaded", () => {
  images();
});

btnP.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = 3;
  }
  images();
});
btnN.addEventListener("click", () => {
  counter++;
  if (counter > Array.length - 1) {
    counter = 0;
  }
  images();
});

function images() {
  const item = Array[counter];
  content.src = item.img;
}
