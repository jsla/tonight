var h = require('hyperscript')

module.exports = h('.sponsor',
  h('.map',
    h('img.frame', {
      src: 'http://js.la/images/hosts/sponsor-dollar-shave-club.png',
      style: {width: '512px'}
    })
  )
)
