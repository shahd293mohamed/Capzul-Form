document.getElementById('create-account').addEventListener('click', function () {
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var dob = document.getElementById('dob').value;
    let password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    let agreeTerms = document.getElementById('agree-terms').checked;

    if (firstName === '' || lastName === '' || email === '' || dob === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all fields.');
    } else if (password !== confirmPassword) {
        alert('Passwords do not match.');
    } else if (!agreeTerms) {
        alert('You must agree to the terms and privacy policy.');
    } else {
        alert('Account created successfully!');
    }
});

document.getElementById('google-sign-in').addEventListener('click', function () {
    alert('Google Sign-In clicked!');
});
