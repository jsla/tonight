var text3dParticles = require('text-3d-particles')

module.exports = function jsRotate (el) {
  el.innerHTML = ''

  var opts = {
    width: window.innerWidth,
    height: window.innerHeight,
    text: 'js.la',
    foreground: '#fff',
    background: '#000',
    duration: 60000,
    loop: true,
    fontSize: 200,
    nodeSize: 10,
    density: 4,
    thetaStart: 0 * Math.PI,
    thetaEnd: 2 * Math.PI,
    autoStart: true
  }

  var t3d = text3dParticles(opts)

  el.appendChild(t3d.el)
}
