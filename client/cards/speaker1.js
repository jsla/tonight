var h = require('hyperscript')

module.exports = h('.speaker',
  h('h1', 'Why you should (almost) always use stateful components in React'),
  h('h2', 'Aaron Craig'),

  h('img', {src: '/img/speakers/aaron-craig.jpeg', style: {width: '50%'}})
)
