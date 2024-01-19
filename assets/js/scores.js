var initialsInput = document.getElementById("initials");
var highScoresList = document.getElementById("highscores");
var highScoreObj = {};
var scoreLi = "";
var scores = [];
var clearButton = document.getElementById("clear");


// https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null
//submit highscore
window.addEventListener("DOMContentLoaded", (event)  => {
    var submitButton = document.getElementById("submit");
    if (submitButton) {
        submitButton.addEventListener('click', function (event) {
            event.preventDefault();
            var score = initialsInput.value.trim();
            highScoreObj = {
                initials: score,
                high_score: countdown
            }
            var newScore = { initials, countdown };
            var stringifiedScore = JSON.stringify(highScoreObj);
        
            scores.push(newScore);
        
            localStorage.setItem("score", stringifiedScore);
            
        })
    }
    
})
//clear highscores
window.addEventListener("DOMContentLoaded", (event) => {
    var clearButton = document.getElementById("clear");
    if (clearButton) {
        clearButton.addEventListener('click', function (event) {
            event.preventDefault();
            localStorage.clear();
        })
    }
})