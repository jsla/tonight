var h = require('hyperscript')

module.exports = h('.iframe',
  h('iframe', {
    src: 'https://fullstackreact.com',
    scrolling: 'no',
    style: {
      height: '86%'
    }
  }),
  h('h1', 'FullstackReact.com')
)
