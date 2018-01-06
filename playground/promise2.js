const request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {

    addressURI = address.split(' ').join('+');

    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressURI}`,
      json: true,
    }, (error, response, body) => {
      if (error) {
        reject('Error: Unable to connect to Google Maps API.');
      }
      else if (body.status === 'ZERO_RESULTS') {
        reject('Error: Address not found.');
      }
      else if (body.status === 'OK') {
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng,
        });
      }
    });

  });
};

geocodeAddress('Toronto, Ontario').then((address) => {
  console.log(JSON.stringify(address, undefined, 2));
}).catch((errorMessage) => {
  console.log(errorMessage);
});
