
var toColorObj = function(chunk){
  return {
    r: chunk[0],
    g: chunk[1],
    b: chunk[2],
    a: chunk[3],
  }
}

var PixelParser = function(imageData){
  this.data = imageData.data
  this.width = imageData.width
  this.height = imageData.height
}

PixelParser.prototype.getIndex = function(x, y){
  return (x + y * width) * 4
}


PixelParser.prototype.getColor = function(x,y){
  let index = this.getIndex(x, y)
  let end = index + 4
  let chunk = this.data.slice(index, end)
  return toColorObj(chunk)
}

PixelParser.prototype.parse = function(){
  // TODO
  var cols = []
  var h = this.height
  var w = this.width
  for(var y = 0; y < h; y++){
    var row = []
    for(var x = 0; x < w; x++){
      var cell = fn(x, y)
      row[x] = cell
    }
    cols[y] = row
  }
  return cols
}

var parse = function(imageData){
  return new PixelParser(imageData).parse()
}

module.exports = parse
module.exports.parse = parse
module.exports.PixelParser = PixelParser