
exports.up = function (knex, Promise) {
  return knex.schema.createTable('users-blogs', table => {
    table.increments('id')
    table.integer('user_id').references('users.id')
    table.integer('blog_id').references('blogposts.id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users-blogs')
}
