var h = require('hyperscript')

module.exports = h('.drinks',
  h('h1', 'Drinks.js @ 9:15pm'),

  h('img', {src: '/img/drinks/logo.png'}),
  h('h1', 'Alley Lounge'),
  h('h2', '12223 W Washington Blvd, Culver City'),
  h('h2', 'Just east of Centinela')
)
