var h = require('hyperscript')

module.exports = function ({name, video}) {
  return h('.sponsor',
      h('video.frame', {
        src: video,
        style: {width: '100%'},
        autoplay: true,
        loop: true
      })
    )
}
