const express = require('express');
const bodyParser = require('body-parser')
const request = require('request');
const User = require('./models/index')

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
     const envelope = {
       message,
       breed
     }
     console.log(typeof breed, breed);
     console.log(typeof message, message)
     console.log(JSON.stringify(envelope));

    res.send(envelope)
  })
})

app.put('/users/:id', (request, response) => {
  const userId = Number(request.params.id)
  const updates = request.body
  console.log(updates);

  User.findById(userId)
  .then(user => {
    user.update({doglikestotal: user.doglikestotal + 1})

      .then(updatedUser => {
        response.send(updatedUser)
      })
      .catch(err => {
        response.status(404).send({
          message: 'User not found!'
        })
      })
    .catch(err => {
      response.status(500).send({
      message: 'something is really wrong!'
      })
    })
  })
})



app.listen(4000, () => console.log("listening from port 4000"))
