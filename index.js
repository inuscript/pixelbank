
var toColorObj = function(clamp){
  return {
    r: clamp[0],
    g: clamp[1],
    b: clamp[2],
    a: clamp[3],
  }
}

var PixelParser = function(imageData){
  this.data = imageData.data
  this.width = imageData.width
  this.height = imageData.height
}

PixelParser.prototype.getIndex = function(x, y){
  return (x + y * this.width) * 4
}


PixelParser.prototype.getColor = function(x,y){
  var index = this.getIndex(x, y)
  var end = index + 4
  var clamp = this.data.slice(index, end)
  return toColorObj(clamp)
}

PixelParser.prototype.parse = function(){
  // TODO
  var pixels = []
  var h = this.height
  var w = this.width
  for(var y = 0; y < h; y++){
    for(var x = 0; x < w; x++){
      pixels.push({
        top: y,
        left: x,
        color: this.getColor(x, y)
      })
    }
  }
  return pixels
}

var parse = function(imageData){
  return new PixelParser(imageData).parse()
}

module.exports = parse
module.exports.parse = parse
module.exports.PixelParser = PixelParser