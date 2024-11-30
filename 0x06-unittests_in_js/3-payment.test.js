const expect = require('chai').expect
const sinon = require('sinon')
const Utils = require('./utils')
const sendPaymentRequestToApi = require('./3-payment')

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments and type SUM', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
    expect(calculateNumberSpy.calledOnce).to.be.true;

    calculateNumberSpy.restore();
  });

  it('validate the usage of the Utils function and correct output', () => {
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub.withArgs('SUM', 100, 20).returns(120);
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);


    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    expect(stub.calledOnce).to.be.true;

    stub.restore();
    consoleSpy.restore();
  });
});
