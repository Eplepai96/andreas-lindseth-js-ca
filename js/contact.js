const form = document.querySelector("form");

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const address = document.querySelector("#address");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const subjectError = document.querySelector("#subject-error");
const addressError = document.querySelector("#address-error");

function validateForm() {
    event.preventDefault()

    if (validateLength(name.value, 0)) {
        nameError.style.display = "none"
    } else {
        nameError.style.display = "block"
    }

    if (validateLength(subject.value, 10)) {
        subjectError.style.display = "none"
    } else {
        subjectError.style.display = "block"
    }

    if (validateLength(address.value, 25)) {
        addressError.style.display = "none"
    } else {
        addressError.style.display = "block"
    }

    if (validateEmail(email.value) && validateLength(email.value, 0)) {
        emailError.style.display = "none"
    } else {
        emailError.style.display = "block"
    }

}

form.addEventListener("submit", validateForm)

function validateLength(input, len) {
    if (input.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternmatches = regEx.test(email);
    return patternmatches;
}
