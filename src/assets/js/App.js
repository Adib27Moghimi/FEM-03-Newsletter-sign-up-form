import SignupView from "../../components/SignupView.js";
import SuccessView from "../../components/SuccessView.js";

//// ! Selections
const body = document.querySelector("body");

//// ! Functions
function invalidEmailUI(labelError, emailInput) {
  labelError.textContent = "Please inter a valid email!";
  emailInput.classList.add("input-error");
}

function emailCorrectFormat(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

//// ! States
let state = "signup";
let email;

function createView() {
  if (state === "signup") {
    body.innerHTML = "";
    body.insertAdjacentHTML("afterbegin", SignupView());

    const form = document.querySelector(".form");
    const emailInput = document.querySelector(".email-input");
    const labelError = document.querySelector(".label-error");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!emailCorrectFormat(emailInput.value)) {
        invalidEmailUI(labelError, emailInput);
        return;
      }

      state = "success";
      email = emailInput.value;
      createView();
    });
  }

  if (state === "success") {
    body.innerHTML = "";
    body.insertAdjacentHTML("afterbegin", SuccessView());

    const confirmationEmail = document.querySelector(".confirmation-email");
    const DismissButton = document.querySelector(".Dismiss-button");
    confirmationEmail.textContent = email;

    DismissButton.addEventListener("click", function (e) {
      e.preventDefault();
      state = "signup";
      createView();
    });
  }
}
//// ! Initialize View
createView();
