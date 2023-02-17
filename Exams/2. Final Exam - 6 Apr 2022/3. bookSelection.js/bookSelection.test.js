const { expect } = require('chai');
const { bookSelection } = require('./bookSelection');

describe('Book Selection', () => {
    describe('isGenreSuitable Test', () => {
        it('Valid Inputs', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(
                'Books with Thriller genre are not suitable for kids at 12 age'
            );

            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(
                'Books with Horror genre are not suitable for kids at 12 age'
            );

            expect(bookSelection.isGenreSuitable('Horror', 20)).to.equal(
                'Those books are suitable'
            );
            expect(bookSelection.isGenreSuitable('Thriller', 20)).to.equal(
                'Those books are suitable'
            );
        });
    });

    describe('isItAffordable Test', () => {
        it('returns the money left when book is bought', () => {
            expect(bookSelection.isItAffordable(1, 2)).to.equal(
                `Book bought. You have 1$ left`
            );
            expect(bookSelection.isItAffordable(2, 2)).to.equal(
                `Book bought. You have 0$ left`
            );
        });

        it('returns that money are not enough', () => {
            expect(bookSelection.isItAffordable(3, 2)).to.equal(
                `You don\'t have enough money`
            );
        });

        it('should throw error when params are not numbers', () => {
            expect(() => bookSelection.isItAffordable(3, [])).to.throw(
                `Invalid input`
            );
            expect(() => bookSelection.isItAffordable(3, '3')).to.throw(
                `Invalid input`
            );
            expect(() => bookSelection.isItAffordable('3', 3)).to.throw(
                `Invalid input`
            );
        });
    });

    describe('suitableTitles test', () => {
        it('throws Invalid input when the parameters are invalid', () => {
            expect(() =>
                bookSelection.suitableTitles(['test', 'testov'], 5)
            ).to.throw('Invalid input');
            expect(() =>
                bookSelection.suitableTitles('lili', 'ivanova')
            ).to.throw('Invalid input');
            expect(() =>
                bookSelection.suitableTitles(5, ['test', 'testov'])
            ).to.throw('Invalid input');
            expect(() =>
                bookSelection.suitableTitles(['test', 'testov'], 5)
            ).to.throw('Invalid input');
        });

        it('returns the result when parameters are valid', () => {
            let test = [
                { title: 'The Da Vinci Code', genre: 'Crime' },
                { title: 'White Chicks', genre: 'Comedy' },
            ];
            expect(bookSelection.suitableTitles(test, 'Crime')).to.deep.equal([
                `The Da Vinci Code`,
            ]);
            expect(bookSelection.suitableTitles(test, 'none')).to.deep.equal(
                []
            );
        });
    });
});
