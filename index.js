function splitter(canvas, options) {
  options = options || {}

  var segments = []
    , width = options.width
    , height = options.height
    , cols = options.cols || Math.floor(canvas.width / options.width)
    , rows = options.rows || Math.floor(canvas.height / options.height)
    , x
    , y

  for (y = 0; y < rows; y += 1) {
    for (x = 0; x < cols; x += 1) { // left-to-right, top-to-bottom
      segments.push(segment(canvas, x * width, y * height, width, height))
    }
  }

  return segments
};

function segment(canvas, x, y, width, height) {
  var ctx = canvas.getContext('2d')
    , imageData = ctx.getImageData(x, y, width, height)
    , segment = document.createElement('canvas')

  segment.width = width
  segment.height = height
  ctx = segment.getContext('2d')
  ctx.putImageData(imageData, 0, 0)

  return segment
};

splitter.splitter = splitter
splitter.segment = segment

module.exports = splitter
