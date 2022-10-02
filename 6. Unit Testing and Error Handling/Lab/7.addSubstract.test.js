const { expect } = require('chai');
const { createCalculator } = require('./7.addSubstract');

describe('basic calculator - add or substract', () => {
  it('add', () => {
    const calc = createCalculator();
    calc.add(5);
    expect(calc.get()).to.equal(5);
  });

  it('subtract', () => {
    const calc = createCalculator();
    calc.subtract(5);
    expect(calc.get()).to.equal(-5);
  });

  it('without parameters', () => {
    const calc = createCalculator();
    expect(calc.get()).to.equal(0);
  });

  it('passing a number as a string', () => {
    const calc = createCalculator();
    calc.add('5');
    expect(calc.get()).to.equal(5);
  });

  it('passing a number as a string 2', () => {
    const calc = createCalculator();
    calc.subtract('5');
    expect(calc.get()).to.equal(-5);
  });

  it('passing a letter', () => {
    const calc = createCalculator();
    calc.add('a');
    expect(calc.get()).to.be.NaN;
  });

  it('passing a letter 2', () => {
    const calc = createCalculator();
    calc.subtract('a');
    expect(calc.get()).to.be.NaN;
  });
});
