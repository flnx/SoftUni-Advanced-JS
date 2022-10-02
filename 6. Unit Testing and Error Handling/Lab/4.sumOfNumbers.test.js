const { expect } = require('chai');
const { sum } = require('./4.sumOfNumbers');

describe('Check Sum', () => {
  it('it runs with array of numbers', () => {
    expect(sum([1, 1, 1, 1, 1])).to.equal(5);
  });

  it('must be NaN if there is a string', () => {
    expect(sum(['a'])).to.be.NaN;
  })

  it('must return 0 with an empty array', () => {
    expect(sum([])).to.equal(0);
  })

  it('must return NaN with array of strings', () => {
    expect(sum(['a', 'b', 'c'])).to.be.NaN;
  })
});

