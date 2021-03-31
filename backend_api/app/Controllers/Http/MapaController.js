'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const mapa = use("App/Models/Mapa")
/**
 * Resourceful controller for interacting with mapas
 */
class MapaController{
  /**
   * Show a list of all mapas.
   * GET mapas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const mapas = await mapa.all();
    return mapas;
  }

  /**
   * Render a form to be used for creating a new mapa.
   * GET mapas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  //async create ({ request, response, view }) {
  //}

  /**
   * Create/save a new mapa.
   * POST mapas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  //async store ({ request, response }) {
  //}

  /**
   * Display a single mapa.
   * GET mapas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing mapa.
   * GET mapas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  //async edit ({ params, request, response, view }) {
  //}

  /**
   * Update mapa details.
   * PUT or PATCH mapas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  //async update ({ params, request, response }) {
  //}

  /**
   * Delete a mapa with id.
   * DELETE mapas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
 //async destroy ({ params, request, response }) {
  //}
}

module.exports = MapaController
