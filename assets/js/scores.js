var initialsInput = document.getElementById("initials");
var highScoresList = document.getElementById("highscores");
var highScores = [];
var score = initialsInput.value.trim();

function renderHighScores() {
// highScoresList.innerHTML = "";
var scoreLi = document.createElement("li");
scoreLi.textContent = score


}