import {
  expect
}
from 'chai';

/**
 * Runs the test of the specified type from the specified dir
 *
 * @param {Object} test ex. {name: module, type:unit}
 */
export const run = test => {
  describe(test.name, () => require(`./${test.type}/${test.name}`));
};

/**
 * Tests that the result is
 *  - not null
 *  - not undefined
 *  - not an empty string / array / object
 *
 * @param {AnyType} val
 */
export const testIfExists = val => {
  describe('should not equal any falsey or empty value', () => {
    it('should not return null', () => {
      expect(val).to.not.be.null;
    });

    it('should not return undefined', () => {
      expect(val).to.not.be.undefined;
    });

    it('should not return an empty object or array', () => {
      expect(val).to.not.be.empty;
    });
  });
};

/**
 * Establishes a testing structure for validating that set of parameters
 * returns a valid sql query in the correct type (array, obj, etc..)
 *
 * @param {Object} options {data {Object}, method {String}, type {String}, expected {AnyType}}
 */
export const shouldReturnQuery = (builder, {
  data, method, type, expected
}) => {
  describe(`given the method '${method}' with a valid argument ${type}`, () => {
    const result = builder[method](data);

    testIfExists(result);

    it(`should return a(n) ${type}`, () => {
      expect(result).to.be.a(type);
    });

    it(`should return ${expected}`, () => {
      expect(result.toString()).to.equal(expected);
    });
  });
};
