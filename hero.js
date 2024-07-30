const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const number = document.getElementById('number');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

    const nameError = name.nextElementSibling;
    const emailError = email.nextElementSibling;
    const numberError = number.nextElementSibling;
    const passwordError = password.nextElementSibling;
    const password2Error = password2.nextElementSibling;

    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    numberError.textContent = '';
    passwordError.textContent = '';
    password2Error.textContent = '';

    // Check for errors
    if (name.value.trim() === '') {
        nameError.textContent = 'Please enter your full name.';
    }

    if (email.value.trim() === '') {
        emailError.textContent = 'Please enter your email address.';
    } else if (!email.value.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)) {
        emailError.textContent = 'Invalid email address.';
    }

    if (number.value.trim() === '') {
        numberError.textContent = 'Please enter your phone number.';
    } else if (!number.value.match(/[0-9]{10,}/)) {
        numberError.textContent = 'Invalid phone number.';
    }

    if (password.value.trim() === '') {
        passwordError.textContent = 'Please enter your password.';
    } else if (password.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
    }

    if (password2.value.trim() === '') {
        password2Error.textContent = 'Please confirm your password.';
    } else if (password2.value !== password.value) {
        password2Error.textContent = 'Passwords do not match.';
    }

    // If no errors, submit the form
    if (
        nameError.textContent === '' &&
        emailError.textContent === '' &&
        numberError.textContent === '' &&
        passwordError.textContent === '' &&
        password2Error.textContent === ''
    ) {
        // Submit the form
        form.submit(); // or use AJAX to submit the form data
        console.log('Form submitted successfully!');
    }
});