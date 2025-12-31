// Import modules
import { validateExpenseInput } from './Js/validation.js';
import { createExpense, addExpense, getExpenses } from './Js/expenseManager.js';
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
    renderExpenses(expensesList, getExpenses());
}
function handleAddExpense(e) {
    e.preventDefault();

    const description = descriptionInput.value.trim();
    const amount = amountInput.value.trim();
    const category = categoryInput.value;

    // Validate input
    const validation = validateExpenseInput(description, amount, category);

    if (!validation.isValid) {
        showError(errorMessage, validation.errorMessage);
        return;
    }

    // Create and add expense
    const expense = createExpense(description, amount, category);
    addExpense(expense);

    // Update UI
    renderExpenses(expensesList, getExpenses());
    resetForm(expenseForm, descriptionInput);
    clearError(errorMessage);
}

init();
