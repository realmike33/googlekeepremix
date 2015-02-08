var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./users/UsersModel.js');
var Lists = require('./lists/ListsModel.js');

console.log(User);
console.log(Lists);

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/../client/'));

var port = 3000;

app.listen(port);


var location = 'localhost/googlekeepremix';
mongoose.connect('mongodb://' + location);


var lists = 'api/lists';

app.get(lists, function(req, res){
  res.send(200);
});

app.get(lists + '/:id', function(req, res){
  res.send(200);
});

app.post(lists + '/:id', function(req, res){
  res.send(200);
});

app.put(lists + '/:id', function(req, res){
  res.send(200);
});

app.delete(lists + '/:id', function(req, res){
  res.send(200);
});