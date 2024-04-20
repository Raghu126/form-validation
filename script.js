function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let nameError = document.getElementById('nameError');
    let emailError = document.getElementById('emailError');

    // Reset error messages
    nameError.textContent = "";
    emailError.textContent = "";

    let isValid = true;

    // Validate name
    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    // Validate email
    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Please enter a valid email address";
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    // Basic email validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}