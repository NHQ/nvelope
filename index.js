var amod = require('./amod');
var tnorm = require('normalize-time');

module.exports = function(pts, durs, sustain){

	pts = pts.map(amod)
	durs = durs
	return function (t){
		var totalDuration = durs.reduce(function(e,i){return e + i}, 0);
		var tdNormFN = tnorm(t, totalDuration);
		var s = 0;
		var durFNS = durs.map(function(e,i){
			var x = tnorm(t + s, e)
			s += e;
			return x
		})
		var durpercent = durs.map(function(e, i){return e / totalDuration})
		var tn, n, i, fn = 0;
		return envelope
		function envelope(t, sustain){
			tn = tdNormFN(t); 
			if(0 >= tn >= 1) return 0;
			if(tn > durpercent[fn]) fn = (++fn > pts.length - 1 ? 0 : fn)
			return pts[fn](durFNS[fn](t))
		}
		envelope.prototype.loop = function(t){
			tn = tdNormFN(t);
			if(tn < 1) return this(t)
			else { // automatic looping of the whole envelope
				tdNormFN = tnorm(t, totalDuration);
				fn = 0;
				tn = tn - 1;
				return this(t)
                        }
		}

	}
}
