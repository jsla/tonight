var h = require('hyperscript')

module.exports = function ({name, address}) {
  return h('.drinks',
    h('h1', 'Drinks.js @ 9:15pm'),

    h('img', {src: '/img/drinks/logo.png'}),
    h('h1', name),
    h('h2', address)
  )
}
