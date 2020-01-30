var h = require('hyperscript')

module.exports = h('.iframe',
  h('iframe', {
    src: 'https://www.newline.co/fullstack-nodejs',
    scrolling: 'no',
    style: {
      height: '86%'
    }
  }),
  h('h1', 'newline.co/fullstack-nodejs')
)
