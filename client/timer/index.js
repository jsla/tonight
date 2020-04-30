var ms = require('ms')
var yo = require('yo-yo')
var pretty = require('pretty-ms')

var rotate = require('./rotate')

window.addEventListener('hashchange', window.location.reload.bind(window.location))

var timeWords = window.location.hash.slice(1) || '1h'

var timeEnd = Date.now() + ms(timeWords)

module.exports = function () {
  var el = list()
  setInterval(update, 50)

  var elRotate = document.createElement('div')
  elRotate.style.position = 'absolute'
  elRotate.style.top = 0
  elRotate.style.left = 0
  elRotate.style.mixBlendMode = 'screen'
  elRotate.style.zIndex = 9000
  rotate(elRotate)

  function list () {
    return yo`<div style='
      font-size: 200%;
      display: flex;
      justify-content: space-around;
      align-items: center; height: 100vh'>

      <div>
        ${elRotate}
        <h1>
          We will return
        </h1>

        <h1>
          ${displayTime()}
        </h1>
      </div>

    </div>`
  }

  function update () {
    var newTime = Date.now()
    var newList = list(newTime, update)
    yo.update(el, newList)
  }

  document.body.appendChild(el)
}

function displayTime () {
  var left = timeLeft()
  if (left < 30 * 1000) return 'very soon'
  return `in ${pretty(left, { verbose: true })}`
}

function timeLeft () {
  var left = timeEnd - Date.now()
  return left - (left % 1000)
}
