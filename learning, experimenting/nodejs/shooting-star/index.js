/* jshint esversion: 6 */

var express = require('express');
var dm = require('./dataManager');
var app = express();
var port = process.env.PORT || 3001;
var users = [
  {
    userId: 'admin',
    hash: 'abcd',
    name: 'Raxx Alderon',
    content: [
      {
        title: 'Gender Revolution',
        content: 'People of the world are \n daaa :D !'
      }
    ]
  }
]

// Login / Signup
app.get('/sessionshield', function(req, res){
  res.send('login page');
});

// User Dashboard
app.get('/sessiondashboard', function(req, res){
  res.send('login page');
});

// Authorization
app.get('/auth/:userId/:hash', function(req, res){
  var id = req.params.userId.toString();
  var hash = req.params.hash.toString();
  var error = {
    err: 'something went wrong!'
  }
  var user = dm.searchUser(id, users);
  if (!user){
    res.json(error);
  }
  var isAuthenticated = dm.authenticate(user, hash);
  if (!isAuthenticated){
    res.json(error);
  }
  if(isAuthenticated){
    console.log('authed')
    res.json(user);
  }
});

app.listen(3001);
