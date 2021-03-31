'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('dtnasc',150).notNullable()
      table.string('sexo').notNullable()
      table.integer('participacoes').notNullable()
      table.integer('categoria_id').unsigned().references('id').inTable('categorias')
      table.integer('dificuldade_id').unsigned().references('id').inTable('dificuldades')
      table.integer('uniforme_id').unsigned().references('id').inTable('uniformes')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
