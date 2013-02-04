var splitter = require('../')
  , lut = require('lut')

var big = lut(32, 32, 128)

var little = splitter(big, {
  width: 32, height: 32, cols: 128, rows: 1
})

little.forEach(function(canvas) {
  canvas.setAttribute('style', 'padding:10px; margin:0;')
  document.body.appendChild(canvas)
})
