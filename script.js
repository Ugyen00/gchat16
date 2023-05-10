let loginForm = document.querySelector('.login-wrap');
let signupForm = document.querySelector('.signup-wrap');
let title = document.querySelector('title');

let signupToggleBtn = document.querySelector('#toggle-signup');
let loginToggleBtn = document.querySelector('#toggle-login');

signupToggleBtn.onclick = () => {
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
    title.textContent = 'Signup form';
}

loginToggleBtn.onclick = () => {
    signupForm.classList.remove('active');
    loginForm.classList.add('active');
    title.textContent = 'Login form';
}

//login vaild
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    if (isFormValid()) {
        window.location.replace('/index/home.html');
    }
});

function isFormValid() {
    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();

    if (email === '') {
        alert('Please enter an email.');
        return false;
    }

    if (password === '') {
        alert('Please enter a password.');
        return false;
    }

    return true; 
}

//signup vaild
let nameInput = document.getElementById('name');
let semailInput = document.getElementById('semail');
let spasswordInput = document.getElementById('spassword');
let sconfirmPasswordInput = document.getElementById('confirm-password');

signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    if (isSignupFormValid()) {
        window.location.replace('page/succ.html');
    }
});

function isSignupFormValid() {
    let name = nameInput.value.trim();
    let email = semailInput.value.trim();
    let password = spasswordInput.value.trim();
    let confirmPassword = sconfirmPasswordInput.value.trim();

    if (name === '') {
        alert('Please enter your name.');
        return false;
    }

    if (email === '') {
        alert('Please enter an email.');
        return false;
    }

    if (password === '') {
        alert('Please enter a password.');
        return false;
    }

    if (confirmPassword === '') {
        alert('Please confirm your password.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

   return true; 
}
