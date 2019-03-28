var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var diagonalBtn = document.getElementById("diagonalBtn");
var horizontalBtn = document.getElementById("horizontalBtn");
var verticalBtn = document.getElementById("verticalBtn");

//var direction =
// when i click a button
// change direction variable value e.g. to 'to bottom right'
// fire event listener functions again

function changeColours() {
  body.style.background =
  "linear-gradient(to right, "
   + color1.value
   + ", "
   + color2.value
   +")";
}


color1.addEventListener("input", changeColours);

color2.addEventListener("input", changeColours);
