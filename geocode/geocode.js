const request = require('request');

var geocodeAddress = (address, callback) => {

  if (address) {
    addressURI = address.split(' ').join('+');

    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressURI}`,
      json: true,
    }, (error, response, body) => {
      // var bodyStr = JSON.stringify(body, undefined, 2);
      // var responseStr = JSON.stringify(response, undefined, 2);
      // fs.writeFileSync('response.json', responseStr);
      if (error) {
        callback('Error: Unable to connect to Google Maps API.');
      }
      else if (body.status === 'ZERO_RESULTS') {
        callback('Error: Address not found.');
      }
      else if (body.status === 'OK') {
        callback(undefined, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng,
        });
      }
    });

  }

}

// module.exports = {
//   geocodeAddress,
// }
module.exports.geocodeAddress = geocodeAddress;
