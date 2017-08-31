var h = require('hyperscript')

module.exports = h('.speaker',
  h('h1', 'The Peer-to-peer Web'),
  h('h2', 'Paul Frazee'),

  h('img', {src: '/img/speakers/paul-frazee.png', style: {width: '50%'}})
)
