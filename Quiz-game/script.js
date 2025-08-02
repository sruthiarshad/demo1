// --- Categorize Questions by Difficulty ---
const allQuestions = {
    easy: [
        {
            question: "What is the capital of France?",
            answers: [
                { text: "Berlin", correct: false },
                { text: "Madrid", correct: false },
                { text: "Paris", correct: true },
                { text: "Rome", correct: false },
            ]
        },
        {
            question: "What has to be broken before you can use it?", // Logical
            answers: [
                { text: "A secret", correct: false },
                { text: "A promise", correct: false },
                { text: "An egg", correct: true },
                { text: "A code", correct: false },
            ]
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: [
                { text: "Earth", correct: false },
                { text: "Mars", correct: true },
                { text: "Jupiter", correct: false },
                { text: "Venus", correct: false },
            ]
        },
        {
            question: "What is the chemical symbol for water?",
            answers: [
                { text: "O2", correct: false },
                { text: "CO2", correct: false },
                { text: "H2O", correct: true },
                { text: "NaCl", correct: false },
            ]
        },
        {
            question: "What is 2 + 2?",
            answers: [
                { text: "3", correct: false },
                { text: "4", correct: true },
                { text: "5", correct: false },
                { text: "6", correct: false },
            ]
        },
        {
            question: "How many days are in a week?",
            answers: [
                { text: "5", correct: false },
                { text: "6", correct: false },
                { text: "7", correct: true },
                { text: "8", correct: false },
            ]
        },
        {
            question: "What word is spelled incorrectly in every dictionary?", // Logical
            answers: [
                { text: "Incorrectly", correct: true },
                { text: "Misspelled", correct: false },
                { text: "Wrongly", correct: false },
                { text: "Dictionary", correct: false },
            ]
        },
        {
            question: "Which animal says 'Moo'?",
            answers: [
                { text: "Dog", correct: false },
                { text: "Cat", correct: false },
                { text: "Cow", correct: true },
                { text: "Sheep", correct: false },
            ]
        },
        {
            question: "What color is a banana?",
            answers: [
                { text: "Green", correct: false },
                { text: "Red", correct: false },
                { text: "Yellow", correct: true },
                { text: "Blue", correct: false },
            ]
        },
        {
            question: "How many sides does a triangle have?",
            answers: [
                { text: "Two", correct: false },
                { text: "Three", correct: true },
                { text: "Four", correct: false },
                { text: "Five", correct: false },
            ]
        }
    ],
    medium: [
        {
            question: "What is the largest ocean on Earth?",
            answers: [
                { text: "Atlantic Ocean", correct: false },
                { text: "Indian Ocean", correct: false },
                { text: "Arctic Ocean", correct: false },
                { text: "Pacific Ocean", correct: true },
            ]
        },
        {
            question: "What has cities, but no houses; forests, but no trees; and water, but no fish?", // Logical
            answers: [
                { text: "A book", correct: false },
                { text: "A map", correct: true },
                { text: "A globe", correct: false },
                { text: "A dream", correct: false },
            ]
        },
        {
            question: "Who painted the Mona Lisa?",
            answers: [
                { text: "Vincent van Gogh", correct: false },
                { text: "Leonardo da Vinci", correct: true },
                { text: "Pablo Picasso", correct: false },
                { text: "Claude Monet", correct: false },
            ]
        },
        {
            question: "What is the hardest natural substance on Earth?",
            answers: [
                { text: "Gold", correct: false },
                { text: "Iron", correct: false },
                { text: "Diamond", correct: true },
                { text: "Quartz", correct: false },
            ]
        },
        {
            question: "Which gas do plants absorb from the atmosphere?",
            answers: [
                { text: "Oxygen", correct: false },
                { text: "Nitrogen", correct: false },
                { text: "Carbon Dioxide", correct: true },
                { text: "Hydrogen", correct: false },
            ]
        },
        {
            question: "What is the capital of Japan?",
            answers: [
                { text: "Beijing", correct: false },
                { text: "Seoul", correct: false },
                { text: "Tokyo", correct: true },
                { text: "Bangkok", correct: false },
            ]
        },
        {
            question: "What has an eye but cannot see?", // Logical
            answers: [
                { text: "A potato", correct: false },
                { text: "A needle", correct: true },
                { text: "A storm", correct: false },
                { text: "A key", correct: false },
            ]
        },
        {
            question: "What is the primary language spoken in Brazil?",
            answers: [
                { text: "Spanish", correct: false },
                { text: "English", correct: false },
                { text: "Portuguese", correct: true },
                { text: "French", correct: false },
            ]
        },
        {
            question: "Which famous scientist developed the theory of gravity?",
            answers: [
                { text: "Albert Einstein", correct: false },
                { text: "Isaac Newton", correct: true },
                { text: "Galileo Galilei", correct: false },
                { text: "Nikola Tesla", correct: false },
            ]
        },
        {
            question: "What is the currency of the United Kingdom?",
            answers: [
                { text: "Euro", correct: false },
                { text: "Dollar", correct: false },
                { text: "Pound Sterling", correct: true },
                { text: "Yen", correct: false },
            ]
        }
    ],
    hard: [
        {
            question: "In which year did the Titanic sink?",
            answers: [
                { text: "1910", correct: false },
                { text: "1912", correct: true },
                { text: "1914", correct: false },
                { text: "1916", correct: false },
            ]
        },
        {
            question: "What is the smallest country in the world?",
            answers: [
                { text: "Monaco", correct: false },
                { text: "Vatican City", correct: true },
                { text: "San Marino", correct: false },
                { text: "Liechtenstein", correct: false },
            ]
        },
        {
            question: "Which organ in the human body is primarily responsible for pumping blood?",
            answers: [
                { text: "Lungs", correct: false },
                { text: "Liver", correct: false },
                { text: "Heart", correct: true },
                { text: "Kidneys", correct: false },
            ]
        },
        {
            question: "What is the name of the longest river in the world?",
            answers: [
                { text: "Amazon River", correct: false },
                { text: "Nile River", correct: true },
                { text: "Yangtze River", correct: false },
                { text: "Mississippi River", correct: false },
            ]
        },
        {
            question: "Who developed the theory of relativity?",
            answers: [
                { text: "Isaac Newton", correct: false },
                { text: "Albert Einstein", correct: true },
                { text: "Galileo Galilei", correct: false },
                { text: "Nikola Tesla", correct: false },
            ]
        },
        {
            question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", // Logical
            answers: [
                { text: "An echo", correct: true },
                { text: "A ghost", correct: false },
                { text: "A cloud", correct: false },
                { text: "A whisper", correct: false },
            ]
        },
        {
            question: "If you have a 3-gallon jug and a 5-gallon jug, how can you measure exactly 4 gallons of water?", // Logical (simplified)
            answers: [
                { text: "Fill 5-gallon, pour into 3-gallon. Empty 3-gallon. Pour remaining 2 from 5-gallon into 3-gallon. Fill 5-gallon again. Pour from 5-gallon into 3-gallon (which has 2) until full. 5-gallon jug now has 4 gallons.", correct: true },
                { text: "Fill 3-gallon twice.", correct: false },
                { text: "Fill 5-gallon, empty half.", correct: false },
                { text: "Not possible", correct: false },
            ]
        },
        {
            question: "Which country is home to the most pyramids?",
            answers: [
                { text: "Egypt", correct: false },
                { text: "Sudan", correct: true },
                { text: "Mexico", correct: false },
                { text: "China", correct: false },
            ]
        },
        {
            question: "What is the only letter in the alphabet that is also a conjunction?",
            answers: [
                { text: "I", correct: false },
                { text: "A", correct: false },
                { text: "O", correct: false },
                { text: "Y", correct: true },
            ]
        },
        {
            question: "Who wrote 'Don Quixote'?",
            answers: [
                { text: "William Shakespeare", correct: false },
                { text: "Miguel de Cervantes", correct: true },
                { text: "Fyodor Dostoevsky", correct: false },
                { text: "Leo Tolstoy", correct: false },
            ]
        }
    ]
};


