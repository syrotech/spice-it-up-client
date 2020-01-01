'use strict'

// const app = require('../app')
const config = require('../config')
const store = require('../store')

// CREATE SPICE API
const create = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/spices',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

// READ INDEX / GET ALL SPICES API
const index = function (data) {
  return $.ajax({
    url: config.apiUrl + '/spices',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

// UPDATE A SPICE API
const update = function (formData, id) {
  return $.ajax({
    url: config.apiUrl + '/spices/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

// DESTROY A SPICE API
const destroy = function (id) {
  // console.log('Works')
  return $.ajax({
    url: config.apiUrl + '/spices/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  create,
  index,
  update,
  destroy
}
