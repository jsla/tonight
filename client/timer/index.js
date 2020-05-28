var ms = require('ms')
var yo = require('yo-yo')
var fonts = require('google-fonts')
var pretty = require('pretty-ms')

fonts.add({
  Bangers: true
})

var timeEnd = parseInputTime()

module.exports = function () {
  var rotate = require('./rotate')
  window.addEventListener('hashchange', window.location.reload.bind(window.location))

  var el = list()
  setInterval(update, 50)

  var elRotate = document.createElement('div')
  elRotate.style.position = 'absolute'
  elRotate.style.top = 0
  elRotate.style.left = 0
  elRotate.style.mixBlendMode = 'screen'
  elRotate.style['z-index'] = -1

  rotate(elRotate)

  function list () {
    return yo`<div style='
      text-shadow: 0px 3px 3px rgba(0, 0, 0, 1);
      letter-spacing: 5px;
      font-family: Bangers;
      font-size: 200%;
      display: flex;
      justify-content: space-around;
      align-items: center; height: 100vh'>

      <div>
        ${elRotate}
        <h1 style='color: rgba(253, 243, 182, 0.95);'>
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
  if (left < 30 * 1000) {
    return yo`
      <span>
        We will return <br/> very soon
      </span>
    `
  }

  var times = pretty(left, { verbose: true }).split(/\s+/).filter(v => v)
    .reduce(function (memo, cur, i) {
      if (i % 2) {
        memo[i - 1] += ` ${cur}`
      } else {
        memo[i] = cur
      }
      return memo
    }, [])

  return yo`
    <span>
      We will return in <br/> ${times.map(function (t) {
        return yo`<div>${t}</div>`
      })}
    </span>
  `
}

function timeLeft () {
  var left = timeEnd - Date.now()
  return left - (left % 1000)
}

function parseInputTime () {
  var hash = window.location.hash.slice(1) || '1h'
  if (hash.match(/Z$/)) return new Date(hash)

  var timeWords = hash.split('_')

  var timeEnd = Date.now()
  timeWords.forEach(function (w) {
    timeEnd += ms(w)
  })

  return timeEnd
}
