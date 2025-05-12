const bomb = document.getElementById("bomb");
const scoreDisplay = document.getElementById("score");
const gameOverScreen = document.getElementById("game-over");
const finalScore = document.getElementById("final-score");

let score = 0;
let timer = null;
let timeLimit = 3000;

function moveBomb() {
  const container = document.getElementById("game-container");
  const maxX = container.clientWidth - bomb.offsetWidth;
  const maxY = container.clientHeight - bomb.offsetHeight;
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  bomb.style.left = `${randomX}px`;
  bomb.style.top = `${randomY}px`;
}

function startRound() {
  clearTimeout(timer);
  moveBomb();
  timer = setTimeout(gameOver, timeLimit);
}

function gameOver() {
  bomb.style.display = "none";
  gameOverScreen.classList.remove("hidden");
  finalScore.textContent = score;
}

bomb.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = "Score : " + score;
  timeLimit = Math.max(800, timeLimit - 100); // plus difficile
  startRound();
});

function restartGame() {
  score = 0;
  timeLimit = 3000;
  scoreDisplay.textContent = "Score : 0";
  bomb.style.display = "block";
  gameOverScreen.classList.add("hidden");
  startRound();
}

// Démarrage automatique
startRound();
