
const quizData = [
    {
        question: "They always talk about their ex on the first date.",
        options: ["Red Flag 🚩", "Green Flag 💚"],
        correct: 0
    },
    {
        question: "They listen to your problems without interrupting.",
        options: ["Red Flag 🚩", "Green Flag 💚"],
        correct: 1
    },
    {
        question: "They don’t text back for days with no explanation.",
        options: ["Red Flag 🚩", "Green Flag 💚"],
        correct: 0
    },
    {
        question: "They surprise you with your favorite coffee.",
        options: ["Red Flag 🚩", "Green Flag 💚"],
        correct: 1
    },
    {
        question: "They get angry when you spend time with friends.",
        options: ["Red Flag 🚩", "Green Flag 💚"],
        correct: 0
    },
    {
        question: "They encourage you to follow your dreams.",
        options: ["Red Flag 🚩", "Green Flag 💚"],
        correct: 1
    },
    {
        question: "They constantly check your phone without permission.",
        options: ["Red Flag 🚩", "Green Flag 💚"],
        correct: 0
    },
    {
        question: "They introduce you to their family and friends.",
        options: ["Red Flag 🚩", "Green Flag 💚"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const restartBtn = document.getElementById("restart");

function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionEl.textContent = currentQuiz.question;
    optionsEl.innerHTML = "";

    currentQuiz.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => handleAnswer(index);
        optionsEl.appendChild(button);
    });
}

function handleAnswer(selected) {
    const currentQuiz = quizData[currentQuestion];
    if (selected === currentQuiz.correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionEl.textContent = "You've completed the quiz!";
    optionsEl.innerHTML = "";
    resultEl.textContent = `You scored ${score} out of ${quizData.length}.`;
    restartBtn.style.display = "block";
}

restartBtn.onclick = () => {
    currentQuestion = 0;
    score = 0;
    restartBtn.style.display = "none";
    resultEl.textContent = "";
    loadQuestion();
};

loadQuestion();