// Expense Manager Module

let expenses = [];

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
}

export function getExpenses() {
    return expenses;
}

export function deleteExpense(id) {
    expenses = expenses.filter(expense => expense.id !== id);
}

export function clearAllExpenses() {
    expenses = [];
}
