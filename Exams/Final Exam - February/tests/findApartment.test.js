const { expect, assert } = require('chai');
const { findNewApartment } = require('./findApartment');

describe('findApartament', function () {
    it('isGoodLocation', () => {
        assert.equal(findNewApartment.isGoodLocation("Gabrovo",true), "This location is not suitable for you.");
        assert.equal(findNewApartment.isGoodLocation("Turnovo",true), "This location is not suitable for you.");
        assert.equal(findNewApartment.isGoodLocation("Saedinenie",true), "This location is not suitable for you.");
        assert.equal(findNewApartment.isGoodLocation("Sofia",false), "There is no public transport in area.");
        assert.equal(findNewApartment.isGoodLocation("Plovdiv",false), "There is no public transport in area.");
        assert.equal(findNewApartment.isGoodLocation("Varna",false), "There is no public transport in area.");
       //assert.equal(findNewApartment.isGoodLocation("Gabrovo",false), "You can go on home tour!");
       // assert.equal(findNewApartment.isGoodLocation("Turnovo",false), "You can go on home tour!");
       // assert.equal(findNewApartment.isGoodLocation("Saedinenie",false), "You can go on home tour!");
    })
    it('check valid' , () => {
        assert.throw(() => findNewApartment.isGoodLocation(3,'4'), "Invalid input!")
        assert.throw(() => findNewApartment.isGoodLocation('Sofia','4'), "Invalid input!")
        assert.throw(() => findNewApartment.isGoodLocation(3,true), "Invalid input!")
        assert.throw(() => findNewApartment.isGoodLocation(3,false), "Invalid input!")
        assert.throw(() => findNewApartment.isGoodLocation("Plovdiv",4), "Invalid input!")
    })
    it('isLargeEnough', () => {
        // [] not array  ,  [prazen] , not number
        assert.throw(() => findNewApartment.isLargeEnough([],'ddsa'), "Invalid input!")
        assert.throw(() => findNewApartment.isLargeEnough([40,50,60], 'dsds'), "Invalid input!")
        assert.throw(() => findNewApartment.isLargeEnough([], 40), "Invalid input!")
        assert.throw(() => findNewApartment.isLargeEnough([],'40'), "Invalid input!")
        assert.throw(() => findNewApartment.isLargeEnough(1,1), "Invalid input!")
        assert.throw(() => findNewApartment.isLargeEnough('34','44'), "Invalid input!")
        assert.throw(() => findNewApartment.isLargeEnough('saas',10), "Invalid input!")
        assert.throw(() => findNewApartment.isLargeEnough(10,'ytyt'), "Invalid input!")
    })
    it('isItAfordable' , () => {
        assert.equal(findNewApartment.isItAffordable(100,20), "You don't have enough money for this house!")
        assert.equal(findNewApartment.isItAffordable(50,10), "You don't have enough money for this house!")
        assert.equal(findNewApartment.isItAffordable(1000,600), "You don't have enough money for this house!")
        assert.equal(findNewApartment.isItAffordable(20,60), "You can afford this home!")
        assert.equal(findNewApartment.isItAffordable(10,30), "You can afford this home!")
        assert.equal(findNewApartment.isItAffordable(450,700), "You can afford this home!")
    })
    it('isItAfordableValidation' , () => {
        // price and budget are not a number and price and budget are less or equal to 0
        assert.throw(() => findNewApartment.isItAffordable('4','4'), "Invalid input!")
        assert.throw(() => findNewApartment.isItAffordable('4',3), "Invalid input!")
        assert.throw(() => findNewApartment.isItAffordable(4,'5'), "Invalid input!")
        assert.throw(() => findNewApartment.isItAffordable(-1,1), "Invalid input!")
        assert.throw(() => findNewApartment.isItAffordable(1,-1), "Invalid input!")
        //assert.throw(() => findApartament.isItAffordable(1,1), "Invalid input!")
    })
})

// describe('findApartment tests', () => {
//     describe('isGoodLocation tests', () => {
//         it('checks if the location is not suitable', () => {
//             expect(findNewApartment.isGoodLocation('Test', true)).to.equal('This location is not suitable for you.');
//         });
//         it('checks if the location is suitable but no near transport', () => {
//             expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.');
//         });
//         it('checks if the location is suitable', () => {
//             expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
//         });
//         it('throws when params are invalid (string/boolean)', () => {
//             expect(() =>findNewApartment.isGoodLocation('Sofia', 'true')).to.throw();
//             expect(() =>findNewApartment.isGoodLocation('Sofia', 5)).to.throw();
//             expect(() =>findNewApartment.isGoodLocation('true', 'Sofia')).to.throw();
//             expect(() =>findNewApartment.isGoodLocation(['Sofia'], true)).to.throw();
//             expect(() =>findNewApartment.isGoodLocation({}, true)).to.throw();
//             expect(() =>findNewApartment.isGoodLocation(5, true)).to.throw();
//         });
//     });

//     describe('isLargeEnough tests', () => {
//         const apartments = [40, 50, 60];

//         it('tests apartment squares', () => {
//             expect(findNewApartment.isLargeEnough(apartments, 40)).to.equal("40, 50, 60");
//             expect(findNewApartment.isLargeEnough(apartments, 50)).to.equal("50, 60");
//             expect(findNewApartment.isLargeEnough([40], 50)).to.equal("");
//         });

//         it('throws err when input is invalid', () => {
//             expect(() => findNewApartment.isLargeEnough([], 40)).to.throw();
//             expect(() => findNewApartment.isLargeEnough('test', 40)).to.throw();
//             expect(() => findNewApartment.isLargeEnough(5, 40)).to.throw();
//             expect(() => findNewApartment.isLargeEnough([], [])).to.throw();
//             expect(() => findNewApartment.isLargeEnough([], "40")).to.throw();
//             expect(() => findNewApartment.isLargeEnough([], true)).to.throw();
//         });
//     });

//     describe('isItAffordable tests', () => {
//         it('returns correct result if the budget is enough', () => {
//             expect(findNewApartment.isItAffordable(5, 10)).to.equal('You can afford this home!');
//         });

//         it('returns correct result if the budget is not enough', () => {
//             expect(findNewApartment.isItAffordable(11, 10)).to.equal("You don't have enough money for this house!");
//         });

//         it('throws when the input is invalid /number, number/', () => {
//             expect(() => findNewApartment.isItAffordable(11, '10')).to.throw();
//             expect(() => findNewApartment.isItAffordable('11', 10)).to.throw();
//             expect(() => findNewApartment.isItAffordable([], 10)).to.throw();
//             expect(() => findNewApartment.isItAffordable(1, -1)).to.throw();
//             expect(() => findNewApartment.isItAffordable(-1, 1)).to.throw();
//             expect(() => findNewApartment.isItAffordable(1, 0)).to.throw();
//             expect(() => findNewApartment.isItAffordable(0, 1)).to.throw();
//         });
//     });
// });
