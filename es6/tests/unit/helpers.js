import {
  expect
}
from 'chai';

import {
  testIfExists,
  shouldReturnQuery
}
from '../shared';

import deps from '../../ioc';
import helpersFactory from '../../modules/helpers';

const {
  _
} = deps

const helpers = helpersFactory({
  ...deps
});

const {
  mapKey,
  mapDottedKeys
} = helpers;

describe('#mapKey()', () => {
  const result = mapKey({
      key: 'one.two.three',
      val: 'test'
    }),
    expected = {
      one: {
        two: {
          three: 'test'
        }
      }
    };

  it('should return an object', () => {
    expect(result).to.be.an('object');
  });

  it('should return the expected object', () => {
    expect(result).to.deep.equal(expected);
  });
});

describe('#mapDottedKeys()', () => {
  const result = mapDottedKeys({
      'one.two.three': 'four',
      'five.six.seven': 'eight',
    }),
    expected = {
      one: {
        two: {
          three: 'four'
        }
      },
      five: {
        six: {
          seven: 'eight'
        }
      }
    };

  it('should return an object', () => {
    expect(result).to.be.an('object');
  });

  it('should return the expected object', () => {
    expect(result).to.deep.equal(expected);
  });

});
