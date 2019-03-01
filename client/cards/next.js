var h = require('hyperscript')
var nextEvent = require('../events.json').next

module.exports = h('.next', {style: {width: '100%'}},
  h('h1', {style: {'font-size': '400%'}}, 'Next js.la'),

  h('h1', nextEvent.datetime),

  h('div',
    nextEvent.speakers.map(function (speaker) {
      return h('div', {style: {width: '50%', float: 'left', margin: '5% 0'}},
        h('img', {src: speaker.image, height: 300}),
        h('h2', speaker.name),
        h('h3', speaker.title)
      )
    })
  ),

  h('div', {style: {'margin-top': '20%', clear: 'both'}},
    h('h2', 'Join the mailing list to get tickets:'),
    h('h2',
      h('span.highlight', 'js.la/subscribe')
    ),
    h('h2', 'Tickets are limited')
  )
)
