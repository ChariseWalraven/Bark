const express = require('express');
const bodyParser = require('body-parser')
const request = require('request');

const app = express()
app.use(bodyParser())
//get JSON from API and send to route
app.get('/', (req, res)=> {
  request('https://dog.ceo/api/breeds/image/random', function (error, response, body) {
     // returns required JSON object!
    res.send(JSON.parse(body).message)
  })
})

app.listen(4000, () => console.log("listening from port 4000"))
