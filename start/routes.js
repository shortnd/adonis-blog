'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get('/login', 'UserController.login').as('login')
Route.post('login', 'UserController.loginStore').as('login.store')
Route.get('register', 'UserController.register').as('register')
Route.post('register', 'UserController.registerStore').as('register.store')
Route.post('logout', 'UserController.logout').as('logout')

Route.resource('posts', 'PostController').middleware('auth')