// --- DOM Elements ---
const startScreen = document.getElementById("start-screen");
const levelScreen = document.getElementById("level-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const reviewScreen = document.getElementById("review-screen"); 
const leaderboardScreen = document.getElementById("leaderboard-screen"); 

const startButton = document.getElementById("start-btn");
const levelButtons = document.querySelectorAll(".level-btn");
const backToStartButton = document.getElementById("back-to-start-btn");
const playAgainButton = document.getElementById("play-again-btn");
const reviewAnswersButton = document.getElementById("review-answers-btn"); 
const backToResultsFromReviewButton = document.getElementById("back-to-results-from-review-btn"); 
const viewLeaderboardButton = document.getElementById("view-leaderboard-btn"); 
const backToResultsFromLeaderboardButton = document.getElementById("back-to-results-from-leaderboard-btn"); 
const clearLeaderboardButton = document.getElementById("clear-leaderboard-btn"); 


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

const timerDisplay = document.getElementById("timer");
const timeElement = document.getElementById("time");

const feedbackMessage = document.getElementById("feedback-message");
const currentQuestionNum = document.getElementById("current-question-num");
const totalQuestionsNum = document.getElementById("total-questions-num");
const finalScoreElement = document.getElementById("final-score");
const timeStatusElement = document.getElementById("time-status");

const reviewContent = document.getElementById("review-content"); 
const leaderboardList = document.getElementById("leaderboard-list"); 


// --- Audio Elements ---
const correctAudio = document.getElementById("correct-audio");
const incorrectAudio = document.getElementById("incorrect-audio");
const startAudio = document.getElementById("start-audio");
const endAudio = document.getElementById("end-audio"); // Corrected to use ID from HTML
const timeWarningAudio = document.getElementById("time-warning-audio"); 

// --- Quiz State Variables ---
let shuffledQuestions = [];
let originalQuestionCount = 0; 
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 0; 
let timerInterval;
let answeredThisQuestion = false;
let questionStartTime = 0; 
let userAnswers = []; 
let currentLevel = ''; 
let quizCompletedSuccessfully = false; 

// --- Confetti setup ---
let confettiSettings = {
    target: 'confetti-canvas',
    clock: 25,
    max: 100, // Default max
    size: 1.5,
    props: ['circle', 'triangle', 'line'],
    colors: [[165,104,246],[230,61,135],[0,199,228],[253,214,126]],
    start_from_mouse: false,
    respawn: true,
    count: 50 // Default count
};
let confetti = null;

// --- Utility Functions ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showScreen(screenToShow) {
    const screens = [startScreen, levelScreen, quizScreen, resultScreen, reviewScreen, leaderboardScreen]; 
    screens.forEach(screen => {
        if (screen === screenToShow) {
            screen.classList.add("active");
            screen.style.transform = 'translateX(0)';
        } else {
            screen.classList.remove("active");
            // More specific transitions for better UX
            if (screen === startScreen && screenToShow === levelScreen) {
                screen.style.transform = 'translateX(-100%)';
            } else if (screen === levelScreen && screenToShow === startScreen) {
                screen.style.transform = 'translateX(100%)';
            } else if (screen === levelScreen && screenToShow === quizScreen) {
                screen.style.transform = 'translateX(-100%)';
            } else if (screen === quizScreen && screenToShow === resultScreen) {
                screen.style.transform = 'translateX(-100%)';
            } else if (screen === resultScreen && (screenToShow === reviewScreen || screenToShow === leaderboardScreen)) {
                screen.style.transform = 'translateX(-100%)';
            } else if ((screen === reviewScreen || screen === leaderboardScreen) && screenToShow === resultScreen) {
                screen.style.transform = 'translateX(100%)';
            }
            else { // Default for other transitions
                screen.style.transform = 'translateX(100%)';
            }
        }
    });
}

