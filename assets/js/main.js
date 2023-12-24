/**
 * Adds event listener to the DOMContentLoaded event and handles form submission.
 * Validates the email input and displays a warning message if the email is invalid.
 */
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const formGroup = document.querySelector(".form__group--email");
  const email = document.querySelector("#email");
  let warning = document.querySelector("#warning");

  if (!warning) {
    warning = document.createElement("p");
    warning.id = "warning";
    warningEm = document.createElement("em");
    warningEm.textContent = "Please provide a valid email";
    warning.appendChild(warningEm);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!email.validity.valid) {
      email.classList.add("form__input--invalid");
      formGroup.insertAdjacentElement("beforeend", warning);
    } else {
      email.classList.remove("form__input--invalid");
      warning.remove();
    }
  });
});
