var h = require('hyperscript')

module.exports = h('.youtube',
  h('img.frame', {src: '/img/picktrace.jpg',
    style: {
      width: '80%',
      color: 'red',
      'max-height': '90vh'
    }
  })
)
