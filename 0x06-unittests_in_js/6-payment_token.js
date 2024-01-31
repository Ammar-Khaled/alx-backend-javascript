/**
 * get payment token from API
 * @param {Boolean} success
 * @returns a resolved Promise representing success if success
 */
const getPaymentTokenFromAPI = (success) => {
  if (success) {
    return Promise.resolve({ data: "Successful response from the API" });
  }
};

module.exports = getPaymentTokenFromAPI;
