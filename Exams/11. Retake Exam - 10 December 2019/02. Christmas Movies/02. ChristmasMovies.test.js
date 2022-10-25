const { expect } = require('chai');
const { ChristmasMovies } = require('./02. ChristmasMovies');

describe('ChristmasMovies tests', () => {
  let inst = {};
  beforeEach(() => (inst = new ChristmasMovies()));

  describe('constructor tests', () => {
    it('tests the constructor', () => {
      expect(inst instanceof ChristmasMovies).to.be.true;
      expect(inst.movieCollection).to.deep.equal([]);
      expect(inst.watched).to.deep.equal({});
      expect(inst.actors).to.deep.equal([]);
    });
  });

  describe('buyMovie tests', () => {
    it('returns the bought movie  …', () => {
      expect(inst.buyMovie('Test', ['Ti', 'Te', 'Tq'])).to.equal('You just got Test to your collection in which Ti, Te, Tq are taking part!');
      expect(inst.buyMovie('Test1', ['Ti', 'Ti'])).to.equal('You just got Test1 to your collection in which Ti are taking part!');
    });

    it('throws err if the movie exist …', () => {
      inst.buyMovie('Test', ['Ti', 'Te', 'Tq']);
      expect(() => inst.buyMovie('Test', ['Ti', 'Te', 'Tq'])).to.throw('You already own Test in your collection!');
    });
  });

  describe('discardMovie tests', () => {
    it('returns the discarded movie', () => {
      inst.buyMovie('Test1', ['Ti', 'Te', 'Tq']);
      inst.watchMovie('Test1', ['Tx', 'Tx', 'Tx']);
      inst.buyMovie('Test3', ['Tz', 'Tz', 'Tz']);
      expect(inst.discardMovie('Test1')).to.equal(`You just threw away Test1!`);
      expect(inst.movieCollection.length).to.equal(1);
    });

    it('throws error if the movie is not the collection', () => {
      expect(() => inst.discardMovie('Test1').to.throw('The movie is not in the collection!'));
    });

    it('throws error if the movie is in the collection but is not watched', () => {
      inst.buyMovie('Test1', ['Ti', 'Te', 'Tq']);
      expect(() => inst.discardMovie('Test1').to.throw('The movie is not watched!'));
    });
  });

  describe('watchMovie tests', () => {
    it('watchMovie tests …', () => {
      inst.buyMovie('Test1', ['Ti', 'Te', 'Tq']);
      inst.watchMovie('Test1');
      expect(inst.watched['Test1']).to.equal(1);
    });

    it('throws error if the movie is not in the movieCollection', () => {
      expect(() => inst.watchMovie('Test')).to.throw('No such movie in your collection!');
    });
  });

  describe('favouriteMovie tests', () => {
    it('return fav movies …', () => {
      inst.buyMovie('Test', ['Ti', 'Te', 'Tq']);
      inst.buyMovie('Test1', ['Ti', 'Te', 'Tq']);
      inst.watchMovie('Test');
      inst.watchMovie('Test1');
      inst.watchMovie('Test1');
      expect(inst.favouriteMovie()).to.equal(`Your favourite movie is Test1 and you have watched it 2 times!`);
    });

    it('throws error if you have not added movies tests …', () => {
      expect(() => inst.favouriteMovie()).to.throw('You have not watched a movie yet this year!');
    });
  });

  describe('mostStarredActor tests', () => {
    it('returns the most watched actor …', () => {
      inst.buyMovie('Test1', ['Ti', 'Te', 'Tq']);
      inst.buyMovie('Test2', ['Ti', 'Te', 'Tq']);
      inst.buyMovie('Test3', ['Ti']);
      inst.watchMovie('Test1');
      inst.watchMovie('Test2');
      inst.watchMovie('Test3');
      expect(inst.mostStarredActor()).to.equal(`The most starred actor is Ti and starred in 3 movies!`);
    });

    it('throws err if there is no movies in the list', () => {
      expect(() => inst.mostStarredActor()).to.throw(`You have not watched a movie yet this year!`);
    });
  });
});
