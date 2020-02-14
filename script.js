const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// functions
// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    let small = formControl.querySelector('small');
    small.innerText = message;
}

// Check Email is valid or not 
function isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// Show input Success Message 
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
// Check Password Match 
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match, Please try again! ')
    }
}
// Event Listners 
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(username.value);
    console.log('submit');
    if (username.value === '') {
        showError(username, 'Username Is Required')
    } else { showSuccess(username) }
    if (email.value === '') {
        showError(email, 'Email Is Required')
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email is not valid')
    } else { showSuccess(email) }
    if (password.value === '') {
        showError(password, 'Password Is Required')
    } else { showSuccess(password) }
    if (password2.value === '') {
        showError(password2, 'Password2 Is Required')
    } else { showSuccess(password2) }
    checkPasswordMatch(password, password2)
})
