// Main Script - Day 88: Complex State Management

import { getQuestion, getTotalQuestions } from './Js/questions.js';
import { startTimer, stopTimer } from './Js/timer.js';
import { getHighScore, checkAndUpdateHighScore } from './Js/score.js';
import {
  getState,
  updateState,
  resetState,
  incrementQuestion,
  incrementScore,
  setSelectedAnswer,
  setQuizActive
} from './Js/state.js';
import {
  updateTimerDisplay,
  updateScoreDisplay,
  updateHighScoreDisplay,
  updateProgress,
  displayQuestion,
  showScreen,
  showResult,
  disableOptions,
  markAnswer,
  enableNextButton,
  disableNextButton
} from './Js/ui.js';

// DOM Elements
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const optionsContainer = document.getElementById('optionsContainer');

function init() {
  startBtn.addEventListener('click', startQuiz);
  nextBtn.addEventListener('click', nextQuestion);
  restartBtn.addEventListener('click', restartQuiz);
  optionsContainer.addEventListener('click', handleOptionClick);

  updateHighScoreDisplay(getHighScore());
}

function startQuiz() {
  resetState();
  setQuizActive(true);
  updateScoreDisplay(0);
  showScreen('quiz');
  loadQuestion();
}

function loadQuestion() {
  const state = getState();
  setSelectedAnswer(null);
  disableNextButton();

  const question = getQuestion(state.currentQuestion);
  if (!question) {
    endQuiz();
    return;
  }

  updateProgress(state.currentQuestion, getTotalQuestions());
  displayQuestion(question);

  startTimer(
    (timeLeft) => updateTimerDisplay(timeLeft),
    () => handleTimeUp()
  );
}

function handleOptionClick(e) {
  if (!e.target.classList.contains('option-btn')) return;
  if (e.target.disabled) return;

  const state = getState();
  const selectedIndex = parseInt(e.target.dataset.index);
  const question = getQuestion(state.currentQuestion);

  setSelectedAnswer(selectedIndex);
  stopTimer();
  disableOptions();
  markAnswer(selectedIndex, question.correct);

  if (selectedIndex === question.correct) {
    incrementScore();
    updateScoreDisplay(getState().score);
  }

  enableNextButton();
}

function handleTimeUp() {
  const state = getState();
  const question = getQuestion(state.currentQuestion);
  disableOptions();
  markAnswer(-1, question.correct);
  enableNextButton();
}

function nextQuestion() {
  incrementQuestion();
  const state = getState();

  if (state.currentQuestion >= getTotalQuestions()) {
    endQuiz();
  } else {
    loadQuestion();
  }
}

function endQuiz() {
  stopTimer();
  setQuizActive(false);

  const state = getState();
  const total = getTotalQuestions();
  const incorrectCount = total - state.correctCount;
  const isNewHighScore = checkAndUpdateHighScore(state.score);
  const highScore = getHighScore();

  updateHighScoreDisplay(highScore);
  showScreen('result');
  showResult(state.score, total, state.correctCount, incorrectCount, isNewHighScore, highScore);
}

function restartQuiz() {
  startQuiz();
}

init();
