var lengthOfLongestSubstring = function(s) {
  if (!s) return 0;
  var maxStr = s[0];
  var maxCount = 1;
  var allSubs = {};

  var i = 0;
  while (i < s.length) {
    var subObj = {};
    var count = 0;

    var subStr = '';

    var rightIndex = i + 1;
    var leftIndex = i;
    var keepSearching = true;
    while ((rightIndex < s.length || leftIndex >= 0) && keepSearching && !allSubs[subStr]) {
      // console.log(leftIndex, rightIndex)

      keepSearching = false;
      var rightChar = s[rightIndex];
      var leftChar = s[leftIndex];

      while (leftChar && !subObj[leftChar]) { // build left
        // console.log('left', leftChar)
        subObj[leftChar] = 1;
        subStr = leftChar.concat(subStr);
        count++;
        leftIndex--;
        leftChar = s[leftIndex];
        keepSearching = true;
        allSubs[subStr] = 1;
      }

      while (rightChar && !subObj[rightChar]) { // build right
        // console.log('rightChar', rightChar)
        subObj[rightChar] = 1;
        subStr += rightChar;
        count++;
        rightIndex++;
        rightChar = s[rightIndex];
        keepSearching = true;
        allSubs[subStr] = 1;
      }

      // console.log('subStr', subStr);
    }
      // console.log(allSubs)

    if (count > maxCount) {
      maxCount = count;
      maxStr = subStr;
    }

    if (i + maxCount < s.length - 1) {
      console.log(i, count);
      i += maxCount;
    } else {
      // i = rightIndex;
      i++;
    }
  }
  console.log('maxStr and maxCount', [maxStr, maxCount]);
  return maxCount;
};

// console.log(lengthOfLongestSubstring("gehmbfqmozbpripibusbezagafqtypz") === 9)
// console.log(lengthOfLongestSubstring("bziuwnklhqzrxnb") === 11) // 'iuwnklhqzrx'
// console.log(lengthOfLongestSubstring('jbpnbwwd') === 4) // 'jbnp'
// console.log(lengthOfLongestSubstring('abcabcbb') === 3); // 'abc'
// console.log(lengthOfLongestSubstring('bbbbb') === 1); // 'b'
// console.log(lengthOfLongestSubstring('pwwkew') === 3); // 'wke'
// console.log(lengthOfLongestSubstring('dvdf') === 3); // 'vdf'
// console.log(lengthOfLongestSubstring('ohvhjdml') === 6); // 'vhjdml'
console.log(lengthOfLongestSubstring('zqqifzoupifnwyankayhjsuj') === 10);