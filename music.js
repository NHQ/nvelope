var baudio = require('../baudio')({size: 2048 * 2 * 2 * 2 * 2, rate:8000});
var dj = require('./');
var oscillators = require('oscillators');
var Time = require('since-when');
var emitter = new require('events').EventEmitter();
var time = Time();
var env = dj([[[0,0], [0,4], [1,2]], [[1,2], [0,0], [1,0.001]]], [.2, 1.8]);
var env2 = dj([[[0,0], [0,4], [1,2]], [[1,2], [0,0], [1,0]]], [.5, 1.5]);


//var env = nv(0)
//var env2 = nv(0)
var params = {time: 0};
var synth = function(t){
//	console.log(((t % (1 / .25))* 25)%1)
	var z = t % (4);
//	console.log(t)
	v = env(z || (t % (1 / (1 / 4))) * (1 / 4))
//	t = t - 2 % 4

//	if(t <= 2) console.log('v', v)
	var x = oscillators.saw(t, 99) * v
	var y = oscillators.saw(t, 1320) * env2((t % 4))
	return x + y
}


baudio.push(synth)
baudio.play()
