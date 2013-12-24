# nvelope

A general purpose module for audio envelopes, or amplitude modulation.

An audio envelope is amplitude modulation. Ampltiude modulation is is the multiplication of waves.  It is the "timesing" over time. 

With this module you can construct arbitrarily long, multipart amplitude modulations.  You must set the duration of each part, and you can repeat loopo over all or part by manipulating time. 

nvelope returns a constructor, which returns the envelope. The envelope take a single argument, time.

It is meant to be used with a visual interface for drawing curves, which I am building for the html fives.

## example

```js
var  nvelope = require('nvelope');
var amod = nvelope(curves, durations)
```
drumvelope is a now a function which accepts a time value and will return an amplitude value.  time should be between zero and the sum total of all durations.  Any values outside of that will return 0. Then:
```js
var DSPfunction = function(time){
	return Math.sin(time * Math.PI * 2 * 440) * amod(time)
}
```

### curves and durations
curves is an array of arrays, or rayray, each of which is an array of arrays, or rayray, each of which is a set of controlPoints for a quadrtic curve. 

durations is an array of values that correspond to an index in the controlPoints.  Values are the duration in seconds for that curve. 

NOTE: the module determines the total length of your envelope by adding together the durations.  This is important, because the envelope will return zero for any time value falling outside of [0, totalDuration].  That is, the envelope requires a relative time value.  This makes them loopable, by doing this:
```js
var DSP = function(time){
	return sineWave(440) * amod(time % totalDuration)
} 
```
####control points, durations

```js
var controlPoits =  [ 
                      [ 
                        [0,0], [0,4], [1,2] 
                      ], 
                      [ 
                        [1,2], [0,0], [1,0] 
                      ] 
                    ]

var durations = [.2, 1.8] // in seconds
```
That envelope has two sets of control points, an attack and a decay.  The array of durations corresponds to an index each of the curves / controlPoints. In this one, the attack is very short, at .2 seconds, decay long.  You may be able to visualize the two curves represented by the sets of control points, which in this case, have 3 points each.  Note:  a set of control points can have any number, n > 1, of control points. You can construct one long envelope with a single set of control points. 

You probably want each set to normalize the x values to the [0,1] range.  But I don't really understand how this works.  The algorithm is point specific, which works at audio samplerates.  

```
npm install nvelope
```




