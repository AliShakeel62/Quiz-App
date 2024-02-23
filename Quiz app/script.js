var pera= document.getElementById('p1')
var questions = [
    {
        question:"Html Stands For _______________________",
        options: ["Hyper Text Makeup Language",
        "html",
        "Case Cading Style Sheet",
        "Hypertext markup language"
        ],
        correctAns: "Hypertext markup language",
    },
    {
        question:"Css Stands For _______________________",
        options: [
            "Casecading Style Sheet",
            "Java",
            "Ram",
            "Hypertext markup language"
        ],
        correctAns: "Casecading Style Sheet",
    },
    {
        question:"Js Stands For _______________________",
        options: [
            "Java Style",
            "Java Script",
            "Script",
            "Script Src"
        ],
        correctAns: "Java Script",
    },
    {
        question:"Dom Stands For _______________________",
        options: [
            "Document Object Model",
            "html",
            "Css",
            "Java"
        ],
        correctAns: "Document Object Model",
    },
    {
        question:"Ram Stands For _______________________",
        options: [
            "Read Only Memory",
            "Dom",
            "Random Acccess Memory",
            "For Pc"
        ],
        correctAns: "Random Acccess Memory",
    },
    {
        question:"Rom Stands For _______________________",
        options: [
            "Hyper Text Markup Language",
            "html",
            "HTml",
            "Read Only Memory"
        ],
        correctAns: "Read Only Memory",
    },
];



let currentQuestionIndex = 0;
let score = 0;


function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("Questionhere").textContent = currentQuestion.question;


    const optionButtons = document.querySelectorAll("#box .row button");
    optionButtons.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
    });
}


function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAns) {
        score++; 
    }
}


function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {

        document.getElementById("Questionhere").textContent = "Quiz Completed! Your Score: " + score + "/" + questions.length;
        document.querySelector(".next button").style.display = "none"; 
    }
}

document.querySelectorAll("#box .row button").forEach(button => {
    button.addEventListener("click", function() {
        const selectedOption = this.textContent;
        checkAnswer(selectedOption);
        nextQuestion();
    });
});

loadQuestion();


