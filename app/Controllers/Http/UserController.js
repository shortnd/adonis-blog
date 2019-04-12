'use strict'
const User = use('App/Models/User')
const Persona = use('Persona')

class UserController {
  async login({ request, response, view }) {
    return view.render('auth/login');
  }

  async loginStore({ auth, request, response }) {
    const { email, password } = request.all()
    await auth.attempt(email, password)

    return response.redirect('/posts')
  }

  async register({ request, response, view }) {
    return view.render('auth/register')
  }

  async registerStore({ request, response, auth}) {
    const { username, email, password } = request.all()

    const user = await User.create({
      username,
      email,
      password
    })

    await auth.login(user)
    return response.redirect('/posts')
  }

  async logout({ request, response, auth }) {
    await auth.logout()

    response.redirect('/login')
  }
}

module.exports = UserController
