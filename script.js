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
    { question: "Which language is primarily spoken in Brazil?", options: ["Spanish", "English", "Portuguese", "French"], answer: "Portuguese" },

    // Additional 20 questions
    { question: "In which year did World War II end?", options: ["1945", "1939", "1942", "1946"], answer: "1945" },
    { question: "Which organ in the human body is primarily responsible for filtering blood?", options: ["Liver", "Heart", "Lungs", "Kidneys"], answer: "Kidneys" },
    { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Silver"], answer: "Diamond" },
    { question: "Which planet has the most moons?", options: ["Earth", "Mars", "Saturn", "Jupiter"], answer: "Saturn" },
    { question: "What is the tallest mountain in the world?", options: ["Mount Kilimanjaro", "Mount Everest", "K2", "Mont Blanc"], answer: "Mount Everest" },
    { question: "In which city is the Colosseum located?", options: ["Athens", "Rome", "Paris", "Istanbul"], answer: "Rome" },
    { question: "Who developed the theory of relativity?", options: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Galileo Galilei"], answer: "Albert Einstein" },
    { question: "What is the most spoken language in the world?", options: ["Spanish", "English", "Mandarin Chinese", "Hindi"], answer: "Mandarin Chinese" },
    { question: "Which is the smallest country in the world?", options: ["Monaco", "Vatican City", "San Marino", "Malta"], answer: "Vatican City" },
    { question: "What is the main ingredient in guacamole?", options: ["Tomato", "Avocado", "Cucumber", "Pepper"], answer: "Avocado" },
    { question: "Which animal is known as the 'King of the Jungle'?", options: ["Tiger", "Lion", "Elephant", "Cheetah"], answer: "Lion" },
    { question: "Which element has the highest melting point?", options: ["Iron", "Tungsten", "Carbon", "Gold"], answer: "Tungsten" },
    { question: "In which country would you find the Eiffel Tower?", options: ["Italy", "France", "Spain", "Germany"], answer: "France" },
    { question: "What is the smallest unit of life?", options: ["Atom", "Molecule", "Cell", "Organism"], answer: "Cell" },
    { question: "Which artist is known for the painting 'Starry Night'?", options: ["Pablo Picasso", "Claude Monet", "Vincent van Gogh", "Edvard Munch"], answer: "Vincent van Gogh" },
    { question: "What is the chemical symbol for gold?", options: ["Gd", "Go", "Au", "Ag"], answer: "Au" },
    { question: "Which continent is the Sahara Desert located on?", options: ["Asia", "Africa", "Australia", "Europe"], answer: "Africa" },
    { question: "How many bones are there in the adult human body?", options: ["206", "198", "212", "185"], answer: "206" },
    { question: "What does 'HTTP' stand for?", options: ["HyperText Transfer Protocol", "Hyperlink Text Transfer Protocol", "HyperText Transfer Path", "Hyperlink Transfer Protocol"], answer: "HyperText Transfer Protocol" },
    { question: "In which ocean is the Bermuda Triangle located?", options: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"], answer: "Atlantic Ocean" }
];

let selectedQuestions = [];
let currentQuestionIndex = 0;
let correctScore = 0;
let incorrectScore = 0;
let userName = "";

// Load leaderboard from localStorage or initialize an empty array
let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

// Ask for the user's name when they first load the page
function askUserName() {
    userName = prompt("Please enter your name:");
    if (!userName) {
        userName = "Anonymous"; // Default to "Anonymous" if no name is entered
    }
}

// Select 10 random unique questions for each round from the question pool
function selectRandomQuestions() {
    selectedQuestions = [...questionPool].sort(() => 0.5 - Math.random()).slice(0, 10);
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

// Show final score, save to leaderboard, and display the leaderboard
function showFinalScore() {
    const questionContainer = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const resultContainer = document.getElementById("result");
    const restartButton = document.getElementById("restart-btn");
    const newUserButton = document.getElementById("new-user-btn");

    questionContainer.innerHTML = "Game Over! You've completed all questions.";
    optionsContainer.style.display = "none";
    resultContainer.innerHTML = `<p>Final Score: ${correctScore} Correct, ${incorrectScore} Incorrect</p>`;
    
    // Show buttons to play again or start a new user
    restartButton.style.display = "block";
    newUserButton.style.display = "block";

    // Save the score to the leaderboard
    saveToLeaderboard();

    // Display the leaderboard
    displayLeaderboard();
}

function saveToLeaderboard() {
    const playerScore = {
        name: userName,
        score: correctScore
    };
    leaderboard.push(playerScore);

    // Sort leaderboard by score in descending order and keep top 5 scores
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 5);

    // Save leaderboard to localStorage
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}

function displayLeaderboard() {
    const leaderboardContainer = document.getElementById("leaderboard-container");
    const leaderboardDiv = document.getElementById("leaderboard");

    leaderboardContainer.style.display = "block";
    leaderboardDiv.innerHTML = leaderboard.map((entry, index) =>
        `<p>${index + 1}. ${entry.name}: ${entry.score} points</p>`
    ).join("");
}

// Restart game for the same user
function restartGame() {
    correctScore = 0;
    incorrectScore = 0;
    document.getElementById("correct-score").innerText = correctScore;
    document.getElementById("incorrect-score").innerText = incorrectScore;

    selectRandomQuestions();
    document.getElementById("options").style.display = "block";
    document.getElementById("restart-btn").style.display = "none";
    document.getElementById("new-user-btn").style.display = "none";
    loadQuestion();
}

// Start a new game for a new user
function startNewUser() {
    correctScore = 0;
    incorrectScore = 0;
    document.getElementById("correct-score").innerText = correctScore;
    document.getElementById("incorrect-score").innerText = incorrectScore;

    askUserName(); // Prompt for new user's name
    selectRandomQuestions();
    document.getElementById("options").style.display = "block";
    document.getElementById("restart-btn").style.display = "none";
    document.getElementById("new-user-btn").style.display = "none";
    loadQuestion();
}

// Initialize game
window.onload = () => {
    // Load leaderboard from localStorage on page load
    displayLeaderboard();
    askUserName(); // Prompt user for name
    selectRandomQuestions();
    loadQuestion();
};
