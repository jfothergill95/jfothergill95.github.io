// Large pool of questions
const questionPool = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Rome", "Berlin"], answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
    { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Ernest Hemingway"], answer: "William Shakespeare" },
    { question: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], answer: "Blue Whale" },
    { question: "Which element has the chemical symbol 'O'?", options: ["Gold", "Oxygen", "Osmium", "Oxide"], answer: "Oxygen" },
    { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], answer: "8" },
    { question: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Dollar"], answer: "Yen" },
    { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Claude Monet", "Leonardo da Vinci", "Pablo Picasso"], answer: "Leonardo da Vinci" },
    { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "What is the capital city of Canada?", options: ["Toronto", "Ottawa", "Montreal", "Vancouver"], answer: "Ottawa" },
    { question: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Nitrogen" },
    { question: "What is the boiling point of water?", options: ["90°C", "100°C", "120°C", "80°C"], answer: "100°C" },
    { question: "Who discovered penicillin?", options: ["Alexander Fleming", "Marie Curie", "Isaac Newton", "Albert Einstein"], answer: "Alexander Fleming" },
    { question: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
    { question: "Which language is primarily spoken in Brazil?", options: ["Spanish", "English", "Portuguese", "French"], answer: "Portuguese" }
];

let selectedQuestions = [];
let currentQuestionIndex = 0;
let correctScore = 0;
let incorrectScore = 0;

// Select 10 random unique questions from the question pool
function selectRandomQuestions() {
    selectedQuestions = questionPool.sort(() => 0.5 - Math.random()).slice(0, 10);
    currentQuestionIndex = 0;
}

function loadQuestion() {
    const questionContainer = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const resultContainer = document.getElementById("result");

    questionContainer.innerHTML = selectedQuestions[currentQuestionIndex].question;
    optionsContainer.innerHTML = "";
    resultContainer.innerHTML = "";

    selectedQuestions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.innerHTML = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const resultContainer = document.getElementById("result");
    if (selectedOption === selectedQuestions[currentQuestionIndex].answer) {
        resultContainer.innerHTML = "<p style='color: limegreen;'>Correct!</p>";
        correctScore++;
    } else {
        resultContainer.innerHTML = "<p style='color: tomato;'>Incorrect. The correct answer is " + selectedQuestions[currentQuestionIndex].answer + ".</p>";
        incorrectScore++;
    }
    updateScore();
    currentQuestionIndex++;

    setTimeout(() => {
        if (currentQuestionIndex < selectedQuestions.length) {
            loadQuestion();
        } else {
            showFinalScore();
        }
    }, 1000);
}

function updateScore() {
    document.getElementById("correct-score").innerText = correctScore;
    document.getElementById("incorrect-score").innerText = incorrectScore;
}

function showFinalScore() {
    const questionContainer = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const resultContainer = document.getElementById("result");
    const restartButton = document.getElementById("restart-btn");

    questionContainer.innerHTML = "Game Over! You've completed all questions.";
    optionsContainer.style.display = "none";
    resultContainer.innerHTML = `<p>Final Score: ${correctScore} Correct, ${incorrectScore} Incorrect</p>`;
    restartButton.style.display = "block";
}

function restartGame() {
    correctScore = 0;
    incorrectScore = 0;
    document.getElementById("correct-score").innerText = correctScore;
    document.getElementById("incorrect-score").innerText = incorrectScore;

    selectRandomQuestions();
    document.getElementById("options").style.display = "block";
    document.getElementById("restart-btn").style.display = "none";
    loadQuestion();
}

// Initialize game
window.onload = () => {
    selectRandomQuestions();
    loadQuestion();
};
