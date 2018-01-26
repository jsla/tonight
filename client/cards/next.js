var h = require('hyperscript')

module.exports = h('.next',
  h('h1', {style: {'font-size': '400%'}}, 'Next js.la'),

  h('h1', 'Thursday, February 22nd'),

  h('div', {style: {'margin-top': '10%'}},
    h('h2', 'Greg Westneat: Render All Over the Damn Place with React Native'),
    h('h2', 'Alex Tamoykin: Serverless Microservices with AWS Lambda and API Gateway')
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
