var initialsInput = document.getElementById("initials");
var highScoresList = document.getElementById("highscores");
var highScoreObj = {};
var scoreLi = "";
var scores = [];
var submitButton = document.getElementById("submit");
var clearButton = document.getElementById("clear");

//initialize function
function init() {
    
    storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedScores !== null) {
        scores = storedScores;
    }
}







submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    var score = initialsInput.value.trim();
// https://www.freecodecamp.org/news/how-to-store-objects-or-arrays-in-browser-local-storage/
    highScoreObj = {
        initials: score,
        high_score: countdown
    }

    var stringifiedScore = JSON.stringify(highScoreObj);

    scores.push(stringifiedScore);

    localStorage.setItem("score", stringifiedScore);

    // localStorage.setItem("score", score);

    // localStorage.setItem("score", JSON.stringify(score));
})

// clearButton.addEventListener("click", function(event) {
//     event.preventDefault();   
// })


// function renderHighScores() {
// var storedScore = localStorage.getItem("score");
// scoreLi = document.createElement("li");
// scoreLi.textContent = score;


// })
// //initialize function
// function init() {
    
//     storedScores = JSON.parse(localStorage.getItem("scores"));

//     if (storedScores !== null) {
//         scores = storedScores;
//     }
// }


// function storeScores() {
    
//     // var stringifiedScore = JSON.stringify(highScoreObj);

//     localStorage.setItem("scores", JSON.stringify(score));

//     // localStorage.setItem("score", score);

//     // localStorage.setItem("score", JSON.stringify(score));

// }


// // clearButton.addEventListener("click", function(event) {
// //     event.preventDefault();   
// // })


// // function renderHighScores() {
// // var storedScore = localStorage.getItem("score");
// // scoreLi = document.createElement("li");
// // scoreLi.textContent = score;




// // }