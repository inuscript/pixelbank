var assert = require("assert")
var sample = require("./sample")
var parse = require("../index")
describe("parse", function() {
  var expect = [ 
    { top: 0, left: 0, color: { r: 255, g: 13, b: 0, a: 255 } },
    { top: 0, left: 1, color: { r: 0, g: 255, b: 0, a: 255 } },
    { top: 0, left: 2, color: { r: 0, g: 0, b: 255, a: 255 } },
    { top: 0, left: 3, color: { r: 0, g: 0, b: 0, a: 0 } },
    { top: 1, left: 0, color: { r: 102, g: 216, b: 238, a: 255 } },
    { top: 1, left: 1, color: { r: 253, g: 151, b: 30, a: 255 } },
    { top: 1, left: 2, color: { r: 166, g: 225, b: 45, a: 255 } },
    { top: 1, left: 3, color: { r: 230, g: 219, b: 115, a: 171 } } 
  ]
  it("test", function(done){
    sample( function(err, res) {
      var result = parse(res)
      assert.deepEqual(result, expect)
      done()
    })
  })
})