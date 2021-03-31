'use strict'

/*
|--------------------------------------------------------------------------
| CategoriaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Categoria = use('App/Models/Categoria')
class CategoriaSeeder {
  async run () {
    const catorias = [
      {nome:"A",idadmin:"8",idadmax:"13"},
      {nome:"B",idadmin:"14",idadmax:"30"},
      {nome:"C",idadmin:"31",idadmax:"59"},
      {nome:"SENIOR",idadmin:"60",idadmax:"200"}
    ];
    await Categoria.createMany(catorias);
  }
}

module.exports = CategoriaSeeder
