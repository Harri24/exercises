
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var diagonalBtn = document.getElementById("diagonalBtn");
var horizontalBtn = document.getElementById("horizontalBtn");
var verticalBtn = document.getElementById("verticalBtn");
var randombutton = document.getElementById("randombutton");

random();

function changeColours() {
  body.style.background =
  "linear-gradient(to right, "
   + color1.value
   + ", "
   + color2.value
   +")";
}

function horizontal() {
  body.style.background =
    "linear-gradient( "
     + color1.value
     + ", "
     + color2.value
     +")";
}

function diagonal() {
  body.style.background =
    "linear-gradient(to bottom right, "
     + color1.value
     + ", "
     + color2.value
     +")";
}

function vertical() {
  body.style.background =
    "linear-gradient(to right, "
     + color1.value
     + ", "
     + color2.value
     +")";
}

function random(){
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  changeColours();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

color1.addEventListener("input", changeColours);

color2.addEventListener("input", changeColours);

diagonalBtn.addEventListener("click", diagonal);

horizontalBtn.addEventListener("click", horizontal);

verticalBtn.addEventListener("click", vertical);

randombutton.addEventListener("click", random);
