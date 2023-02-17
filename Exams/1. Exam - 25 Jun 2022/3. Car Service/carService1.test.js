describe('carService tests', () => {
    describe('isItExpensive tests', () => {
        it('Tests for Engine and Transmission', () => {
            expect(carService.isItExpensive('Engine')).to.equal(
                `The issue with the car is more severe and it will cost more money`
            );
            expect(carService.isItExpensive('Transmission')).to.equal(
                `The issue with the car is more severe and it will cost more money`
            );
        });

        it('Tests for the other parts', () => {
            expect(carService.isItExpensive('test')).to.equal(
                `The overall price will be a bit cheaper`
            );
        });
    });

    describe('discount tests', () => {
        it('Tests for 15%/30% discount', () => {
            expect(carService.discount(5, 10)).to.equal(
                `Discount applied! You saved 1.5$`
            );
            expect(carService.discount(3, 10)).to.equal(
                `Discount applied! You saved 1.5$`
            );
        });

        it('Tests for no discount', () => {
            expect(carService.discount(2, 10)).to.equal(
                'You cannot apply a discount'
            );
        });

        it('Tests when both arguments are not numbers', () => {
            expect(() => carService.discount('2', '10')).to.throw();
            expect(() => carService.discount(1, '10')).to.throw();
            expect(() => carService.discount('2', 1)).to.throw();
            expect(() => carService.discount([], '10')).to.throw();
            expect(() => carService.discount('2', [])).to.throw();
            expect(() => carService.discount({}, '10')).to.throw();
        });
    });

    describe('partsToBuy', () => {
        const partsCatalog = [
            { part: 'test1', price: 1 },
            { part: 'test', price: 1 },
        ];

        const partsCatalog2 = [
            { part: 'test1', price: 1 },
            { part: 'test3', price: 1 },
        ];

        const neededParts = ['test1', 'test3'];

        it('tests for the correct returned sum (bought parts)', () => {
            expect(carService.partsToBuy(partsCatalog, neededParts)).to.equal(
                1
            );
            expect(carService.partsToBuy(partsCatalog2, neededParts)).to.equal(
                2
            );
        });

        it('throws if the parameters are not arrays', () => {
            expect(() => carService.partsToBuy([], {})).to.throw();
            expect(() => carService.partsToBuy([], '1')).to.throw();
            expect(() => carService.partsToBuy(5, {})).to.throw();
            expect(() => carService.partsToBuy('5', '10')).to.throw();
            expect(() => carService.partsToBuy(5, 10)).to.throw();
        });
    });
});
