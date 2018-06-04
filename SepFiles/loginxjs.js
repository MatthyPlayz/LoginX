var tries = 0;
var account;
var usernames = 1;
var lou = "ZXXXX";
var loulen = lou.length - 4;
if(localStorage.getItem("verification") == 1) {
verification.style.display="block";
}
if(lou.length == "NaN") {
  lou = "ZXXXX";
}
function setUsernames() {
  localStorage.setItem("usernames", usernames);
  usernames = JSON.parse(localStorage.getItem("usernames"));
}
function getUsernames() {
  usernames = JSON.parse(localStorage.getItem("usernames"));
}
if(localStorage.getItem("usernames") == null) {
  setUsernames();
}
window.setInterval(function(){getUsernames()}, 1000);
function register() {
  lou = lou + "ZXXXX";
  localStorage.setItem("lou", lou);
  localStorage.setItem("username" + loulen.toString(), regname.value);
  localStorage.setItem("password" + loulen.toString(), regpass.value);
}
function login() {
  if(lusername.value == localStorage.getItem("username" + loulen.toString()) && lpassword.value == localStorage.getItem("password" + loulen.toString()))
  {
  if(localStorage.getItem("NaN") != null) {
    lou = localStorage.getItem("lou");
  }
  /*
  +=====================+
  !Success Output (JS)  !
  +=====================+
  */
  success.style.display="block";
  fail.style.display="none";
  verification.style.display="none";
  localStorage.setItem("verification", 0);
  } else 
  {
    /*
  +=====================+
  !Failure Output (JS)  !
  +=====================+
  */
  if(localStorage.getItem("NaN") != null) {
    lou = localStorage.getItem("lou");
  }
  fail.style.display="block";
  success.style.display="none";
  tries = tries + 1;
  if(tries >= 3) {
    localStorage.setItem("verification", 1);
	verification.style.display="block";
  }
  }
}