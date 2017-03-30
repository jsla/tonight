require('./style.css')
var h = require('hyperscript')
var fade = require('./fade')
var cards = require('./cards-nodeschool')

var FADE_DURATION = 1000
var SLIDE_DURATION = 15000

window.document.title = 'Tonight at js.la!'

var isPaused = false

appendCards(cards)

window.addEventListener('resize', onResize)
window.addEventListener('hashchange', onRoute)
window.document.addEventListener('keyup', onKey)
setInterval(onInterval, SLIDE_DURATION)

nextCard()

function onInterval () {
  if (!isPaused) nextCard()
}

function onRoute () {
  var route = getRoute()
  showCard(route)
}

function onResize () {
  setTimeout(function () {
    window.location.reload()
  }, 250)
}

function onKey (evt) {
  if (evt.code === 'ArrowRight') nextCard()
  if (evt.code === 'ArrowLeft') prevCard()
  if (evt.code === 'Space') togglePause()
}

function togglePause () {
  isPaused = !isPaused
  if (!isPaused) nextCard()
}

function nextCard () {
  var route = getRoute() + 1
  if (route < 0) route = 0
  if (route >= cards.length) route = 0
  window.location.hash = '/' + route
}

function prevCard () {
  var route = getRoute() - 1
  if (route < 0) route = 0
  if (route >= cards.length) route = 0
  window.location.hash = '/' + route
}

var activeCard
function showCard (i) {
  hideCard(activeCard)
  activeCard = i
  fade(cards[i], 100, FADE_DURATION)
}

function hideCard (i) {
  var card = cards[i]
  if (!card) return
  fade(cards[i], 0, FADE_DURATION)
}

function appendCards (cards) {
  var cardHolder = h('.card-holder', {
    style: {
      position: 'relative',
      width: window.innerWidth + 'px',
      height: window.innerHeight + 'px',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center'
    }
  })

  window.document.body.appendChild(cardHolder)

  cards.forEach(function (card) {
    card.style.opacity = 0
    card.style.position = 'absolute'

    cardHolder.appendChild(card)
  })
}

function getRoute () {
  var routeStr = window.location.hash.replace('#/', '')
  var route = parseFloat(routeStr)
  if (!isFinite(route)) route = -1
  return route
}
