# pixelbank

Parser for [ImageData](https://developer.mozilla.org/en-US/docs/Web/API/ImageData)

# Usage

```js
var parse = require("pixelbank")

parse(imageData)
// =>
// [
//   { top: 0, left: 0, color: { r: 255, g: 13, b: 0, a: 255 } },
//   { top: 0, left: 1, color: { r: 0, g: 255, b: 0, a: 255 } },
//   ...
// ]

```
or 

```js
var PixelBank = require("pixelbank").PixelBank
var pixelBank = new PixelBank(imageData)
pixelBank.parse()
```

If you use ES2016 module

```js
import parse, { PixelBank } from "pixelbank"
let pixelBank = new PixelBank(imageData)
pixelBank.parse()
// or
parse(imageData)
```


# API

## `parse(imageData)`
Parse `imageData`.
[Uint8ClampedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray) converted like below

```js
{
  top: 10,  // pixel Y position. (0 ~ height)
  left: 20, // pixel X position. (0 ~ width)
  color: {
    r: 30, // red   0 ~ 255
    g: 40, // green 0 ~ 255
    b: 50, // blue  0 ~ 255
    a: 60  // alpha 0 ~ 255
  }
}
```
