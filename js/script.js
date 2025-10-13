

const submitForm = document.getElementById("submit_form");


submitForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (submitForm.email.value !== submitForm.confirmEmail.value) {
    alert(`Emails do not match: ${submitForm.email.value} does not match ${submitForm.confirmEmail.value}`)
  }
});