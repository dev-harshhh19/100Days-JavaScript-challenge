// UI Module

export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function showError(errorElement, message) {
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

export function clearError(errorElement) {
    errorElement.textContent = '';
    errorElement.classList.remove('show');
}

export function resetForm(form, focusElement) {
    form.reset();
    focusElement.focus();
}

export function renderExpenses(listElement, expenses, onDelete) {
    if (expenses.length === 0) {
        listElement.innerHTML = '<p class="empty-state">No expenses added yet. Add one to get started.</p>';
        return;
    }

    listElement.innerHTML = expenses.map(expense => `
        <div class="expense-item" data-id="${expense.id}">
            <div class="expense-details">
                <div class="expense-description">${expense.description}</div>
                <div>
                    <span class="expense-category">${capitalize(expense.category)}</span>
                </div>
                <div class="expense-info">${expense.date}</div>
            </div>
            <div class="expense-actions">
                <div class="expense-amount">$${expense.amount.toFixed(2)}</div>
                <button class="btn-delete" data-id="${expense.id}">Delete</button>
            </div>
        </div>
    `).join('');

    // Add delete event listeners
    if (onDelete) {
        listElement.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                onDelete(id);
            });
        });
    }
}
