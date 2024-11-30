const Utils = require('./utils');
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const calculatedTotal = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${calculatedTotal}`);
};

module.exports = sendPaymentRequestToApi;

