function shakeModal () {
  $('#loginModal .modal-dialog').addClass('shake')
  $('.error').addClass('alert alert-danger').html('Invalid email/password combination')
  $('input[type="password"]').val('')
  setTimeout(function () {
    $('#loginModal .modal-dialog').removeClass('shake')
  }, 1000)
}
//
// const signInSuccess = () => {
//   $('#signInModal').modal('hide')
//   utils.clearErrorMessage('#sign-in')
//   utils.clearModalInput('#sign-in')
//   utils.mainDisplay()
// }
//
// const signUpSuccess = () => {
//   $('#signUpModal').modal('hide')
//   utils.clearErrorMessage('#sign-up')
//   utils.clearModalInput('#sign-up')
// }
//
// const signOutSuccess = () => {
//   utils.openingDisplay()
// }
//
// const changePassSuccess = () => {
//   $('#changePassModal').modal('hide')
//   utils.clearErrorMessage('#change-password')
//   utils.clearModalInput('#change-password')
// }
//

const signInFailure = (error) => {
//   utils.clearErrorMessage('#sign-in')
//   utils.addErrorMessage('#sign-in', error.status)
  shakeModal()
  console.error(error.status)
}
//
// const signUpFailure = (error) => {
//   utils.clearErrorMessage('#sign-up')
//   utils.addErrorMessage('#sign-up', error.status)
//   // console.error(error.status)
// }
//
// // even on failure, sign out should take you to theinitial screen
// const signOutFailure = (error) => {
//   console.error(error.status)
//   utils.openingDisplay()
// }
//
// const changePassFailure = (error) => {
//   utils.clearErrorMessage('#change-password')
//   utils.addErrorMessage('#change-password', error.status)
//   // console.error(error.status)
// }
//
module.exports = {
//   signInSuccess,
//   signUpSuccess,
//   signOutSuccess,
//   changePassSuccess,
  signInFailure
//   signUpFailure,
//   signOutFailure,
//   changePassFailure
}
