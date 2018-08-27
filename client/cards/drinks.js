var h = require('hyperscript')

module.exports = h('.drinks',
  h('h1', 'Drinks.js @ 9:15pm'),

  h('img', {src: '/img/drinks/logo.png'}),
  h('h1', 'Barkowski'),
  h('h2', '2819 Pico Blvd, Santa Monica, 90405'),
  h('h2', 'On Pico between 28th and 29th')
)
