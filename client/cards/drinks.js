var h = require('hyperscript')

module.exports = h('.drinks',
  h('h1', 'Drinks.js @ 9:15pm'),

  h('img', {src: '/img/drinks/logo.png'}),
  h('h1', 'Wurstküche'),
  h('h2', '625 Lincoln Blvd, Los Angeles, CA 90291'),
  h('h2', 'Near Rose Ave, between Sunset & Vernon')
)
