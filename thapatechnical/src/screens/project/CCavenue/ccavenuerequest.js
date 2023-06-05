export const postReq = function () {
  const body = {
    MerchantId: '12345', // Replace with your order ID
    OrderId: '12345', // Replace with the transaction amount
    Currency: 'INR', // Replace with the currency code
    Amount: '1.0', // Replace with the customer's name
    RedirectURL: 'http://localhost:1338/ccavResponseHandler', // Replace with the customer's email address
    CancelURL: 'http://localhost:1338/ccavResponseHandler',
    Language: 'EN', // Replace with the customer's phone number
    // Add any additional fields required by your payment gateway
  }; // Set the request body as needed
  const workingKey = '027F48806D5C02C26E052C8055771EAC'; // Set the working key
  const accessCode = 'AVAF26KC45AF50FAFA'; // Set the access code

  fetch(
    'https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction',
    {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
    .then(response => response.text())
    .then(result => {
      // Handle the response from the server
      console.log(result);
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
};
