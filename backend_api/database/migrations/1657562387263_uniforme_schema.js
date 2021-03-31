'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UniformeSchema extends Schema {
  up () {
    this.create('uniformes', (table) => {
      table.increments()

      table.string('user_sexo', 1).notNullable();
     //.references("sexo").inTable("users")
     //.onUpdate("CASCADE").onDelete("CASCADE");

      table.integer('categoria_id').unsigned().
      references('id').inTable('categorias')
      
      table.string('caneleira').notNullable();
      table.string('tenis').notNullable();
      table.string('calca').notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('uniformes')
  }
}

module.exports = UniformeSchema
