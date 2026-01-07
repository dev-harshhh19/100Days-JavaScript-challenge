// State Module - Day 88: Complex State Management

const state = {
  currentQuestion: 0,
  score: 0,
  correctCount: 0,
  selectedAnswer: null,
  isQuizActive: false,
  isLoading: true
};

const listeners = [];

export function getState() {
  return { ...state };
}

export function updateState(updates) {
  Object.assign(state, updates);
  notifyListeners();
}

export function resetQuizState() {
  state.currentQuestion = 0;
  state.score = 0;
  state.correctCount = 0;
  state.selectedAnswer = null;
  state.isQuizActive = true;
  notifyListeners();
}

export function incrementQuestion() {
  state.currentQuestion++;
  notifyListeners();
}

export function incrementScore() {
  state.score++;
  state.correctCount++;
  notifyListeners();
}

export function setSelectedAnswer(index) {
  state.selectedAnswer = index;
  notifyListeners();
}

export function setQuizActive(active) {
  state.isQuizActive = active;
  notifyListeners();
}

export function setLoading(loading) {
  state.isLoading = loading;
  notifyListeners();
}

export function subscribe(listener) {
  listeners.push(listener);
  return () => {
    const index = listeners.indexOf(listener);
    if (index > -1) listeners.splice(index, 1);
  };
}

function notifyListeners() {
  const currentState = getState();
  listeners.forEach(listener => listener(currentState));
}
