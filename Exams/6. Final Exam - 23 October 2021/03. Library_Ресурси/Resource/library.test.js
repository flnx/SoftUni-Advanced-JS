const { expect } = require('chai');
const { library } = require('./library');

describe('library test', () => {
  describe('calcPriceOfBook test', () => {
    it('returns the correct price when the inputs is correct (string / number)', () => {
      expect(library.calcPriceOfBook('Mistborn: The Final Empire', 2006)).to.equal('Price of Mistborn: The Final Empire is 20.00')
      expect(library.calcPriceOfBook('Test1', 2000)).to.equal('Price of Test1 is 20.00')
      expect(library.calcPriceOfBook('test1', 1979)).to.equal('Price of test1 is 10.00')
      expect(library.calcPriceOfBook('test1', 1980)).to.equal('Price of test1 is 10.00')
    });

    it('throws error when the input is invalid (string / number)', () => {
      expect(() => library.calcPriceOfBook(0, 2000)).to.throw('Invalid input');
      expect(() => library.calcPriceOfBook(1, 2000)).to.throw('Invalid input');
      expect(() => library.calcPriceOfBook([], 2000)).to.throw('Invalid input');
      expect(() => library.calcPriceOfBook({}, 2000)).to.throw('Invalid input');

      expect(() => library.calcPriceOfBook('test', '2000')).to.throw('Invalid input');
      expect(() => library.calcPriceOfBook('test', [])).to.throw('Invalid input');
      expect(() => library.calcPriceOfBook('test', {})).to.throw('Invalid input');
      expect(() => library.calcPriceOfBook('test', 0.5)).to.throw('Invalid input');
    });
  });

  describe('findBook test', () => {
    it('returns the correct result if the array does or does not contain the string and input is valid array/ string', () => {
      expect(library.findBook(['Troy', 'Life Style', 'Torronto'], 'Troy')).to.equal("We found the book you want.");
      expect(library.findBook(['Troy', 'Life Style', 'Torronto'], 'Life Style')).to.equal("We found the book you want.");
      expect(library.findBook(['Troy', 'Life Style', 'Torronto'], 'Na Kitarata')).to.equal("The book you are looking for is not here!");
      expect(library.findBook(['Troy', 'Life Style', 'Torronto'], 'Vasko Jabata')).to.equal("The book you are looking for is not here!");
    });

    it('throws error when the array is empty', () => {
      expect(() => library.findBook([], 'Ceca Mecata')).to.throw("No books currently available");
    });
  });

  describe('arrangeTheBooks  test', () => {
    it('throws error if the input is not an integer or negative number', () => {
      expect(() => library.arrangeTheBooks(-1)).to.throw("Invalid input");
      expect(() => library.arrangeTheBooks(0.5)).to.throw("Invalid input");
      expect(() => library.arrangeTheBooks('1')).to.throw("Invalid input");
      expect(() => library.arrangeTheBooks('0.5')).to.throw("Invalid input");
      expect(() => library.arrangeTheBooks('-1')).to.throw("Invalid input");
      expect(() => library.arrangeTheBooks('test')).to.throw("Invalid input");
      expect(() => library.arrangeTheBooks([])).to.throw("Invalid input");
      expect(() => library.arrangeTheBooks({})).to.throw("Invalid input");
    });

    it('returns the "Great Job" if the books are within the shelf space range (0-40)', () => {
      expect(library.arrangeTheBooks(0)).to.equal("Great job, the books are arranged.");
      expect(library.arrangeTheBooks(1)).to.equal("Great job, the books are arranged.");
      expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
    });

    it('returns the Insufficient space" if there is not enough space on the shelves (40+)', () => {
      expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.");
      expect(library.arrangeTheBooks(69)).to.equal("Insufficient space, more shelves need to be purchased.");
      expect(library.arrangeTheBooks(420)).to.equal("Insufficient space, more shelves need to be purchased.");
    });
  });
})