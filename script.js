const form = document.querySelector('#appointment-form');
const message = document.querySelector('.form-message');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = 'Thank you — the clinic team will be in touch within one business day.';
  form.reset();
});
