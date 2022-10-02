const { mathEnforcer } = require('./4.mathEnforcer');
const { expect } = require('chai');

describe('mathEnforcer.addFive tests', () => {
  // valid parameters
  it('returns the result when the parameter is a valid number', () => {
    expect(mathEnforcer.addFive(5)).to.equal(10);
  });

  it('returns the result when the parameter is a valid negative number', () => {
    expect(mathEnforcer.addFive(-5)).to.equal(0);
  });

  it('returns the result when the parameter is a float', () => {
    expect(mathEnforcer.addFive(0.2)).to.be.closeTo(5.19, 0.01);
  });

  // invalid parameters
  it('returns undefined when a string is passed', () => {
    expect(mathEnforcer.addFive('5')).to.equal(undefined);
  });
});

describe('mathEnforcer.subtractTen tests', () => {
  // valid parameters
  it('returns the result when the parameter is valid number', () => {
    expect(mathEnforcer.subtractTen(20)).to.equal(10);
  });

  it('returns the result when the parameter is a valid float', () => {
    expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
  });

  it('returns the result when the parameter is less than 10', () => {
    expect(mathEnforcer.subtractTen(10.51)).to.be.closeTo(0.50, 0.01);
  });

  // invalid parameters
  it('returns undefined when a string is passed', () => {
    expect(mathEnforcer.subtractTen('5')).to.equal(undefined);
  });
});

describe('mathEnforcer.sum tests', () => {
  // valid parameters
  it('returns the result when the parameters are valid numbers', () => {
    expect(mathEnforcer.sum(5, 5)).to.equal(10);
  });

  it('returns the result when the parameter are valid and the first one is negative number', () => {
    expect(mathEnforcer.sum(-1, 4)).to.equal(3);
  });

  it('returns the result when the parameter are valid and the second one is negative number', () => {
    expect(mathEnforcer.sum(5, -1)).to.equal(4);
  });

  it('returns the result when the parameters are valid floats', () => {
    expect(mathEnforcer.sum(4.5, 5.51)).to.be.closeTo(10, 0.01);
  });

  // invalid parameters
  it('returns undefined when a string is passed', () => {
    expect(mathEnforcer.sum('5', '5')).to.equal(undefined);
  });

  it('returns undefined when the second parameter is a string', () => {
    expect(mathEnforcer.sum(5, '5')).to.equal(undefined);
  });

  it('returns undefined when the first parameter is a string', () => {
    expect(mathEnforcer.sum('5', 5)).to.equal(undefined);
  });
});
