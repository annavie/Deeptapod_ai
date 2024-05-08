function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = "none";
}

function showPopup(popupId) {
    const popup = document.getElementById(popupId);
    const registrationForm = document.querySelector(".reg-cont");
    registrationForm.style.display = "none";
    popup.style.display = "block";
}

async function register(userDetails) {
    console.log("Registering user:", userDetails);
    return { success: true };
}

function showEmailVerificationPopup() {
    closePopup("success-popup");
    const emailVerificationPopup = document.getElementById("email-verification-popup");
    emailVerificationPopup.style.display = "block";
}

const form = document.getElementById("registration-form");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    if (password.value === confirmPassword.value && username.value && email.value && password.value && confirmPassword.value) {
        const response = await register({
            username: username.value,
            email: email.value,
            password: password.value,
        });
        if (response.success) {
            showPopup("success-popup");
        } else {
            console.log(response.error);
        }
    } else {
        console.log("Please fill in all fields and ensure passwords match.");
    }
});

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("close-popup")) {
        const popup = event.target.closest(".popup");
        popup.style.display = "none";
    } else if (event.target.classList.contains("popup-btn")) {
        showEmailVerificationPopup();
    }
});
