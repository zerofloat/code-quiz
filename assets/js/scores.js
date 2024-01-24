var initialsInput = document.getElementById("initials");
var highScoresList = document.getElementById("highscores");
var highScoreObj = {};
var scoreLi = "";
var scores = [];
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
// help from Mija TA - lines 22 - 28
           var highScores = JSON.parse(localStorage.getItem('scores')) || [];
           highScores.push(highScoreObj); 
           localStorage.setItem("highScoreObj", JSON.stringify(highScoreObj));
            // var newScore = { initials, countdown };
        
   
            submitButton.setAttribute('disabled', true);
            
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