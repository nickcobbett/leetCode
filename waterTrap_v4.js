var bigAray = require('./bigArray.json');

var trap = function(array) {
  var drops = 0;
  var i = 0;
  while (i < array.length - 1) {
    // find divot, comparing two vals l and r
    var l = array[i];
    var r = array[i + 1];

    if (r < l) { // if divot found
      var leftEndHeight = array[l];
      var spikes = 0;// = array[r]; // TODO add to this value all the spikes, and the lower of two ends times 2
      var k = i + 1;

      while (array[k] !== undefined && array[k] <= l) {  //find higher edge comparing all next vals to R
        console.log('%')
        spikes += array[k];
        k++;
      }
      if (k === array.length) {
        i++;
      } else {
        var len = k - i + 1;
        var end = array[k];
        var hgt;
        end > l ? hgt = l : hgt = end;
        spikes += (2 * hgt);
        drops += ((len * hgt) - spikes);
        console.log('end', end)
        console.log('l', l)
        // console.log('hgt', hgt);
        // console.log('spikes', spikes);
        // console.log('len', len);
        // console.log('drops', drops)
        i = k - 1;
      }

    } else {
      i++;
    }
  }
  return drops;
};

var test1 = [0,1,0,2,1,0,1,3,2,1,2,1] // expect 6
var test2 = [4,2,3] // expect 1
var test3 = [4,2,0,3,2,5] // expect 9
// console.log(trap(bigAray))
// console.log(trap(test1));
console.log(trap(test2));
// console.log(trap(test3));

// for (var i = 0; i < array.length; i++) {