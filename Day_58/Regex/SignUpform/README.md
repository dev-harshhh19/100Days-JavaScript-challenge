# Sign Up Form with Regex Validation

A functional sign-up form with comprehensive input validation using regular expressions, featuring real-time error messages and a dark/light theme toggle.

## Features

- **Username Validation**: 3-15 characters, alphanumeric and underscores only
- **Email Validation**: Proper email format checking with regex
- **Password Validation**: 
  - Minimum 8 characters
  - Must contain uppercase letter
  - Must contain lowercase letter
  - Must contain at least one number
  - Must contain at least one special character (@$!%*?&)
- **Password Confirmation**: Ensures both passwords match
- **Individual Field Errors**: Shows specific error message below each input field
- **Real-time Feedback**: Clear error messages guide users on what to fix
- **Success Message**: Displays prominent success message when all validations pass
- **Dark/Light Theme Toggle**: Switch between light and dark modes with emoji button (☀️/🌙)
- **Responsive Design**: Clean, centered form layout that works on all devices
- **Input Labels**: Clear labels for all form fields

## Files

- `signUpForm.html` - HTML structure with semantic form elements
- `form.css` - Styling with CSS variables for theme support
- `formValidation.js` - Regex validation logic and DOM manipulation

## Validation Rules

### Username
```
Pattern: /^[a-zA-Z0-9_]{3,15}$/
- 3-15 characters long
- Contains only letters, numbers, and underscores
```

### Email
```
Pattern: /^[\s@]+@[\s@]+\.[\s@]+$/
- Must have format: username@domain.extension
- Valid email address required
```

### Password
```
Pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
- Minimum 8 characters
- At least one lowercase letter
- At least one uppercase letter
- At least one digit (0-9)
- At least one special character (@$!%*?&)
```

### Confirm Password
```
- Must exactly match the password field
```
