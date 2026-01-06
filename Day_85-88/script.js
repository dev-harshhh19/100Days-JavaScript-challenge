// Main Script - Day 87: High Score & JSON Question Bank

import { loadQuestions, getQuestion, getTotalQuestions } from './Js/questions.js';
import { startTimer, stopTimer } from './Js/timer.js';
import { getHighScore, checkNewHighScore } from './Js/score.js';
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

// Game State
let currentQuestion = 0;
let score = 0;
let correctCount = 0;
let selectedAnswer = null;

async function init() {
  // Disable start button until questions are loaded
  startBtn.disabled = true;
  startBtn.textContent = "Loading...";

  const loaded = await loadQuestions();

  if (loaded) {
    startBtn.disabled = false;
    startBtn.textContent = "Start Quiz";

    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', restartQuiz);
    optionsContainer.addEventListener('click', handleOptionClick);

    // Initial High Score Display
    updateHighScoreDisplay(getHighScore());
  } else {
    startBtn.textContent = "Error Loading Questions";
  }
}

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  correctCount = 0;
  updateScoreDisplay(score);
  showScreen('quiz');
  loadQuestion();
}

function loadQuestion() {
  selectedAnswer = null;
  disableNextButton();

  const question = getQuestion(currentQuestion);
  if (!question) {
    endQuiz();
    return;
  }

  updateProgress(currentQuestion, getTotalQuestions());
  displayQuestion(question);

  startTimer(
    (timeLeft) => updateTimerDisplay(timeLeft),
    () => handleTimeUp()
  );
}

function handleOptionClick(e) {
  if (!e.target.classList.contains('option-btn')) return;
  if (e.target.disabled) return;

  const selectedIndex = parseInt(e.target.dataset.index);
  const question = getQuestion(currentQuestion);

  selectedAnswer = selectedIndex;
  stopTimer();
  disableOptions();
  markAnswer(selectedIndex, question.correct);

  if (selectedIndex === question.correct) {
    score++;
    correctCount++;
    updateScoreDisplay(score);
  }

  enableNextButton();
}

function handleTimeUp() {
  const question = getQuestion(currentQuestion);
  disableOptions();
  markAnswer(-1, question.correct);
  enableNextButton();
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= getTotalQuestions()) {
    endQuiz();
  } else {
    loadQuestion();
  }
}

function endQuiz() {
  stopTimer();

  const isNewHighScore = checkNewHighScore(score);
  const total = getTotalQuestions();
  const incorrectCount = total - correctCount;
  const currentHighScore = getHighScore();

  // Update start screen high score too
  updateHighScoreDisplay(currentHighScore);

  showScreen('result');
  showResult(score, total, correctCount, incorrectCount, isNewHighScore, currentHighScore);
}

function restartQuiz() {
  startQuiz();
}

init();
