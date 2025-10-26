const gameContainer = document.querySelector(".game-container");

const questions = [
    "Are you happy in life?🌸",
    "Will you be happy with me, my sisters, my parents?🕊",
    "Do you see us growing together in the future?🐣",
    "Do you believe everyone deserves a second chance?☺️",
    "In your smile, I’ve found my forever.You are the light in my life and the reason I smile every day. Will you make me the happiest person in the world by being my girlfriend?💞",
    "Few more fun questions. Say yes to continue",
    "What’s something I could do more often to make you love me more?",
    "What's something you do that I absolutely love? How will you enhance this to make me more happy😌?",
    "What does quality time mean to you? How should we spend quality time in LDR?🫠",
    "Whats a dream date you'd like when we meet? Cafē, Arcade, Garden, Beach, Mountains whatever you like baby 😉.",
];

let currentQuestion = 0;
let answers = [];

document.getElementById("startBtn").addEventListener("click", startGame);

function startGame() {
    showQuestion();
}

function showQuestion() {
    gameContainer.innerHTML = `
        <div class="question">
            <h2>${questions[currentQuestion]}</h2>
            <input type="text" id="answer" placeholder="Type your answer...">
            <br>
            <button class="next-btn">Next</button>
        </div>
    `;
    document.querySelector(".next-btn").addEventListener("click", nextQuestion);
}

function nextQuestion() {
    const answer = document.getElementById("answer").value;
    if (answer.trim() === "") {
        alert("Please answer the question!");
        return;
    }
    answers.push(answer);
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    let answersHTML = "";
    questions.forEach((q, i) => {
        answersHTML += `
            <div class="answer-item">
                <strong>${i + 1}. ${q}</strong><br>
                <em>${answers[i]}</em>
            </div>
        `;
    });

    gameContainer.innerHTML = `
        <div class="result">
            <h2>Congratulations Tejuli! 💖</h2>
            <p>You did it! Here are all your answers below 🥰:</p>
            <div class="image-container">
                <img src="assets/images/Us.jpg" alt="Us together" class="result-img">
            </div>
            <div class="answers-section">
                <h3>Your Answers 💌</h3>
                ${answersHTML}
            </div>
        </div>
    `;

    createHearts();

    const img = document.querySelector(".result-img");
    img.classList.add("animate-img");
}

// Floating hearts animation
function createHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.textContent = "💖";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = (2 + Math.random() * 2) + "s";
        heart.style.fontSize = (16 + Math.random() * 20) + "px";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 8000);
    }
}
