$(function () {
});

const HTTP = new XMLHttpRequest();
const url = 'http://localhost:10000/';
HTTP.open("get", url + 'welcome');
HTTP.send();

HTTP.onreadystatechange = () => {
    if (HTTP.readyState == 4 && HTTP.status < 400) {
        console.log(HTTP.response);
    }
}
