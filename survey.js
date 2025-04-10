document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('surveyForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateForm()) {
            this.submit();
        }
    });

    document.getElementById('name').addEventListener('input', validateName);
    document.getElementById('email').addEventListener('input', validateEmail);
});

function validateForm() {
    let isValid = true;
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    if (!validateName()) isValid = false;
    if (!validateEmail()) isValid = false;

    const age = document.getElementById('age').value;
    if (age && (age < 1 || age > 60)) {
        document.getElementById('ageError').textContent = "Age must be between 1 and 60";
        isValid = false;
    }

    if (!document.getElementById('satisfaction').value) {
        document.getElementById('satisfactionError').textContent = "Please select a satisfaction level";
        isValid = false;
    }

    if (!document.querySelector('input[name="recommend"]:checked')) {
        document.getElementById('recommendError').textContent = "Please select a recommendation option";
        isValid = false;
    }

    if (document.querySelectorAll('input[name="improvements[]"]:checked').length === 0) {
        document.getElementById('improvementsError').textContent = "Please select at least one improvement area";
        isValid = false;
    }

    const comments = document.getElementById('comments').value;
    if (comments.length > 500) {
        document.getElementById('commentsError').textContent = "Comments should not exceed 500 characters";
        isValid = false;
    }

    return isValid;
}

function validateName() {
    const name = document.getElementById('name').value.trim();
    const errorElement = document.getElementById('nameError');
    if (!name) {
        errorElement.textContent = "Name is required";
        return false;
    }
    if (/\d/.test(name)) {
        errorElement.textContent = "Name should not contain numbers";
        return false;
    }
    errorElement.textContent = '';
    return true;
}

function validateEmail() {
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorElement = document.getElementById('emailError');
    if (!email) {
        errorElement.textContent = "Email is required";
        return false;
    }
    if (!emailPattern.test(email)) {
        errorElement.textContent = "Enter a valid email address";
        return false;
    }
    errorElement.textContent = '';
    return true;
}