// --- Timer Functions ---
function startOverallTimer() {
    clearInterval(timerInterval);
    timeWarningAudio.pause(); // Ensure time warning audio is stopped if re-starting
    timeWarningAudio.currentTime = 0; // Reset audio to start

    timerInterval = setInterval(() => {
        timeLeft--;
        timeElement.innerHTML = timeLeft;

        if (timeLeft <= 10 && timeLeft > 0) {
            timerDisplay.classList.add("low-time");
            // Play time warning sound only once when entering low time, or loop if desired
            if (timeWarningAudio.paused) {
                timeWarningAudio.play().catch(e => console.error("Time warning audio play failed:", e));
            }
        } else {
            timerDisplay.classList.remove("low-time");
            timeWarningAudio.pause();
            timeWarningAudio.currentTime = 0;
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeElement.innerHTML = "0";
            timerDisplay.classList.remove("low-time");
            timeWarningAudio.pause();
            timeWarningAudio.currentTime = 0;
            endQuizDueToTimeOut();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timeWarningAudio.pause(); // Ensure timer sound stops when quiz ends/paused
    timeWarningAudio.currentTime = 0;
}

// --- Quiz Flow Functions ---

function goToLevelSelection() {
    startAudio.play().catch(e => console.error("Start audio play failed:", e));;
    showScreen(levelScreen);
}

function startQuiz(level) {
    score = 0;
    currentQuestionIndex = 0;
    answeredThisQuestion = false;
    userAnswers = []; // Reset recorded answers for new quiz
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none";
    feedbackMessage.classList.remove("show", "correct-feedback", "incorrect-feedback");
    quizCompletedSuccessfully = false; // Reset completion flag
    currentLevel = level; // Store the chosen level
    sessionStorage.removeItem('scoreSavedForCurrentQuiz'); // Reset score saved flag for new quiz

    // Set time limit based on difficulty
    switch (level) {
        case 'easy':
            timeLeft = 90;
            break;
        case 'medium':
            timeLeft = 60;
            break;
        case 'hard':
            timeLeft = 45;
            break;
        default:
            timeLeft = 60;
    }
    timeElement.innerHTML = timeLeft;

    const questionsForLevel = allQuestions[level];
    shuffledQuestions = shuffleArray([...questionsForLevel]);
    originalQuestionCount = questionsForLevel.length;
    totalQuestionsNum.textContent = shuffledQuestions.length;

    showScreen(quizScreen);
    startOverallTimer();
    showQuestion();

    if (confetti) {
        confetti.clear();
        confetti = null;
    }
}

function showQuestion() {
    resetState();

    if (currentQuestionIndex < shuffledQuestions.length) {
        let currentQuestion = shuffledQuestions[currentQuestionIndex];
        currentQuestionNum.textContent = currentQuestionIndex + 1;
        questionElement.innerHTML = currentQuestion.question;

        const shuffledAnswers = shuffleArray([...currentQuestion.answers]); // Shuffle answers

        shuffledAnswers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if (answer.correct) {
                button.dataset.correct = "true";
            }
            button.addEventListener("click", selectAnswer);
        });
        answeredThisQuestion = false;
        questionStartTime = Date.now(); // Record time when question is shown
    } else {
        quizCompletedSuccessfully = true; // All questions answered
        showScore("completed");
    }
}

function resetState() {
    nextButton.style.display = "none";
    feedbackMessage.classList.remove("show", "correct-feedback", "incorrect-feedback");
    feedbackMessage.textContent = ""; // Clear feedback text
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    if (answeredThisQuestion) return;
    answeredThisQuestion = true;

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    const timeTaken = (Date.now() - questionStartTime) / 1000; // Time in seconds

    let pointsEarned = 0;
    let feedbackText = "";

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const correctAnswerText = currentQuestion.answers.find(a => a.correct).text;

    if (isCorrect) {
        pointsEarned = 1; // Base point for correct answer

        // Bonus points for speed
        if (timeTaken <= 5) { // Answered within 5 seconds
            pointsEarned += 0.5; // Award half a bonus point
            feedbackText = "Correct! (+0.5s bonus)";
        } else if (timeTaken <= 10) { // Answered within 10 seconds
            pointsEarned += 0.25; // Award quarter bonus point
            feedbackText = "Correct! (+0.25s bonus)";
        } else {
            feedbackText = "Correct!";
        }
        score += pointsEarned;
        feedbackMessage.textContent = feedbackText;
        feedbackMessage.classList.add("show", "correct-feedback");
        correctAudio.play().catch(e => console.error("Correct audio play failed:", e));
    } else {
        feedbackMessage.textContent = `Incorrect! The answer was "${correctAnswerText}".`;
        feedbackMessage.classList.add("show", "incorrect-feedback");
        incorrectAudio.play().catch(e => console.error("Incorrect audio play failed:", e));
    }
    
    // Always add correct/incorrect class to the selected button
    selectedBtn.classList.add(isCorrect ? "correct" : "incorrect");

    // Record user answer for review
    userAnswers.push({
        question: currentQuestion.question,
        yourAnswer: selectedBtn.innerHTML,
        correctAnswer: correctAnswerText,
        isCorrect: isCorrect,
        points: pointsEarned
    });

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true; // Disable all buttons after selection
    });

    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    showQuestion();
}

