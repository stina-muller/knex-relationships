const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  addUser: addUser
}

function getUsers (testConn) {
  const conn = testConn || connection
  return conn('users').select()
}

function getUser (id, testConn) {
  const conn = testConn || connection
  return conn('users')
    .join('profiles', 'users.id', 'profiles.user_id')
    .where('users.id', id)
    .select('users.id', 'users.name', 'profiles.url', 'profiles.gender')
}

function addUser (newUser, testConn) {
  const conn = testConn || connection
  return conn('users')
    .returning('id')
    .insert([{name: newUser.name, email: newUser.email}])
    .then((id) => {
      return conn('profiles')
        .insert([{url: newUser.url, gender: newUser.gender, 'user_id': id[0]}])
    })
}
