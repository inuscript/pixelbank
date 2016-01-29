var assert = require("assert")
var mat = require("../matrix").matrix

    var iter = mat(3,3)
    var result = []
    for(var m of iter){
      result.push(m)
    }
console.log(result)
// 
// describe("iterator", () => {
//   it("test", () => {
//     var expect = [
//       { x: 0, y: 0 } ,
//       { x: 1, y: 0 } ,
//       { x: 2, y: 0 } ,
//       { x: 0, y: 1 } ,
//       { x: 1, y: 1 } ,
//       { x: 2, y: 1 } ,
//       { x: 0, y: 2 } ,
//       { x: 1, y: 2 } ,
//       { x: 2, y: 2 } 
//     ]
//     var iter = map(3,3)
//     var result = []
//     for(var m of iter){
//       result.push(m)
//     }
//     assert.deepEqual(expect, result)
//   })
// })