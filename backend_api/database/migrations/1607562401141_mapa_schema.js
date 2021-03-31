'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MapaSchema extends Schema {
  up () {
    this.create('mapas', (table) => {
      table.increments()
      table.integer('categoria_id').unsigned()
      .references('id').inTable('categorias')
      table.integer('dificuldade_id').unsigned()
      .references('id').inTable('dificuldades')
      table.string('nome_trilha').notNullable();
      table.integer('metros').notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('mapas')
  }
}

module.exports = MapaSchema
