const yargs = require('yargs');

// const geocode = require('./geocode/geocode.js');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    address: {
      demand: true,
      alias: 'a',
      describe: 'Where to check weather',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log('----');
    console.log(JSON.stringify(results.address));

    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if (errorMessage){
        console.log(errorMessage);
      } else {
        console.log(
          `It's currently ${weatherResults.temperature}°F.\nIt feel's like ${weatherResults.apparentTemperature}°F.`
        );
      }
    });
  }
});

// lat, lng, callback(errorMessage, results)
