const email = document.getElementById("email");
const pass = document.getElementById("password");
const formLogin = document.getElementById("form-login");
const passField = document.querySelector(".pass-field");
const emailField = document.querySelector(".email-field");
const eyeIcon = document.getElementById("eyeIcon");

// Email Validation
function checkEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value.match(emailPattern)) {
    emailField.classList.remove("invalid");
  } else {
    emailField.classList.add("invalid");
  }
}
// Password Validation
function checkPass() {
  if (pass.value == "") {
    return passField.classList.add("invalid");
  }
  passField.classList.remove("invalid");
}

// Calling Function on Form Submit
formLogin.addEventListener("submit", (e) => {
  e.preventDefault(); //preventing form submitting
  checkEmail();
  checkPass();
  //calling function on key up
  email.addEventListener("keyup", checkEmail);
  pass.addEventListener("keyup", checkPass);

  if (
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid")
  ) {
    window.location.href = "../pages/home.html";
    console.log("login");
  }
});

// show and hidden password
eyeIcon.addEventListener("click", function () {
  if (pass.type == "password") {
    pass.type = "text";
    eyeIcon.classList.remove("fi-sr-eye-crossed");
    eyeIcon.classList.add("fi-sr-eye");
    eyeIcon.style.color = "#ceb817";
  } else {
    pass.type = "password";
    eyeIcon.classList.remove("fi-sr-eye");
    eyeIcon.classList.add("fi-sr-eye-crossed");
    eyeIcon.style.color = "#2e938e";
  }
});
