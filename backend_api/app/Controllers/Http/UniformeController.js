'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const uniforme = use("App/Models/Uniforme")
/**
 * Resourceful controller for interacting with uniformes
 */
class UniformeController {
  /**
   * Show a list of all uniformes.
   * GET uniformes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const uniformes = await uniforme.all();
    return uniformes;
  }

  /**
   * Render a form to be used for creating a new uniforme.
   * GET uniformes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  //async create ({ request, response, view }) {
  //}

  /**
   * Create/save a new uniforme.
   * POST uniformes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  //async store ({ request, response }) {
  //}

  /**
   * Display a single uniforme.
   * GET uniformes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing uniforme.
   * GET uniformes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  //async edit ({ params, request, response, view }) {
  //}

  /**
   * Update uniforme details.
   * PUT or PATCH uniformes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  //async update ({ params, request, response }) {
  //}

  /**
   * Delete a uniforme with id.
   * DELETE uniformes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  //async destroy ({ params, request, response }) {
  //}
}

module.exports = UniformeController
