const { expect } = require('chai');
const { testNumbers } = require('./testNumbers');

describe('testNumbers tests' , () => {

  describe('sumNumbers tests' , () => {
    it('returns the correct result if the input is correct (2 numbers), rounded up to the second decimal point', () => {
      expect(testNumbers.sumNumbers(0, 0)).to.equal('0.00')
      expect(testNumbers.sumNumbers(1, 1)).to.equal('2.00')
      expect(testNumbers.sumNumbers(10, 10)).to.equal('20.00')
      expect(testNumbers.sumNumbers(-1, 5)).to.equal('4.00')
      expect(testNumbers.sumNumbers(-1, -1)).to.equal('-2.00')
      expect(testNumbers.sumNumbers(0.5, 0.5)).to.equal('1.00')
    });

    it('returns undefined if the input is invalid (not numbers)', () => {
      expect(testNumbers.sumNumbers(1, '1')).to.be.undefined;
      expect(testNumbers.sumNumbers(1, '-1')).to.be.undefined;
      expect(testNumbers.sumNumbers(1, [])).to.be.undefined;
      expect(testNumbers.sumNumbers(1, 'test')).to.be.undefined;
      expect(testNumbers.sumNumbers('1', 1)).to.be.undefined;
      expect(testNumbers.sumNumbers('-1', 1)).to.be.undefined;
      expect(testNumbers.sumNumbers([], 1)).to.be.undefined;
      expect(testNumbers.sumNumbers('test', 1)).to.be.undefined;
    })
  });


  describe('numberChecker tests' , () => {
    it('returns "odd or even" after parsing the input to a number', () => {
      expect(testNumbers.numberChecker('0')).to.equal("The number is even!");
      expect(testNumbers.numberChecker('1')).to.equal("The number is odd!");
      expect(testNumbers.numberChecker('2')).to.equal("The number is even!");
      expect(testNumbers.numberChecker(0)).to.equal("The number is even!");
      expect(testNumbers.numberChecker(1)).to.equal("The number is odd!");
      expect(testNumbers.numberChecker(2)).to.equal("The number is even!");
      expect(testNumbers.numberChecker(-1)).to.equal("The number is odd!");
      expect(testNumbers.numberChecker(-2)).to.equal("The number is even!");
      expect(testNumbers.numberChecker([])).to.equal("The number is even!");
      expect(testNumbers.numberChecker([1])).to.equal("The number is odd!");
      expect(testNumbers.numberChecker([2])).to.equal("The number is even!");
      expect(testNumbers.numberChecker('')).to.equal("The number is even!");
      expect(testNumbers.numberChecker(null)).to.equal("The number is even!");
      
    });

    it('throws error if the input is not a number', () => {
      expect(() => testNumbers.numberChecker('test')).to.throw("The input is not a number!");
      expect(() => testNumbers.numberChecker({})).to.throw("The input is not a number!");
      expect(() => testNumbers.numberChecker(undefined)).to.throw("The input is not a number!");
    });


    describe('sumNumbers tests' , () => {
      it('returns the correct result if the input is correct (2 numbers), rounded up to the second decimal point', () => {
        expect(testNumbers.averageSumArray([1, 2, 3, 4, 5])).to.deep.equal(3);
        expect(testNumbers.averageSumArray([10, 20, 30, 40, 50])).to.deep.equal(30);
      });
    });
  });
});
