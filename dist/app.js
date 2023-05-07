const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const errorElement = document.getElementById('error');

//stops page from submitting when there are errors
form.addEventListener('submit', (e) => {
  let messages = [];
  if (fname.value === '' || fname.value == null) {
    messages.push('Name is required');
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
  }
});
