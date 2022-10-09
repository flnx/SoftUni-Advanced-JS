const { expect } = require('chai');
const { PaymentPackage } = require('./12.paymentPackage');

describe('PaymentPackage', () => {
  describe('valid', () => {
    it('must not throw when valid', () => {
      expect(() => new PaymentPackage('something', 1)).not.to.throw(Error);
    });
  });

  describe('name', () => {
    it('must throw err when it is a number', () => {
      expect(() => new PaymentPackage(5, 1)).to.throw(Error);
    });

    it('must throw err when it is a an empty string', () => {
      expect(() => new PaymentPackage('', 1)).to.throw(Error);
    });

    it('must throw err for array and object', () => {
      expect(() => new PaymentPackage([], 1)).to.throw(Error);
    });
  });

  describe('value', () => {
    it('must throw err when it is a negative number', () => {
      expect(() => new PaymentPackage('', -1)).to.throw(Error);
    });

    it('must throw err when it is a string', () => {
      expect(() => new PaymentPackage('something', 'test')).to.throw(Error);
    });

    it('should 0 value be valid', () => {
      expect(new PaymentPackage('test', 0).value).to.equal(0);
    });
  });

  describe('VAT', () => {
    it('must be a non negative number', () => {
      expect(() => (new PaymentPackage('test', 1).VAT = -1)).to.throw(Error);
    });

    it('must be a number', () => {
      expect(typeof new PaymentPackage('something', 1).VAT).to.equal('number');
    });
  });

  describe('active', () => {
    it('must be boolean', () => {
      expect(typeof new PaymentPackage('test', 1).active).to.equal('boolean');
    });

    it('must throw an error when it is a string', () => {
      expect(() => (new PaymentPackage('test', 1).active = 'mambojambo')).to.throw(Error);
    });

    it('must throw an error when it s a number', () => {
      expect(() => (new PaymentPackage('test', 1).active = 1)).to.throw(Error);
    });
  });

  describe('toString()', () => {
    it('must return a string', () => {
      const result = new PaymentPackage('HR Services', 1500);
      expect(result.toString()).to.equal(
        'Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800'
      );
    });

    it('appends the label "inactive" to the printed name if the package is not active', () => {
      const result = new PaymentPackage('HR Services', 1500);
      result.active = false;
      expect(result.toString()).to.equal(
        'Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800'
      );
    });
  });
});