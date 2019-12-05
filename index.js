var a = Math.floor(Math.random() * 6) + 1;
var diceImageSource = "images/" + "dice" + a + ".png ";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", diceImageSource);

var b = Math.floor(Math.random() * 6) + 1;
var diceImageSource = "images/" + "dice" + b + ".png ";
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", diceImageSource);

var whoWin = document.querySelector("h1");

if (a > b) {
  whoWin.innerHTML = "Player 1 Win!";
} else if (b > a) {
  whoWin.innerHTML = "Player 2 Win!";
} else {
  whoWin.innerHTML = "Draw!!";
}
