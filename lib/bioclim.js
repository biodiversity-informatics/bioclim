const gdal = require('gdal');
const path = require('path');

// Bioclim file constants (can be read from metadata)
const ULXMAP = -179.9166666666667;
const ULYMAP = 89.91666666666667;
const XDIM = 0.166666666666667;
const YDIM = 0.166666666666667;

function loadDataset(climateVarIdx) {
  const fileName = "bio" + climateVarIdx + ".bil"
  const filePath = path.join(__dirname, "..", "datasets", fileName);
  console.log(filePath);
  return gdal.open(filePath).bands.get(1);
};

module.exports.queryCoordinates = function(climateVarIdx, coords) {
  const dataset = loadDataset(climateVarIdx);
  const measurements = [];
  coords.forEach(function (coord) {
    var y = (ULYMAP - coord[0]) / YDIM;
    var x = (coord[1] - ULXMAP) / XDIM;
    x = Math.floor(x) % dataset.size.x;
    y = Math.floor(y) % dataset.size.y;
    const values = dataset.pixels.read(x, y, 1, 1);
    if (values.length > 0 && values[0] !== dataset.noDataValue) {
      // Divide value by 10 to account for BioClim data format
      measurements.push(values[0] / 10);
    }
  });
  return measurements;
};
