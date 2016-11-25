var database = []
const md5 = require('md5')
var sid = []

const User = require('./model').User
const Profile = require('./model').Profile
defaultStatus = "default"


var models = require('./model.js')


function isLoggedIn(req, res, next){
    if (!req.session.username){
      res.status(403).json({err: "forbidden"})
    }
    next()
}

function login(req, res){
  var username = req.body.username;
  var password = req.body.password;
  if (!username || !password){
    res.sendStatus(400)
    return
  }
  var userObj
   User.findOne({username: username}).then(user => {
     userObj = user;
     console.log(userObj)
     //compare with salt
     if (!userObj ){
       res.sendStatus(401)
       return
     }
     if (md5(password.concat(userObj.salt)) !== userObj.hash)
     {
       res.sendStatus(401)
       return
     }

     //map sid to user in memory
     var msg = {username: username, result: 'sucess'}
     sid.push(username)
     loggedInUser = username

     req.session.username = username
     res.send(msg)
   })
}

const register = (req, res) => {
  console.log(req.body)
  var username = req.body.username;
  var password = req.body.password;
  console.log(username)
  console.log(password)
  var salt = "thesaltthesaltsaltysalt"

  database.push({username: username, salt: salt, hash: md5(password.concat(salt))})

  var userObj = {username: username, salt: salt, hash: md5(password.concat(salt))}
  var profObj = {username: username, status: defaultStatus, followed: [], pic:'http://www.clker.com/cliparts/h/D/5/O/s/2/stick-figure-black.svg'}
  User.create(userObj, function (err, small) {
  if (err)
  {
    console.log("ERROR")
    return handleError(err);
  }
  // saved!
  })
  Profile.create(profObj, function (err, small) {
  if (err)
  {
    console.log("ERROR")
    return handleError(err);
  }
  // saved!
  })
  msg = {result:'success', username: username}
  res.json(msg)
}

function logout(req, res){
  req.session.destroy();
  res.send("OK")
}

module.exports = app => {
     app.post('/login', login)
     app.post('/register', register)
     app.put('/logout', isLoggedIn, logout)
}
