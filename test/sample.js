var pngparse = require("pngparse")
var fs = require("fs")
module.exports = function(cb) {
  pngparse.parse(fs.readFileSync("./test/sample.png"),cb)
}