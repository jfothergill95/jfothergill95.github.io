// Expanded pool of questions
const questionPool = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Rome", "Berlin"], answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
    { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Ernest Hemingway"], answer: "William Shakespeare" },
    { question: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], answer: "Blue Whale" },
    { question: "Which element has the chemical symbol 'O'?", options: ["Gold", "Oxygen", "Osmium", "Oxide"], answer: "Oxygen" },
    { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], answer: "8" },
    { question: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Dollar"], answer: "Yen" },
    { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Claude Monet", "Leonardo da Vinci", "Pablo Picasso"], answer: "Leonardo da Vinci" },
    { question: "What is the boiling point of water?", options: ["90°C", "100°C", "120°C", "80°C"], answer: "100°C" },
    { question: "How many bones are in the human body?", options: ["206", "198", "212", "185"], answer: "206" },
    { question: "What is the main ingredient in guacamole?", options: ["Tomato", "Avocado", "Cucumber", "Pepper"], answer: "Avocado" },
    { question: "Which animal is known as the 'King of the Jungle'?", options: ["Tiger", "Lion", "Elephant", "Cheetah"], answer: "Lion" },
    { question: "Who developed the theory of relativity?", options: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Galileo Galilei"], answer: "Albert Einstein" },
    { question: "What is the chemical symbol for gold?", options: ["Gd", "Go", "Au", "Ag"], answer: "Au" },
    { question: "In which ocean is the Bermuda Triangle located?", options: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"], answer: "Atlantic Ocean" },
    { question: "What is the hardest natural substance?", options: ["Gold", "Iron", "Diamond", "Silver"], answer: "Diamond" },
    { question: "How many planets are in our solar system?", options: ["7", "8", "9", "10"], answer: "8" },
    { question: "What is the most spoken language in the world?", options: ["Spanish", "English", "Mandarin Chinese", "Hindi"], answer: "Mandarin Chinese" },
    { question: "What is the largest country by land area?", options: ["China", "Russia", "Canada", "United States"], answer: "Russia" },
    { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Nile" },
    { question: "What is the capital of Canada?", options: ["Toronto", "Ottawa", "Montreal", "Vancouver"], answer: "Ottawa" },
    { question: "What year did World War II end?", options: ["1945", "1939", "1950", "1942"], answer: "1945" },
    { question: "Who painted 'The Starry Night'?", options: ["Leonardo da Vinci", "Claude Monet", "Pablo Picasso", "Vincent van Gogh"], answer: "Vincent van Gogh" },
    { question: "What is the smallest country in the world?", options: ["Monaco", "Vatican City", "San Marino", "Malta"], answer: "Vatican City" },
    { question: "Which element has the symbol 'Na'?", options: ["Nitrogen", "Sodium", "Neon", "Nickel"], answer: "Sodium" },
    { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: "Canberra" },
    { question: "Who wrote 'Pride and Prejudice'?", options: ["Jane Austen", "Charles Dickens", "Mark Twain", "Charlotte Bronte"], answer: "Jane Austen" },
    { question: "Which planet has the most moons?", options: ["Mars", "Earth", "Jupiter", "Saturn"], answer: "Saturn" },
    { question: "What is the largest ocean?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], answer: "Pacific Ocean" },
    { question: "Who invented the telephone?", options: ["Albert Einstein", "Alexander Graham Bell", "Isaac Newton", "Thomas Edison"], answer: "Alexander Graham Bell" },
    { question: "What is the largest bone in the human body?", options: ["Skull", "Femur", "Tibia", "Humerus"], answer: "Femur" },
    { question: "Which country gifted the Statue of Liberty to the USA?", options: ["Germany", "France", "Canada", "England"], answer: "France" },
    { question: "What is the smallest unit of life?", options: ["Atom", "Molecule", "Cell", "Organ"], answer: "Cell" },
    { question: "How many colors are in a rainbow?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "What is the name of the longest bone in the body?", options: ["Femur", "Humerus", "Radius", "Tibia"], answer: "Femur" },
    { question: "What is the hardest part of the human body?", options: ["Bones", "Teeth", "Nails", "Hair"], answer: "Teeth" },
    { question: "How many teeth does an adult human have?", options: ["28", "30", "32", "34"], answer: "32" },
    { question: "Which planet has a day longer than its year?", options: ["Earth", "Venus", "Mars", "Mercury"], answer: "Venus" },
    { question: "What is the capital city of Germany?", options: ["Munich", "Berlin", "Hamburg", "Frankfurt"], answer: "Berlin" },
    { question: "What is the main ingredient in hummus?", options: ["Lentils", "Chickpeas", "Beans", "Peas"], answer: "Chickpeas" },
    { question: "What vitamin is produced by the body when exposed to sunlight?", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"], answer: "Vitamin D" },
    { question: "Which instrument has 88 keys?", options: ["Guitar", "Piano", "Flute", "Violin"], answer: "Piano" },
    { question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "Ernest Hemingway", "Mark Twain", "George Orwell"], answer: "Harper Lee" },
    { question: "Which gas do plants absorb?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide" },
    { question: "Who invented the light bulb?", options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Benjamin Franklin"], answer: "Thomas Edison" },
    { question: "Which planet is closest to the sun?", options: ["Earth", "Venus", "Mercury", "Mars"], answer: "Mercury" },
    { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "What is the tallest mountain in the world?", options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"], answer: "Mount Everest" },
    { question: "What type of animal is a seahorse?", options: ["Crustacean", "Arachnid", "Fish", "Mammal"], answer: "Fish" },
    { question: "What is the largest internal organ in the human body?", options: ["Brain", "Liver", "Lungs", "Heart"], answer: "Liver" },
    { question: "How many hearts does an octopus have?", options: ["1", "2", "3", "4"], answer: "3" },
    { question: "Which continent is the Sahara Desert located on?", options: ["Asia", "Africa", "Australia", "North America"], answer: "Africa" },
    { question: "How many rings make up the Olympic logo?", options: ["3", "4", "5", "6"], answer: "5" },
    { question: "What is the primary language spoken in Brazil?", options: ["Spanish", "Portuguese", "French", "English"], answer: "Portuguese" },
    { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "South Korea", "Thailand"], answer: "Japan" },
    { question: "What is the world's smallest bird?", options: ["Hummingbird", "Sparrow", "Robin", "Finch"], answer: "Hummingbird" },
    { question: "Which planet is known as the Blue Planet?", options: ["Earth", "Neptune", "Uranus", "Saturn"], answer: "Earth" },
    { question: "What is the largest planet in the solar system?", options: ["Earth", "Saturn", "Jupiter", "Mars"], answer: "Jupiter" }
    // You can continue adding questions similarly.
];

let correctScore = 0;
let incorrectScore = 0;
let userName = "";
let usedQuestions = [];
let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

// Start game by showing quiz container and prompting for name
function startGame() {
    document.getElementById("home-container").style.display = "none";
    askUserName();
    document.getElementById("quiz-container").style.display = "flex";
    loadQuestion();
}

// Function to navigate to home page
function goToHomePage() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("home-container").style.display = "flex";
    resetGame();
}

// Function to prompt for user's name
function askUserName() {
    userName = prompt("Please enter your name:");
    if (!userName) {
        userName = "Anonymous";
    }
}

// Function to load a new unique question
function loadQuestion() {
    const questionContainer = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const resultContainer = document.getElementById("result");

    let randomIndex;
    let selectedQuestion;
    do {
        randomIndex = Math.floor(Math.random() * questionPool.length);
        selectedQuestion = questionPool[randomIndex];
    } while (usedQuestions.includes(randomIndex));

    usedQuestions.push(randomIndex);

    questionContainer.innerHTML = selectedQuestion.question;
    optionsContainer.innerHTML = "";
    resultContainer.innerHTML = "";

    selectedQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerHTML = option;
        button.onclick = () => checkAnswer(option, selectedQuestion.answer);
        optionsContainer.appendChild(button);
    });
}

// Function to check the answer
function checkAnswer(selectedOption, correctAnswer) {
    const resultContainer = document.getElementById("result");
    if (selectedOption === correctAnswer) {
        resultContainer.innerHTML = "<p style='color: limegreen;'>Correct!</p>";
        correctScore++;
    } else {
        resultContainer.innerHTML = "<p style='color: tomato;'>Incorrect. The correct answer is " + correctAnswer + ".</p>";
        incorrectScore++;
    }

    updateScore();

    if (incorrectScore >= 3) {
        showFinalScore();
    } else {
        setTimeout(loadQuestion, 1000);
    }
}

// Function to update the score display
function updateScore() {
    document.getElementById("correct-score").innerText = correctScore;
    document.getElementById("incorrect-score").innerText = incorrectScore;
}

// Function to show the final score and display options to restart, add a new user, or share results
function showFinalScore() {
    const questionContainer = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const resultContainer = document.getElementById("result");
    const restartButton = document.getElementById("restart-btn");
    const newUserButton = document.getElementById("new-user-btn");
    const shareButton = document.getElementById("share-btn");

    questionContainer.innerHTML = "Game Over! You've reached the maximum of 3 incorrect answers.";
    optionsContainer.style.display = "none";
    resultContainer.innerHTML = `<p>Final Score: ${correctScore} Correct</p>`;

    restartButton.style.display = "block";
    newUserButton.style.display = "block";
    shareButton.style.display = "block";  // Show the Share Results button
    saveToLeaderboard();
    displayLeaderboard();
}

// Function to share results with both mobile and desktop compatibility
function shareResults() {
    const message = `I scored ${correctScore} points in the Knowledge Testing Game! Can you beat my score?`;
    const fullMessage = `${message} Try it here: ${window.location.href}`;

    // Attempt to use the Web Share API for mobile devices
    if (navigator.share) {
        navigator.share({
            title: "Knowledge Testing Game",
            text: fullMessage,
            url: window.location.href
        }).catch((error) => {
            console.error("Error sharing:", error);
            alert("Unable to share via this method. Please try using one of the other sharing options.");
            displayDesktopShareOptions(fullMessage);  // Show fallback options if Web Share API fails
        });
    } else {
        // For unsupported browsers, copy the full message to clipboard and show social media links
        copyToClipboard(fullMessage);
        alert("Results copied to clipboard! You can paste and share it anywhere.");
        displayDesktopShareOptions(fullMessage);
    }
}

// Helper function to copy text to clipboard
function copyToClipboard(text) {
    const shareText = document.createElement("textarea");
    shareText.value = text;
    document.body.appendChild(shareText);
    shareText.select();
    document.execCommand("copy");
    document.body.removeChild(shareText);
}

// Helper function to display social media share links for desktop
function displayDesktopShareOptions(message) {
    const encodedMessage = encodeURIComponent(message);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedMessage}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodedMessage}`;
    const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent("Knowledge Testing Game")}&summary=${encodedMessage}`;

    // Append sharing options directly in the results area
    const shareOptionsHtml = `
        <p>Or share directly:</p>
        <ul>
            <li><a href="${twitterUrl}" target="_blank">Share on Twitter</a></li>
            <li><a href="${facebookUrl}" target="_blank">Share on Facebook</a></li>
            <li><a href="${linkedinUrl}" target="_blank">Share on LinkedIn</a></li>
        </ul>
    `;
    
    document.getElementById("result").innerHTML += shareOptionsHtml;  // Display options in the results area
}

// Function to save score to leaderboard
function saveToLeaderboard() {
    const playerScore = { name: userName, score: correctScore };
    leaderboard.push(playerScore);

    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 5);
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}

// Function to display leaderboard
function displayLeaderboard() {
    const leaderboardDiv = document.getElementById("leaderboard");
    leaderboardDiv.innerHTML = leaderboard.map((entry, index) => `<p>${index + 1}. ${entry.name}: ${entry.score} points</p>`).join("");
}

// Function to toggle leaderboard visibility
function toggleLeaderboard() {
    displayLeaderboard();
    document.getElementById("leaderboard-container").style.display = "flex";
}

// Function to close the leaderboard
function closeLeaderboard() {
    document.getElementById("leaderboard-container").style.display = "none";
}

// Function to restart game for the same user
function restartGame() {
    correctScore = 0;
    incorrectScore = 0;
    usedQuestions = [];
    document.getElementById("correct-score").innerText = correctScore;
    document.getElementById("incorrect-score").innerText = incorrectScore;

    document.getElementById("options").style.display = "block";
    document.getElementById("restart-btn").style.display = "none";
    document.getElementById("new-user-btn").style.display = "none";
    document.getElementById("share-btn").style.display = "none";
    loadQuestion();
}

// Function to start a new game for a new user
function startNewUser() {
    correctScore = 0;
    incorrectScore = 0;
    usedQuestions = [];
    document.getElementById("correct-score").innerText = correctScore;
    document.getElementById("incorrect-score").innerText = incorrectScore;

    askUserName();
    document.getElementById("options").style.display = "block";
    document.getElementById("restart-btn").style.display = "none";
    document.getElementById("new-user-btn").style.display = "none";
    document.getElementById("share-btn").style.display = "none";
    loadQuestion();
}

// Resets the game state when returning to the home page
function resetGame() {
    correctScore = 0;
    incorrectScore = 0;
    usedQuestions = [];
    document.getElementById("correct-score").innerText = correctScore;
    document.getElementById("incorrect-score").innerText = incorrectScore;
}

// Initialize leaderboard on page load
window.onload = () => {
    displayLeaderboard();
};
