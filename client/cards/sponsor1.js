var h = require('hyperscript')

module.exports = h('.sponsor',
  h('.map',
    h('img.frame', {
      src: 'https://s3-us-west-2.amazonaws.com/bg-media-site/logo/Betagig_Icon.png',
      style: {width: '512px'}
    })
  )
)
