const bioclim = require('../lib/bioclim');
const gbif = require('../lib/gbif');

// Types
// -----
//
// type Specie {
//   name: string
//   ocurrences: Coordinate[]
// }
//
// type Coordinate number[2]

// Bioclim Usage
// -------------
//
//   bioclim.queryCoordinates(climateVarIdx: number, coords: Coordinate[])
//
//   Returns
//   -------
//
//   A list of numbers
//
//   Example:
//   --------
//
//   const measurements = bioclim.queryCoordinates(1, [[0, 0], [10, 10], [20, 20]])
//   measurements.forEach(function (val) {
//      console.log(val);
//   });
//
//   Output:
//   -------
//   25.7
//   24.9

// GBIF Usage
// ----------
//
//   gbif.searchOccurrences(taxonKey: string, year: number)
//
//   Returns
//   -------
//
//   A promise for a list of coordinates (Coodinate type)
//
//   Example:
//   --------
//   gbif.searchOccurrences('2435098', 2010).then(function (coords) {
//     console.log(coords.length);
//   }).catch(function (err) {
//     console.error(err);
//   });
//
//   Output:
//   -------
//   150

// Compare temperatures
module.exports.Exercise4 = function (speciesA, speciesB) {
};

// Lowest precipitation
module.exports.Exercise5A = function (year, taxonKey) {
};

// Temperature in range
module.exports.Exercise5B = function (year, taxonKey) {
};

