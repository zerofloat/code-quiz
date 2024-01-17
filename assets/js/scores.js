var initialsInput = document.getElementById("initials");
var highScoresList = document.getElementById("highscores");
var highScores = [];
var scoreLi = document.createElement("li");
var submitButton = document.getElementById("submit");


submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    var score = initialsInput.value.trim();
    
})




function renderHighScores() {
// highScoresList.innerHTML = "";
scoreLi.textContent = score;



}