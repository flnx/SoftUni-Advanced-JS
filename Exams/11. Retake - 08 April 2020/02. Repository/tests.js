const { expect } = require('chai');
const { Repository } = require('./solution');

describe('Repository Class Tests', () => {
  let r = {};
  beforeEach(() => (r = new Repository({
        name: 'string',
        age: 'number',
        birthday: 'object',
      }))
  );

  describe('constructor test', () => {
    it('returns the constructor info and checks the count getter', () => {
      expect(r.count).to.equal(0);
      expect(r instanceof Repository).to.equal(true);
      expect(typeof r).to.equal('object');
      expect(r.data).to.deep.equal(new Map());
    });
  });

  describe('add tests', () => {
    it('returns the correct id when the input is correct', () => {
      expect(r.add({ name: 'Stamat', age: 29, birthday: {} })).to.equal(0);
      expect(r.add({ name: 'Testun', age: 22, birthday: {} })).to.equal(1);
    });

    it('throws error if some of the properties do not exists in constructor props', () => {
      expect(() => r.add(
        { namex: 'x', age: 0, birthday: {} })).to.throw('Property name is missing from the entity!');
      expect(() => r.add(
        { name: 'x', agex: 0, birthday: {} })).to.throw('Property age is missing from the entity!');
      expect(() => r.add(
        { name: 'x', age: 0, birthda: {} })).to.throw('Property birthday is missing from the entity!');
    });

    it('throws typeError if the input is incorrect', () => {
      expect(() => r.add(
        { name: 0, age: 'test', birthday: [] })).to.throw('Property name is not of correct type!');
      expect(() => r.add(
        { name: '', age: 'test', birthday: [] })).to.throw('Property age is not of correct type!');
      expect(() => r.add(
        { name: '', age: 0, birthday: '' })).to.throw('Property birthday is not of correct type!');
    });
  });

  describe('getId tests', () => {
    it('returns the object identified with the given id', () => {
      r.add({ name: 'Stamat', age: 29, birthday: {} })
      expect(r.getId(0)).to.deep.equal({ name: 'Stamat', age: 29, birthday: {}});
    });

    it('throws error if the id does not exist', () => {
      expect(() => r.getId(0)).to.deep.throw('Entity with id: 0 does not exist!');
    });
  });

  describe('update tests', () => {
    it('returns the updated object identified with the given id', () => {
      let entity = { name: 'Stamat', age: 30, birthday: {} };
      r.add({ name: 'Stamat', age: 29, birthday: {} });
      r.update(0, entity)
      expect(r.getId(0, entity)).to.deep.equal(entity);
    });

    it('throws err if the id does not exist', () => {
      expect(() => r.update(0, {})).to.throw(`Entity with id: 0 does not exist!`);
    });

    it('throws err if the object properties are not valid', () => {
      r.add({ name: 'x', age: 30, birthday: {} })
      expect(() => r.update(0, {age: 30, birthday: {date: 0}})).to.throw('Property name is missing from the entity!')
      expect(() => r.update(0, {name: '', age: 30, birthday: {date: 0}})).to.throw;
      expect(() => r.update(0, {name: 0, age: 30, birthday: {date: 0}})).to.throw(TypeError)
    });
  });

  describe('delete tests', () => {
    it('deletes the property identified with the given id', () => {
      r.add({ name: 'Test', age: 29, birthday: {} });
      r.add({ name: 'Testerka', age: 29, birthday: {} });
      r.del(1)
      expect(r.count).to.equal(1);
      expect(r.data.has(1)).to.eq(false)
    });

    it('throws error if the id does not exist', () => {
      expect(() => r.del(-1)).to.throw('Entity with id: -1 does not exist!');
      expect(() => r.del(0)).to.throw('Entity with id: 0 does not exist!');
    })
  });
});
