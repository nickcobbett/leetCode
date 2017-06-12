var bigAray = require('./bigArray.json');

var trap = function(array) {
  var drops = 0;
  var i = 0;
  while (i < array.length) {
    var leftVal = array[i];
    var rightIndex = i + 1;
    var spikes = 0;
    while (leftVal > 0 && array[rightIndex] < leftVal && rightIndex < array.length) { // inclusive?
      if (array[rightIndex] > 0) {
        spikes += array[rightIndex];
      }
      rightIndex++;
    }
    if (array[rightIndex] >= leftVal) {
      drops += ((rightIndex - 1 - i) * leftVal) - spikes;
    }
    console.log('leftVal: ', leftVal);
    console.log('rightIndex: ', rightIndex);
    console.log('drops: ', drops);

    if (rightIndex === array.length) {
      i++
    } else {
      i = rightIndex;
    }
    // i++
  }
  return drops;
};

var testTrap1 = [0,1,0,2,1,0,1,3,2,1,2,1] // passes
var test2 = [4,2,3] // 1 fails
// console.log(trap(bigAray))
console.log(trap(testTrap1));
// console.log(trap(test2));

// for (var i = 0; i < array.length; i++) {