function showScore(status) {
    stopTimer(); // Stop the timer when quiz finishes or times out
    endAudio.play().catch(e => console.error("End audio play failed:", e));
    showScreen(resultScreen);

    finalScoreElement.innerHTML = `You scored ${score.toFixed(2)} out of ${originalQuestionCount}!`;

    if (status === "timeout") {
        timeStatusElement.textContent = "Time's up! You ran out of time.";
        timeStatusElement.style.color = "#dc3545";
        quizCompletedSuccessfully = false; // Set to false if timed out
    } else {
        timeStatusElement.textContent = `You finished with ${timeLeft} seconds remaining!`;
        timeStatusElement.style.color = "#28a745";
    }
    timerDisplay.classList.remove("low-time");

    // Confetti celebration logic
    if (quizCompletedSuccessfully) { // Trigger confetti if all questions were answered
        let currentConfettiSettings = { ...confettiSettings }; // Clone default settings

        if (score >= originalQuestionCount) { // Perfect score or better (with bonus points)
            currentConfettiSettings.max = 200; // More confetti for perfect score
            currentConfettiSettings.count = 75;
            currentConfettiSettings.size = 2;
            currentConfettiSettings.props = ['circle', 'triangle', 'line', 'star']; // Add stars for perfect
        } else { // Just completed the level
            currentConfettiSettings.max = 100; // Normal confetti
            currentConfettiSettings.count = 50;
            currentConfettiSettings.size = 1.5;
            currentConfettiSettings.props = ['circle', 'triangle', 'line'];
        }

        if (!confetti) {
            confetti = new ConfettiGenerator(currentConfettiSettings);
        }
        confetti.render();
        setTimeout(() => {
            if (confetti) {
                confetti.clear();
                confetti = null;
            }
        }, 5000); // Confetti lasts for 5 seconds
    }
}

