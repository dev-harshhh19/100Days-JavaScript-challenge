// Questions Data Module

let questions = [];

export async function loadQuestions() {
  try {
    const response = await fetch('./Js/questions.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    questions = await response.json();
    return true;
  } catch (error) {
    console.error('Failed to load questions:', error);
    return false;
  }
}

export function getQuestion(index) {
  return questions[index] || null;
}

export function getTotalQuestions() {
  return questions.length;
}

export function getQuestionsData() {
  return questions;
}
