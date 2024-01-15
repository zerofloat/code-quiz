console.log("JS is loaded");

var startScreen = document.getElementById("start-screen");
var questionScreen = document.getElementById("questions");
var startButton = document.getElementById("start");
var choices = document.getElementById("choices");
var questionEl = document.getElementById("question-title");

// placeholders:
var answerEl = "";
var questionNum = 1;

function startQuiz() {
    startScreen.classList.replace("start", "hide");
    quizGameplay();
}

function quizGameplay() {
    questionScreen.classList.toggle("hide");
    renderChoices();
    // answerEl.addEventListener("click", answerCompare);       
}

    // remember to add questionNum args to function and for answerChoices [index]
function renderChoices() {
        for (const key in answerChoices) {
            const questch = questions[questionNum];
            const choice = answerChoices[questionNum];
            // console.log(choice[key]);
            questionEl.textContent = questch;
            answerEl = document.createElement("button");
            answerEl.textContent = choice[key];
            choices.appendChild(answerEl);
            console.log(answerEl);
            }
}


        
function answerCompare(key) {
    if (condition) {

    }

    questionNum++;
    // renderChoices();
}



 
        
        // const choices = document.getElementById("choices");
        // const answerEl = document.createElement("li");
        // answerEl.textContent = choice;

            



startButton.addEventListener("click", startQuiz);

