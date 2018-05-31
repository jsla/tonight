var h = require('hyperscript')

module.exports = h('.drinks',
  h('h1', 'Drinks.js @ 9:15pm'),

  h('img', {src: '/img/drinks/logo.png'}),
  h('h1', 'The Daily Pint'),
  h('h2', '2310 Pico Blvd (between Cloverfield and 23rd)')
)
