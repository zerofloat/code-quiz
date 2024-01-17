console.log("JS is loaded");

var startScreen = document.getElementById("start-screen");
var questionScreen = document.getElementById("questions");
var startButton = document.getElementById("start");
var choices = document.getElementById("choices");
var questionEl = document.getElementById("question-title");
var timerEl = document.getElementById("time");
var endEl = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");
var answerReplace = "";
var countdown = 75;
var wrongBool = false;
var wrongCount = 0;
// https://stackoverflow.com/questions/9419263/how-to-play-audio
var correctSound = new Audio("assets/sfx/correct.wav");
var falseSound = new Audio("assets/sfx/incorrect.wav");
// var answerButtons = document.querySelectorAll("c");

// placeholders:
var answerEl = "";
// questionNum is incremented to progress each function through the question/answer objs
var questionNum = 0;
var feedbackEl = document.getElementById("feedback");

function startQuiz() {
    startScreen.classList.replace("start", "hide");
    quizGameplay();
}

function countdownTimer() {
    var countdownInterval = setInterval(function(){
        if (countdown > 0 && wrongCount < 5 && wrongBool === false) {
            countdown--;
            timerEl.textContent = countdown;
            console.log(countdown);
        } else if (countdown > 0 && wrongCount < 5 && wrongBool === true) {
            countdown -= 10;
            timerEl.textContent = countdown;
            console.log(countdown);
            wrongBool = !wrongBool;
        } else {
            clearInterval(countdownInterval);
            timerEl.textContent = countdown;
        };
    }, 1000);
}



// // https://byby.dev/js-add-event-listener 

function renderChoices() {
        if (questionNum > 0) {
            for (let i = 0; i < (5); i++) {
                choices.removeChild(choices.firstChild)
                // console.log(choices);
            }
        }  
        for (const key in answerChoices) {
            const questch = questions[questionNum];
            const choice = answerChoices[questionNum];
            // console.log(choice[key]);
            questionEl.textContent = questch;
            answerEl = document.createElement("button");
            answerEl.textContent = choice[key];
            choices.appendChild(answerEl);
            }
            // console.log(answerEl);
}

function quizGameplay() {
    questionScreen.classList.toggle("hide");
    feedbackEl.classList.toggle("hide");
    renderChoices();
// https://blog.bitsrc.io/cleaner-code-with-event-delegation-in-javascript-bb6dd27be64d
// https://stackoverflow.com/questions/73593129/js-extract-button-text-content-on-click
    choices.addEventListener("click", function(event) {
        const answerBtn = event.target.closest("button");
        if (answerBtn.textContent === answersCorrect[questionNum]) {
            feedbackEl.textContent = "Correct!";
            console.log(feedbackEl);
            correctSound.play();
        } else {
            wrongBool = true;
            wrongCount ++;
            console.log(`${wrongCount} wrong answers!`);
            console.log(wrongBool);
            feedbackEl.textContent = "Wrong!";
            console.log(feedbackEl);
            falseSound.play();
        }
        questionNum ++;
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_removechild_while
        if (questionNum <= 4 && wrongCount < 5){
        renderChoices();
        }
        else {
        endScore();
// https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
        }
    })}

function endScore() {
    questionEl.classList.toggle("hide");
    choices.classList.toggle("hide")
    endEl.classList.toggle("hide");
    finalScore.textContent = countdown;

}



        

    // renderChoices();




 
        
        // const choices = document.getElementById("choices");
        // const answerEl = document.createElement("li");
        // answerEl.textContent = choice;

            


// https://stackoverflow.com/questions/25028853/addeventlistener-two-functions

startButton.addEventListener("click", () => {
    startQuiz();
    countdownTimer();
})

// startButton.addEventListener("click", startQuiz, countdownTimer);