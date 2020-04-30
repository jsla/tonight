var h = require('hyperscript')

var prefixOpts = { style: { color: 'rgba(255,255,255,0.5)' } }

module.exports = function ({name, address}) {
  return h('.drinks',
    h('h1', 'Drinks.js after the talks'),

    h('img', {src: '/img/drinks.svg'}),
    h('h1', 'Four different venues to choose from:'),
    h('h2',
      h('span', prefixOpts, 'https://js.la/zoom'),
      h('span', '/stage')
    ),
    h('h2',
      h('span', prefixOpts, 'https://js.la/zoom'),
      h('span', '/bar')
    ),
    h('h2',
      h('span', prefixOpts, 'https://js.la/zoom'),
      h('span', '/lounge')
    ),
    h('h2',
      h('span', prefixOpts, 'https://js.la/zoom'),
      h('span', '/patio')
    )
  )
}
