'use strict'

// require store file
const store = require('../store.js')

// First create functions for onSuccess and onFailure ot be used as callbacks
// in the functions we will create for each circumstance.

const onSuccess = message => {
  $('#message')
    .removeClass('failure')
    .addClass('success')
    .text(message)
  $('form').trigger('reset')
}

const onFailure = message => {
  $('#message')
    .removeClass('success')
    .addClass('failure')
    .text(message)
  $('form').trigger('reset')
}

// sign-up success and failure messages

const onSignUpSuccess = () => {
  onSuccess('You have successfully signed up!')
}

const onSignUpFailure = () => {
  onFailure('Sorry, something went wrong! Please try again!')
}

// sign-in success and failure messages

const onSignInSuccess = responseData => {
  // console.log('onSignInSuccess', responseData)
  store.user = responseData.user
  onSuccess('You are signed in and ready to shop!')
  $('.post-auth-forms').show()
  $('.pre-auth-forms').hide()
}

const onSignInFailure = () => {
  onFailure('Sorry, something went wrong! Please try again!')
}

// change-password success and failure messages

const onChangePasswordSuccess = () => {
  onSuccess('Your password has been successfully changed!')
}

const onChangePasswordFailure = () => {
  onFailure('Sorry, something went wrong! Please try again!')
}

// sign-out success and failure messages

const onSignOutSuccess = () => {
  onSuccess('You successfully signed out!')
  store.user = {}
  $('.post-auth-forms').hide()
  $('.pre-auth-forms').show()
}

const onSignOutFailure = () => {
  onFailure('Sorry, something went wrong! Please try again!')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
