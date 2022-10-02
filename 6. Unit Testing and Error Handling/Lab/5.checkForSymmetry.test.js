const { expect } = require('chai');
const { isSymmetric } = require('./5.checkForSymmetry');

describe('Symmetry Check', () => {
  it('runs when symmetric', () => {
    expect(isSymmetric([1, 2, 2, 1])).to.be.true;
  });

  it('runs when symmetric 2', () => {
    expect(isSymmetric([1, 2, 1])).to.be.true;
  });

  it('false when arr is not symmetric', () => {
    expect(isSymmetric([1, 2, 3])).to.be.false;
  });

  it('false when para is a num', () => {
    expect(isSymmetric(2)).to.be.false;
  });

  it('false when paras is a string', () => {
    expect(isSymmetric('asdf')).to.be.false;
  });

  it('false when elements are not the same type', () => {
    expect(isSymmetric([1, 2, '1'])).to.be.false;
  });
});
