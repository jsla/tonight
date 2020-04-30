var h = require('hyperscript')

module.exports = h('.youtube',
  h('img.frame', {src: '/img/js.la-youtube.png',
    style: {
      width: '80%',
      color: 'red',
      'max-height': '90vh'
    }
  }),

  h('h1', 'js.la/youtube')
)
