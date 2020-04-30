var ms = require('ms')
var yo = require('yo-yo')
var fonts = require('google-fonts')
var pretty = require('pretty-ms')

var rotate = require('./rotate')

fonts.add({
  Bangers: true
})

window.addEventListener('hashchange', window.location.reload.bind(window.location))

var timeWords = (window.location.hash.slice(1) || '1h').split('_')

var timeEnd = Date.now()
timeWords.forEach(function (w) {
  timeEnd += ms(w)
})

module.exports = function () {
  var el = list()
  setInterval(update, 50)

  var elRotate = document.createElement('div')
  elRotate.style.position = 'absolute'
  elRotate.style.top = 0
  elRotate.style.left = 0
  elRotate.style.mixBlendMode = 'screen'
  rotate(elRotate)

  function list () {
    return yo`<div style='
      text-shadow: 0px 2px 2px rgba(0, 0, 0, 1);
      letter-spacing: 5px;
      font-family: Bangers;
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
