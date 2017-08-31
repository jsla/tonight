var h = require('hyperscript')

module.exports = h('.drinks',
  h('h1', 'Drinks.js @ 9pm'),

  h('img', {src: '/img/drinks/logo.png'}),
  h('h1', 'O\'Briens Irish Pub'),
  h('h2', '2226 Wilshire Blvd, Santa Monica, CA 90403')
)
