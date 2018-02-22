var h = require('hyperscript')

module.exports = function ({title, name, image}) {
  return h('.speaker',
    h('h1', title),
    h('h2', name),

    h('img', {
      src: image,
      style: {width: '512px'}
    })
  )
}
