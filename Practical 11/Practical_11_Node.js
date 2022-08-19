var mysql = require('mysql');
var express = require('express');
var app = express();

app.listen(10000, (err) => {
    if (err) throw err;
    console.log("Serever listening at http://127.0.0.1:10000");
})

// Just Ignore CORS . Why it is so Hard to configure..
app.use(function (_req, res, next) {
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

// Api to authenticate user;
app.get('/authenticate/:userID/:password', function (req, res) {
    var email = req.params.userID.toString();
    var password = req.params.password.toString();
    var customQuery = "select password from userdata where email = '" + email + "'";
    con.query(customQuery, function (_err, result) {
        if (result.length > 0) {
            if (result[0].password === password) {
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

// Api to Create user
app.post('/new/:name/:userID/:password', function (req, res) {
    var name = req.params.name.toString();
    var email = req.params.userID.toString();
    var password = req.params.password.toString();
    var customQuery = "insert into userdata (name , email , password) values ('" + name + "','" + email + "','" + password + "')";
    con.query(customQuery, function (err, result) {
        if (err) {
            res.send(false);
        } else {
            res.send(true);
            console.log("User Created Successfully");
        }
        res.end();
    })
})

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Aryan@1856"
});

con.connect(function (err) {
    if (err) throw err;
    con.query("use practical11", function (_err, result) {
        console.log(result.message)
    })
    console.log("Connected!");
});


