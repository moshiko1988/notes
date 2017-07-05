'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
// const store = require('../store')
// const utils = require('../utils')

// const clearModals = function (event) {
//   const selector = '#' + event.target.id + '> div > div > .modal-body > form'
//   utils.clearModalInput(selector)
//   utils.clearErrorMessage(selector)
// }
const checkAuthentication = function () {
  if (localStorage.getItem('token') && localStorage.getItem('id')) {
    api.checkAuth()
  } else {

  }
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then((response) => {
      localStorage.setItem('id', response.user.id)
      localStorage.setItem('token', response.user.token)
      localStorage.setItem('email', response.user.email)
    })
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(() => {
      localStorage.clear()
    })
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  // $('.modal').on('hidden.bs.modal', clearModals)
}

module.exports = {
  addHandlers,
  checkAuthentication
}
