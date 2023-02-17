const { carService } = require('./03.carService');
const { expect } = require('chai');

describe('carService test', () => {
    describe('isItExpensive tests', () => {
        it('valid input - "Engine" or "Transmission"', () => {
            expect(carService.isItExpensive('Engine')).to.equal(
                'The issue with the car is more severe and it will cost more money'
            );
            expect(carService.isItExpensive('Transmission')).to.equal(
                'The issue with the car is more severe and it will cost more money'
            );
            expect(carService.isItExpensive('test')).to.equal(
                'The overall price will be a bit cheaper'
            );
        });
    });

    describe('discount tests', () => {
        it('valid fields - "Engine" or "Transmission"', () => {
            expect(carService.discount(0, 1)).to.equal(
                'You cannot apply a discount'
            );
            expect(carService.discount(1, 1)).to.equal(
                'You cannot apply a discount'
            );
            expect(carService.discount(5, 1)).to.equal(
                'Discount applied! You saved 0.15$'
            );
            expect(carService.discount(10, 10)).to.equal(
                'Discount applied! You saved 3$'
            );
        });

        it('throw error if the inputs are not valid nums', () => {
            expect(() => carService.discount('1', 1)).to.throw('Invalid input');
            expect(() => carService.discount(1, '1')).to.throw('Invalid input');
            expect(() => carService.discount('1', '1')).to.throw(
                'Invalid input'
            );
            expect(() => carService.discount('test', 'test')).to.throw(
                'Invalid input'
            );
            expect(() => carService.discount([], 1)).to.throw('Invalid input');
            expect(() => carService.discount(1, [])).to.throw('Invalid input');
            expect(() => carService.discount(1, {})).to.throw('Invalid input');
            expect(() => carService.discount({}, 1)).to.throw('Invalid input');
            expect(() => carService.discount('1', [])).to.throw(
                'Invalid input'
            );
            expect(() => carService.discount([], '1')).to.throw(
                'Invalid input'
            );
        });
    });

    describe('parts to buy', () => {
        it('returns the expected result when the input is two arrays', () => {
            let arr1 = [
                { part: 'blowoff valve', price: 145 },
                { part: 'coil springs', price: 230 },
            ];
            let arr2 = ['blowoff valve', 'injectors'];
            let arr3 = [
                { part: 'test', price: 0 },
                { part: 'test2', price: 0 },
            ];
            let arr4 = ['test', 'test2'];
            expect(carService.partsToBuy(arr1, arr2)).to.equal(145);
            expect(carService.partsToBuy(arr3, arr4)).to.equal(0);
        });

        it('throws error when the input is invalid', () => {
            expect(() => carService.partsToBuy([], {})).to.throw(
                'Invalid input'
            );
            expect(() => carService.partsToBuy({}, [])).to.throw(
                'Invalid input'
            );
            expect(() => carService.partsToBuy(1, [])).to.throw(
                'Invalid input'
            );
            expect(() => carService.partsToBuy([], 1)).to.throw(
                'Invalid input'
            );
            expect(() => carService.partsToBuy('1', [])).to.throw(
                'Invalid input'
            );
            expect(() => carService.partsToBuy([], '1')).to.throw(
                'Invalid input'
            );
            expect(() => carService.partsToBuy('1', '1')).to.throw(
                'Invalid input'
            );
            expect(() => carService.partsToBuy({}, '1')).to.throw(
                'Invalid input'
            );
            expect(() => carService.partsToBuy('1', {})).to.throw(
                'Invalid input'
            );
            expect(() => carService.partsToBuy('', [])).to.throw(
                'Invalid input'
            );
            expect(() => carService.partsToBuy([], '')).to.throw(
                'Invalid input'
            );
        });
    });
});
