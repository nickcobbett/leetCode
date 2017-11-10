/**
 * @param {string} s
 * @return {number}
 */

// Given a string, find the length of the longest substring without repeating characters.
  // hash table
  // two pointers

var lengthOfLongestSubstring = function(s) {
  var maxStr = '';
  var maxCount = 0;
  for (var i = 0; i < s.length; i++) {
    var subStr = '';
    var subObj = {};
    var count = 0;
    for (var j = i; j < s.length; j++) {
      var char = s[j];
      if (!subObj[char]) {
        subObj[char] = 1;
        subStr += char;
        count++;
      } else {
        break;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      maxStr = subStr;
    }
  }
  // console.log('result: ', maxStr);
  return maxCount;
};

console.log(lengthOfLongestSubstring('abcabcbb') === 3); // 'abc'
console.log(lengthOfLongestSubstring('bbbbb') === 1); // 'b'
console.log(lengthOfLongestSubstring('pwwkew') === 3); // 'wke'