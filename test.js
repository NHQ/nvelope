var dj = require('./amod');
var e = require('./')

var env = e([[0,0], [0,1], [1,1]], [1])

console.log(env(.5))
