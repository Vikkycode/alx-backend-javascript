const expect = require('chai').expect
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should round and sum two numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT', () => {
    it('should round and subtract two numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE', () => {
    it('should round and divide two numbers', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    //   expect(calculateNumber('DIVIDE', 4.2, -1.5)).to.equal(-3);

    });

    it('should return "Error" when dividing by zero', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
    describe('Edge cases', () => {
    it('should handle edge cases correctly', () => {
        expect(calculateNumber('SUM', 0.1, 0.2)).to.equal(0);
        expect(calculateNumber('SUBTRACT', 0.6, 0.5)).to.equal(0);
         expect(calculateNumber('DIVIDE', 0.1, 0.2)).to.equal('Error');
    });
});
});
