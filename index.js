var amod = require(_-dirname + './amod');
var tnorm = require('normalize-time');

module.exports = function(pts, durs){
	
	pts = pts.map(amod)
	var t = 0;
	var totalDuration = durs.reduce(function(e,i){return e + i}, 0);
	var tdNormFN = tnorm(t, totalDuration);
	var s = 0;
	var end = t + totalDuration;
	var durFNS = durs.map(function(e,i){
		var x = tnorm(t + s, e)
		s += e;
		return x
	})
	var dp = 0;
	var durpercent = durs.map(function(e, i){
		var x = (e / totalDuration) + dp;
		dp+= (e / totalDuration)
		return x
	})
	var tn, n, i, v = 0, fn = 0;
	var envelope = function(t){
		tn = tdNormFN(t);
		if(0 > tn || tn > 1) return 0;
		fn = durpercent.reduce(function(p, e, i, d){return ((d[i-1] || 0) <= tn && tn <= e) ? i : p}, 0)
		v = pts[fn](durFNS[fn](t))
		return v
	}
	return envelope

	// probably deletable
	function xenvelope(t, sustain){
		tn = tdNormFN(t); 
		if(0 >= tn || tn  >= 1) return 0;
		if(tn > durpercent[fn]) fn = (fn + 1 > pts.length - 1 ? 0 : fn + 1)
		v = pts[fn](durFNS[fn](t))
		return v
	}
}

