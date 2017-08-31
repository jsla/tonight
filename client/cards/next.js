var h = require('hyperscript')

module.exports = h('.next',
  h('h1', {style: {'font-size': '400%'}}, 'Next js.la'),

  h('h1', 'Thursday, May 28th at TigerText'),

  h('div', {style: {'margin-top': '10%'}},
    h('h2', 'Brian Mau'),
    h('h2', 'Peer to Peer Video Streaming with WebRTC')
  ),

  /*
  h('div', {style: {'margin-top': '10%'}},
    h('h2', ''),
    h('h2', '')
  ),
  */

  h('div', {style: {'margin-top': '10%'}},
    h('h2', 'Mark your calendar -- tickets will go fast.'),
    h('h2', 'Join the mailing list to get tickets:'),
    h('h2',
      h('span.highlight', 'js.la/subscribe')
    ),
    h('h2', 'Tickets will go fast.')
  )
)
//
//
// .next
//
//   div
//     h1(style='font-size: 400%') Next js.la
//
//     h1 Thursday, February 23rd at GoGuardian
//
//   div(style='margin-top: 5%')
//     h2 Tickets will go fast.
//     h2 Join the mailing list to be notified as soon as tickets are available:
//     h2 <span class='highlight'>js.la/subscribe</span>
