var h = require('hyperscript')

module.exports = function ({name, logo, url}) {
  return h('.sponsor',
    h('.map',
      h('img.frame', {
        src: logo,
        style: {width: '512px'}
      })
    )
  )
}
