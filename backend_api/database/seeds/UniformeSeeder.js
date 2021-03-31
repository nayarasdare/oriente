'use strict'

/*
|--------------------------------------------------------------------------
| UniformeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Uniforme = use('App/Models/Uniforme')

class UniformeSeeder {
  async run () {
    const uniformes = [
      {user_sexo: 'F', categoria_id:1, caneleira:"NÃO PRECISA", tenis:"COMUM ROSA", calca:"TECTEL/LEGGING ROSA"},
      {user_sexo: 'F', categoria_id:2, caneleira:"ESPORTIVA PLÁSTICO ROSA", tenis:"TENIS TRILHA BRADOCK ROSA", calca:"ESPORTIVA TECIDO LEVE ROSA"},
      {user_sexo: 'F', categoria_id:3, caneleira:"ESPORTIVA FIBRA CARBONO ROSA", tenis:"TENIS RAINHA ESCALADA PRO ROSA", calca:"CALÇA DE ALTA RESPIRAÇÃO ROSA"},
      {user_sexo: 'F', categoria_id:4, caneleira:"PROFISSIONAL TRECKMAX FIBRA ROSA", tenis:"MULTIESCALADA PRO MAX ROSA", calca:"CALCA PRO MAX RESPIRATION ROSA"},
      {user_sexo: 'M', categoria_id:1, caneleira:"NÃO PRECISA", tenis:"COMUM PRETO", calca:"TECTEL/LEGGING PRETO"},
      {user_sexo: 'M', categoria_id:2, caneleira:"ESPORTIVA PLÁSTICO PRETO", tenis:"TENIS TRILHA BRADOCK PRETO", calca:"ESPORTIVA TECIDO LEVE PRETO"},
      {user_sexo: 'M', categoria_id:3, caneleira:"ESPORTIVA FIBRA CARBONO PRETO", tenis:"TENIS RAINHA ESCALADA PRO PRETO", calca:"CALÇA DE ALTA RESPIRAÇÃO PRETO"},
      {user_sexo: 'M', categoria_id:4, caneleira:"PROFISSIONAL TRECKMAX FIBRA PRETO", tenis:"MULTIESCALADA PRO MAX PRETO", calca:"CALCA PRO MAX RESPIRATION PRETO"}
    ];
    await Uniforme.createMany(uniformes);
  }
}

module.exports = UniformeSeeder
