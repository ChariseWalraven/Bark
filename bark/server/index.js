const express = require('express');
const bodyParser = require('body-parser')
const request = require('request');

const app = express()
app.use(bodyParser())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  next()
})

//get JSON from API and send to route
app.get('/', (req, res)=> {
  request('https://dog.ceo/api/breeds/image/random', function (error, response, body) {
     // returns required JSON object!
     const message = JSON.parse(body).message
     const breed = message.slice(58).slice(0,message.slice(58).indexOf('/'));
     console.log(breed);
    res.send(JSON.stringify(message, breed))
  })
})



app.listen(4000, () => console.log("listening from port 4000"))
