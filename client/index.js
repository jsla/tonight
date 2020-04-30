var timer = require('./timer')
var tonight = require('./tonight')

start()

function start () {
  if (window.nodeschool) return tonight(require('./cards-nodeschool'))
  if (window.timer) return timer()

  tonight(require('./cards'))
}
