// Expense Manager Module

const STORAGE_KEY = 'expenses';

let expenses = loadFromStorage();

function loadFromStorage() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

function saveToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
}

export function createExpense(description, amount, category) {
    return {
        id: Date.now(),
        description: description,
        amount: parseFloat(amount),
        category: category,
        date: new Date().toLocaleDateString()
    };
}

export function addExpense(expense) {
    expenses.push(expense);
    saveToStorage();
}

export function getExpenses() {
    return expenses;
}

export function deleteExpense(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    saveToStorage();
}

export function clearAllExpenses() {
    expenses = [];
    saveToStorage();
}
