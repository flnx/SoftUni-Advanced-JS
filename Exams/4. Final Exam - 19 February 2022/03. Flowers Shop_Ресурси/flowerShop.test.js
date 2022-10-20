const { expect } = require('chai');
const { flowerShop } = require('./flowerShop');


describe('flowerShop tests', () => {
  describe('calcPriceOfFlowers tests', () => {
    it('returns the quantity and price multiplied', () => {
      expect(flowerShop.calcPriceOfFlowers('rose', 1, 5)).to.equal('You need $5.00 to buy rose!');
    })
    it('throws error if the input is invalid', () => {
      expect(() => flowerShop.calcPriceOfFlowers(1, 1, 5)).to.throw('Invalid input!');
      expect(() => flowerShop.calcPriceOfFlowers([], 1, 5)).to.throw('Invalid input!');
      expect(() => flowerShop.calcPriceOfFlowers({}, 1, 5)).to.throw('Invalid input!');
      expect(() => flowerShop.calcPriceOfFlowers('test', 'test1', 5)).to.throw('Invalid input!');
      expect(() => flowerShop.calcPriceOfFlowers('test', 1, 'test1')).to.throw('Invalid input!');
      expect(() => flowerShop.calcPriceOfFlowers('test', 'test', 'test')).to.throw('Invalid input!');
      expect(() => flowerShop.calcPriceOfFlowers([], 1, 5)).to.throw('Invalid input!');
      expect(() => flowerShop.calcPriceOfFlowers('test', [], 5)).to.throw('Invalid input!');
      expect(() => flowerShop.calcPriceOfFlowers('test', 1, [])).to.throw('Invalid input!');
      expect(() => flowerShop.calcPriceOfFlowers('test', '5', '12')).to.throw('Invalid input!');
      expect(() => flowerShop.calcPriceOfFlowers('test', '12', 5)).to.throw('Invalid input!');
    });
  });


  describe('checkFlowersAvailable tests', () => {
    it('It returns available if the flowers exist in the array', () => {
      expect(flowerShop.checkFlowersAvailable('Test1', ["Test1", "Test2", "Test3"])).to.equal('The Test1 are available!');
      expect(flowerShop.checkFlowersAvailable('Test2', ["Test1", "Test2", "Test3"])).to.equal('The Test2 are available!');
      expect(flowerShop.checkFlowersAvailable('Test3', ["Test1", "Test2", "Test3"])).to.equal('The Test3 are available!');
    });

    it('It returns that the flowers are sold if the flowers do not exist in the array', () => {
      expect(flowerShop.checkFlowersAvailable('Test0', ["Test1", "Test2", "Test3"])).to.equal('The Test0 are sold! You need to purchase more!');
      expect(flowerShop.checkFlowersAvailable('Test4', ["Test1", "Test2", "Test3"])).to.equal('The Test4 are sold! You need to purchase more!');
      expect(flowerShop.checkFlowersAvailable('test2', ["Test1", "Test2", "Test3"])).to.equal('The test2 are sold! You need to purchase more!');
      expect(flowerShop.checkFlowersAvailable('tesT3', ["Test1", "Test2", "Test3"])).to.equal('The tesT3 are sold! You need to purchase more!');
    })
  });

  describe('checkFlowersAvailable tests', () => {
    it('removes the element if the given index is correct', () => {
      expect(flowerShop.sellFlowers(["Test1", "Test2", "Test3"], 0)).to.equal('Test2 / Test3');
      expect(flowerShop.sellFlowers(["Test1", "Test2", "Test3"], 1)).to.equal('Test1 / Test3');
      expect(flowerShop.sellFlowers(["Test1", "Test2", "Test3"], 2)).to.equal('Test1 / Test2');
    });


    it('throws error if the input is invalid or the index is out of range', () => {
      expect(() => flowerShop.sellFlowers(["Test1", "Test2", "Test3"], -1)).to.throw('Invalid input!');
      expect(() => flowerShop.sellFlowers(["Test1", "Test2", "Test3"], 3)).to.throw('Invalid input!');
      expect(() => flowerShop.sellFlowers(["Test1", "Test2", "Test3"], '1')).to.throw('Invalid input!');
      expect(() => flowerShop.sellFlowers(["Test1", "Test2", "Test3"], 'test')).to.throw('Invalid input!');
      expect(() => flowerShop.sellFlowers(0, 0)).to.throw('Invalid input!');
      expect(() => flowerShop.sellFlowers('test', 1)).to.throw('Invalid input!');
      expect(() => flowerShop.sellFlowers({}, 0)).to.throw('Invalid input!');
      expect(() => flowerShop.sellFlowers('', 0)).to.throw('Invalid input!');
      expect(() => flowerShop.sellFlowers([], 0)).to.throw('Invalid input!');
    });
  })
})