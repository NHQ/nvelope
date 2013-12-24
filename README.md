# nvelope

A general purpose module for audio envelopes, or amplitude modulation.

An audio envelope is essently amplitude modulation.  Ampltiude modulation is is the multiplication of waves.  It is the "timesing" over time. 
With this module you can construct arbitrarily long, multipart amplitude modulations.  You must set the duration of each part, and you can repeat loopo over all or part by manipulating time. 

nvelope returns a constructor, which returns the envelope.  

It is meant to be used with a visual interface for drawing curvilinear shapes.

## example

```js
var  nvelope = require('nvelope');
var drumvelope = nvelope(curves, durations)
```
drumvelope is a now a function which accepts a time value will return an amplitude value.  time should be between zero and the sum total of all durations.  Any values outside of that will return 0.

### curves and durations
curves is an array of arrays, or rayray, each of which is an array of arrays, or rayray, each of which is a set of controlPoints for a quadrtic curve. 

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
That envelope has two sets of control points, an attack and a decay.  The array of durations corresponds to an index each of the curves / controlPoints. In this one, the attack is very short, at .2 seconds, decay long.  You may be able to visualize the two curves represented by the sets of control points, which in this case, have 3 points each.  Note:  a set of control points can have any number, n > 1, of control points.  

You probably want each set to normalize the x values to the [0,1] range.  But I don't really understand how this works.  The algorithm is point specific, which works at audio samplerates.  



```
npm install nvelope
```




