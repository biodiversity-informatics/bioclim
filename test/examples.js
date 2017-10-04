const assignment = require('../src/assignment');
const expect = require('chai').expect;

describe('Examples', function () {

  describe('Excercise 4', function () {

    it('Identify the species with the highest average temperature for the warmest month', function () {
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

    it('should retrieve the amount of precipitation for the driest month', function (done) {
      const year = 2010;
      const taxonKey = '5219426';
      assignment.Exercise5A(year, taxonKey, function (result) {
        expect(result).to.equal(0.1);
        done();
      });
    });

  });

  describe('Excercise 5B', function () {

    it('should retrieve the number of measurment that are within the specified range', function (done) {
      const year = 2016;
      const taxonKey = '2433451';
      assignment.Exercise5B(year, taxonKey, function (result) {
        expect(result).to.equal(4);
        done();
      });
    });

  });

});
