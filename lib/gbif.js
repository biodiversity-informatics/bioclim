const util = require('util');
const request = require('request');

const occurrencesUrl = 'https://api.gbif.org/v1/occurrence/search?hasCoordinate=true&limit=1000&year=%d&taxon_key=%s'

function httpGet(url) {
  return new Promise(function(resolve, reject) {
    request(url, function (err, res) {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(res.body));
    });
  });
};

module.exports.searchOccurrences = function (taxonKey, year) {
  const url = util.format(occurrencesUrl, year, taxonKey);
  console.log(url);
  return httpGet(url).then(function (res) {
    if (res.results && res.results.length > 0) {
      return res.results.map(function (entry) {
        return [entry['decimalLatitude'], entry['decimalLongitude']];
      });
    }
    throw new Error('No results');
  });
};


