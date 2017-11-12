exports.trap = (array) => {
  var a = 0;
  var b = array.length-1;
  var max = 0;
  var leftMax = 0;
  var rightMax = 0;
  while(a <= b){
    leftMax = Math.max(leftMax, array[a]);
    rightMax = Math.max(rightMax, array[b]);
    if (leftMax < rightMax){
      max += (leftMax - array[a]);
      a++;
    } else{
      max += (rightMax - array[b]);
      b--;
    }
  }
  return max;
}