'use strict'

const store = require('../store')

// Refactored onSuccess Message for all Requests
const onSuccess = message => {
  $('#message')
    .removeClass('failure')
    .addClass('success')
    .text(message)
  $('form').trigger('reset')
}

// Refactored onFailure Message for all Requests
const onFailure = message => {
  $('#message')
    .removeClass('success')
    .addClass('failure')
    .text(message)
  $('form').trigger('reset')
}

// CREATE A SPICE SUCCESS
const createSuccess = function (formData) {
  onSuccess('You created a spice!')
  console.log(formData.spice)
  store.spice = formData.spice
}

// CREATE A SPICE FAILURE
const createFailure = () => {
  onFailure('Error-please try again!')
}

// GET SPICE INDEX SUCESS
const indexSuccess = function (responseData) {
  console.log(responseData)
  // console.log('data is ' + data)
  $('#spice-display').html('')
  responseData.spices.forEach(spice => {
    // build HTML element with data
    const spiceHTML = (`
      <h4>Name: ${spice.name}</h4>
      <p>Origin: ${spice.origin}</p>
      <p>ID: ${spice.id}</p>
      <br>
    `)

    $('#spice-display').append(spiceHTML)
  })
}

// DELETE SPICE SUCCESS
const deleteSuccess = function () {
  console.log('Spice was successfully deleted.')
}

module.exports = {
  onSuccess,
  onFailure,
  createSuccess,
  createFailure,
  indexSuccess,
  deleteSuccess
}
