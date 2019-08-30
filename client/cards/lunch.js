var h = require('hyperscript')

module.exports = h('.youtube',
  h('img.frame', {
    src: '/img/lunch.png',
    style: {width: '80%'}
  }),

  h('h1', 'js.la/lunch')
)
