var h = require('hyperscript')

module.exports = h('.sponsor',
  h('.map',
    h('img.frame', {
      src: 'http://js.la/images/hosts/host-codesmith.png',
      style: {width: '512px'}
    })
  )
)
