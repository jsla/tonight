var h = require('hyperscript')

module.exports = h('.speaker',
  h('h1', 'You Get What You Give: '),
  h('h1', 'Becoming a Top Contributor on Popular OSS Projects'),
  h('h2', 'Rouzbeh Sarrafieh'),

  h('img', {
    src: 'https://pbs.twimg.com/profile_images/913900920303362048/02GvFm5s_400x400.jpg',
    style: {width: '512px'}
  })
)
