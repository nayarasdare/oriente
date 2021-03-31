'use strict'

/*
|--------------------------------------------------------------------------
| MapaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Mapas = use('App/Models/Mapa')
class MapaSeeder {
  async run () {
    const mapa = [
      {categoria_id:1, dificuldade_id:1,nome_trilha:"TRILHA DA CORCOVA",metros:765},
{categoria_id:1, dificuldade_id:1,nome_trilha:"TRILHA DO RIACHO",metros:891},
{categoria_id:1, dificuldade_id:1,nome_trilha:"TRILHA DO DIAMANTE",metros:927},
{categoria_id:1, dificuldade_id:1,nome_trilha:"TRILHA DO RASGA SHORT",metros:1309},
{categoria_id:1, dificuldade_id:2,nome_trilha:"TRILHA DA CORCOVA",metros:1265},
{categoria_id:1, dificuldade_id:2,nome_trilha:"TRILHA DO RIACHO",metros:1236},
{categoria_id:1, dificuldade_id:2,nome_trilha:"TRILHA DO DIAMANTE",metros:1347},
{categoria_id:1, dificuldade_id:2,nome_trilha:"TRILHA DO RASGA SHORT",metros:1550},
{categoria_id:1, dificuldade_id:3,nome_trilha:"TRILHA DA CORCOVA",metros:1828},
{categoria_id:1, dificuldade_id:3,nome_trilha:"TRILHA DO RIACHO",metros:2392},
{categoria_id:1, dificuldade_id:3,nome_trilha:"TRILHA DO DIAMANTE",metros:2728},
{categoria_id:1, dificuldade_id:3,nome_trilha:"TRILHA DO RASGA SHORT",metros:3110},
{categoria_id:1, dificuldade_id:4,nome_trilha:"TRILHA DA CORCOVA",metros:2496},
{categoria_id:1, dificuldade_id:4,nome_trilha:"TRILHA DO RIACHO",metros:2585},
{categoria_id:1, dificuldade_id:4,nome_trilha:"TRILHA DO DIAMANTE",metros:2190},
{categoria_id:1, dificuldade_id:4,nome_trilha:"TRILHA DO RASGA SHORT",metros:2503},
{categoria_id:2, dificuldade_id:1,nome_trilha:"CURVA DO TOCO SECO",metros:2519},
{categoria_id:2, dificuldade_id:1,nome_trilha:"BARRANCO DO PERNETA",metros:3039},
{categoria_id:2, dificuldade_id:1,nome_trilha:"SUBIDA DA RASTEIRA DO SACI",metros:3035},
{categoria_id:2, dificuldade_id:1,nome_trilha:"PIRAMBEIRA DO QUEBRA OSSO",metros:3006},
{categoria_id:2, dificuldade_id:2,nome_trilha:"CURVA DO TOCO SECO",metros:2932},
{categoria_id:2, dificuldade_id:2,nome_trilha:"BARRANCO DO PERNETA",metros:3517},
{categoria_id:2, dificuldade_id:2,nome_trilha:"SUBIDA DA RASTEIRA DO SACI",metros:3905},
{categoria_id:2, dificuldade_id:2,nome_trilha:"PIRAMBEIRA DO QUEBRA OSSO",metros:3987},
{categoria_id:2, dificuldade_id:3,nome_trilha:"CURVA DO TOCO SECO",metros:3421},
{categoria_id:2, dificuldade_id:3,nome_trilha:"BARRANCO DO PERNETA",metros:3692},
{categoria_id:2, dificuldade_id:3,nome_trilha:"SUBIDA DA RASTEIRA DO SACI",metros:3357},
{categoria_id:2, dificuldade_id:3,nome_trilha:"PIRAMBEIRA DO QUEBRA OSSO",metros:3285},
{categoria_id:2, dificuldade_id:4,nome_trilha:"CURVA DO TOCO SECO",metros:3981},
{categoria_id:2, dificuldade_id:4,nome_trilha:"BARRANCO DO PERNETA",metros:4331},
{categoria_id:2, dificuldade_id:4,nome_trilha:"SUBIDA DA RASTEIRA DO SACI",metros:4781},
{categoria_id:2, dificuldade_id:4,nome_trilha:"PIRAMBEIRA DO QUEBRA OSSO",metros:4986},
{categoria_id:3, dificuldade_id:1,nome_trilha:"CURVA DO TOCO SECO EXP",metros:4743},
{categoria_id:3, dificuldade_id:1,nome_trilha:"BARRANCO DO PERNETA EXP",metros:5252},
{categoria_id:3, dificuldade_id:1,nome_trilha:"SUBIDA DA RASTEIRA DO SACI EXP",metros:5270},
{categoria_id:3, dificuldade_id:1,nome_trilha:"PIRAMBEIRA DO QUEBRA OSSO EXP",metros:5163},
{categoria_id:3, dificuldade_id:2,nome_trilha:"CURVA DO TOCO SECO EXP",metros:5936},
{categoria_id:3, dificuldade_id:2,nome_trilha:"BARRANCO DO PERNETA EXP",metros:6127},
{categoria_id:3, dificuldade_id:2,nome_trilha:"SUBIDA DA RASTEIRA DO SACI EXP",metros:6047},
{categoria_id:3, dificuldade_id:2,nome_trilha:"PIRAMBEIRA DO QUEBRA OSSO EXP",metros:5724},
{categoria_id:3, dificuldade_id:3,nome_trilha:"CURVA DO TOCO SECO EXP",metros:7766},
{categoria_id:3, dificuldade_id:3,nome_trilha:"BARRANCO DO PERNETA EXP",metros:7995},
{categoria_id:3, dificuldade_id:3,nome_trilha:"SUBIDA DA RASTEIRA DO SACI EXP",metros:8100},
{categoria_id:3, dificuldade_id:3,nome_trilha:"PIRAMBEIRA DO QUEBRA OSSO EXP",metros:7873},
{categoria_id:3, dificuldade_id:4,nome_trilha:"CURVA DO TOCO SECO EXP",metros:10123},
{categoria_id:3, dificuldade_id:4,nome_trilha:"BARRANCO DO PERNETA EXP",metros:10292},
{categoria_id:3, dificuldade_id:4,nome_trilha:"SUBIDA DA RASTEIRA DO SACI EXP",metros:10155},
{categoria_id:3, dificuldade_id:4,nome_trilha:"PIRAMBEIRA DO QUEBRA OSSO EXP",metros:10626},
{categoria_id:4, dificuldade_id:1,nome_trilha:"BAIXADA DA BENGALA",metros:1325},
{categoria_id:4, dificuldade_id:1,nome_trilha:"PERCURSO DA RAPADURA",metros:1172},
{categoria_id:4, dificuldade_id:1,nome_trilha:"ROTA DO RISCA OSSO",metros:1263},
{categoria_id:4, dificuldade_id:1,nome_trilha:"MORRO DO CARECA",metros:1305},
{categoria_id:4, dificuldade_id:2,nome_trilha:"BAIXADA DA BENGALA",metros:2947},
{categoria_id:4, dificuldade_id:2,nome_trilha:"PERCURSO DA RAPADURA",metros:3427},
{categoria_id:4, dificuldade_id:2,nome_trilha:"ROTA DO RISCA OSSO",metros:3651},
{categoria_id:4, dificuldade_id:2,nome_trilha:"MORRO DO CARECA",metros:3274},
{categoria_id:4, dificuldade_id:3,nome_trilha:"BAIXADA DA BENGALA",metros:3633},
{categoria_id:4, dificuldade_id:3,nome_trilha:"PERCURSO DA RAPADURA",metros:3905},
{categoria_id:4, dificuldade_id:3,nome_trilha:"ROTA DO RISCA OSSO",metros:3721},
{categoria_id:4, dificuldade_id:3,nome_trilha:"MORRO DO CARECA",metros:4013},
{categoria_id:4, dificuldade_id:4,nome_trilha:"BAIXADA DA BENGALA",metros:4571},
{categoria_id:4, dificuldade_id:4,nome_trilha:"PERCURSO DA RAPADURA",metros:4823},
{categoria_id:4, dificuldade_id:4,nome_trilha:"ROTA DO RISCA OSSO",metros:5092},
{categoria_id:4, dificuldade_id:4,nome_trilha:"MORRO DO CARECA",metros:4944}   
    ];
       await Mapas.createMany(mapa);

  }
}

module.exports = MapaSeeder
