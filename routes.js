// var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var rp = require('request-promise');
// const router = express.Router();

module.exports = function(app) {
    var todoList = require('./controller');
    // let connection = require('./conn');

    app.route('/getdata')
        .get(todoList.datajob);
        app.route('/getdataid/:id')
        .get(todoList.datajobid); 

        app.use(session({
            secret: 'secret',
            resave: true,
            saveUninitialized: true
        }));
        app.use(bodyParser.urlencoded({extended : true}));
        app.use(bodyParser.json());
        
        
        app.post('/login', function(request, response) {
            // var u = request.username;
            // var p = request.password;
            if(request.body.username == "DANS" && request.body.password == "123"){
                response.send('Selamat Datang');
            }
            else {
                        response.send('Incorrect Username and/or Password!');
                    }			
                    response.end();
                    console.log(request.body.username);
                    // console.log(p);
                });
            


}