function endQuizDueToTimeOut() {
    showScore("timeout");
}

function displayReviewAnswers() {
    reviewContent.innerHTML = ''; // Clear previous review
    if (userAnswers.length === 0) {
        reviewContent.innerHTML = '<p>No answers to review. Please complete a quiz first!</p>';
        showScreen(reviewScreen);
        return;
    }

    userAnswers.forEach((item, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        if (!item.isCorrect) {
            reviewItem.classList.add('incorrect'); // Add class for styling incorrect answers
        }

        reviewItem.innerHTML = `
            <p class="question-text">Q${index + 1}: ${item.question}</p>
            <p class="your-answer">Your Answer: ${item.yourAnswer}</p>
            <p class="correct-answer">Correct Answer: ${item.correctAnswer}</p>
        `;
        reviewContent.appendChild(reviewItem);
    });
    showScreen(reviewScreen);
}

function saveScore() {
    // Only prompt to save score if the quiz was completed successfully and score hasn't been saved for this session
    if (!quizCompletedSuccessfully || score === 0 || sessionStorage.getItem('scoreSavedForCurrentQuiz')) {
        return; // Don't prompt if not completed, score is zero, or already saved for this quiz
    }

    let username = prompt("Congratulations! You completed the quiz. Enter your name for the leaderboard:", "Player");
    if (username === null || username.trim() === "") {
        username = "Anonymous";
    }
    
    const leaderboard = JSON.parse(localStorage.getItem('quizLeaderboard')) || [];
    leaderboard.push({ name: username.trim(), score: parseFloat(score.toFixed(2)), level: currentLevel, date: new Date().toLocaleString() });
    leaderboard.sort((a, b) => b.score - a.score); // Sort by score descending

    // Keep only the top 10 scores
    const maxLeaderboardEntries = 10;
    if (leaderboard.length > maxLeaderboardEntries) {
        leaderboard.splice(maxLeaderboardEntries);
    }

    localStorage.setItem('quizLeaderboard', JSON.stringify(leaderboard));
    sessionStorage.setItem('scoreSavedForCurrentQuiz', 'true'); // Set flag to prevent multiple saves for current quiz
}


