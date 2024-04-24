document.getElementById('password-change-form').addEventListener('submit', function(event) {
    var newPassword = document.getElementById('new-password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if (newPassword !== confirmPassword) {
        alert('New password and Confirm password must match!');
        event.preventDefault(); 
    }
});
    document.getElementById('new-password').addEventListener('keyup', function() {
    validatePasswordMatch();
});

document.getElementById('confirm-password').addEventListener('keyup', function() {
    validatePasswordMatch();
});

function validatePasswordMatch() {
    var newPassword = document.getElementById('new-password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if (newPassword !== confirmPassword) {
        document.getElementById('confirm-password').setCustomValidity('Passwords do not match');
    } else {
        document.getElementById('confirm-password').setCustomValidity('');
    }
}