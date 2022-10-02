const { isOddOrEven } = require('./2.evenOrOdd');
const { expect } = require('chai');

describe('isOddOrEven tests', () => {
  // valid
  it('return even when it is a valid string', () => {
    expect(isOddOrEven('Mimi')).to.equal('even');
  });

  it('return odd when it is a valid string', () => {
    expect(isOddOrEven('Sofia')).to.equal('odd');
  });

  // invalid
  it('return undefined when there is no parameters', () => {
    expect(isOddOrEven()).to.equal(undefined);
  });

  it('return undefined when number is passed', () => {
    expect(isOddOrEven(5)).to.equal(undefined);
  });

  it('return undefined when empty arr is passed', () => {
    expect(isOddOrEven(['str'])).to.equal(undefined);
  });

  it('return undefined when object is passed', () => {
    expect(isOddOrEven({})).to.equal(undefined);
  });
});
