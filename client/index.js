var tonight = require('./tonight')

window.nodeschool
  ? tonight(require('./cards-nodeschool'))
  : tonight(require('./cards'))
