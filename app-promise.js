const fs = require('fs');

const yargs = require('yargs');
const axios = require('axios');

const query = require('./query');

addressOpt = {
  demand: false,
  alias: 'a',
  describe: 'Where to check weather',
  string: true,
}
defaultOpt = {
  demand: false,
  alias: 'd',
  describe: 'Default weather location',
  string: true,
}

const argv = yargs
  .options({
    address: {
      demand: false,
      alias: 'a',
      describe: 'Where to check weather',
      string: true
    },
    default: {
      demand: false,
      alias: 'd',
      describe: 'Set the default weather location (to run with no args)',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var addressURI;
var geocodeURL;
var settings;

if (argv.default) {
  settings = {address: argv.default}
  fs.writeFileSync('settings.json', JSON.stringify(settings, undefined, 2));

} else if (argv.address) {
  query.getWeather(argv.address);

} else {
  if (fs.existsSync('./settings.json')) {
    settings = JSON.parse(fs.readFileSync('settings.json'));
  }
  if (settings && settings != '{}' ){
    query.getWeather(settings.address);
  }
}
