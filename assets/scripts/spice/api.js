'use strict'

// const app = require('../app')
const config = require('../config')
const store = require('../store')

const index = () => {
  return $.ajax({
    url: config.apiUrl + '/spices',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}
//
// const show = function(id) {
//   return $.ajax({
//     url: app.host + '/spices/' + id,
//     method: 'GET',
//   });
// };
//
const destroy = function (id) {
  return $.ajax({
    url: config.api + '/spices/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}
//
// const update = function(data) {
//   return $.ajax({
//     url: app.host + '/spices/' + data.spice.id,
//     method: 'PATCH',
//     data,
//   });
// };

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

module.exports = {
  index,
  // show,
  destroy,
  // update,
  create
}
