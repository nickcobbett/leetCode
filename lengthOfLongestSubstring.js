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
      var prevIndex = chars[char];
      console.log('i', i);
      console.log('dup', char);
      console.log('chars before delete', chars);
      // console.log(prevIndex)
      // console.log('startIndex', startIndex)

      if (startIndex === 0 && chars[char] === 0) {
        delete chars[s[0]];
      }
      if (startIndex === 0 && chars[char] === 1) {
        delete chars[s[0]];
        delete chars[s[1]];
      }
      // delete chars[char];
      for (var k = startIndex; k < prevIndex - 1; k++) {
      // for (var k = 0; k < prevIndex - 1; k++) {
        console.log('k', k)
        // console.log('deleted char: ', s[k])
        if (k === chars[s[k]]) delete chars[s[k]];
      }

      console.log('chars after delete', chars);
      console.log('count', count);
      // console.log('new count', i - prevIndex)
      maxCount = maxCount > count ? maxCount : count;
      count = i - prevIndex;
      startIndex = prevIndex - 1; // update startIndex
      chars[char] = i; // update the index of the char in chars
    }
  }
  console.log('maxCount: ', maxCount);
  console.log('last count: ', count);
  return maxCount > count ? maxCount : count;

};

module.exports = lengthOfLongestSubstring;

console.log(lengthOfLongestSubstring("eeydgwdykpv") === 7)

// console.log(lengthOfLongestSubstring("oiholrxmihbftoarawdazeoubedgtkpityygpvvafwfymgsmcvodbexd") === 11)
// console.log(lengthOfLongestSubstring('abcabcbb') === 3); // 'abc'
// console.log(lengthOfLongestSubstring("abba") === 2)
// console.log(lengthOfLongestSubstring("bziuwnklhqzrxnb") === 11) // 'iuwnklhqzrx'
// console.log(lengthOfLongestSubstring('zqqifzoupifnwyankayhjsuj') === 10);
// console.log(lengthOfLongestSubstring("gehmbfqmozbpripibusbezagafqtypz") === 9) // 'fqmozbpri'
// console.log(lengthOfLongestSubstring('ohvhjdml') === 6); // 'vhjdml'
// console.log(lengthOfLongestSubstring('jbpnbwwd') === 4) // 'jbnp'
// console.log(lengthOfLongestSubstring('bbbbb') === 1); // 'b'
// console.log(lengthOfLongestSubstring('pwwkew') === 3); // 'wke'
// console.log(lengthOfLongestSubstring('dvdf') === 3); // 'vdf'