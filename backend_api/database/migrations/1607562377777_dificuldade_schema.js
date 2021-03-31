'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DificuldadeSchema extends Schema {
  up () {
    this.create('dificuldades', (table) => {
      table.increments()
      table.string('nome').notNullable()
      table.integer('ptcmin').notNullable()
      table.integer('ptcmax').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('dificuldades')
  }
}

module.exports = DificuldadeSchema
