var amod = require('./amod');
var tnorm = require('normalize-time');

module.exports = function(pts, durs, sustain){

	pts = pts.map(amod)
	durs = durs
	return function (t){
		return new envelope(t)
		function envelope(start){
			var totalDuration = durs.reduce(function(e,i){return e + i}, 0);
			tdNormFN = tnorm(start, totalDuration);
			var s = 0;
			durFNS = durs.map(function(e,i){
				var x = tnorm(start + s, e)
				s += e;
				return x
			})
			durpercent = durs.map(function(e, i){return e / totalDuration})
			var tn = 0, n, i, fn = 0;
			
			return function(t){
				tn = tdNormFN(t);
				if(1 < tn || tn < 0) return 0
				if(tn > durpercent[fn]) fn = (++fn > pts.length - 1 ? 0 : fn)
				return pts[fn](durFNS[fn](t))
			}
		}
	}
}
