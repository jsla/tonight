var events = require('./events.json')
var speakerCard = require('./cards/speaker')
var sponsorCard = require('./cards/sponsor')

var standardCards = [
  require('./cards/coc'),
  require('./cards/drinks'),
  require('./cards/nodeschool'),
  require('./cards/lunch'),
  require('./cards/speakers-wanted'),
  require('./cards/youtube'),
  require('./cards/ol'),
  require('./cards/sponsors-wanted'),
  require('./cards/slack'),
  require('./cards/volunteer'),
  require('./cards/next'),
  require('./cards/fullstack-react')
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
