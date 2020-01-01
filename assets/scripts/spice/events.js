'use strict'

const api = require('./api.js')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

// CREATE SPICE / MAKE NEW SPICE
const onCreateSpice = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log(Object.keys(formData))
  if (formData.spice.name.length === 0) {
    ui.createSpiceFailure()
  } else {
    api.create(formData)
      .then(ui.createSpiceSuccess)
      .catch(ui.createSpiceFailure)
  }
}
//   api.create(formData)
//     .then(ui.createSpiceSuccess)
//     .catch(ui.createSpiceFailure)
// }

// READ INDEX / GET ALL SPICES
const onGetSpices = function (event) {
  event.preventDefault()
  api
    .index()
    .then(ui.indexSuccess)
    .catch(ui.indexFailure)
  console.log('Works')
}

// ON UPDATED SPICE LIST -- RETURNS UPDATED SPICE LIST BUT REALLY THE ONLY DIFFERENCE IS THE MESSAGES FROM ONGETSPICES
const onUpdateSpices = function (event) {
  event.preventDefault()
  api
    .index()
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
  console.log('Works')
}

// UPDATE SPICE/ UPDATE ONE SPICE
const onUpdateSpice = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const spiceId = formData.spice.id

  api.update(formData, spiceId)
    .then(function () {
      onUpdateSpices(event)
    })
}

// DELETE SPICE / DELETE ONE SPICE
const onDeleteSpice = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.destroy(formData.spice.id)
    .then(ui.deleteSpiceSuccess)
    .catch(ui.deleteSpiceFailure)
}

const addHandlers = event => {
  $('.create-spice').on('submit', onCreateSpice)
  $('.spices').on('submit', onGetSpices)
  $('.delete-spice').on('submit', onDeleteSpice)
  $('.update-spice').on('submit', onUpdateSpice)
}

module.exports = {
  addHandlers
}
