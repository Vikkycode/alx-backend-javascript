import Utils from "./utils.js";

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const calculatedTotal = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${calculatedTotal}`);
};

export default sendPaymentRequestToApi;
