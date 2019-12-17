'use strict'

const api = require('./api.js')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

// CREATE SPICE / MAKE NEW SPICE
const onCreateSpice = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.create(formData)
    .then(ui.createSpiceSuccess)
    .catch(ui.createSpiceFailure)
}

// READ INDEX / GET ALL SPICES
const onGetSpices = function (event) {
  event.preventDefault()
  api
    .index()
    .then(ui.indexSuccess)
    .catch(ui.onFailure)
  console.log('Works')
}

// UPDATE SPICE/ UPDATE ONE SPICE
const onUpdateSpice = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.update(formData)
    .then(ui.onUpdateSuccess)
    .catch(ui.onFailure)
}

// DELETE SPICE / DELETE ONE SPICE
const onDeleteSpice = function (event) {
  event.preventDefault()
  // const formData = $(event.target).data('id')
  const formData = getFormFields(event.target)
  api.destroy(formData.spice.id)
    .then(ui.deleteSuccess)
    .catch(ui.onFailure)
}

const addHandlers = event => {
  $('.create-spice').on('submit', onCreateSpice)
  $('.spices').on('submit', onGetSpices)
  $('.delete-spice').on('submit', onDeleteSpice)
  $('.update-spice').on('click', onUpdateSpice)
}

module.exports = {
  addHandlers
}
