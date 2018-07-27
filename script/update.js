var fs = require('fs')
var path = require('path')
var fetchAdmin = require('./fetch-admin')
var extractShow = require('./extract-show')

fetchAdmin(function (err, everything) {
  if (err) {
    console.error(err)
    return process.exit(1)
  }

  // var current = extractShow(everything)
  var current = extractShow(everything, Date.now() - (7 * 24 * 3600 * 1000))
  var next = extractShow(everything, Date.now() + (7 * 24 * 3600 * 1000))

  var fn = path.join(__dirname, '../client/events.json')
  fs.writeFile(fn, JSON.stringify({current, next}, null, 2), function () {})
})
