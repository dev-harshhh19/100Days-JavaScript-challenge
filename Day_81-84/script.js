// Import modules
import { validateExpenseInput } from './Js/validation.js';
import { createExpense, addExpense, getExpenses, deleteExpense } from './Js/expenseManager.js';
import { showError, clearError, resetForm, renderExpenses } from './Js/ui.js';

// DOM Elements
const expenseForm = document.getElementById('expenseForm');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const expensesList = document.getElementById('expensesList');
const errorMessage = document.getElementById('errorMessage');

function init() {
    expenseForm.addEventListener('submit', handleAddExpense);
    renderExpensesList();
}

function renderExpensesList() {
    renderExpenses(expensesList, getExpenses(), handleDeleteExpense);
}

function handleAddExpense(e) {
    e.preventDefault();

    const description = descriptionInput.value.trim();
    const amount = amountInput.value.trim();
    const category = categoryInput.value;

    const validation = validateExpenseInput(description, amount, category);

    if (!validation.isValid) {
        showError(errorMessage, validation.errorMessage);
        return;
    }

    const expense = createExpense(description, amount, category);
    addExpense(expense);

    renderExpensesList();
    resetForm(expenseForm, descriptionInput);
    clearError(errorMessage);
}

function handleDeleteExpense(id) {
    deleteExpense(id);
    renderExpensesList();
}

init();
