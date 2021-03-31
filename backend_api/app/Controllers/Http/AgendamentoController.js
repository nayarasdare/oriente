'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const agendamento = use("App/Models/Agendamento");
const Database = use('Database');
/**
 * Resourceful controller for interacting with agendamentos
 */
class AgendamentoController {
  /**
   * Show a list of all agendamentos.
   * GET agendamentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const sql =  `SELECT username, 
                          email, 
                          dtnasc, 
                          sexo, 
                          participacoes, 
                          categorias.nome   categoria, 
                          dificuldades.nome dificuldade, 
                          uniformes.caneleira, 
                          uniformes.tenis, 
                          uniformes.calca,
                          mapas.id as mapa_id, 
                          mapas.nome_trilha, 
                          mapas.metros 
                      FROM   users 
                          LEFT JOIN categorias 
                                ON categorias.id = users.categoria_id 
                          LEFT JOIN uniformes 
                                ON uniformes.id = users.uniforme_id 
                          LEFT JOIN dificuldades 
                                ON dificuldades.id = users.dificuldade_id 
                          LEFT JOIN mapas 
                                ON mapas.categoria_id = users.categoria_id 
                                    AND mapas.dificuldade_id = users.dificuldade_id 
                      WHERE  users.id = ?`;

    const id = request.only('user_id').user_id;

    const resultado = await Database.raw(sql,[id]);
    
    return resultado[0];
  }

  /**
   * Create/save a new agendamento.
   * POST agendamentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
      const data = request.all();
      const agenda = await Database.table('agendamentos').insert(data);
      return agenda;
  }

  /**
   * Display a single agendamento.
   * GET agendamentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
      const id = request.only('user_id').user_id;
      const agendamentos = await Database.table('agendamentos').where('user_id',id);
      return agendamentos;
  }

  /**
   * Update agendamento details.
   * PUT or PATCH agendamentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

      const data = request.except('agendamento_id');
      const agendamento_id = request.only('agendamento_id').agendamento_id;
      const agenda = await Database.table('agendamentos')
      .where('id', agendamento_id)
      .update(data);
      return agenda;

  }

  /**
   * Delete a agendamento with id.
   * DELETE agendamentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
      const agendamento_id = request.only('agendamento_id').agendamento_id;
      const agenda = await Database.table('agendamentos')
      .where('id', agendamento_id)
      .delete();
      return agenda;
  }
}

module.exports = AgendamentoController
