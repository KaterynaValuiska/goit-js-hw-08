import throttle from 'lodash.throttle'; 

const LOCALSTORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");

updateOutput();
form.addEventListener("input", throttle(onInputForm, 500));
form.addEventListener("submit", onSubmitForm);


function onInputForm(evt) {
    const user = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    }
    const userForm = JSON.stringify(user);
  localStorage.setItem(LOCALSTORAGE_KEY, userForm);
}

function onSubmitForm() {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY); 
}

function updateOutput() {
    if (localStorage.getItem(LOCALSTORAGE_KEY) === null) {
        return;
    }
    const output = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    form.elements.email.value = output.email || "";
    form.elements.message.value = output.message || "";
}


