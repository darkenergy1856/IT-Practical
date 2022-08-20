var signInForm = true;
var signUp = '<label for="firstName">First Name : </label><br />    <input type="text" id="firstName" /><br />    <label for="lastName">Last Name : </label><br />    <input type="text" id="lastName" /><br />    <label for="emailID">Email ID : </label><br /><input type="email" id="emailID" autocomplete="username"/><br /><label for="password">Password : </label><br /><input type="password" id="password" autocomplete="new-password"/><br /><label for="confirmPassword">Confirm Password : </label><br /><input type="password" id="confirmPassword" autocomplete="new-password"/><br /><button type="button">Create Account</button><button type="button" onclick="changeForm()">Login</button>';
var signIn = '<label for="emailID">Email ID : </label><br /><input type="email" id="emailID" autocomplete="username"/><br /><label for="password">Password : </label><br /><input type="password" id="password" autocomplete="current-password"/><br /><div class="buttonGroup"><button type="button" onclick="changeForm()">Sign Up</button><button type="button" onClick="login()">Login</button></div>'


$(function () {
    document.getElementById('changeState').innerHTML = signIn;
});

const HTTP = new XMLHttpRequest();
const url = 'http://localhost:10000/';
HTTP.open("get", url + 'welcome');
HTTP.send();

// HTTP.onreadystatechange = () => {
//     if (HTTP.readyState == 4 && HTTP.status < 400) {
//         console.log(HTTP.response);
//     }
// }

function changeForm() {
    if(signInForm){
        document.getElementById('changeState').innerHTML = signUp;
        signInForm = false;
    }else{
        document.getElementById('changeState').innerHTML = signIn;
        signInForm = true;
    }
}

function login(){
    var password = document.getElementById("password").value;
    var emailId = document.getElementById("emailID").value;
    console.log(password , emailId);
    HTTP.open("get" , url+'authenticate/'+emailId+'/'+password , false);
    HTTP.send();
    console.log(HTTP.responseText);
}
