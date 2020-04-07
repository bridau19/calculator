var halfButton = document.getElementById("half-button");
var fortuneButton = document.getElementById("fortune-button");
var fortuneOutput = document.getElementById("fortune-output");
var fortuneInput = document.getElementById("fortune-input");

halfButton.addEventListener("click", halfNumber);
function halfNumber() {
  var halfInput = document.getElementById("half-input").value;

  if (halfInput) {
    alert("Half of " + halfInput + " is " + halfInput/2 + "!");
    console.log("Half of " + halfInput + " is " + halfInput/2 + "!");
  } else {
    alert("Please input a number.");
  }
}

fortuneButton.addEventListener("click", fortune);
function fortune() {
  var myFortune = ["you will grow taller.", "have strength. tomorrow is a new day.", "you will make someone smile today.", "you will learn a new skill this month.", "brace yourself. great change is ahead!"];
  var randomIndex = Math.floor(Math.random() * myFortune.length);

  if (fortuneInput.value) {
    fortuneOutput.innerHTML = fortuneInput.value + ": " + myFortune[randomIndex];
  } else {
    alert("I need your name!");
  }
}

fortuneOutput.addEventListener("click", restyle);
function restyle() {
  var randomRed = Math.random() * 150;
  fortuneOutput.style.color = "rgb("+ randomRed + ", 100, 100)";
  fortuneOutput.style.fontSize = "2em";

  var myFont = ["cursive", "sans-serif", "serif", "monospace", "fantasy"]
  var randomIndex = Math.floor(Math.random() * myFont.length);
  fortuneOutput.style.fontFamily = myFont[randomIndex];

  fortuneOutput.classList.toggle("fortune");
}
