console.log("JS is loaded");

var startScreen = document.getElementById("start-screen");
var questionScreen = document.getElementById("questions");
var startButton = document.getElementById("start");
var choices = document.getElementById("choices");
// placeholder:
var questionNum = 2;

function startQuiz() {
    startScreen.classList.replace("start", "hide");
    quizGameplay();
}

function quizGameplay() {
    questionScreen.classList.toggle("hide");
    renderChoices(questionNum);

    
    }
    // remember to add questionNum args to function and for answerChoices [index]
function renderChoices(questionNum) {
        for (const key in answerChoices) {
            const choice = answerChoices[questionNum];
            console.log(choice[key]); 
            var answerEl = document.createElement("button");
            answerEl.textContent = choice[key];
            choices.appendChild(answerEl);           
            }
        }
        
function name(params) {
    
}    
        
        // const choices = document.getElementById("choices");
        // const answerEl = document.createElement("li");
        // answerEl.textContent = choice;

            



startButton.addEventListener("click", startQuiz);

