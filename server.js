var http=require('http');
var express = require('express');

var app = express()

app.use('/',
        express.static(__dirname + '/views'));

app.listen(3000,
           function()
           {
             console.log('simple login listening at localhost port 3000')
           });
