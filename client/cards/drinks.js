var h = require('hyperscript')

module.exports = h('.drinks',
  h('h1', 'Drinks.js @ 9:15pm'),

  h('img', {src: '/img/drinks/logo.png'}),
  h('h1', 'Big Bar at the Alcove Cafe'),
  h('h2', '1927 Hillhurst Ave (Hillhurst & Franklin)')
)
