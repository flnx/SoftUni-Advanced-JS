const { expect } = require('chai');
const { chooseYourCar } = require('./03');

describe('chooseYourCar tests', () => {

  describe('choosingCar tests', () => {
    it('returns the result when the year is in range', () => {
      expect(chooseYourCar.choosingType('Sedan', 'green', 2011)).to.equal("This green Sedan meets the requirements, that you have.") 
      expect(chooseYourCar.choosingType('Sedan', 'green', 2010)).to.equal("This green Sedan meets the requirements, that you have.") 
      expect(chooseYourCar.choosingType('Sedan', 'green', 2009)).to.equal("This Sedan is too old for you, especially with that green color.") 
    });
    
    it('throws error if the year is invalid', () => {
      expect(() => chooseYourCar.choosingType('Sedan', 'green', 2023)).to.throw('Invalid Year!') 
      expect(() => chooseYourCar.choosingType('Sedan', 'green', 1899)).to.throw('Invalid Year!') 
    });

    it('throws error if the car is invalid', () => {
      expect(() => chooseYourCar.choosingType('Test', 'green', 2021)).to.throw('This type of car is not what you are looking for.') 
    });
  });

  describe('brandName tests', () => {
    it('removes the element from the array if the index is not out of range', () => {
      expect(chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], 0)).to.equal('Toyota, Peugeot')
      expect(chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], 1)).to.equal('BMW, Peugeot')
      expect(chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], 2)).to.equal('BMW, Toyota')
    });

    it('throws error if the index is invalid', () => {
      expect(() => chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], -1)).to.throw("Invalid Information!");
      expect(() => chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], 3)).to.throw("Invalid Information!");
    });

    it('throws error if the first parameter is not an array', () => {
      expect(() => chooseYourCar.brandName(5, 1)).to.throw("Invalid Information!");
      expect(() => chooseYourCar.brandName('test', 3)).to.throw("Invalid Information!");
      expect(() => chooseYourCar.brandName({}, 3)).to.throw("Invalid Information!");
      expect(() => chooseYourCar.brandName(['test', 'test'], '1')).to.throw("Invalid Information!");
      expect(() => chooseYourCar.brandName(['test', 'test'], 'test')).to.throw("Invalid Information!");
      expect(() => chooseYourCar.brandName(['test', 'test'], [])).to.throw("Invalid Information!");
    });
  });

  describe('carFuelConsumption tests', () => {
    it('returns if the car is efficient or not', () => {
      let car = chooseYourCar.carFuelConsumption
      expect(car(100, 2)).to.equal(`The car is efficient enough, it burns 2.00 liters/100 km.`)
      expect(car(100, 10)).to.equal(`The car burns too much fuel - 10.00 liters!`)
    });

    it('throws error if the input is not valid', () => {
      let car = chooseYourCar.carFuelConsumption
      expect(() => car('100', 2)).to.throw('Invalid Information!');
      expect(() => car(100, '2')).to.throw('Invalid Information!');
      expect(() => car('test', 1)).to.throw('Invalid Information!');
      expect(() => car(100, 'test')).to.throw('Invalid Information!');
      expect(() => car('test', 'test')).to.throw('Invalid Information!');
      expect(() => car([], 1)).to.throw('Invalid Information!');
      expect(() => car(1, [])).to.throw('Invalid Information!');
      expect(() => car({}, [])).to.throw('Invalid Information!');
      expect(() => car({}, 1)).to.throw('Invalid Information!');
      expect(() => car(1, {})).to.throw('Invalid Information!');
      expect(() => car(1, -1)).to.throw('Invalid Information!');
      expect(() => car(-1, -1)).to.throw('Invalid Information!');
      expect(() => car(-1, 1)).to.throw('Invalid Information!');
    });
  })









})