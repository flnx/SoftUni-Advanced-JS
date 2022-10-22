const { expect } = require('chai');
const { numberOperations } = require('./03. Number Operations');

describe('numberOperations tests', () => {
  describe('powNumber tests', () => {
    it('returns the pow number of the given number', () => {
      expect(numberOperations.powNumber(1)).to.equal(1);
      expect(numberOperations.powNumber(2)).to.equal(4);
      expect(numberOperations.powNumber(0)).to.equal(0);
    });
  });

  describe('numberOperations tests', () => {
    it('Returns the result if the input is a number', () => {
      expect(numberOperations.numberChecker(1)).to.equal("The number is lower than 100!");
      expect(numberOperations.numberChecker(100)).to.equal("The number is greater or equal to 100!");
      expect(numberOperations.numberChecker(101)).to.equal("The number is greater or equal to 100!");
      expect(numberOperations.numberChecker('1')).to.equal("The number is lower than 100!");
      expect(numberOperations.numberChecker('100')).to.equal("The number is greater or equal to 100!");
      expect(numberOperations.numberChecker('101')).to.equal("The number is greater or equal to 100!");
      expect(numberOperations.numberChecker('')).to.equal("The number is lower than 100!");
      expect(numberOperations.numberChecker([])).to.equal("The number is lower than 100!");
      expect(numberOperations.numberChecker(null)).to.equal("The number is lower than 100!");
      expect(numberOperations.numberChecker(0)).to.equal("The number is lower than 100!");
    });

    it('throws error it can not parse the input into a number', () => {
      expect(() => numberOperations.numberChecker('test')).to.throw("The input is not a number!");
      expect(() => numberOperations.numberChecker({})).to.throw("The input is not a number!");
      expect(() => numberOperations.numberChecker(undefined)).to.throw("The input is not a number!");
    });
  });

  describe('sumArrays tests', () => {
    it('returns an array of numbers', () => {
      expect(numberOperations.sumArrays([1,2,3,4,5],[1,1,1,1,1])).to.deep.equal([2,3,4,5,6]);
      expect(numberOperations.sumArrays([1,2,3,4,5],[-1,-1,-1,-1,-1])).to.deep.equal([0,1,2,3,4]);
      expect(numberOperations.sumArrays([-1,-2,-3,-4,-5],[-1,-1,-1,-1,-1])).to.deep.equal([-2,-3,-4,-5,-6]);
      expect(numberOperations.sumArrays([1,2,3,4,5],[1,1,1,1,1,1])).to.deep.equal([2,3,4,5,6,1]);
      expect(numberOperations.sumArrays([1,2,3,4,5,1],[1,1,1,1,1])).to.deep.equal([2,3,4,5,6,1]);
    });

  });
});
