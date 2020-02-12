'use strict'

const store = require('../store')
const showSpiceTemplate = require('../templates/spice.handlebars')

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
const createSpiceSuccess = function (formData) {
  onSuccess('You created a spice!')
  // // console.log(formData.spice)
  store.spice = formData.spice
  $('form').trigger('reset')
}

// CREATE A SPICE FAILURE
const createSpiceFailure = () => {
  onFailure('Error-please try again! You must submit at least a name value.')
  onFailure('Error-please try again! You must submit at least a name value.')
  $('form').trigger('reset')
}

// GET SPICE INDEX SUCESS
const indexSuccess = function (responseData) {
  onSuccess('Here is the spice list!')
  // // console.log(responseData)
  // // // console.log('data is ' + data)
  $('#spice-display').html('')
  responseData.spices.forEach(spice => {
    // build HTML element with data
    const spiceHTML = (`
      <h4>Name: ${spice.name}</h4>
      <p>Country of Origin: ${spice.origin}</p>
      <p>Culinary Use: ${spice.culinary_use}</p>
      <p>Price: $${spice.price} @ ${spice.weight}/lb</p>
      <p>ImageURL: ${spice.imageurl}</p>
      <p>ID: ${spice.id}</p>
      <br>
    `)

    $('#spice-display').append(spiceHTML)
  })
}

// const indexSuccess = function (responseData) {
//   // onSuccess('Here is the spice list!')
//   // // console.log(responseData)
//   // // // console.log('data is ' + data)
//   const spiceHTML = showSpiceTemplate({
//     spices: responseData.spices
//   })
//   onSuccess('Your spice catalog is looking good!')
//   $('#spice-display').html(spiceHTML)
//   // $('.country-tracker-bucketlist').show()
//   // $('.first-create-bucketlist').hide()
//   // $('.initial-add-button-bucketlist').hide()
//   // $('.update-tracker-button-bucketlist').show()
// }

// GET SPICE INDEX FAILURE
const indexFailure = () => {
  onFailure('Error-please try again!')
  $('form').trigger('reset')
}

// UPDATE SPICE SUCCESS
const onUpdateSuccess = function () {
  onSuccess('Spice was successfully updated.')
  $('form').trigger('reset')
}
// UPDATE SPICE FAILURE
const onUpdateFailure = () => {
  onFailure('Error-please try again!')
  $('form').trigger('reset')
}

// DELETE SPICE SUCCESS
const deleteSpiceSuccess = function () {
  onSuccess('Spice was successfully deleted.')
  $('form').trigger('reset')
}

// DELETE SPICE FAILURE
const deleteSpiceFailure = () => {
  onFailure('Error-please try again!')
  $('form').trigger('reset')
}

module.exports = {
  onSuccess,
  onFailure,
  createSpiceSuccess,
  createSpiceFailure,
  indexSuccess,
  indexFailure,
  onUpdateSuccess,
  onUpdateFailure,
  deleteSpiceSuccess,
  deleteSpiceFailure
}
