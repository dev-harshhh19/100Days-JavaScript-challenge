// Questions Data Module

export const questions = [
  {
    question: "What does 'DOM' stand for in JavaScript?",
    options: [
      "Document Object Model",
      "Data Object Management",
      "Digital Ordinance Model",
      "Document Orientation Mode"
    ],
    correct: 0
  },
  {
    question: "Which method is used to add an element at the end of an array?",
    options: [
      "unshift()",
      "push()",
      "pop()",
      "shift()"
    ],
    correct: 1
  },
  {
    question: "What is the output of typeof null?",
    options: [
      "null",
      "undefined",
      "object",
      "boolean"
    ],
    correct: 2
  },
  {
    question: "Which ES6 feature is used for template strings?",
    options: [
      "Single quotes",
      "Double quotes",
      "Backticks",
      "Forward slashes"
    ],
    correct: 2
  },
  {
    question: "What does 'NaN' stand for?",
    options: [
      "Not a Null",
      "Not a Number",
      "Null and None",
      "Number and Null"
    ],
    correct: 1
  }
];

export function getQuestion(index) {
  return questions[index] || null;
}

export function getTotalQuestions() {
  return questions.length;
}
