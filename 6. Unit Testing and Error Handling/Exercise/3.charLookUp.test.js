const { lookupChar } = require('./3.charLookUp');
const { expect } = require('chai');

describe('lookupChar tests', () => {
  // Valid

  it('returns the correct index position of the first letter', () => {
    expect(lookupChar('hello', 0)).to.equal('h');
  });

  it('returns the correct index position of the last letter', () => {
    expect(lookupChar('hello', 4)).to.equal('o');
  });

  // Invalid when the first parameter is not a string

  it('returns undefined when the first parameter is a number', () => {
    expect(lookupChar(0, 0)).to.be.undefined;
  });
  it('returns undefined when the first parameter is array', () => {
    expect(lookupChar([], 1)).to.be.undefined;
  });
  it('returns undefined when the first parameter is object', () => {
    expect(lookupChar({}, 1)).to.be.undefined;
  });

  // Invalid when the second parameter is not valid (Number && Integer)

  it('returns undefined when the second parameter is float', () => {
    expect(lookupChar('test', 0.5)).to.be.undefined;
  });
  it('returns undefined when the second parameter is a string', () => {
    expect(lookupChar('test', '0')).to.be.undefined;
  });
  it('returns undefined when the second parameter is array', () => {
    expect(lookupChar('test', [])).to.be.undefined;
  });
  it('returns undefined when the second parameter is object', () => {
    expect(lookupChar('test', {})).to.be.undefined;
  });
  it('returns undefined when the second parameter is a string of letters', () => {
    expect(lookupChar('test', 'hi')).to.be.undefined;
  });

  // Incorrect Index Positions
  it('returns "Incorrect index" when the index parameter is less than 0', () => {
    expect(lookupChar('test', -1)).to.equal('Incorrect index');
  });

  it('returns "Incorrect index" when the index parameter is equal or bigger than the string length', () => {
    expect(lookupChar('test', 4)).to.equal('Incorrect index');
    expect(lookupChar('test', 5)).to.equal('Incorrect index');
  });
});
