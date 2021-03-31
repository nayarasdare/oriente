'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AgendamentoSchema extends Schema {
  up () {
    this.create('agendamentos', (table) => {
      table.increments()
      table.integer('user_id').notNullable()
      .unsigned().references('id').inTable('users')
      table.integer('categoria_id').notNullable()
      .unsigned().references('id').inTable('categorias')
      table.integer('dificuldade_id').notNullable()
      .unsigned().references('id').inTable('dificuldades')
      table.integer('uniforme_id').notNullable().unsigned()
      .references('id').inTable('uniformes')
      table.integer('mapa_id').notNullable().unsigned()
      .references('id').inTable('mapas')
      table.date('dataagenda').notNullable()
      table.date('horaagenda').notNullable()
      table.date('entrada')
      table.date('saida')
      table.integer('concluido').defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('agendamentos')
  }
}

module.exports = AgendamentoSchema
