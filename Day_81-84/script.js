// Import modules
import { validateExpenseInput } from './Js/validation.js';
import { createExpense, addExpense, getExpenses, deleteExpense, getTotalAmount, getCategoryTotals, getExpenseCount } from './Js/expenseManager.js';
import { showError, clearError, resetForm, renderExpenses, renderSummary } from './Js/ui.js';

// DOM Elements
const expenseForm = document.getElementById('expenseForm');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const expensesList = document.getElementById('expensesList');
const errorMessage = document.getElementById('errorMessage');
const summaryContainer = document.getElementById('summaryContainer');

function init() {
    expenseForm.addEventListener('submit', handleAddExpense);
    updateUI();
}

function updateUI() {
    renderExpenses(expensesList, getExpenses(), handleDeleteExpense);
    renderSummary(summaryContainer, getTotalAmount(), getExpenseCount(), getCategoryTotals());
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

    updateUI();
    resetForm(expenseForm, descriptionInput);
    clearError(errorMessage);
}

function handleDeleteExpense(id) {
    deleteExpense(id);
    updateUI();
}

init();
