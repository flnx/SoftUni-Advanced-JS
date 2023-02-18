const { expect } = require('chai');
const { rentCar } = require('./rentCar');

describe('rentCar tests', () => {
    describe('searchCar tests', () => {
        const shop = ['test1', 'test2', 'test3'];
        it('It shows the correct car model in the shop', () => {
            expect(rentCar.searchCar(shop, 'test1')).to.equal(`There is 1 car of model test1 in the catalog!`);
        });

        it('Throws error when the model is not found', () => {
            expect(() => rentCar.searchCar(shop, 'test4')).to.throw();
        });

        it('throws is any of the inputs are not valid (array / string)', () => {
            expect(() => rentCar.searchCar('a', 'b')).to.throw();
            expect(() => rentCar.searchCar([], 'b')).to.throw();
            expect(() => rentCar.searchCar([], 5)).to.throw();
            expect(() => rentCar.searchCar({}, 'b')).to.throw();
        });
    });

    describe('calculatePriceOfCar tests', () => {
        it('throws error if the input is invalid (string/number)', () => {
            expect(() => rentCar.calculatePriceOfCar(1, 1)).to.throw();
            expect(() => rentCar.calculatePriceOfCar('1', '1')).to.throw();
            expect(() => rentCar.calculatePriceOfCar('5', [])).to.throw();
            expect(() => rentCar.calculatePriceOfCar([], '1')).to.throw();
        });

        it('returns the correct price if the models exists', () => {
            expect(rentCar.calculatePriceOfCar('BMW', 5)).to.equal('You choose BMW and it will cost $225!');
        });

        it('throws error if the model does not exist', () => {
            expect(() => rentCar.calculatePriceOfCar('test', 5)).to.throw();
        });
    });

    describe('checkBudget tests', () => {
        it('throws error if the 3 parameters are not numbers', () => {
            expect(() => rentCar.checkBudget('1', 2, 3)).to.throw();
            expect(() => rentCar.checkBudget(1, '2', 3)).to.throw();
            expect(() => rentCar.checkBudget(1, 2, '3')).to.throw();
            expect(() => rentCar.checkBudget([], 2, 3)).to.throw();
            expect(() => rentCar.checkBudget(1, [], 3)).to.throw();
            expect(() => rentCar.checkBudget(1, 2, [])).to.throw();
            expect(() => rentCar.checkBudget({}, 2, 3)).to.throw();
            expect(() => rentCar.checkBudget(1, {}, 3)).to.throw();
            expect(() => rentCar.checkBudget(1, 2, {})).to.throw();
        });


        it('Rents the car successfully', () => {
            expect(rentCar.checkBudget(1, 5, 5)).to.equal('You rent a car!');
            expect(rentCar.checkBudget(1, 5, 10)).to.equal('You rent a car!');
        });

        it('Could not rent a car', () => {
            expect(rentCar.checkBudget(1, 5, 4)).to.equal('You need a bigger budget!');
        });
    });
});