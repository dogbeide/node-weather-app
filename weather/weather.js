// a5602d09298a88cc99910ff4d956dca2

const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/a5602d09298a88cc99910ff4d956dca2/${lat},${lng}`,
    json: true,
  }, (error, response, body) => {
    if (error) {
      callback('Error: Unable to connect to forecast.io API servers');
    }
    else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
      });
    }
    else if (response.statusCode === 400) {
      callback('Error: Invalid request parameters to forecast.io API');
    }
    else if (response.statusCode === 403) {
      callback('Error: Invalid request key to forecast.io API');
    }

    // if (!error && response.statusCode === 200) {
    //   tempF = body.currently.temperature;
    //   console.log(tempF);
    // } else {
    //   console.log('Error: Unable to fetch weather from forecast.io API servers');
    // }
  });
}

module.exports.getWeather = getWeather;
