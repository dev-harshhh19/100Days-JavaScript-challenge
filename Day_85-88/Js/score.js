// Score Module

const HIGH_SCORE_KEY = 'quizHighScore';

export function getHighScore() {
  const stored = localStorage.getItem(HIGH_SCORE_KEY);
  return stored ? parseInt(stored) : 0;
}

export function setHighScore(score) {
  localStorage.setItem(HIGH_SCORE_KEY, score.toString());
}

export function checkAndUpdateHighScore(currentScore) {
  const highScore = getHighScore();
  if (currentScore > highScore) {
    setHighScore(currentScore);
    return true;
  }
  return false;
}
