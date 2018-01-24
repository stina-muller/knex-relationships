
exports.up = function (knex, Promise) {
  return knex.schema.createTable('blogposts', table => {
    table.increments('id').primary()
    table.string('blog')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('blogposts')
}
