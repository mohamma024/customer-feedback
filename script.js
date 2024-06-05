document.addEventListener('DOMContentLoaded', () => {
    // Registration form validation
    const registerForm = document.querySelector('form[action="register.php"]');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            const password = registerForm.querySelector('#password').value;
            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                e.preventDefault();
            }
        });
    }

    // Login form validation
    const loginForm = document.querySelector('form[action="login.php"]');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            const password = loginForm.querySelector('#password').value;
            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                e.preventDefault();
            }
        });
    }

    // Survey form validation
    const surveyForm = document.querySelector('form[action="create_survey.php"]');
    if (surveyForm) {
        surveyForm.addEventListener('submit', (e) => {
            const title = surveyForm.querySelector('#title').value;
            const description = surveyForm.querySelector('#description').value;
            if (title === '' || description === '') {
                alert('All fields are required.');
                e.preventDefault();
            }
        });
    }
});
