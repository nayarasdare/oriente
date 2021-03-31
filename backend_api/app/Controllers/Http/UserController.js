'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const user = use("App/Models/User");
const Database = use('Database')
class UserController {

    async index ({ request, response, view }) {
        const users = await user.all();
        return users;
      }
    
    /**
   * Update user details.
   * PUT or PATCH agendamentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
    async update ({ request, response, view }) {
        const sql = `UPDATE users AS U1,
        (
        SELECT geral.id as user_id, geral.categoria_id, geral.dificuldade_id, uniformes.id as uniforme_id
        FROM   (SELECT users.id,
                       users.username,
                     users.email,
                       users.sexo,
                       users.participacoes,
                     Timestampdiff(year, users.dtnasc, Curdate()) as idade,
                       (SELECT categorias.id 
                        FROM   categorias 
                        WHERE  Timestampdiff(year, users.dtnasc, Curdate()) >= 
                               categorias.idadmin 
                               AND Timestampdiff(year, users.dtnasc, Curdate()) <= 
                                   categorias.idadmax 
                        LIMIT  1) AS categoria_id, 
                       (SELECT dificuldades.id 
                        FROM   dificuldades 
                        WHERE  users.participacoes >= dificuldades.ptcmin 
                               AND users.participacoes <= dificuldades.ptcmax 
                        LIMIT  1) AS dificuldade_id 
                FROM   users 
                WHERE  users.id = ?) AS geral 
               LEFT JOIN uniformes 
                      ON uniformes.categoria_id = geral.categoria_id 
                         AND uniformes.user_sexo = geral.sexo
        ) AS U2
        SET 
        U1.categoria_id = U2.categoria_id,
        U1.dificuldade_id = U2.dificuldade_id,
        U1.uniforme_id = U2.uniforme_id
        WHERE U2.user_id = U1.id`;
        const id = request.only('user_id').user_id;
        const resultado1 = await Database.raw(sql,[id]);

        const sql2 = `UPDATE users AS U1,
        (
        SELECT count(agendamentos.id) as total
        FROM agendamentos
        WHERE agendamentos.user_id = ?
        AND agendamentos.concluido = 1
        ) as U2
        SET
        U1.participacoes = U2.total
        WHERE U1.id = ?`;

        const resultado2 = await Database.raw(sql2,[id,id]);
        return resultado1[0];
      }

    /**
     * Update user details.
     * PUT or PATCH agendamentos/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update2 ({ params, request, response }) {

      const data = request.except('user_id');
      const user_id = request.only('user_id').user_id;
      const usuario = await Database.table('users')
      .where('id', user_id)
      .update(data);
      return usuario;

  }
    /**
     * Delete a user with id.
     * DELETE agendamentos/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy ({ params, request, response }) {
      const usuario_id = request.only('user_id').user_id;
      const usuario = await Database.table('users')
      .where('id', usuario_id)
      .delete();
      return usuario;
  }
}

module.exports = UserController
