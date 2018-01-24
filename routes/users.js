const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', { users: users })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/profiles/:id', (req, res) => {
  const target = req.params.id
  db.getUser(target)
    .then(user => {
      console.log(user[0])
      res.render('profiles', user[0])
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/add-user', (req, res) => {
  res.render('add-user')
})

router.post('/add-user', (req, res) => {
  const newUser = req.body
  db.addUser(newUser)
    .then(() => {
      res.redirect('/')
    })
    .catch(err => showError(err, res))
})

function showError (err, res) {
  res.status(500).send('DATABASE ERROR: ' + err.message)
}

module.exports = router
