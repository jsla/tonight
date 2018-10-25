var h = require('hyperscript')

module.exports = h('.drinks',
  h('h1', 'Drinks.js @ 9:15pm'),

  h('img', {src: '/img/drinks/logo.png'}),
  h('h1', 'The Daily Pint'),
  h('h2', '2310 Pico Blvd, Santa Monica, CA 90405'),
  h('h2', 'On Pico Blvd between 23rd and Cloverfield')
)
