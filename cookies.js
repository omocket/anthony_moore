//Sets the cookie
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//Gets the cookie from the current webpage.
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//Check if the cookie exists
//Validates user input
function checkCookie() {
  
  let email = document.getElementById("email").value;
  let remember = document.getElementById("remember").value;
  let password = document.getElementById("pwd").value;
  let pwdError = document.getElementById("pwdErr");
  let emailErr = document.getElementById("emailErr");
  let message = document.getElementById("message");
  
    //Checks if both email and password fields are empty.
    if (email === "" && password === "") {
      emailErr.innerHTML = "Please enter a valid email address";
      pwdError.innerHTML = "Please enter a password";
      return false;
      
      //Checks if email field is empty.
    } else if (email === "" && password != "") {
      emailErr.innerHTML = "Please enter a valid email address";
      pwdError.innerHTML = "";
      return false;
      
      //Checks if password field is empty.
    } else if (email != ""  && password === "") {
      emailErr.innerHTML = "";
      pwdError.innerHTML = "Please enter a password";
      return false;
      
    } else {
      
      //User is authenticated once user logs into the page.
      //Cookie is detected once user logs in.
      if (email != "" && password != "" && remember != "") {
        setCookie("user", email, 30);
        emailErr.innerHTML = "";
        pwdError.innerHTML = "";
        message.innerHTML = "Welcome Aboard " + getCookie("user") + "!";
        alert("User authenticated.");
        console.log("User has been authenticated.");
        
      } else {
        
        return true;
      }
    }
    
  }
  
  //Reads the cookie on the next page.
  function readCookie() {
    let cookieTitle = document.getElementById("cookieTitle");
    cookieTitle.innerHTML = "Welcome back " + getCookie("user");
  }
