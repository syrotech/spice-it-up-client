'use strict'

const store = require('../store')

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

// const onDeleteSuccess = function() {
//   console.log('Spice was successfully deleted.')
// }
//
// const onUpdateSuccess = function() {
//   console.log('Spice was successfully Updated.')
// }


// GET SPICE INDEX
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

// CREATE A SPICE
const createSuccess = function (formData) {
  onSuccess('You created a spice!')
  console.log(formData.spice)
  store.spice = formData.spice
}

const createFailure = () => {
  onFailure('Error-please try again!')
}

module.exports = {
  onSuccess,
  onFailure,
  indexSuccess,
  // onDeleteSuccess,
  // onUpdateSuccess,
  createSuccess,
  createFailure
}