function displayLeaderboard() {
    leaderboardList.innerHTML = ''; // Clear previous leaderboard
    const leaderboard = JSON.parse(localStorage.getItem('quizLeaderboard')) || [];

    if (leaderboard.length === 0) {
        leaderboardList.innerHTML = '<p>No scores yet. Play a quiz to add your score!</p>';
    } else {
        leaderboard.forEach((entry, index) => {
            const entryDiv = document.createElement('div');
            entryDiv.classList.add('leaderboard-entry');
            entryDiv.innerHTML = `
                <span>${index + 1}. <span class="name">${entry.name}</span> (${entry.level})</span>
                <span class="score">${entry.score} pts</span>
            `;
            leaderboardList.appendChild(entryDiv);
        });
    }
    showScreen(leaderboardScreen);
}

function clearLeaderboard() {
    if (confirm("Are you sure you want to clear the leaderboard? This cannot be undone.")) {
        localStorage.removeItem('quizLeaderboard');
        displayLeaderboard(); // Refresh the display
    }
}


// --- Event Listeners ---
startButton.addEventListener("click", goToLevelSelection); 

backToStartButton.addEventListener("click", () => showScreen(startScreen)); 

levelButtons.forEach(button => { 
    button.addEventListener("click", (e) => {
        const selectedLevel = e.target.dataset.level;
        startQuiz(selectedLevel); 
    });
});

playAgainButton.addEventListener("click", goToLevelSelection); 
nextButton.addEventListener("click", handleNextButton);

// Event listeners for review and leaderboard
reviewAnswersButton.addEventListener("click", displayReviewAnswers);
backToResultsFromReviewButton.addEventListener("click", () => showScreen(resultScreen));

viewLeaderboardButton.addEventListener("click", () => {
    saveScore(); // Attempt to save score before displaying leaderboard
    displayLeaderboard();
});
backToResultsFromLeaderboardButton.addEventListener("click", () => showScreen(resultScreen));
clearLeaderboardButton.addEventListener("click", clearLeaderboard);


// Initial setup to show the start screen
showScreen(startScreen);