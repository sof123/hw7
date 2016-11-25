const express = require('express')
const bodyParser = require('body-parser')


const defaultHeadline = {
        username: 'sep1',
        headline: 'defaultHeadline',
}
/*
const index = (req, res) => {
    console.log(req.params.user)
    res.send({ hello: 'world' })
}
*/

const putHeadline = (req, res) => {
  console.log(req.params.user)
  res.send({headlines: [{
          username: 'sep1',
          headline: req.body.headline || 'could not be displayed',
  }]})
}

const getHeadlineUser = (req, res) => {
  console.log(req.params.user)
  res.send({username: 'Scott', status: 'Happy' })
}

const getEmailUser = (req, res) => {
  console.log(req.params.user)
  res.send({username: 'Scott', email: 'scott@rice.edu' })
}

const putEmail = (req, res) => {
  console.log(req.params.user)
  res.send({headlines: [{
          username: 'sep1',
          email: req.body.email || 'could not be displayed',
  }]})
}

const getHeadline = (req, res) => {
  console.log(req.params.user)
  console.log('Payload received', req.body)
 var payload;
 /*
 if (//req.method == 'GET' && req.url == '/headlines')
 {
   payload = defaultHeadline;
 }
 */
 payload = defaultHeadline

 //res.setHeader('Content-Type', 'application/json')
 //res.statusCode = 200
 res.send(JSON.stringify(payload))
}

const getHeadlines = (req, res) => {
  console.log(req.params.user)
  console.log('Payload received', req.body)
 var payload;
 /*
 if (//req.method == 'GET' && req.url == '/headlines')
 {
   payload = defaultHeadline;
 }
 */
 payload = defaultHeadline

 //res.setHeader('Content-Type', 'application/json')
 //res.statusCode = 200
 res.send(JSON.stringify(payload))
}

const isLoggedIn = (req, res) => {
  console.log(req.params.user)
  console.log('Payload received', req.body)
 var payload;
 /*
 if (//req.method == 'GET' && req.url == '/headlines')
 {
   payload = defaultHeadline;
 }
 */
 payload = defaultHeadline

 //res.setHeader('Content-Type', 'application/json')
 //res.statusCode = 200
 res.send(JSON.stringify(payload))
}

module.exports = app => {
     //app.get('/:user?', index)
     app.get('/headlines/', getHeadline)
     app.put('/headline', putHeadline)
     app.get('/headlines/:user?', getHeadlineUser)
     app.get('/email/:user?', getEmailUser)
     app.put('/email', putEmail)
     app.get('/headlines/:users*?', isLoggedIn, getHeadlines)
}
