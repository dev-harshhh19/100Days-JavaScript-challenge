// UI Module

export function updateTimerDisplay(timeLeft) {
  const timerEl = document.getElementById('timer');
  const timeLeftEl = document.getElementById('timeLeft');

  timeLeftEl.textContent = timeLeft;

  timerEl.classList.remove('warning', 'danger');
  if (timeLeft <= 5) {
    timerEl.classList.add('danger');
  } else if (timeLeft <= 10) {
    timerEl.classList.add('warning');
  }
}

export function updateScoreDisplay(score) {
  const scoreDisplay = document.getElementById('scoreDisplay');
  scoreDisplay.textContent = `Score: ${score}`;
}

export function updateHighScoreDisplay(highScore) {
  const startHighScore = document.getElementById('startHighScore');
  startHighScore.textContent = `High Score: ${highScore}`;
}

export function updateProgress(current, total) {
  const progressFill = document.getElementById('progressFill');
  const questionNumber = document.getElementById('questionNumber');

  const percent = ((current + 1) / total) * 100;
  progressFill.style.width = `${percent}%`;
  questionNumber.textContent = `Question ${current + 1}/${total}`;
}

export function displayQuestion(question) {
  const questionText = document.getElementById('questionText');
  const optionsContainer = document.getElementById('optionsContainer');

  questionText.textContent = question.question;

  optionsContainer.innerHTML = question.options.map((option, index) => `
        <button class="option-btn" data-index="${index}">${option}</button>
    `).join('');
}

export function showScreen(screenId) {
  document.getElementById('startScreen').style.display = 'none';
  document.getElementById('quizContainer').classList.remove('active');
  document.getElementById('resultScreen').style.display = 'none';

  if (screenId === 'start') {
    document.getElementById('startScreen').style.display = 'block';
  } else if (screenId === 'quiz') {
    document.getElementById('quizContainer').classList.add('active');
  } else if (screenId === 'result') {
    document.getElementById('resultScreen').style.display = 'block';
  }
}

export function showResult(score, total, correctCount, incorrectCount, isNewHighScore, highScore) {
  const finalScore = document.getElementById('finalScore');
  const highScoreResult = document.getElementById('highScoreResult');
  const resultContent = document.querySelector('.result-content');

  finalScore.textContent = `Your Score: ${score}/${total}`;

  if (isNewHighScore) {
    highScoreResult.textContent = `New High Score!`;
    highScoreResult.classList.add('new-high-score');
  } else {
    highScoreResult.textContent = `High Score: ${highScore}`;
    highScoreResult.classList.remove('new-high-score');
  }

  const existingBreakdown = resultContent.querySelector('.score-breakdown');
  if (existingBreakdown) existingBreakdown.remove();

  const breakdown = document.createElement('div');
  breakdown.className = 'score-breakdown';
  breakdown.innerHTML = `
        <p>Correct Answers: ${correctCount}</p>
        <p>Incorrect/Skipped: ${incorrectCount}</p>
    `;
  resultContent.appendChild(breakdown);
}

export function disableOptions() {
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.disabled = true;
  });
}

export function markAnswer(selectedIndex, correctIndex) {
  const options = document.querySelectorAll('.option-btn');
  options.forEach((btn, index) => {
    if (index === correctIndex) {
      btn.classList.add('correct');
    } else if (index === selectedIndex && selectedIndex !== correctIndex) {
      btn.classList.add('incorrect');
    }
  });
}

export function enableNextButton() {
  document.getElementById('nextBtn').disabled = false;
}

export function disableNextButton() {
  document.getElementById('nextBtn').disabled = true;
}
