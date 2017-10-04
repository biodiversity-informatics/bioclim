const assignment = require('../src/assignment');
const expect = require('chai').expect;

describe('Excercise 4', function () {

  it('Identify the species with the highest average temperature for the warmest month', function() {
    const speciesA = {
      name: 'Cebus capucinus',
      ocurrences: [
        [7.31658, -76.4412],
        [9.385428, -84.13714],
        [12.171592, -84.3180],
        [-21.176702, -56.449627]
      ]
    };
    const speciesB = {
      name: 'Ateles geoffroyi',
      ocurrences: [
        [15.527, -92.72],
        [13.31667, -88.06667],
        [16.53044, -90.19034],
        [8.451524, -80.111816]
      ]
    };
    const result = assignment.Exercise4(speciesA, speciesB);
    expect(result).to.equal('Cebus capucinus');
  });

});


describe('Excercise 5A', function () {
});

describe('Excercise 5B', function () {
});
