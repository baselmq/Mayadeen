// Form elements
const formRegister = document.getElementById("form-register");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const confirmPass = document.getElementById("confirm-password");

// Field elements
const fullNameField = document.querySelector(".fullName-field");
const emailField = document.querySelector(".email-field");
const passField = document.querySelector(".pass-field");
const confirmPassField = document.querySelector(".confirm-pass-field");

// Eye icons for password fields
const passEyeIcon = document.getElementById("pass-eyeIcon");
const confirmPassEyeIcon = document.getElementById("confirm-pass-eyeIcon");

// Full Name Validation
function checkFullName() {
  const namePattern = /^[\p{L}]{3,}$/u;
  fullNameField.classList.toggle("invalid", !fullName.value.match(namePattern));
}

// Email Validation
function checkEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  emailField.classList.toggle("invalid", !email.value.match(emailPattern));
}

// Password Validation
function checkPassword() {
  const passPattern =
    /^(?=.*[A-Za-z0-9@$!%*#?&\u0600-\u06FF])[A-Za-z0-9@$!%*#?&\u0600-\u06FF]{8,}$/;
  passField.classList.toggle("invalid", !pass.value.match(passPattern));
}

// Confirm Password Validation
function checkConfirmPass() {
  const passwordsMatch =
    pass.value === confirmPass.value && confirmPass.value !== "";
  confirmPassField.classList.toggle("invalid", !passwordsMatch);
}

// Event listeners for keyup events
fullName.addEventListener("keyup", checkFullName);
email.addEventListener("keyup", checkEmail);
pass.addEventListener("keyup", checkPassword);
confirmPass.addEventListener("keyup", checkConfirmPass);

// Event listener for form submission
formRegister.addEventListener("submit", (e) => {
  e.preventDefault();
  checkFullName();
  checkEmail();
  checkPassword();
  checkConfirmPass();

  const allFieldsValid =
    !fullNameField.classList.contains("invalid") &&
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !confirmPassField.classList.contains("invalid");

  if (allFieldsValid) {
    window.location.href = "index.html";
    console.log("register");
  }
});

// Event listeners for password eye icons
passEyeIcon.addEventListener("click", function () {
  togglePasswordVisibility(pass, passEyeIcon);
});

confirmPassEyeIcon.addEventListener("click", function () {
  togglePasswordVisibility(confirmPass, confirmPassEyeIcon);
});

// Function to toggle password visibility
function togglePasswordVisibility(input, eyeIcon) {
  if (input.type === "password") {
    input.type = "text";
    eyeIcon.classList.remove("fi-sr-eye-crossed");
    eyeIcon.classList.add("fi-sr-eye");
    eyeIcon.style.color = "#ceb817";
  } else {
    input.type = "password";
    eyeIcon.classList.remove("fi-sr-eye");
    eyeIcon.classList.add("fi-sr-eye-crossed");
    eyeIcon.style.color = "#2e938e";
  }
}
