var dj = require('./amod');

var env = dj([[0,0], [0,1], [1,1], [1,0]])

console.log(env(.5))
