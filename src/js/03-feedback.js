const LOCALSTORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");

updateOutput();

form.addEventListener("submit", saveMessage);

function saveMessage(evt) {
    evt.preventDefault();

    const user = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    }
    const userForm = JSON.stringify(user);
    console.log(JSON.parse(userForm));

  localStorage.setItem(LOCALSTORAGE_KEY, userForm);
  
  updateOutput();
  form.reset();
}

function updateOutput() {
    const output = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    console.log(output.email);

    form.elements.email.value = output.email || "";
    form.elements.message.value = output.message || "";  
}