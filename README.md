# canvas-splitter #

**Deprecated: this is more efficient by not creating multiple canvas contexts.**

Split a big canvas element into a grid of lots of little canvas elements.
Useful for spritemaps and the like.

## Installation ##

``` bash
$ npm install canvas-splitter
```

## Usage ##

**`splitter(canvas, options)`**

Break up the canvas element, returning an array of the resulting canvas
elements. Options include:

* `width`: The width of each cell.
* `height`: The height of each cell.
* `rows`: The vertical number of cells to include. *Optional.*
* `cols`: The horizontal number of cells to include. *Optional.*

**`splitter.segment(canvas, x, y, width, height)`**

Returns a smaller copy of the canvas.

``` javascript
var splitter = require('splitter')
  , lut = require('lut')

// Create a 1024x32 colour table canvas element.
var big = lut(32, 32, 32)

// Turn that table into 32 little
// colour tables, which are 32x32 each.
var little = splitter(big, {
  width: 32, height: 32, rows: 1, cols: 32
})
```
