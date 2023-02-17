const { expect } = require('chai');
const { bookSelection } = require('./bookSelection');

describe('bookSelection Tests', () => {
    describe('isGenreSuitable Test', () => {
        it('Checks the valid inputs', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(
                'Books with Thriller genre are not suitable for kids at 12 age'
            );
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(
                'Books with Horror genre are not suitable for kids at 12 age'
            );
            expect(bookSelection.isGenreSuitable('Thriller', 20)).to.equal(
                'Those books are suitable'
            );
            expect(bookSelection.isGenreSuitable('Horror', 20)).to.equal(
                'Those books are suitable'
            );
        });
    });

    describe('isItAffordable tests', () => {
        it('Tests when the money is enough', () => {
            expect(bookSelection.isItAffordable(10, 20)).to.equal(
                'Book bought. You have 10$ left'
            );
        });

        it('Tests when the money is not enough', () => {
            expect(bookSelection.isItAffordable(21, 20)).to.equal(
                "You don't have enough money"
            );
        });

        it('Throws error when both of the inputs are not numbers', () => {
            expect(() => bookSelection.isItAffordable('12', '15')).to.throw();
        });

        it('Throws error when both of the inputs are not numbers', () => {
            expect(() => bookSelection.isItAffordable(12, '15')).to.throw();
        });

        it('Throws error when both of the inputs are not numbers', () => {
            expect(() => bookSelection.isItAffordable([1], [2])).to.throw();
        });
    });

    describe('suitableTitles tests', () => {
        it('Checks for the correct genre', () => {
            const movies = [
                { title: 'movie1', genre: 'genre1' },
                { title: 'movie2', genre: 'genre2' },
            ];

            expect(bookSelection.suitableTitles(movies, 'genre1')).to.deep.equal(['movie1']);
            expect(bookSelection.suitableTitles(movies, 'none')).to.deep.equal([]);
        });

        it('Throws error if the 1st param is not array and 2nd is not a string', () => {
            expect(() => bookSelection.suitableTitles('a', 'a')).to.throw();
            expect(() => bookSelection.suitableTitles({}, 'a')).to.throw();
            expect(() => bookSelection.suitableTitles(1, 'a')).to.throw();
            expect(() => bookSelection.suitableTitles('a', 1)).to.throw();
            expect(() => bookSelection.suitableTitles('a', [])).to.throw();
            expect(() => bookSelection.suitableTitles([], [])).to.throw();
            expect(() => bookSelection.suitableTitles([], 5)).to.throw();
        });
    });
});
