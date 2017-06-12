var bigAray = require('./bigArray.json');

var trap = function(array) {
  var drops = 0;
  var i = 1;
  while (i < array.length) {

    var spikes = 0;
    var k = i + 1;
    // if (array[i] < array[i - 1]) {
      while (array[i] < array[i - 1] && array[i] >= array[k]) {
        k++;
        spikes += array[k];
      }
    // }

    if (k < array.length) { // case one (maybe !==)
      drops += ((array[i] * (k - 1)) - spikes);

      console.log('drops: ', drops);
      console.log('array[i]', array[i]);
      console.log('k: ', k);
      console.log('spikes: ', spikes);
      console.log('array[i] * (k - 1): ', array[i] * (k - 1));

      i = k;
    } else {
      i++;
    }
  }
  return drops;
};

var test1 = [0,1,0,2,1,0,1,3,2,1,2,1] // passes
var test2 = [4,2,3] // 1 fails
// console.log(trap(bigAray))
// console.log(trap(test1));
console.log(trap(test2));

// for (var i = 0; i < array.length; i++) {