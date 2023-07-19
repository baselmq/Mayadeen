// Form elements
const formNewPassword = document.getElementById("form-new-pass");
const pass = document.getElementById("password");
const confirmPass = document.getElementById("confirm-password");

// Field elements
const passField = document.querySelector(".pass-field");
const confirmPassField = document.querySelector(".confirm-pass-field");

// Eye icons for password fields
const passEyeIcon = document.getElementById("pass-eyeIcon");
const confirmPassEyeIcon = document.getElementById("confirm-pass-eyeIcon");

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
pass.addEventListener("keyup", checkPassword);
confirmPass.addEventListener("keyup", checkConfirmPass);

// Event listener for form submission
formNewPassword.addEventListener("submit", (e) => {
  e.preventDefault();
  checkPassword();
  checkConfirmPass();

  const allFieldsValid =
    !passField.classList.contains("invalid") &&
    !confirmPassField.classList.contains("invalid");

  if (allFieldsValid) {
    console.log("rest");
    // Perform the registration logic or redirect to another page
    window.location.href = "../pages/home.html";
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
