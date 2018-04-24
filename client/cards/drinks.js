var h = require('hyperscript')

module.exports = h('.drinks',
  h('h1', 'Drinks.js @ 9:15pm'),

  h('img', {src: '/img/drinks/logo.png'}),
  h('h1', 'The Golden Gopher'),
  h('h2', '417 W 8th St (between Olive and Hill)')
)
