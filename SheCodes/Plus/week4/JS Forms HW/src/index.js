// Challenge 1
function buttonClickMe(event) {
  event.preventDefault();
  alert("Hooray!");
}

let clickMe = document.querySelector("#special-button");
clickMe.addEventListener("click", buttonClickMe);

// Challenge 2
function buttonSubmit(event) {
  event.preventDefault();
  let inputValue = document.querySelector("#password-input");
  if (inputValue.value) {
    alert(`Your password is "${inputValue.value}"`);
  } else {
    alert("Still waiting for your password");
  }
}

let signUp = document.querySelector("#password-form");
signUp.addEventListener("submit", buttonSubmit);

// Challenge 3
function emailUsername(event) {
  event.preventDefault();
  let emailAlert = document.querySelector("#email-input");
  let userNameAlert = document.querySelector("#username-input");
  alert(`Your email addresse is ${emailAlert.value}.`);
  alert(`Your user name is ${userNameAlert.value}.`);
}

let signUpForm = document.querySelector("#signup-form");
signUpForm.addEventListener("submit", emailUsername);
