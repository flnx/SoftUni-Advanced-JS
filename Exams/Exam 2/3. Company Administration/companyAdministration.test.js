const { expect } = require('chai');
const { companyAdministration } = require('./companyAdministration');

describe('companyAdministration test', () => {
  
  describe('hiringEmployee test', () => {
    it('test valids', () => {
      const func = companyAdministration.hiringEmployee;
      expect(func('Test', 'Programmer', 3)).to.equal('Test was successfully hired for the position Programmer.');
      expect(func('Test', 'Programmer', 4)).to.equal('Test was successfully hired for the position Programmer.');
    });
    
    it('throws error if the employee is not a programmer', () => {
      const func = companyAdministration.hiringEmployee;
      expect(() => func('Test', 'Firefighter', 3)).to.throw('We are not looking for workers for this position.');
      expect(() => func('Test', 5, 4)).to.throw('We are not looking for workers for this position.');
      expect(() => func('Test', [], 4)).to.throw('We are not looking for workers for this position.');
    });
    
    it('throws error if the employee has less than 3 years of experience', () => {
      const func = companyAdministration.hiringEmployee;
      expect(func('Test', 'Programmer', 2)).to.equal('Test is not approved for this position.');
    });
  })
  
  describe('calculateSalary test', () => {
    it('throws error if the input is not a number', () => {
      const func = companyAdministration.calculateSalary;
      expect(() => func('1')).to.throw('Invalid hours');
      expect(() => func(-5)).to.throw('Invalid hours');
      expect(() => func('test')).to.throw('Invalid hours');
      expect(() => func([])).to.throw('Invalid hours');
    });
    
    it('returns the calculated amount of salary correct', () => {
      const func = companyAdministration.calculateSalary;
      expect(func(0)).to.equal(0);
      expect(func(100)).to.equal(1500);
      expect(func(200)).to.equal(4000);
    });
  })
  
  describe('firedEmployee test', () => {
    it('throws error if the input is invalid', () => {
      const func = companyAdministration.firedEmployee;
      expect(() => func(['Ivan', 'Gosho', 'Pesho'], -1)).to.throw('Invalid input');
      expect(() => func(['Ivan', 'Gosho', 'Pesho'], 3)).to.throw('Invalid input');
      expect(() => func(['Ivan', 'Gosho', 'Pesho'], '3')).to.throw('Invalid input');
      expect(() => func(['Ivan', 'Gosho', 'Pesho'], 'abc')).to.throw('Invalid input');
      expect(() => func([], 'abc')).to.throw('Invalid input');
      expect(() => func([], 5)).to.throw('Invalid input');
      expect(() => func('', 0)).to.throw('Invalid input');
      expect(() => func({}, 0)).to.throw('Invalid input');
      expect(() => func(5, 0)).to.throw('Invalid input');
      expect(() => func('asd', 'asd')).to.throw('Invalid input');
    });
    
    it('it returns array of string when the input is valid', () => {
      const func = companyAdministration.firedEmployee;
      expect(func(['Ivan', 'Gosho', 'Pesho'], 0)).to.equal('Gosho, Pesho');
      expect(func(['Ivan', 'Gosho', 'Pesho'], 1)).to.equal('Ivan, Pesho');
      expect(func(['Ivan', 'Gosho', 'Pesho'], 2)).to.equal('Ivan, Gosho');
    });
  })
})
