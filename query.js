const axios = require('axios');

var getWeather = (address) => {
  var addressURI = address.split(' ').join('+');
  var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressURI}`;

  axios.get(geocodeURL).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('Address not found.');
    }

    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherURL = `https://api.darksky.net/forecast/a5602d09298a88cc99910ff4d956dca2/${lat},${lng}`;
    console.log('-----');
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL);
  }).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    var summary = response.data.currently.summary;
    var humidity = String(response.data.currently.humidity*100) + '%';

    console.log(`It's currently ${temperature},`);
    console.log(`It feels like ${apparentTemperature},`);
    console.log('Skies:', summary + ',');
    console.log('Humidity:', humidity + ',');
  }).catch((e) => {
    if (e.code === 'ENOTFOUND'){
      console.log('Unable to connect to API');
    } else {
      console.log(e.message);
    }
  });
}

module.exports = {
  getWeather
}
