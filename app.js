const Express=require('express');
var router=require('./router/register');
var path=require('path');
var bodyParser = require('body-parser')
var mongoose=require('./config/mongoose');
let cookieParser = require('cookie-parser'); 


const app=Express();
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
 
app.use(bodyParser.json());
app.use(cookieParser());
app.use(Express.static(path.join(__dirname, 'asset')));
 

//setup view enginer
app.set('view engine','ejs');
app.set('views','./view');




app.use('/', router);

app.listen(2000, function(err){

    console.log("server starts on"+2000);

});