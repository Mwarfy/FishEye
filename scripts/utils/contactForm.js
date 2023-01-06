const form = document.getElementById("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const message = document.getElementById("message");
const modal = document.getElementById("contact_modal");
const main = document.getElementById("main");
const body = document.getElementById("body");
const header = document.getElementById("header");
const close_modal = document.querySelector(".modal_close");

function displayModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}
function checkFirstName() {
  const regFirstName = /^[a-zA-Z]+([- ])*[a-zA-Z]+$/;
  if (firstName.value.trim() == "" || !firstName.value.match(regFirstName)) {
    firstName.parentElement.setAttribute("data-error-visible", "true");
    firstName.style.border = "2px solid red";
    return false;
  } else {
    firstName.parentElement.setAttribute("data-error-visible", "false");
    firstName.style.border = "2px solid green";
    return true;
  }
}
function checkLastName() {
  const regLastName = /^[a-zA-Z]+([- ])*[a-zA-Z]+$/;
  if (lastName.value.trim() == "" || !lastName.value.match(regLastName)) {
    lastName.parentElement.setAttribute("data-error-visible", "true");
    lastName.style.border = "2px solid red";
    return false;
  } else {
    lastName.parentElement.setAttribute("data-error-visible", "false");
    lastName.style.border = "2px solid green";
    return true;
  }
}

function checkEmail() {
  const regEmailName = /^[a-zA-Z]+[@][a-z]+[.][a-z]{2,5}$/;
  if (email.value.trim() == "" || !email.value.match(regEmailName)) {
    email.parentElement.setAttribute("data-error-visible", "true");
    email.style.border = "2px solid red";
    return false;
  } else {
    email.parentElement.setAttribute("data-error-visible", "false");
    email.style.border = "2px solid green";
    return true;
  }
}

function checkMessage() {
  const regMessage = /^[a-zA-Z]+([- ])*[a-zA-Z]+$/;
  if (message.value.trim() == "" || !message.value.match(regMessage)) {
    message.parentElement.setAttribute("data-error-visible", "true");
    message.style.border = "2px solid red";
    return false;
  } else {
    message.parentElement.setAttribute("data-error-visible", "false");
    message.style.border = "2px solid green";
    return true;
  }
}

function validate() {
  if (checkFirstName() && checkLastName() && checkMessage() && checkEmail()) {
    return true;
  } else {
    return false;
  }
}
function errorValidation() {
  checkFirstName();
  checkLastName();
  checkEmail();
  checkMessage();
}
function consoleContent() {
  console.log("Prénom : " + firstName.value);
  console.log("Nom : " + lastName.value);
  console.log("Email : " + email.value);
  console.log("Message : " + message.value);
}

firstName.addEventListener("change", checkFirstName);
lastName.addEventListener("change", checkLastName);
email.addEventListener("change", checkEmail);
message.addEventListener("change", checkMessage);
close_modal.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    closeModal();
  }
});
body.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    closeModal();
  }
});
firstName.setAttribute("tabindex", "1");
lastName.setAttribute("tabindex", "1");
email.setAttribute("tabindex", "1");
message.setAttribute("tabindex", "1");
close_modal.setAttribute("tabindex", "1");

const contact_button = document.querySelector(".contact_button");
contact_button.setAttribute("tabindex", "2");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validate() === true) {
    consoleContent();
    closeModal();
    form.reset();
  } else {
    errorValidation();
  }
});
