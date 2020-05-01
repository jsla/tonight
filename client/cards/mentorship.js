var h = require('hyperscript')

module.exports = h('.coc',
  h('h1', 'We are starting the 5th round of the'),
  h('h1',
    h('span.highlight', 'js.la Mentorship Program')
  ),

  h('div', {style: {height: '50px'}}),

  h('h1', 'to apply, please visit:'),

  h('h1',
    h('span.highlight', 'js.la/mentorship')
  ),

  h('div', {style: {height: '50px'}})
)
