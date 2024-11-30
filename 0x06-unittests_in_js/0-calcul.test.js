const assert = require('assert')
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
    it('should round and sum two numbers', ()=>{
        assert.equal(calculateNumber(1,3),4);
        assert.equal(calculateNumber(1, 3.7), 5);
        assert.equal(calculateNumber(1.2, 3.7), 5);
        assert.equal(calculateNumber(1.5, 3.7), 6);
        assert.equal(calculateNumber(1.4, 4.2), 5);
        assert.equal(calculateNumber(1.4, 0), 1);
        assert.equal(calculateNumber(0, 1.7), 2);
        assert.equal(calculateNumber(0.1, 0.2), 0); // Edge case: both round to 0
        assert.equal(calculateNumber(0.5, 0.6), 2); // Edge case: both round up
        assert.equal(calculateNumber(-1.2, 3.7), 3); // Test with negative number
        assert.equal(calculateNumber(1.2, -3.7), -3); // Test with negative number
        assert.equal(calculateNumber(1.6, 3.8), 6);
        assert.equal(calculateNumber(0.1, 0.9), 1); // Edge case near boundaries
        assert.equal(calculateNumber(1.1, 0.1), 1);
    });

    it('should round a and b correctly with decimal values', () => {
        assert.equal(calculateNumber(1.1, 3.1), 4); // Both round down
        assert.equal(calculateNumber(1.5, 3.5), 6); // Both round up
        assert.equal(calculateNumber(1.4, 3.6), 5); // One rounds down, one rounds up
    });
});
