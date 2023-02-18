const { expect } = require('chai');
const { findNewApartment } = require('./findApartment');

describe('findApartment tests', () => {
    describe('isGoodLocation tests', () => {
        it('checks if the location is not suitable', () => {
            expect(findNewApartment.isGoodLocation('Test', true)).to.equal('This location is not suitable for you.');
        });
        it('checks if the location is suitable but no near transport', () => {
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.');
        });
        it('checks if the location is suitable', () => {
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
        });
        it('throws when params are invalid (string/boolean)', () => {
            expect(() =>findNewApartment.isGoodLocation('Sofia', 'true')).to.throw();
            expect(() =>findNewApartment.isGoodLocation('Sofia', 5)).to.throw();
            expect(() =>findNewApartment.isGoodLocation('true', 'Sofia')).to.throw();
            expect(() =>findNewApartment.isGoodLocation(['Sofia'], true)).to.throw();
            expect(() =>findNewApartment.isGoodLocation({}, true)).to.throw();
            expect(() =>findNewApartment.isGoodLocation(5, true)).to.throw();
        });
    });

    describe('isLargeEnough tests', () => {
        const apartments = [40, 50, 60];

        it('tests apartment squares', () => {
            expect(findNewApartment.isLargeEnough(apartments, 40)).to.equal("40, 50, 60");
            expect(findNewApartment.isLargeEnough(apartments, 50)).to.equal("50, 60");
            expect(findNewApartment.isLargeEnough([40], 50)).to.equal("");
        });

        it('throws err when input is invalid', () => {
            expect(() => findNewApartment.isLargeEnough([], 40)).to.throw();
            expect(() => findNewApartment.isLargeEnough('test', 40)).to.throw();
            expect(() => findNewApartment.isLargeEnough(5, 40)).to.throw();
            expect(() => findNewApartment.isLargeEnough([], [])).to.throw();
            expect(() => findNewApartment.isLargeEnough([], "40")).to.throw();
            expect(() => findNewApartment.isLargeEnough([], true)).to.throw();
        });
    });

    describe('isItAffordable tests', () => {
        it('returns correct result if the budget is enough', () => {
            expect(findNewApartment.isItAffordable(5, 10)).to.equal('You can afford this home!');
        });

        it('returns correct result if the budget is not enough', () => {
            expect(findNewApartment.isItAffordable(11, 10)).to.equal("You don't have enough money for this house!");
        });

        it('throws when the input is invalid /number, number/', () => {
            expect(() => findNewApartment.isItAffordable(11, '10')).to.throw();
            expect(() => findNewApartment.isItAffordable('11', 10)).to.throw();
            expect(() => findNewApartment.isItAffordable([], 10)).to.throw();
            expect(() => findNewApartment.isItAffordable(1, -1)).to.throw();
            expect(() => findNewApartment.isItAffordable(-1, 1)).to.throw();
            expect(() => findNewApartment.isItAffordable(1, 0)).to.throw();
            expect(() => findNewApartment.isItAffordable(0, 1)).to.throw();
        });
    });
});
