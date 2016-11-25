const express = require('express')
const bodyParser = require('body-parser')
var mongoose = require('mongoose')
const session = require('express-session');
if (process.env.NODE_ENV !== "production") {
    require('dotenv').load()
}

mongoose.connect(process.env.MONGOLAB_URI);


function enableCORS(req, res){
  
}

const app = express()
app.use(bodyParser.json())
app.use(enableCORS)
app.use(session({
  secret: process.env.SECRET,
  cookie: { maxAge: 3600000, httpOnly:true },
  store: new (require('express-sessions'))({
     storage: 'mongodb',
     instance: mongoose
})
}));
require('./profile')(app)
require('./articles')(app)
require('./auth')(app)

//mongoose.disconnect();

// Get the port from the environment, i.e., Heroku sets it
const port = process.env.PORT || 8080
const server = app.listen(port, () => {
     const addr = server.address()
     console.log(`Server listening at http://${addr.address}:${addr.port}`)
})
