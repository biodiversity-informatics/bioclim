const bioclim = require('../lib/bioclim');
const gbif = require('../lib/gbif');

// Types
// -----
//
// type Species {
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
//
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
//
//   gbif.searchOccurrences('2435098', 2010).then(function (coords) {
//     console.log(coords.length);
//   }).catch(function (err) {
//     console.error(err);
//   });
//
//   Output:
//   -------
//
//   150

// Compare temperatures
module.exports.Exercise4 = function (speciesA, speciesB) {
  speciesA = {
    name: "Canis lupus",
    ocurrences: [
        [44.94597, 5.585095],
        [33.731491, -111.746063],
        [60.898045, 12.086279],
        [28.799253, -17.760086]
    ]
  };
  speciesB = {
    name: "Canis latrans",
    ocurrences: [
        [42.330972, -72.54004],
        [18.54291, -95.157437],
        [10.46777, -85.133079],
        [51.120145, -113.863775]
    ]
  };
  let avg = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
  let avgA = avg(bioclim.queryCoordinates(5, speciesA.ocurrences));
  let avgB = avg(bioclim.queryCoordinates(5, speciesB.ocurrences));
  if (avgA > avgB) {
    return speciesA.name;
  } else {
    return speciesB.name;
  }
};

// Lowest precipitation
module.exports.Exercise5A = function (year, taxonKey, callback) {
  year = 2010;
  taxonKey = 5219426;
  callback = n => { console.log(n) };
  gbif.searchOccurrences(taxonKey, year).then(function (coords){
    var values = bioclim.queryCoordinates(14, coords);
    console.log(values);
    callback(Math.min.apply(null, values));
  })
};

// Temperature in range
module.exports.Exercise5B = function (year, taxonKey, callback) {
  year = 2016;
  taxonKey = 2433451;
  callback = n => { console.log(n) };
  gbif.searchOccurrences(taxonKey, year).then(function (coords){
    var values = bioclim.queryCoordinates(11, coords);
    console.log(values);
    let result = values.filter(x => x <= -10 && x >= -20).length;
    callback(result);
  })
};

let r = module.exports.Exercise4(null, null);
console.log(r);
module.exports.Exercise5A(null, null, null);
module.exports.Exercise5B(null, null, null);
