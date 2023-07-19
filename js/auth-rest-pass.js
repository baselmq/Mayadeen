const formRestPassword = document.getElementById("form-rest-password");
const email = document.getElementById("email");
const emailField = document.querySelector(".email-field");

// Email Validation
function checkEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value.match(emailPattern)) {
    emailField.classList.remove("invalid");
  } else {
    emailField.classList.add("invalid");
  }
}

// Calling Function on Form Submit
formRestPassword.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmail();
  //calling function on key up
  email.addEventListener("keyup", checkEmail);

  if (!emailField.classList.contains("invalid")) {
    window.location.href = "otp.html";
    console.log("rest");
  }
});
