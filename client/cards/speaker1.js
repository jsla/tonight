var h = require('hyperscript')

module.exports = h('.speaker',
  h('h1', 'Ethics huh!? What is it good for?'),
  h('h2', 'Ryan Bogle'),

  h('img', {
    src: 'https://js.la/images/team/ryan-bogle.jpg',
    style: {width: '512px'}
  })
)
