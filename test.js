var dj = require('./amod');
var Time = require('since-when');

var env = dj([[0,0], [0,1], [1,1], [1,0]])

console.log(env(.5))
