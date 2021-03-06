var events = require('./events.json')
var speakerCard = require('./cards/speaker')
var sponsorCard = require('./cards/sponsor')
var sponsorVideoCard = require('./cards/sponsor-video')

var standardCards = [
  // require('./cards/early'),
  require('./cards/coc'),
  require('./cards/drinks')({name: 'js.la/zoom', address: '/stage /bar /lounge /patio'}),
  // require('./cards/nodeschool'),
  // require('./cards/lunch'),
  require('./cards/mentorship'),
  require('./cards/speakers-wanted'),
  require('./cards/youtube'),
  sponsorVideoCard({ name: 'Funkhaus', video: '/video/JSLA-Funkhaus-JobPost.mp4' }),
  require('./cards/sponsors-wanted'),
  require('./cards/slack'),
  require('./cards/volunteer'),
  require('./cards/next'),
  require('./cards/fullstack-node')
]

module.exports = combine(
  standardCards,
  events.current.speakers.map(speakerCard),
  events.current.sponsors.map(sponsorCard)
)

function combine (std, speakers, sponsors) {
  var combined = std.map(card => card)

  var speakerSpacing = std.length / speakers.length
  speakers.forEach(function (speaker, i) {
    var insertAt = ((i + 1) * speakerSpacing) + i
    combined.splice(insertAt, 0, speaker)
  })

  var sponsorSpacing = std.length / sponsors.length
  sponsors.forEach(function (sponsor, i) {
    var insertAt = ((i + 1) * sponsorSpacing) + i
    combined.splice(insertAt, 0, sponsor)
  })

  return combined
}
