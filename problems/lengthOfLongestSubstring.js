var lengthOfLongestSubstring = function(s) {
  var maxCount = 0;
  var count = 0;
  var startIndex = 0;
  var chars = {};

  for (var i = 0; i < s.length; i++) {
    var char = s[i];
    if (!chars.hasOwnProperty(char)) {
      chars[char] = i;
      count++;
    } else {
      var newStrIndex = chars[char];

      for (var k = startIndex; k < newStrIndex; k++) {
        if (k === chars[s[k]]) {
          delete chars[s[k]];
        }
      }

      maxCount = maxCount > count ? maxCount : count;
      count = i - newStrIndex; //update the count
      startIndex = newStrIndex - 1; // update startIndex
      chars[char] = i; // update the index of the char in chars
    }
  }
  return maxCount > count ? maxCount : count;
};

module.exports = lengthOfLongestSubstring;

// console.log(lengthOfLongestSubstring('abcabcbb') === 3); // 'abc'
// console.log(lengthOfLongestSubstring("oiholrxmihbftoarawdazeoubedgtkpityygpvvafwfymgsmcvodbexd") === 11)
// console.log(lengthOfLongestSubstring("eeydgwdykpv") === 7)
// console.log(lengthOfLongestSubstring("abba") === 2)
// console.log(lengthOfLongestSubstring("bziuwnklhqzrxnb") === 11) // 'iuwnklhqzrx'
// console.log(lengthOfLongestSubstring('zqqifzoupifnwyankayhjsuj') === 10);
// console.log(lengthOfLongestSubstring("gehmbfqmozbpripibusbezagafqtypz") === 9) // 'fqmozbpri'
// console.log(lengthOfLongestSubstring('ohvhjdml') === 6); // 'vhjdml'
// console.log(lengthOfLongestSubstring('jbpnbwwd') === 4) // 'jbnp'
// console.log(lengthOfLongestSubstring('bbbbb') === 1); // 'b'
// console.log(lengthOfLongestSubstring('pwwkew') === 3); // 'wke'
// console.log(lengthOfLongestSubstring('dvdf') === 3); // 'vdf'