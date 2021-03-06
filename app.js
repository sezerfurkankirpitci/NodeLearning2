var express = require('express');
var fs= require('fs');
var path=require('path');
app = express();

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname,'./app_server/views'));

var route = require('./app_server/routes/RouteSite');

app.use('/public',express.static(path.join(__dirname,'public')));

app.use('/',route);

app.listen(8081);