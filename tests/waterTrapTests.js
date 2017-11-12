var chai = require('chai');

var waterTrap = require('./waterTrap.js').trap;

var assert = chai.assert;

describe('waterTrap', function() {
  it('should return 0 for input [0,0,0]', function() {
    var arr = [0,0,0];
    assert.equal(waterTrap(arr), 0);
  });

  it('should return 0 for input [1,0,0]', function() {
    var arr = [1,0,0];
    assert.equal(waterTrap(arr), 0);
  });

  it('should return 1 for input [1,0,1]', function() {
    var arr = [1,0,1];
    assert.equal(waterTrap(arr), 1);
  });

  it('should return 2 for input [1, 0, 0, 1]', function() {
    var arr = [1,0,0,1];
    assert.equal(waterTrap(arr), 2);
  });

  it('should return 1 for input [2, 0, 1]', function() {
    var arr = [2,0,1];
    assert.equal(waterTrap(arr), 1);
  });

  it('should return 2 for input [2, 0, 0, 1]', function() {
    var arr = [2,0,0,1];
    assert.equal(waterTrap(arr), 2);
  });

  it('should return 9 for input [4,2,0,3,2,5]', function() {
    var arr = [4,2,0,3,2,5];
    assert.equal(waterTrap(arr), 9);
  });

  it('should return 6 for input [0,1,0,2,1,0,1,3,2,1,2,1]', function() {
    var arr = [0,1,0,2,1,0,1,3,2,1,2,1];
    assert.equal(waterTrap(arr), 6);
  });

  it('should return 9 for input [4,2,3]', function() {
    var arr = [4,2,3];
    assert.equal(waterTrap(arr), 1);
  });

  it('should return 2 for input [2,0,2]', function() {
    var arr = [2,0,2];
    assert.equal(waterTrap(arr), 2);
  });

  it('should return 3 for input [2,1,0,2]', function() {
    var arr = [2,1,0,2];
    assert.equal(waterTrap(arr), 3);
  });
});


