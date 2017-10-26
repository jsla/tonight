var h = require('hyperscript')

module.exports = h('.speaker',
  h('h1', 'Let\'s Talk about SRI'),
  h('h2', 'Justin Dorfman'),

  h('img', {
    src: 'https://pbs.twimg.com/profile_images/885377513450491904/YND5q_CG_400x400.jpg',
    style: {width: '512px'}
  })
)
