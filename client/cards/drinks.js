var h = require('hyperscript')

module.exports = h('.drinks',
  h('h1', 'Drinks.js @ 9:15pm'),

  h('img', {src: '/img/drinks/logo.png'}),
  h('h1', 'Ye Olde Kings Head'),
  h('h2', '116 Santa Monica Blvd, Santa Monica, CA 90401'),
  h('h2', 'On Santa Monica Blvd between 2nd and Ocean (2 blocks south)')
)
