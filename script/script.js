console.log("connected");

//cache each form elements
const form = document.getElementById("registration");
console.log(form);

uName = form.elements["username"];
const email = form.elements["email"];
const password = form.elements["password"];
const confirmPassword = form.elements["passwordCheck"];
const checkBox = form.elements["terms"];

console.log(uName);
console.log(email);
console.log(password);
console.log(confirmPassword);
console.log(checkBox);

form.addEventListener("submit", validate);

//name char validation function

function validate(evt) {
  const name = uName.value;
  evt.preventDefault();
  //console.log(name);
  if (name !== "" && hasTwoUniqueChars(name)) {
    console.log("you entered", name);
  } else {
    console.log("enter unique characters");
    name.focus;
  } //else if (name == "") {
  //     // const charSet = new Set(name);
  //     // return charSet.size >= 2;
  //     console.log("username is required");
  //     uName.focus();
  //   }
  validateEmail(email);
  const emailVal = email.value;
  if (emailVal.includes("@example.com")) {
    console.log("email cannot include example.com");
  } else if (emailVal !== "") {
    console.log("good email");
  }
  //password invocation
  passwordValidation(password);
  confirmPass();
  //checkbox invocation
  termsValidation();
  //var dump

  //   let userName = document.getElementById("user").value;
  //   let email1 = document.getElementById("emailID").value;
  //   let password1 = document.getElementById("passwordId").value;
  //   // let terms = document.getElementById("termsId").value;
  const lowerName = name.toLowerCase();
  const lowerEmail = emailVal.toLowerCase();

  localStorage.setItem("user", lowerName);
  localStorage.setItem("emailadd", lowerEmail);
  localStorage.setItem("pass", password);

  const retUsername = localStorage.getItem("user");
  const retPassword = localStorage.getItem("pass");
  console.log(retUsername);
  console.log(retPassword);

  form.reset();
}

//username characters validation
function hasTwoUniqueChars(uName) {
  let newLength = uName.length;
  console.log(newLength);
  if (newLength >= 4) {
    const charSet = new Set(uName);
    return charSet.size >= 2;
  } else {
    console.log("enter minimum of 4 characters");
  }
}
//email validation
function validateEmail(email) {
  const checkMail = email;
  return console.log(checkMail);
}

//password validation
function passwordValidation(password) {
  const passwordVal = password.value;
  console.log(passwordVal);
  const hasUpperCase = /[A-Z]/.test(passwordVal);
  const hasLowerCase = /[a-z]/.test(passwordVal);
  //const hasUsername = [uName].test(passwordVal);
  const runThis = /[^A-Za-z0-9]/.test(passwordVal);

  if (passwordVal == "") {
    console.log("password cannot be empty");
  } else if (passwordVal.length < 12) {
    console.log("password cannot be less than 12 characters");
  } else if (passwordVal == "password") {
    console.log("password cannot contain thw word password");
  } else if (!runThis) {
    console.log(
      "Password must contain at least one number, uppercase letter, lowercase letter and special character"
    );
  } else {
    console.log("Password matches specification");
  }
}

//confirm password fuction
function confirmPass() {
  const comPassword = confirmPassword.value;
  const passwordVal = password.value;

  if (comPassword == passwordVal) {
    console.log("password matches");
  } else {
    console.log("password doesnt match");
  }
}

//terms and condition validation
function termsValidation() {
  const termsVal = checkBox.value;
  console.log(termsVal);
  if (checkBox.checked) {
    console.log("you're good to go");
  } else {
    console.log("terms and condition must be accepted.");
    alert("terms and condition must be accepted to proceed");
  }
}

//local items

let itemCount = localStorage.length;
for (j = 0; j < itemCount.itemCount; j++) {
  console.log("Number of items in local storage:", itemCount[j]);
}

//login section

const form2 = document.getElementById("login");
console.log(form2);

const logName = form.elements["username"];
const logPass = form.elements["password"];

console.log(logName);
console.log(logPass);

form2.addEventListener("submit", validateLog);

function validateLog(evt) {
  evt.preventDefault();
  const logNameVal = logName.value;
  const logPassVal = logPass.value;

  let retUsername = localStorage.getItem("user");
  let retPassword = localStorage.getItem("pass");
  console.log(retPassword);
  console.log(retUsername);

  if (logNameVal == retUsername) {
    console.log("welcome");
  } else {
    console.log("incorrect username");
  }

  if (logPassVal == retPassword) {
    console.log("welcome");
  } else {
    console.log("incorrect password");
  }
}

// function sto() {

//   //localStorage.setItem("terms", terms);
// }
//password username validation
//   else if (passwordVal.includes(uName.value)) {
//     console.log("password cannot include username");
//   }

//    else if (!hasUpperCase) {
//     console.log("password must include at least 1 uppercase character");
//   } else if (!hasLowerCase) {
//     console.log("password must include at least 1 lowercase character");
//   } else if (!hasNumber) {
//     console.log("password must include at least 1 number");
//   } else {
//     console.log("your password is acceptable");
//   }
