$(document).ready(function() {
    const form = $('#form');
    const username = $('#username');
    const email = $('#email');
    const password = $('#password');
    const password2 = $('#password2');

    form.on('submit', function(e) {
        e.preventDefault(); // Prevent form submission for now

        // Validate each field
        let usernameValidated = validateUsername();
        let emailValidated = validateEmail();
        let passwordValidated = validatePassword();
        let password2Validated = validatePassword2();

        if (usernameValidated && emailValidated && passwordValidated && password2Validated) {
            // If all fields are valid, you can proceed with form submission
            form.submit();
        }
    });

    function setError(element, message) {
        const inputControl = element.parent();
        const errorDisplay = inputControl.find('.error');

        errorDisplay.text(message);
        inputControl.addClass('error').removeClass('success');
    }

    function setSuccess(element) {
        const inputControl = element.parent();
        const errorDisplay = inputControl.find('.error');

        errorDisplay.text('');
        inputControl.addClass('success').removeClass('error');
    }

    function isValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function validateUsername() {
        const usernameValue = username.val().trim();
        if (usernameValue === '') {
            setError(username, 'Username is required');
            return false;
        } else if (usernameValue.length < 5) {
            setError(username, 'Username must be at least 5 characters');
            return false;
        } else {
            setSuccess(username);
            return true;
        }
    }

    function validateEmail() {
        const emailValue = email.val().trim();
        if (emailValue === '') {
            setError(email, 'Email is required');
            return false;
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Provide a valid email address');
            return false;
        } else {
            setSuccess(email);
            return true;
        }
    }

    function validatePassword() {
        const passwordValue = password.val().trim();
        if (passwordValue === '') {
            setError(password, 'Password is required');
            return false;
        } else if (passwordValue.length < 8) {
            setError(password, 'Password must be at least 8 characters');
            return false;
        } else {
            setSuccess(password);
            return true;
        }
    }

    function validatePassword2() {
        const passwordValue = password.val().trim();
        const password2Value = password2.val().trim();
        if (password2Value === '') {
            setError(password2, 'Please confirm your password');
            return false;
        } else if (password2Value !== passwordValue) {
            setError(password2, 'Passwords do not match');
            return false;
        } else {
            setSuccess(password2);
            return true;
        }
    }

    // Event listeners for real-time validation
    username.on('input', validateUsername);
    email.on('input', validateEmail);
    password.on('input', validatePassword);
    password2.on('input', validatePassword2);
});
