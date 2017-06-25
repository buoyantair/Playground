var fs = require('fs');
var searchUser = function(userid, array){
  for(var i=0; i < array.length; i++){
    if(array[i].userId == userid){
      return array[i];
    }
  }
  return false;
}

var authenticate = function(user, hash){
  if(user.hash == hash.toString()){
    return true;
  }
  return false;
}

var createJSON = function(data){
  var file = fs.writeFile('request', data);
}


module.exports = {
  searchUser: searchUser,
  authenticate: authenticate
}
