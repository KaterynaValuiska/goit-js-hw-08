const e=document.querySelector(".feedback-form");function t(){const t=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(t.email),e.elements.email.value=t.email||"",e.elements.message.value=t.message||""}t(),e.addEventListener("submit",(function(a){a.preventDefault();const s={email:e.elements.email.value,message:e.elements.message.value},l=JSON.stringify(s);console.log(JSON.parse(l)),localStorage.setItem("feedback-form-state",l),t(),e.reset()}));
//# sourceMappingURL=03-feedback.ec5a3761.js.map