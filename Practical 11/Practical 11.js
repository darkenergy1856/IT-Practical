var signInForm = true;
var signUp = '<label for="firstName">First Name : </label><br />    <input type="text" id="firstName" /><br />    <label for="lastName">Last Name : </label><br />    <input type="text" id="lastName" /><br />    <label for="emailID">Email ID : </label><br /><input type="email" id="emailID" autocomplete="username"/><br /><label for="password">Password : </label><br /><input type="password" id="password" autocomplete="new-password"/><br /><label for="confirmPassword">Confirm Password : </label><br /><input type="password" id="confirmPassword" autocomplete="new-password"/><br /><button type="button" onClick="createAccount()">Create Account</button><button type="button" onclick="changeForm()">Login</button>';
var signIn = '<label for="emailID">Email ID : </label><br /><input type="email" id="emailID" autocomplete="username"/><br /><label for="password">Password : </label><br /><input type="password" id="password" autocomplete="current-password"/><br /><div class="buttonGroup"><button type="button" onClick="login()">Login</button><button type="button" onclick="changeForm()">Sign Up</button></div>'


$(function () {
    document.getElementById('changeState').innerHTML = signIn;
});

const HTTP = new XMLHttpRequest();
const url = 'http://localhost:10000/';
HTTP.open("get", url + 'welcome');
HTTP.send();

function changeForm() {
    if (signInForm) {
        document.getElementById('changeState').innerHTML = signUp;
        signInForm = false;
    } else {
        document.getElementById('changeState').innerHTML = signIn;
        signInForm = true;
    }
}

function login() {
    var password = document.getElementById("password").value;
    var emailId = document.getElementById("emailID").value;
    console.log(password, emailId);
    HTTP.open("GET", url + 'authenticate/' + emailId + '/' + password, false);
    HTTP.send();
    console.log(HTTP.responseText);
    if (HTTP.responseText === 'true') {
        welcomeUser();
    }
    else {
        confirm("Credential Invalid !! Try Again..");
    }
}

function createAccount() {
    var password = document.getElementById("password").value;
    var emailId = document.getElementById("emailID").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var name = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
    if (confirmPassword === password) {
        HTTP.open("POST" , url+'new/' + name +'/' +emailId +'/' + password , false );
        console.log( url+'new/' + name +'/' +emailId +'/' + password);
        HTTP.send();
        console.log(HTTP.responseText);
        if(HTTP.responseText === 'true'){
            confirm("Account Created Successfully");
            location.href = "index.html";
        }else{
            confirm("Email ID already in use . Try Again with different Email ID.")
        }
    }
    else {
        confirm("Password didn't match !! Try again");
    }
}

function welcomeUser() {
    var welcome = '<p style = "font-size: xx-large">Welcome User !!</p>';
    document.getElementById('changeState').innerHTML = welcome;
}