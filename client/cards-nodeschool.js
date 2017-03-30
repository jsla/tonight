var h = require('hyperscript')

module.exports = [
  card(['Wifi: CODESMITH', 'Pass: ilovetesting']),
  card(['For Workshoppers go to:', 'nodeschool.io/#workshopper-list']),
  card([
    'NodeSchool is brought to you by',
    'the organizers of js.la',
    'js.la is every month on the last Thursday',
    'go to js.la/subscribe'
  ]),
  card(['🍕 in the Kitchen']),
  card(['lunch.js on Tuesday in a neighborhood near you:', 'go to lunch.js.la']),
  card(['Join our #slack channel:', 'js.la/slack', '#nodeschool']),
  card(['Stuck?', 'Ask a neighbor or mentor!']),
  card(['Nodeschool:', 'Every month on the first Saturday'])
]

function card (lines) {
  return h('.drinks', lines.map(function (line) {
    return h('h1', line)
  }))
}
