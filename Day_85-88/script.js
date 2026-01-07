// Main Script - Day 88: Complex State Management

import { loadQuestions, getQuestion, getTotalQuestions } from './Js/questions.js';
import { startTimer, stopTimer } from './Js/timer.js';
import { getHighScore, checkNewHighScore } from './Js/score.js';
import { initTheme, toggleTheme, getTheme } from './Js/theme.js';
import {
  getState,
  updateState,
  resetQuizState,
  incrementQuestion,
  incrementScore,
  setSelectedAnswer,
  setQuizActive,
  setLoading
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
const themeToggle = document.getElementById('themeToggle');

function updateThemeIcon() {
  themeToggle.textContent = getTheme() === 'light' ? '🌙' : '☀️';
}

async function init() {
  // Init theme first
  initTheme();
  updateThemeIcon();
  themeToggle.addEventListener('click', () => {
    toggleTheme();
    updateThemeIcon();
  });

  startBtn.disabled = true;
  startBtn.textContent = "Loading...";
  setLoading(true);

  const loaded = await loadQuestions();

  if (loaded) {
    setLoading(false);
    startBtn.disabled = false;
    startBtn.textContent = "Start Quiz";

    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', handleNextQuestion);
    restartBtn.addEventListener('click', restartQuiz);
    optionsContainer.addEventListener('click', handleOptionClick);

    updateHighScoreDisplay(getHighScore());
  } else {
    startBtn.textContent = "Error Loading Questions";
  }
}

function startQuiz() {
  resetQuizState();
  updateScoreDisplay(0);
  showScreen('quiz');
  loadCurrentQuestion();
}

function loadCurrentQuestion() {
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

function handleNextQuestion() {
  incrementQuestion();
  const state = getState();

  if (state.currentQuestion >= getTotalQuestions()) {
    endQuiz();
  } else {
    loadCurrentQuestion();
  }
}

function endQuiz() {
  stopTimer();
  setQuizActive(false);

  const state = getState();
  const isNewHighScore = checkNewHighScore(state.score);
  const total = getTotalQuestions();
  const incorrectCount = total - state.correctCount;
  const currentHighScore = getHighScore();

  updateHighScoreDisplay(currentHighScore);
  showScreen('result');
  showResult(state.score, total, state.correctCount, incorrectCount, isNewHighScore, currentHighScore);
}

function restartQuiz() {
  startQuiz();
}

init();
