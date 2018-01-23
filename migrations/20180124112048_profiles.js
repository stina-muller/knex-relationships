
exports.up = function (knex, Promise) {
  return knex.schema.createTable('profiles', table => {
    table.increments('id')
    table.integer('user_id')
    table.string('url')
    table.string('gender')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('profiles')
}
