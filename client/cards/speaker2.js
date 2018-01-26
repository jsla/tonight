var h = require('hyperscript')

module.exports = h('.speaker',
  h('h1', 'Monkey Patching CSRF Away'),
  h('h2', 'Joe Rozner'),

  h('img', {
    src: 'https://pbs.twimg.com/profile_images/753631737163321344/uHROI07o_400x400.jpg',
    style: {width: '512px'}
  })
)
