var pngparse = require("pngparse")
var fs = require("fs")
module.exports = (cb) => {
  pngparse.parse(fs.readFileSync("./test/sample.png"),cb)
}