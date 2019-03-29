var h = require('hyperscript')

module.exports = h('.iframe',
  h('iframe', {
    src: 'https://nodeschool.io/los-angeles/',
    scrolling: 'no',
    style: {
      height: '86%'
    }
  }),
  h('h1', 'js.la/nodeschool')
)
