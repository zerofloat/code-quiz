var initialsInput = document.getElementById("initials");
var highScoresList = document.getElementById("highscores");
var highScoreObj = {};
var scoreLi = "";
var submitButton = document.getElementById("submit");
var clearButton = document.getElementById("clear");
var score = [];

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    score = initialsInput.value.trim();

    var highScoreObj = {
        initials: score,
        high_score: countdown
    }

    var stringifiedScore = JSON.stringify(highScoreObj);

    localStorage.setItem("score", stringifiedScore);

    // localStorage.setItem("score", score);

    // localStorage.setItem("score", JSON.stringify(score));
})

clearButton.addEventListener("click", function(event) {
    event.preventDefault();   
})


// function renderHighScores() {
// var storedScore = localStorage.getItem("score");
// scoreLi = document.createElement("li");
// scoreLi.textContent = score;




// }