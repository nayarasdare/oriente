'use strict'

/*
|--------------------------------------------------------------------------
| DificuldadeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Dificuldade = use('App/Models/Dificuldade')
class DificuldadeSeeder {
  async run () {
    const dificuldades = [
      {nome:"NOVATO", ptcmin:0, ptcmax:50},
      {nome:"ASPIRANTE", ptcmin:51, ptcmax:100},
      {nome:"INTERMEDIARIO", ptcmin:101, ptcmax:1000},
      {nome:"PROFISSIONAL", ptcmin:1001, ptcmax:50000},
    ];
    await Dificuldade.createMany(dificuldades);
  
    
  }
}

module.exports = DificuldadeSeeder
