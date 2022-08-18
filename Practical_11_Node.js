var mysql = require('mysql');
var express = require('express');
var app = express();

app.listen(10000, (err) => {
    if (err) throw err;
    console.log("Serever listening at http://127.0.0.1:10000");
})

// Just Ignore CORS . Why it is so Hard to configure..
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// API List 
app.get('/welcome', (_req, res) => {
    res.write("API Working");
    res.end();
})

app.get('/authenticate/:userName/:password', function (req, res) {
    var userName = req.params.userName.toString();
    var password = req.params.password.toString();
    var customQuery = "Select PASSWORD from patient.user where user_name = '" + userName + "'";
    con.query(customQuery, function (_err, result) {
        if (result.length > 0) {
            if (result[0].PASSWORD === password) {
                res.send(true);
                res.end();
            } else {
                res.send(false);
                res.end();
            }
        } else {
            res.send(false);
            res.end();
        }
    })
})

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Aryan@1856"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});


