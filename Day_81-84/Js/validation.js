// Validation Module

export function validateExpenseInput(description, amount, category) {
    if (!description || description.length === 0) {
        return { isValid: false, errorMessage: 'Please enter a description' };
    }

    if (description.length < 3) {
        return { isValid: false, errorMessage: 'Description must be at least 3 characters long' };
    }

    if (!amount || parseFloat(amount) <= 0) {
        return { isValid: false, errorMessage: 'Please enter a valid amount greater than 0' };
    }

    if (!category) {
        return { isValid: false, errorMessage: 'Please select a category' };
    }

    return { isValid: true, errorMessage: '' };
}
