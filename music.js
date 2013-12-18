var baudio = require('../baudio')({size: 2048 * 2 * 2 * 2 * 2, rate: 8000});
var dj = require('./exp.js');
var oscillators = require('oscillators');
var Time = require('since-when');
var emitter = new require('events').EventEmitter();
var time = Time();
var nv = dj([[[0,0], [0,1], [1,1]], [[1,1], [0,0], [1,0]]], [.2, 1.8]);
var env = nv(0)
var params = {time: 0};
var synth = function(t){
	console.log((t % (1 / ( 1 / 4))* 4) % 1)

//	return oscillators.sine(t, 303) * env((t % (1 / (( 1 / 1.5) * 1.5))) % 1 )
}

baudio.push(synth)
baudio.play()
