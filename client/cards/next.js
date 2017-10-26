var h = require('hyperscript')

module.exports = h('.next',
  h('h1', {style: {'font-size': '400%'}}, 'Coming Up'),

  h('h1', 'Saturday, December 9th'),

  h('div', {style: {'margin-top': '10%'}},
    h('h1', 'js.soiree'),
    h('h2', 'js.la\'s 3rd Annual Holiday Party')
  ),

  h('div', {style: {'margin-top': '10%'}},
    h('h2', 'Mark your calendar -- tickets will go fast.'),
    h('h2', 'Join the mailing list to get tickets:'),
    h('h2',
      h('span.highlight', 'js.la/subscribe')
    ),
    h('h2', 'Tickets are limited')
  )
)
