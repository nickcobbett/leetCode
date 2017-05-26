// var input = "   a   b ";
var input = "   a   b  c d   e  ";
var input = 'a b c d e f g    h i    j  k l   m    n o p q r s t u v w x y z'
var expected = "e d c b a";

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
  return str.split(' ').map(str => str.trim()).filter(str => str).reverse().join(' ');
};

console.log(reverseWords(input))