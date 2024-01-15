console.log("JS is loaded");

var startScreen = document.getElementById("start-screen");
var questionScreen = document.getElementById("questions");
var startButton = document.getElementById("start");
var choices = document.getElementById("choices");
var questionEl = document.getElementById("question-title");
// var answerButtons = document.querySelectorAll("c");

// placeholders:
var answerEl = "";
var questionNum = 0;

function startQuiz() {
    startScreen.classList.replace("start", "hide");
    quizGameplay();
}





// // https://byby.dev/js-add-event-listener
//     answerButtons.forEach(function(button) {
//         button.addEventListener("click", function() {
//     // do something when the button is clicked
//             console.log("You clicked a button");
//   });
// });



// answerButtons.forEach(function(button){
        // button.addEventListener("click", )
    // answerButtons.addEventListener("click", answerCompare);       




    // use questionNum counter to increment functions
function renderChoices() {
        for (const key in answerChoices) {
            const questch = questions[questionNum];
            const choice = answerChoices[questionNum];
            // console.log(choice[key]);
            questionEl.textContent = questch;
            answerEl = document.createElement("button");
            answerEl.textContent = choice[key];
            choices.appendChild(answerEl);
            // console.log(answerEl);
            }
}


function quizGameplay() {
    questionScreen.classList.toggle("hide");
    renderChoices();
// https://blog.bitsrc.io/cleaner-code-with-event-delegation-in-javascript-bb6dd27be64d
// https://stackoverflow.com/questions/73593129/js-extract-button-text-content-on-click
    choices.addEventListener("click", function(event) {
        const answerBtn = event.target.closest("button");
        if (answerBtn.textContent === answersCorrect[questionNum]) {
            
        }
    }
)
}
    

        
function answerCompare() {
    console.log(test);
    // if (condition) {
        
    }

    questionNum++;
    // renderChoices();




 
        
        // const choices = document.getElementById("choices");
        // const answerEl = document.createElement("li");
        // answerEl.textContent = choice;

            



startButton.addEventListener("click", startQuiz);

