// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should round and sum two numbers', () => {
      assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
      assert.equal(calculateNumber('SUM', 0, 0), 0);
      assert.equal(calculateNumber('SUM', -1.4, 4.5), 4);     
    });
  });

  describe('SUBTRACT', () => {
    it('should round and subtract two numbers', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
      assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
      assert.equal(calculateNumber('SUBTRACT', 4.3, -1.7), 5);    
    });
  });

  describe('DIVIDE', () => {
    it('should round and divide two numbers', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
       assert.equal(calculateNumber('DIVIDE', 4.2, -1.5), -3);
    });

    it('should return "Error" when dividing by zero', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

    describe('Edge cases', () => {
    it('should handle edge cases correctly', () => {
        assert.equal(calculateNumber('SUM', 0.1, 0.2), 0);
        assert.equal(calculateNumber('SUBTRACT', 0.6, 0.5), 0);
        assert.equal(calculateNumber('DIVIDE', 0.1, 0.2), 0);
    });
});
});


