const expect = require('chai').expect;
const sinon = require('sinon');
const Utils = require('./utils.js')
const sendPaymentRequestToApi = require('4-payment')

describe('sendPaymentRequestToApi', () => {
  it('should stub Utils.calculateNumber and verify behavior', () => {
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub.withArgs('SUM', 100, 20).returns(10); // Stub the return value
    const consoleSpy = sinon.spy(console, 'log');  // Spy on console.log

    sendPaymentRequestToApi(100, 20);

    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;

    stub.restore();
    consoleSpy.restore();
  });
});

