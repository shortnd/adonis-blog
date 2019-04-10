'use strict'
const User = use('App/Models/User')

class UserController {
  async login({ request, response, view }) {
    return view.render('auth/login');
  }

  async loginStore({ auth, request, response }) {
    const { email, password } = request.all()
    await auth.attempt(email, password)

    return response.redirect('/blog')
    // return 'Logged in successfully'
  }

  async register({ request, response, view }) {
    return view.render('auth/register')
  }

  async registerStore({ request, response, auth}) {
    const { username, email, password } = request.all()

    await User.create({
      username: username,
      email: email,
      password: password
    })

    await auth.attempt(email, password)

    return response.redirect('/blog')
  }

  async logout({ request, response, auth }) {
    await auth.logout()
    return 'User Logged out'
  }
}

module.exports = UserController
