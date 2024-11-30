import Utils from "./utils.js";

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const calculatedTotal = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${calculatedTotal}`);
  return calculatedTotal; // Return the calculated total
}



export default sendPaymentRequestToApi;
