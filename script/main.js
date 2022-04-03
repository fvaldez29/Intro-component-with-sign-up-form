const form = document.getElementById('form');
const fistName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const emailValue = document.getElementById('email');
const passwordValue = document.getElementById('password');

form.addEventListener('submit', e => {
  e.preventDefault();

  var firstName = fname.value.trim();
  var lastName = lname.value.trim();
  var emailValue = email.value.trim();
  var passwordValue = password.value.trim();

  if(firstName === ''){
    errorFunc(fname, 'First Name cannot be empy');
  }
  else{
    successFunc(fname);
  }

  if(lastName === ''){
    errorFunc(lname, 'Last Name cannot be empy');
  }
  else{
    successFunc(lname);
  }

  if(emailValue === ''){
    errorFunc(email, 'Email Name cannot be empy');
  }
  else{
    successFunc(email);
  }

  if(passwordValue === ''){
    errorFunc(password, 'Password Name cannot be empy');
  }
  else{
    successFunc(password);
  }
})

function errorFunc(req, message){
  const formControl = req.parentElement;
  const span = formControl.querySelector('span');
  span.innerText = message;
  req.className += 'error';
  span.className += 'error-text';

}
function successFunc(req){
  req.className = success;
}