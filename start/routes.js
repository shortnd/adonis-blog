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
Route.get('login', 'UserController.login')
Route.post('login', 'UserController.loginStore')
Route.get('register', 'UserController.register')
Route.post('register', 'UserController.registerStore')
Route.post('logout', 'UserController.logout')

Route.get('blog', function() {
  return 'Blog Page'
}).middleware(['auth']);
