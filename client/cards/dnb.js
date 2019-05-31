var h = require('hyperscript')

module.exports = h('.youtube',
  h('img.frame', {src: '/img/dnb.png',
    style: {
      width: '80%',
      color: 'red',
      'max-height': '90vh'
    }
  }),

  h('h1', 'dnb.com/about-us/careers-and-people.html')
)
