var chai = require('chai');
var expect = chai.expect;
var lengthOfLongestSubstring = require('./lengthOfLongestSubstring.js');


describe("lengthOfLongestSubstring", function() {
  it('should return the length of the longest substring', () => {
    expect(lengthOfLongestSubstring('abba')).to.equal(2);
  });

  it('should return the length of the longest substring', () => {
    expect(lengthOfLongestSubstring('dvdf')).to.equal(3);
  });
  it('should return the length of the longest substring', () => {
    expect(lengthOfLongestSubstring('bbbbb')).to.equal(1);
  });
  it('should return the length of the longest substring', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).to.equal(3);
  });
  it('should return the length of the longest substring', () => {
    expect(lengthOfLongestSubstring('pwwkew')).to.equal(3);
  });
  it('should return the length of the longest substring', () => {
    expect(lengthOfLongestSubstring('ohvhjdml')).to.equal(6);
  });
  it('should return the length of the longest substring', () => {
    expect(lengthOfLongestSubstring('jbpnbwwd')).to.equal(4);
  });
  it('should return the length of the longest substring', () => {
    expect(lengthOfLongestSubstring('bziuwnklhqzrxnb')).to.equal(11);
  });
  it('should return the length of the longest substring', () => {
    expect(lengthOfLongestSubstring('zqqifzoupifnwyankayhjsuj')).to.equal(10);
  });
  it('should return the length of the longest substring', () => {
    expect(lengthOfLongestSubstring('gehmbfqmozbpripibusbezagafqtypz')).to.equal(9);
  });
  it('should return the length of the longest substring', () => {
    expect(lengthOfLongestSubstring('oiholrxmihbftoarawdazeoubedgtkpityygpvvafwfymgsmcvodbexd')).to.equal(11);
  });

  it('should return the length of the longest substring', () => {
    expect(lengthOfLongestSubstring('eeydgwdykpv')).to.equal(7);
  });

});
