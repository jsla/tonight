var h = require('hyperscript')

module.exports = function ({name, address}) {
  return h('.drinks',
    h('h1', 'Drinks.js after the talks'),

    h('img', {src: '/img/drinks.svg'}),
    h('h1', 'Join us in a private virtual world'),
    h('h1', 'Keep an eye on #general in js.la/slack for details!'),
  )
}
