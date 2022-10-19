const { expect } = require('chai');
const { cinema } = require('./cinema');

describe('cinema test', () => {
  // describe('showMovies tests', () => {
  //   it('tests if array is empty', () => {
  //     expect(cinema.showMovies(['test1', 'test2'])).to.equal('test1, test2');
  //     expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
  //     expect(cinema.showMovies(['test1', 'test2'])).to.equal('test1, test2');
  //   });
  // });

  describe('ticketPrice tests', () => {
    it('tests if premiere is on schedule', () => {
      expect(cinema.ticketPrice('Premiere')).to.equal(12);
      expect(cinema.ticketPrice('Normal')).to.equal(7.5);
      expect(cinema.ticketPrice('Discount')).to.equal(5.5);
    });

    it('tests if premiere is not on schedule', () => {
      expect(() => cinema.ticketPrice('test1')).to.throw('Invalid projection type.');
      expect(() => cinema.ticketPrice('55')).to.throw('Invalid projection type.');
      expect(() => cinema.ticketPrice('')).to.throw('Invalid projection type.');
    });
  });

  describe('ticketPrice tests', () => {
    it('it returns successful if the input is valid and the numbers are > 0 and <=20', () => {
      expect(cinema.swapSeatsInHall(1, 20)).to.equal('Successful change of seats in the hall.');
      expect(cinema.swapSeatsInHall(20, 1)).to.equal('Successful change of seats in the hall.');
      expect(cinema.swapSeatsInHall(1, 2)).to.equal('Successful change of seats in the hall.');
      expect(cinema.swapSeatsInHall(2, 1)).to.equal('Successful change of seats in the hall.');
    });

    it('it returns unsuccessful if the input is invalid and the numbers are 0< >20', () => {
      expect(cinema.swapSeatsInHall(0, 20)).to.equal('Unsuccessful change of seats in the hall.');
      expect(cinema.swapSeatsInHall(20, 0)).to.equal('Unsuccessful change of seats in the hall.');
      expect(cinema.swapSeatsInHall(-1, 1)).to.equal('Unsuccessful change of seats in the hall.');
      expect(cinema.swapSeatsInHall(1, -1)).to.equal('Unsuccessful change of seats in the hall.');
      expect(cinema.swapSeatsInHall(0, -1)).to.equal('Unsuccessful change of seats in the hall.');
      expect(cinema.swapSeatsInHall(-1, -2)).to.equal('Unsuccessful change of seats in the hall.');
      expect(cinema.swapSeatsInHall(2, 2)).to.equal('Unsuccessful change of seats in the hall.');
      expect(cinema.swapSeatsInHall('2', 1)).to.equal('Unsuccessful change of seats in the hall.');
      expect(cinema.swapSeatsInHall(1, '2')).to.equal('Unsuccessful change of seats in the hall.');
      expect(cinema.swapSeatsInHall([], '2')).to.equal('Unsuccessful change of seats in the hall.');
      expect(cinema.swapSeatsInHall(2, [])).to.equal('Unsuccessful change of seats in the hall.');
      expect(cinema.swapSeatsInHall('2', '5')).to.equal('Unsuccessful change of seats in the hall.');
      expect(cinema.swapSeatsInHall(1, {})).to.equal('Unsuccessful change of seats in the hall.');
      expect(cinema.swapSeatsInHall({}, 1)).to.equal('Unsuccessful change of seats in the hall.');
    });
  });

});
