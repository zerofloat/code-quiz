var initialsInput = document.getElementById("initials");
var highScoresList = document.getElementById("highscores");
var highScoreObj = {};
var scoreLi = "";
// var scores = [];
var clearButton = document.getElementById("clear");
var submitButton = document.getElementById("submit");


// https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null
//submit highscore
window.addEventListener("DOMContentLoaded", (event)  => {
    if (submitButton) {
        submitButton.addEventListener('click', function (event) {
            event.preventDefault();
            var score = initialsInput.value.trim();
            highScoreObj = {
                initials: score,
                high_score: countdown
            }
// help from Mija TA - lines 22 - 26
           var highscores = JSON.parse(localStorage.getItem('highscores')) || [];
           highscores.push(highScoreObj); 
           localStorage.setItem('highscores', JSON.stringify(highscores));
           window.location.href = 'highscores.html';``
        })
    }
});
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