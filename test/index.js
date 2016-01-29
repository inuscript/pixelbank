var assert = require("assert")
var sample = require("./sample")
var parse = require("../index").parse
describe("parse", () => {
  it("test", (done) => {
    sample( function(err, res) {
      var result = parse(res)
      done()
    })
  })
})