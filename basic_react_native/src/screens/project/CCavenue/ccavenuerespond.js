export const postRes = function () {
  const ccavEncResponse = ''; // Set the encrypted response
  const workingKey = ''; // Set the working key

  fetch('http://your-node-server-url/ccavResponseHandler', {
    method: 'POST',
    body: JSON.stringify(ccavEncResponse),
    headers: {
      'Content-Type': 'application/json',
    },
  })
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
