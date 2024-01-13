console.log("JS is loaded");

var startScreen = document.getElementById("start-screen");
var questionScreen = document.getElementById("questions");
var startButton = document.getElementById("start");
var choices = document.getElementById("choices");


function startQuiz() {
    startScreen.classList.replace("start", "hide");
    quizGameplay();
}

function quizGameplay() {
    questionScreen.classList.toggle("hide");
    renderChoices();

    
    }
    // remember to add questionNum args to function and for answerChoices [index]
function renderChoices() {
        for (const key in answerChoices) {
            const choice = answerChoices[0];
            console.log(choice[key]); 
            var answerEl = document.createElement("li");
            answerEl.textContent = choice[key];
            choices.appendChild(answerEl);        
            // const choice = answerChoices[2];
            // console.log(choice[key -1]);           
            }
        }
        
    
        
        // const choices = document.getElementById("choices");
        // const answerEl = document.createElement("li");
        // answerEl.textContent = choice;

            



startButton.addEventListener("click", startQuiz);

