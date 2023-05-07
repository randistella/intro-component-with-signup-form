const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // get the values from the inputs
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (fnameValue === '') {
    // show error
    // add error class
    setErrorFor(fname, 'First Name cannot be empty');
  } else {
    // add success class
    setSuccessFor(fname);
  }

  if (lnameValue === '') {
    setErrorFor(lname, 'Last Name cannot be empty');
  } else {
    setSuccessFor(lname);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be empty');
  } else {
    setSuccessFor(password);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; //form-control
  const small = formControl.querySelector('small');

  //add error message inside of small
  small.innerText = message;

  //add error class
  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//this is wrong
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
