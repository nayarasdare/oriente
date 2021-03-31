'use strict'



/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {return { greeting: 'Nada por aqui, vai procurar uma trilha pra andar!' }});

// CUIDA DAS ACOES DE USUARIO
Route.get('/users', "UserController.index");
Route.post('/users/update_interno',"UserController.update"); //validado
Route.post('/users/update_info',"UserController.update2"); //validado
Route.post('/users/create', 'AuthController.create'); //validado
Route.post('/users/auth', 'AuthController.authenticate'); //validado
Route.post('/users/destroy', 'UserController.destroy'); //validado

// EXIBE DADOS DAS TABELAS CADASTRADAS
Route.get('/categorias', "CategoriaController.index"); //validado
Route.get('/dificuldades', "DificuldadeController.index"); //validado
Route.get('/uniformes', "UniformeController.index"); //validado
Route.get('/mapas', "MapaController.index"); //validado

// CUIDA DOS AGENDAMENTOS DO USUARIO
//Route.group(() => {
Route.post('/agendamentos/index', "AgendamentoController.index"); //validado
Route.post('/agendamentos/show', "AgendamentoController.show"); //validado
Route.post('/agendamentos/store', "AgendamentoController.store"); //validado
Route.post('/agendamentos/update', "AgendamentoController.update"); //validado
Route.post('/agendamentos/destroy', "AgendamentoController.destroy"); //validado
//}).middleware(["auth"]);