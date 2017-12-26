const express = require('express');
const bodyParser= require('body-parser');
const path = require('path');

var Admin = require('./server/routes/admin');
var users = require('./server/routes/users');
var Reservation = require('./server/routes/reservation');
//var index = require('./src/app/app.component');
const port= 3000;
const app = express();
app.use(express.static(path.join(__dirname,'dist')));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/users', users);
app.use('/admin', Admin);
app.use('/reservation', Reservation);
//sapp.use('/',index);
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname,'dist/index.html'));
});

app.listen(port,function(){
    console.log("Server running");
});