'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (formData) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const changePass = function (data) {
  return $.ajax({
    url: `${config.apiOrigin}/change-password/${store.user.id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: `${config.apiOrigin}/sign-out/${localStorage.getItem('id')}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${localStorage.getItem('token')}`
    }
  })
}

const checkAuth = function () {
  return $.ajax({
    url: `${config.apiOrigin}/check-auth/${localStorage.getItem('id')}`,
    method: 'POST',
    headers: {
      Authorization: `Token token=${localStorage.getItem('token')}`
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePass,
  signOut,
  checkAuth
}
