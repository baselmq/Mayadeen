const inputs = document.querySelectorAll(".input-otp");
const formOtp = document.getElementById("form-otp");
const btnOtp = document.getElementById("btn-otp");
const otpField = document.querySelector(".otp-field");

// Iterate over all inputs
inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input;
    const nextInput = input.nextElementSibling;
    const prevInput = input.previousElementSibling;

    // If the value has more than one character, clear it
    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }

    // If the next input is disabled and the current value is not empty,
    // enable the next input and focus on it
    if (
      nextInput &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    // If the backspace key is pressed
    if (e.key === "Backspace") {
      // Iterate over all inputs again
      inputs.forEach((input, index2) => {
        // If the index1 of the current input is less than or equal to the index2 of the input in the outer loop
        // and the previous element exists, set the disabled attribute on the input and focus on the previous element
        if (index1 <= index2 && prevInput) {
          input.setAttribute("disabled", true);
          input.value = "";
          prevInput.focus();
        }
      });
    }

    // If the fourth input (which index number is 3) is not empty and does not have the disabled attribute,
    // add the active class to the button; otherwise, remove the active class
    if (!inputs[5].disabled && inputs[5].value !== "") {
      btnOtp.classList.add("active");
      return;
    }
    btnOtp.classList.remove("active");
  });
});

// Focus the first input (index 0) on window load
window.addEventListener("load", () => inputs[0].focus());

formOtp.addEventListener("submit", function (e) {
  e.preventDefault();
  const enteredOTP = Array.from(inputs)
    .map((input) => input.value)
    .join("");
  const expectedOTP = "000000"; // Change this to your desired OTP

  if (enteredOTP === expectedOTP) {
    // OTP is correct, navigate to the main page
    otpField.classList.remove("invalid");
    window.location.href = "new_pass.html";
  } else {
    // OTP is incorrect, display an error message
    otpField.classList.add("invalid");
  }
});
