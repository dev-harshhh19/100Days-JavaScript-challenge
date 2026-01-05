// Main Script - Day 86: Score Tracking

import { getQuestion, getTotalQuestions } from './Js/questions.js';
import { startTimer, stopTimer } from './Js/timer.js';
import {
  updateTimerDisplay,
  updateScoreDisplay,
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

function init() {
  startBtn.addEventListener('click', startQuiz);
  nextBtn.addEventListener('click', nextQuestion);
  restartBtn.addEventListener('click', restartQuiz);
  optionsContainer.addEventListener('click', handleOptionClick);
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
  showScreen('result');
  const total = getTotalQuestions();
  const incorrectCount = total - correctCount;
  showResult(score, total, correctCount, incorrectCount);
}

function restartQuiz() {
  startQuiz();
}

init();
